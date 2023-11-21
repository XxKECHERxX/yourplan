import styles from './LogFrame.module.css'
import Close from '../icons/Close'
import { useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { openLogFrame, setUser } from '../store/authSlice'

const LogFrame = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [tetxError, setTextError] = useState(null)

  const dispatch = useDispatch()

  const auth = getAuth()

  const setLogFrame = () => {
    dispatch(openLogFrame(false))
  }

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      })
      .catch((error) => {
        if (error.code === 'auth/missing-password') {
          setTextError('*введите пароль')
        }
        if (error.code === 'auth/invalid-login-credentials') {
          setTextError('*неверная почта или пароль')
        }
      })
  }

  const handleCreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      })
      .catch((error) => {
        if (error.code === 'auth/missing-password') {
          setTextError('*введите пароль')
        }
        if (error.code === 'auth/email-already-in-use') {
          setTextError('*эта почта уже используется')
        }
        if (error.code === 'auth/invalid-email') {
          setTextError('*неверное введена почта')
        }
      })
  }

  return (
    <section className={styles.secLog}>
      <div className={styles.logFrame}>
        <button className={styles.btnClose} onClick={setLogFrame}>
          <Close />
        </button>
        <div className={styles.logo}>
          Your<span>Plan</span>
        </div>
        <form>
          <label>
            Почта
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <div className={styles.btnsEnter}>
            <button type="button" onClick={() => handleLogin(email, pass)}>
              Войти
            </button>
            <button type="button" onClick={() => handleCreateUser(email, pass)}>
              Создать
            </button>
          </div>
          {tetxError ? <div className={styles.error}>{tetxError}</div> : ''}
        </form>
      </div>
    </section>
  )
}

export default LogFrame
