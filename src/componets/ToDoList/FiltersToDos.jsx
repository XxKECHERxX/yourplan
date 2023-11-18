import styles from './ToDoList.module.css'
import Done from '../icons/Done'
import Clock from '../icons/Clock'
import Extra from '../icons/Extra'
import NotExtra from '../icons/NotExtra'
import { useDispatch } from 'react-redux'
import {
  chooseExtra,
  sortFromNewToOld,
  sortByTime,
  filterIsDone,
} from '../store/addToDoSlice'
import { useState } from 'react'

const FiltersToDos = () => {
  const [caseExtra, setCaseExtra] = useState(false)
  const [caseTime, setCaseTime] = useState(false)
  const [caseIsDone, setCaseIsDone] = useState(false)

  const dispatch = useDispatch()

  const handleExtra = () => {
    dispatch(chooseExtra())
    setCaseExtra(true)
  }
  const normalOrder = () => {
    dispatch(sortFromNewToOld())
    setCaseExtra(false)
  }

  const orderByTime = () => {
    dispatch(sortByTime())
    setCaseTime(true)
  }
  const returnOrder = () => {
    dispatch(sortFromNewToOld())
    setCaseTime(false)
  }

  const removeDone = () => {
    dispatch(filterIsDone())
    setCaseIsDone(true)
  }
  const backOrder = () => {
    dispatch(sortFromNewToOld())
    setCaseIsDone(false)
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {caseIsDone ? (
        <button
          className={styles.btn}
          onClick={backOrder}
          style={{
            backgroundColor: '#a3934111',
          }}
        >
          <Done />
        </button>
      ) : (
        <button className={styles.btn} onClick={removeDone}>
          <Done />
        </button>
      )}
      {caseTime ? (
        <button
          className={styles.btn}
          onClick={returnOrder}
          style={{
            backgroundColor: '#a3934111',
          }}
        >
          <Clock />
        </button>
      ) : (
        <button className={styles.btn} onClick={orderByTime}>
          <Clock />
        </button>
      )}
      {caseExtra ? (
        <button className={styles.btn} onClick={normalOrder}>
          <Extra />
        </button>
      ) : (
        <button className={styles.btn} onClick={handleExtra}>
          <NotExtra />
        </button>
      )}
    </div>
  )
}

export default FiltersToDos
