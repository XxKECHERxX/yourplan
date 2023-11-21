import styles from './AddToDoForm.module.css'
import Extra from '../icons/Extra'
import NotExtra from '../icons/NotExtra'
import Close from '../icons/Close'
import Refresh from '../icons/Refresh'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showForm, addCase } from '../store/addToDoSlice'

const AddToDoForm = () => {
  const [posScroll, setPosScroll] = useState('')
  const [nameCase, setNameCase] = useState('')
  const [dateCase, setDateCase] = useState('')
  const [descriptionCase, setDescriptionCase] = useState('')
  const [extraCase, setExtraCase] = useState(false)

  const handlePosScrollBar = () => {
    setPosScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handlePosScrollBar)
    return () => window.removeEventListener('scroll', handlePosScrollBar)
  }, [])

  const dispatch = useDispatch()

  const closeForm = () => {
    dispatch(showForm(false))
  }

  const handleExtraCase = () => {
    extraCase ? setExtraCase(false) : setExtraCase(true)
  }

  const newCase = {
    extraCase,
    nameCase,
    dateCase,
    descriptionCase,
  }

  const addNewCase = (e) => {
    e.preventDefault()

    dispatch(addCase(newCase))

    setExtraCase(false)
    setNameCase('')
    setDateCase('')
    setDescriptionCase('')
  }

  return (
    <section className={styles.backOfFrame}>
      <div
        className={styles.frameForm}
        style={{
          top: `${posScroll + 50}px`,
        }}
      >
        <div className={styles.formToDo}>
          <div className={styles.topic}>Добавить новое дело</div>
          <form onSubmit={addNewCase}>
            <div className={styles.nameInput}>
              Название*{' '}
              <button type="button" onClick={handleExtraCase}>
                {extraCase ? <Extra /> : <NotExtra />}
              </button>
            </div>
            <label>
              <input
                name="topic"
                type="text"
                value={nameCase}
                onChange={(e) => setNameCase(e.target.value)}
              />
            </label>
            <div className={styles.nameInput}>Дата</div>
            <label>
              <input
                name="date"
                type="date"
                value={dateCase}
                onChange={(e) => setDateCase(e.target.value)}
                style={{
                  width: 'auto',
                }}
              />
            </label>
            <div className={styles.nameInput}>Описание</div>
            <label>
              <textarea
                type="text"
                name="comment"
                value={descriptionCase}
                onChange={(e) => setDescriptionCase(e.target.value)}
              />
              <div className={styles.btnsForm}>
                <button type="reset">
                  <Refresh />
                </button>
                <button type="button" onClick={closeForm}>
                  <Close />
                </button>
              </div>
            </label>
            <div className={styles.comment}>
              *По словам в названии можно производить поиск.
            </div>
            <div className={styles.comment}>
              ** Не обязательно заполнять все поля ввода. Достаточно заполнить
              одно из двух: Название / Описание.
            </div>
            <div className={styles.btnsBottom}>
              <button
                type="submit"
                style={{
                  color: '#FFF',
                }}
              >
                Добавить
              </button>
              <button
                type="button"
                style={{
                  color: '#A34141',
                }}
                onClick={closeForm}
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddToDoForm
