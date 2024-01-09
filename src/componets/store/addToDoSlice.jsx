import { createSlice } from '@reduxjs/toolkit'

const addToDoSlice = createSlice({
  name: 'addToDo',
  initialState: {
    list: [],
    showAddForm: false,
  },
  reducers: {
    showForm(state, action) {
      state.showAddForm = action.payload
    },
    addCase(state, action) {
      const newCase = action.payload
      const newDate = new Date()

      state.list.unshift({
        id: newDate.getTime(),
        extra: newCase.extraCase,
        topic: newCase.nameCase,
        keyWords: newCase.nameCase.toLowerCase().split(' '),
        date: newCase.dateCase.split('-').reverse().join('.'),
        dateCode: newCase.dateCase.split('-').join(''),
        comment: newCase.descriptionCase,
        isDone: false,
      })
    },
    markDoneCase(state, action) {
      const existCase = state.list.find((item) => item.id === action.payload.id)

      existCase.isDone ? (existCase.isDone = false) : (existCase.isDone = true)
    },
    markExtraCase(state, action) {
      const existCase = state.list.find((item) => item.id === action.payload.id)

      existCase.extra ? (existCase.extra = false) : (existCase.extra = true)
    },
    deleteCase(state, action) {
      const existCase = state.list.find((item) => item.id === action.payload.id)

      state.list = state.list.filter((item) => item.id !== existCase.id)
    },
    chooseExtra(state, action) {
      state.list = state.list.sort((a, b) => b.extra - a.extra)
    },
    sortFromNewToOld(state, action) {
      state.list = state.list.sort((a, b) => b.id - a.id)
    },
    sortByTime(state, action) {
      state.list = state.list.sort((a, b) => b.dateCode - a.dateCode)
    },
    filterIsDone(state, action) {
      state.list = state.list.sort((a, b) => a.isDone - b.isDone)
    },
    searchTopic(state, action) {
      let keyWord = action.payload.toLowerCase()

      let hasKeyCases = state.list.filter((el) => el.keyWords.includes(keyWord))
      let NotHasKeyCases = state.list.filter(
        (el) => !el.keyWords.includes(keyWord)
      )

      state.list = hasKeyCases.concat(NotHasKeyCases)
    },
    loadUserCases(state, action) {
      state.list = [...state.list, ...action.payload]
    },
    clearListLogOut(state, action) {
      state.list = []
    },
  },
})

export const {
  showForm,
  addCase,
  markDoneCase,
  markExtraCase,
  deleteCase,
  chooseExtra,
  sortFromNewToOld,
  sortByTime,
  filterIsDone,
  searchTopic,
  loadUserCases,
  clearListLogOut,
} = addToDoSlice.actions

export default addToDoSlice.reducer
