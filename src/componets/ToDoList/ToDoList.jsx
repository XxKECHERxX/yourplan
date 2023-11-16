import styles from './ToDoList.module.css'
import Search from '../icons/Search'
import Extra from '../icons/Extra'
import Plus from '../icons/Plus'
// import Dots from '../icons/Dots'
import ToDoPoints from './ToDoPoints'
import { useDispatch, useSelector } from 'react-redux'
import { showForm } from '../store/addToDoSlice'
import { useState } from 'react'

const ToDoList = () => {
  const dispatch = useDispatch()

  const openForm = () => {
    dispatch(showForm(true))
  }

  const caseList = useSelector((state) => state.addToDo.list)

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
          <button className={styles.btn} onClick={openForm}>
            <Plus />
          </button>
        </div>
      </div>
      {caseList.length ? (
        <ToDoPoints />
      ) : (
        <div className={styles.listFrame}>
          <p>Чтобы добавить дело. Нажми на кнопку ниже</p>
          <button className={styles.btn} onClick={openForm}>
            <Plus />
          </button>
        </div>
      )}
      {/* {caseList.length > numVisibleCases && (
        <div className={styles.moreBar} onClick={openFullList}>
          <Dots />
        </div>
      )} */}
    </div>
  )
}

export default ToDoList
