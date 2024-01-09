import styles from './LogFrame.module.css'
import Close from '../icons/Close'
import { useState, useEffect } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { openLogFrame, setUser } from '../store/authSlice'
import { loadUserCases } from '../store/addToDoSlice'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

const LogFrame = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [tetxError, setTextError] = useState(null)
  const userId = useSelector((state) => state.auth.singInUser.id)

  const dispatch = useDispatch()

  const [bdList, setbdList] = useState('')

  useEffect(() => {
    let docRef

    if (!!userId) {
      docRef = doc(db, 'usersCases', userId)

      const docSnap = getDoc(docRef)
        .then((doc) => doc.data())
        .then((data) => setbdList(data.userCases))
        .catch((error) => console.log(error.message))
    }
  }, [userId])

  const auth = getAuth()

  const setLogFrame = () => {
    dispatch(openLogFrame(false))
    dispatch(loadUserCases(bdList))
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
      .finally(() => {
        setEmail('')
        setPass('')
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
      .finally(() => {
        setEmail('')
        setPass('')
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
              autoComplete="on"
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
