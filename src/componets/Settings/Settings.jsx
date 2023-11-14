import styles from './Settings.module.css'
import Plus from '../icons/Plus'
import Search from '../icons/Search'
import NotExtra from '../icons/NotExtra'
import Extra from '../icons/Extra'
import Done from '../icons/Done'
import Delete from '../icons/Delete'
import Close from '../icons/Close'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  showSet,
  showCalen,
  showWeath,
  showStat,
  changeCityWeather,
} from '../store/gearSlice'

const LIGHT = '#ffffff'
const DARK = '#ffffff5a'

const Settings = () => {
  const [posScroll, setPosScroll] = useState('')
  const [btnOnCal, setBtnOnCal] = useState(LIGHT)
  const [btnOffCal, setBtnOffCal] = useState(DARK)
  const [btnOnWea, setBtnOnWea] = useState(LIGHT)
  const [btnOffWea, setBtnOffWea] = useState(DARK)
  const [btnOnStat, setBtnOnStat] = useState(LIGHT)
  const [btnOffStat, setBtnOffStat] = useState(DARK)

  const handlePosScrollBar = () => {
    setPosScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handlePosScrollBar)
    return () => window.removeEventListener('scroll', handlePosScrollBar)
  }, [])

  const dispatch = useDispatch()

  const closeSettings = () => {
    dispatch(showSet(false))
  }

  const openCalendar = () => {
    dispatch(showCalen(true))
    setBtnOnCal(LIGHT)
    setBtnOffCal(DARK)
  }
  const closeCalendar = () => {
    dispatch(showCalen(false))
    setBtnOnCal(DARK)
    setBtnOffCal(LIGHT)
  }
  const openWeather = () => {
    dispatch(showWeath(true))
    setBtnOnWea(LIGHT)
    setBtnOffWea(DARK)
  }
  const closeWeather = () => {
    dispatch(showWeath(false))
    setBtnOnWea(DARK)
    setBtnOffWea(LIGHT)
  }
  const openStatistic = () => {
    dispatch(showStat(true))
    setBtnOnStat(LIGHT)
    setBtnOffStat(DARK)
  }
  const closeStatistic = () => {
    dispatch(showStat(false))
    setBtnOnStat(DARK)
    setBtnOffStat(LIGHT)
  }

  const [city, setCity] = useState('')

  // let witchCity = useSelector((state) => state.gear.cityWeather)

  const cityChange = (e) => {
    e.preventDefault()
    dispatch(changeCityWeather(city))
  }

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
            <div>
              <button
                onClick={openCalendar}
                style={{
                  color: `${btnOnCal}`,
                }}
              >
                Вкл
              </button>{' '}
              /{' '}
              <button
                onClick={closeCalendar}
                style={{
                  color: `${btnOffCal}`,
                }}
              >
                Выкл
              </button>
            </div>

            <div className={styles.weather}>Погода</div>
            <div>
              <button
                onClick={openWeather}
                style={{
                  color: `${btnOnWea}`,
                }}
              >
                Вкл
              </button>{' '}
              /{' '}
              <button
                onClick={closeWeather}
                style={{
                  color: `${btnOffWea}`,
                }}
              >
                Выкл
              </button>
            </div>

            <form onSubmit={cityChange}>
              <label>
                <input
                  className={styles.city}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder='Москва'
                />
              </label>
              <button type="submit" className={styles.buttonCitySubmmit}>
                <Done />
              </button>
              <button type="reset" className={styles.buttonCitySubmmit}>
                <Delete />
              </button>
            </form>

            <div>Статистика</div>
            <div>
              <button
                onClick={openStatistic}
                style={{
                  color: `${btnOnStat}`,
                }}
              >
                Вкл
              </button>{' '}
              /{' '}
              <button
                onClick={closeStatistic}
                style={{
                  color: `${btnOffStat}`,
                }}
              >
                Выкл
              </button>
            </div>

            <div className={styles.showToDo}>Количество отображаемых дел</div>
            <div className={styles.amountToDo}>4</div>
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
        <div className={styles.btnClose} onClick={closeSettings}>
          <Close />
        </div>
      </div>
    </section>
  )
}

export default Settings
