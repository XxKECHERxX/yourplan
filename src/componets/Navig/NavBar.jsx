import styles from './NavBar.module.css'
import Gear from '../icons/Gear'
import { useDispatch, useSelector } from 'react-redux'
import { showSet } from '../store/gearSlice'
import { openLogFrame, removeUser, addDocsFire } from '../store/authSlice'
import { clearListLogOut } from '../store/addToDoSlice'
import { getAuth, signOut } from 'firebase/auth'

const NavBar = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.auth.singInUser.email)

  const userList = useSelector((state) => state.addToDo.list)

  const openSettings = () => {
    dispatch(showSet(true))
  }
  const showLog = () => {
    dispatch(openLogFrame(true))
  }
  const saveCases = () => {
    dispatch(addDocsFire(userList))
  }

  const auth = getAuth()

  const logOut = () => {
    signOut(auth)
      .then(() => dispatch(removeUser()))
      .catch((error) => console.log(error.message))
    dispatch(clearListLogOut())
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        Your<span>Plan</span>
      </div>
      <div className={styles.barBtns}>
        <div className={styles.clientName}>{email}</div>
        {!!email ? (
          <button onClick={saveCases} className={styles.btnSave}>
            Сохранить
          </button>
        ) : (
          ''
        )}
        <div className={styles.settings} onClick={openSettings}>
          <Gear />
        </div>
        {!!email ? (
          <div className={styles.btnLogin} onClick={logOut}>
            Выйти
          </div>
        ) : (
          <div className={styles.btnLogin} onClick={showLog}>
            Войти
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
