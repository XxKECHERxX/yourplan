import styles from './MainLayer.module.css'
import ToDoList from './ToDoList/ToDoList'
import UserCalendar from './Calendar/UserCalendar'
import Weather from './Weather/Weather'
import Table from './StatTable/Table'

const MainLayer = () => {
  return (
    <section className={styles.main}>
      <div className={styles.features}>
        <UserCalendar />
        <Weather />
        <Table />
      </div>
      <div>
        <ToDoList />
      </div>
    </section>
  )
}

export default MainLayer
