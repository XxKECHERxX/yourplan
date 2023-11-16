import styles from './ToDoPoints.module.css'
import Extra from '../icons/Extra'
import NotExtra from '../icons/NotExtra'
import Done from '../icons/Done'
import Delete from '../icons/Delete'
import Dots from '../icons/Dots'
import { useSelector, useDispatch } from 'react-redux'
import { markDoneCase, markExtraCase, deleteCase } from '../store/addToDoSlice'
import { useEffect, useMemo, useState } from 'react'

const LIGHT_COLOR = '#fff'
const DARK_COLOR = '#ffffff66'

const ToDoPoints = () => {
  const caseList = useSelector((state) => state.addToDo.list)

  const numVisibleCases = useSelector((state) => state.gear.amountItemToDo)

  const [visiblePart, setVisiblePart] = useState(caseList)
  const [isOpenFull, setIsOpenFull] = useState(false)

  useEffect(() => {
    if (caseList.length > numVisibleCases) {
      setVisiblePart(caseList.slice(0, numVisibleCases))
    } else {
      setVisiblePart(caseList)
    }
  }, [caseList.length, caseList, numVisibleCases])

  const openFullList = () => {
    if (!isOpenFull) {
      setVisiblePart(caseList.slice(0, caseList.length))
      setIsOpenFull(true)
    } else {
      setVisiblePart(caseList.slice(0, numVisibleCases))
      setIsOpenFull(false)
    }
  }

  const dispatch = useDispatch()

  const handleDoneCase = (el) => {
    dispatch(markDoneCase(el))
  }

  const handleExtraCase = (el) => {
    dispatch(markExtraCase(el))
  }

  const dltCase = (el) => {
    dispatch(deleteCase(el))
  }

  return (
    <div className={styles.pointsFrame}>
      {visiblePart.map((newCase) => {
        return (
          <div
            key={newCase.id}
            className={styles.point}
            style={{
              color: `${newCase.isDone ? DARK_COLOR : LIGHT_COLOR}`,
            }}
          >
            <div className={styles.pointBox}>
              <div className={styles.pointTopic}>
                {newCase.topic} {newCase.isDone && <Done />}
              </div>
              <div className={styles.pointDate}>{newCase.date}</div>
              <div className={styles.whatToDo}>{newCase.comment}</div>
              <div
                className={styles.btnExtra}
                onClick={() => handleExtraCase(newCase)}
              >
                {newCase.extra ? <Extra /> : <NotExtra />}
              </div>
            </div>
            <div className={styles.btns}>
              <button
                className={styles.btnDone}
                onClick={() => handleDoneCase(newCase)}
              >
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
      {caseList.length > numVisibleCases && (
        <div className={styles.moreBar} onClick={openFullList}>
          <Dots />
        </div>
      )}
    </div>
  )
}

export default ToDoPoints
