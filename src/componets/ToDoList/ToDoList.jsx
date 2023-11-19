import styles from './ToDoList.module.css'
import Search from '../icons/Search'
import Sort from '../icons/Sort'
import Plus from '../icons/Plus'
import Refresh from '../icons/Refresh'
import ToDoPoints from './ToDoPoints'
import FilterToDos from './FiltersToDos'
import { useDispatch, useSelector } from 'react-redux'
import { showForm, searchTopic, sortFromNewToOld } from '../store/addToDoSlice'
import { useState } from 'react'

const ToDoList = () => {
  const caseList = useSelector((state) => state.addToDo.list)
  const [typeOfsort, setTypeOfsort] = useState(false)
  const [findTopic, setFindTopic] = useState('')

  const dispatch = useDispatch()

  const openForm = () => {
    dispatch(showForm(true))
  }

  const openFilters = () => {
    setTypeOfsort(true)
  }
  const closeFilters = () => {
    setTypeOfsort(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setTypeOfsort(false)
    dispatch(searchTopic(findTopic))
  }

  const handleRefresh = () => {
    setFindTopic('')
    dispatch(sortFromNewToOld())
  }

  return (
    <div className={styles.toDoFrame}>
      <div className={styles.menuList}>
        <div className={styles.topic}>Список дел</div>
        <div className={styles.btnsBar}>
          {!typeOfsort ? (
            <>
              <form className={styles.search} onSubmit={handleSearch}>
                <label>
                  <input
                    type="text"
                    value={findTopic}
                    onChange={(e) => setFindTopic(e.target.value)}
                    placeholder="ключевое слово"
                  />
                </label>
                <button className={styles.btnSearch} type="submit">
                  <Search />
                </button>
              </form>
              <button
                className={styles.btnRefresh}
                type="button"
                onClick={handleRefresh}
              >
                <Refresh />
              </button>
            </>
          ) : (
            <button className={styles.btn} onClick={handleSearch}>
              <Search />
            </button>
          )}

          {typeOfsort ? <FilterToDos /> : ''}
          {typeOfsort ? (
            <button
              className={styles.btn}
              onClick={closeFilters}
              style={{
                backgroundColor: '#a3934111',
              }}
            >
              <Sort />
            </button>
          ) : (
            <button className={styles.btn} onClick={openFilters}>
              <Sort />
            </button>
          )}
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
    </div>
  )
}

export default ToDoList
