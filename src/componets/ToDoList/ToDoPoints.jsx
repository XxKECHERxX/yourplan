import styles from './ToDoPoints.module.css'
import Extra from '../icons/Extra'
import NotExtra from '../icons/NotExtra'
import Done from '../icons/Done'
import Delete from '../icons/Delete'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCase } from '../store/addToDoSlice'
import { useState } from 'react'

const LIGHT_COLOR = '#fff'
const DARK_COLOR = '#ffffff66'

const ToDoPoints = () => {
  const [textColor, setTextColor] = useState(LIGHT_COLOR)
  const [isDone, setIsDone] = useState(false)

  const handleDoneCase = () => {
    textColor === LIGHT_COLOR
      ? setTextColor(DARK_COLOR)
      : setTextColor(LIGHT_COLOR)
    isDone ? setIsDone(false) : setIsDone(true)
  }

  const caseList = useSelector((state) => state.addToDo.list)

  const dispatch = useDispatch()
  console.log(caseList)

  const dltCase = (el) => {
    dispatch(deleteCase(el))
  }

  return (
    <div className={styles.pointsFrame}>
      {caseList.map((newCase) => {
        return (
          <div
            key={newCase.id}
            className={styles.point}
            style={{
              color: textColor,
            }}
          >
            <div className={styles.pointBox}>
              <div className={styles.pointTopic}>
                {newCase.topic} {isDone ? <Done /> : ''}
              </div>
              <div className={styles.pointDate}>{newCase.date}</div>
              <div className={styles.whatToDo}>{newCase.comment}</div>
              <div className={styles.btnExtra}>
                {newCase.extra ? <Extra /> : <NotExtra />}
              </div>
            </div>
            <div className={styles.btns}>
              <button className={styles.btnDone} onClick={handleDoneCase}>
                <Done />
              </button>
              <button
                className={styles.btnDelete}
                onClick={() => dltCase(newCase)}
              >
                <Delete />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoPoints
