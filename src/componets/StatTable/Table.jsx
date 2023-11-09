import styles from './Table.module.css'
import Done from '../icons/Done'
import NotDone from '../icons/NotDone'

const Table = () => {
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
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className={styles.rowExtra}>
          <div>Особых</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>

        <div className={styles.rowTotal}>
          <div>Всего:</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    </div>
  )
}

export default Table
