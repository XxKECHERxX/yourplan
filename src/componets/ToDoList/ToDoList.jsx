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
  let filterForm = useSelector((state) => state.addToDo.filterForm)
 
  const [typeOfsort, setTypeOfsort] = useState(false)

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
    dispatch(searchTopic(e.target.value))
  }

  const handleRefresh = () => {
    dispatch(sortFromNewToOld())
  }

  return (
    <div className={styles.toDoFrame}>
      <div className={styles.menuList}>
        <div className={styles.topic}>Список дел</div>
        <div className={styles.btnsBar}>
          {!typeOfsort ? (
            <>
              <form className={styles.search}>
                <label>
                  <input
                    type="text"
                    value={filterForm}
                    onChange={handleSearch}
                    placeholder="ключевое слово"
                  />
                </label>
                <button className={styles.btnSearch} type="button">
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
