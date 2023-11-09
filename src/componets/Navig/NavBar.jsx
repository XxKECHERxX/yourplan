import styles from './NavBar.module.css'
import Gear from '../icons/Gear'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>YourPlan</div>
      <div className={styles.barBtns}>
        <div className={styles.clientName}>XxKECHERxX</div>
        <div className={styles.settings}><Gear /></div>
        <div className={styles.btnLogin}>Login</div>
      </div>
    </nav>
  )
}

export default NavBar
