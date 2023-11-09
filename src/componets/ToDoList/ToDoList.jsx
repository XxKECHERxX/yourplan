import styles from './ToDoList.module.css'
import Search from '../icons/Search'
import Extra from '../icons/Extra'
import Plus from '../icons/Plus'

const ToDoList = () => {
  return (
    <div className={styles.toDoFrame}>
      <div className={styles.menuList}>
        <div className={styles.topic}>Список дел</div>
        <div className={styles.btnsBar}>
          <button className={styles.btn}>
            <Search />
          </button>
          <button className={styles.btn}>
            <Extra />
          </button>
          <button className={styles.btn}>
            <Plus />
          </button>
        </div>
      </div>
      <div className={styles.listFrame}>
        <p>Чтобы добавить дело. Нажми на кнопку ниже</p>
        <button className={styles.btn}>
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default ToDoList
