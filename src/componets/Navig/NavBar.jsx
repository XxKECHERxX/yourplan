import styles from './NavBar.module.css'
import Gear from '../icons/Gear'
import { useDispatch } from 'react-redux'
import { showSet } from '../store/gearSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  const openSettings = () => {
    dispatch(showSet(true))
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>YourPlan</div>
      <div className={styles.barBtns}>
        <div className={styles.clientName}>XxKECHERxX</div>
        <div className={styles.settings} onClick={openSettings}>
          <Gear />
        </div>
        <div className={styles.btnLogin}>Login</div>
      </div>
    </nav>
  )
}

export default NavBar
