import styles from './Settings.module.css'
import Plus from '../icons/Plus'
import Search from '../icons/Search'
import NotExtra from '../icons/NotExtra'
import Extra from '../icons/Extra'
import Done from '../icons/Done'
import Delete from '../icons/Delete'
import Close from '../icons/Close'
import { useEffect, useState } from 'react'

const Settings = () => {
  const [posScroll, setPosScroll] = useState('')

  const handlePosScrollBar = () => {
    setPosScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handlePosScrollBar)
    return () => window.removeEventListener('scroll', handlePosScrollBar)
  }, [])

  return (
    <section className={styles.secSet}>
      <div
        className={styles.frame}
        style={{
          top: `${posScroll + 50}px`,
        }}
      >
        <div className={styles.function}>
          <h3>Настройки</h3>
          <div className={styles.fearture}>
            <div>Календарь</div>
            <div>Вкл / Выкл</div>

            <div>Погода</div>
            <div>Вкл / Выкл</div>

            <div>Статистика</div>
            <div>Вкл / Выкл</div>
          </div>
          <div className={styles.numToDoList}>
            <div>Количество отображаемых дел</div>
            <div>4</div>
          </div>
        </div>
        <div className={styles.instruction}>
          <h3>Подсказки</h3>
          <p>
            Для сохранения личных дел пройдите регистрацию и войдите в свой
            акаунт
          </p>
        </div>
        <div className={styles.qlues}>
          <div className={styles.btnsListFrame}>
            <Plus />
          </div>
          <div>добавить дело</div>

          <div className={styles.btnsListFrame}>
            <Search />
          </div>
          <div>поиск по названию</div>

          <div className={styles.btnsListFrame}>
            <NotExtra />
          </div>
          <div>отобразить только важные</div>

          <div className={styles.btnsItemDones}>
            <Done />
          </div>
          <div>пометить как выполненое</div>

          <div className={styles.btnsItemDelete}>
            <Delete />
          </div>
          <div>удалить из списка</div>

          <div className={styles.btnsItemExtra}>
            <NotExtra />
          </div>
          <div>отметить как важное</div>

          <div className={styles.btnsItemExtra}>
            <Extra />
          </div>
          <div>отмечено как важное / снять отметку</div>
        </div>
        <div className={styles.btnClose}>
          <Close />
        </div>
      </div>
    </section>
  )
}

export default Settings
