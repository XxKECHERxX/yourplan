import styles from './NavBar.module.css'
import Gear from '../icons/Gear'
import { useDispatch, useSelector } from 'react-redux'
import { showSet } from '../store/gearSlice'
import { openLogFrame } from '../store/authSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.auth.singInUser.email)

  const openSettings = () => {
    dispatch(showSet(true))
  }

  const showLog = () => {
    dispatch(openLogFrame(true))
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        Your<span>Plan</span>
      </div>
      <div className={styles.barBtns}>
        <div className={styles.clientName}>{email}</div>
        <div className={styles.settings} onClick={openSettings}>
          <Gear />
        </div>
        <div className={styles.btnLogin} onClick={showLog}>
          {!!email ? 'Logout' : 'Login'}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
