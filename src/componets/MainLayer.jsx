import styles from './MainLayer.module.css'
import ToDoList from './ToDoList/ToDoList'
import UserCalendar from './Calendar/UserCalendar'
import Weather from './Weather/Weather'
import Table from './StatTable/Table'
import { useSelector } from 'react-redux'

const MainLayer = () => {
  const showCal = useSelector((state) => state.gear.showCalendar)
  const showWeat = useSelector((state) => state.gear.showWeather)
  const showStat = useSelector((state) => state.gear.showStatTable)

  return (
    <section className={styles.main}>
      {showCal || showWeat || showStat ? (
        <div className={styles.features}>
          {showCal && <UserCalendar />}
          {showWeat && <Weather />}
          {showStat && <Table />}
        </div>
      ) : (
        ''
      )}
      <div>
        <ToDoList />
      </div>
    </section>
  )
}

export default MainLayer
