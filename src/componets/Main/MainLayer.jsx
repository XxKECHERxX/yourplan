import styles from './MainLayer.module.css'
import ToDoList from '../ToDoList/ToDoList'
import UserCalendar from '../Calendar/UserCalendar'
import Wether from '../Wether/Wether'
import Table from '../StatTable/Table'

const MainLayer = () => {
  return (
    <section className={styles.main}>
      <div className={styles.features}>
        <UserCalendar />
        <Wether />
        <Table />
      </div>
      <div>
        <ToDoList />
      </div>
    </section>
  )
}

export default MainLayer
