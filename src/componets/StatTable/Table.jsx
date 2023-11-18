import styles from './Table.module.css'
import Done from '../icons/Done'
import NotDone from '../icons/NotDone'
import { useSelector } from 'react-redux'

const Table = () => {
  const caseList = useSelector((state) => state.addToDo.list)
  const allCases = caseList.length

  const commonCases = caseList.filter((item) => item.extra === false)
  const doneCases = caseList.filter(
    (item) => item.isDone === true && item.extra === false
  )
  const notDoneCases = caseList.filter(
    (item) => item.isDone === false && item.extra === false
  )
  const commonNum = commonCases.length
  const numDone = doneCases.length
  const numNotDone = notDoneCases.length

  const extraCases = caseList.filter((item) => item.extra === true)
  const extraDone = caseList.filter(
    (item) => item.extra === true && item.isDone === true
  )
  const extraNotDone = caseList.filter(
    (item) => item.extra === true && item.isDone === false
  )
  const extraNum = extraCases.length
  const numExtra = extraDone.length
  const numNotDoneExtra = extraNotDone.length

  const allDoneCases = caseList.filter((item) => item.isDone === true)
  const allDone = allDoneCases.length
  const allNotDone = caseList.length - allDoneCases.length

  return (
    <div className={styles.stat}>
      <div className={styles.table}>
        <div className={styles.columns}>
          <div></div>
          <div>
            <Done />
          </div>
          <div>
            <NotDone />
          </div>
          <div>%</div>
        </div>

        <div className={styles.rowUsual}>
          <div>Обычных</div>
          <div>{numDone}</div>
          <div>{numNotDone}</div>
          <div>{commonNum ? Math.round((numDone / commonNum) * 100) : 0}</div>
        </div>

        <div className={styles.rowExtra}>
          <div>Особых</div>
          <div>{numExtra}</div>
          <div>{numNotDoneExtra}</div>
          <div>{extraNum ? Math.round((numExtra / extraNum) * 100) : 0}</div>
        </div>

        <div className={styles.rowTotal}>
          <div>Всего:</div>
          <div>{allDone}</div>
          <div>{allNotDone}</div>
          <div>{allCases ? Math.round((allDone / allCases) * 100) : 0}</div>
        </div>
      </div>
    </div>
  )
}

export default Table
