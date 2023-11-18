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
      const length = state.list.length
      const newId = length

      state.list.unshift({
        id: newId,
        extra: newCase.extraCase,
        topic: newCase.nameCase,
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
      const extraCases = state.list.filter((item) => item.extra === true)
      const notExtraCases = state.list.filter((item) => item.extra === false)

      state.list = extraCases.concat(notExtraCases)
    },
    sortFromNewToOld(state,action) {
      state.list = state.list.sort((a, b) => b.id - a.id)
    },
    sortByTime(state, action) {
      state.list = state.list.sort((a, b) => b.dateCode - a.dateCode)
    },
    filterIsDone(state, action) {
      const doneCases = state.list.filter((item) => item.isDone === true)
      const notDoneCases = state.list.filter((item) => item.isDone === false)

      state.list = notDoneCases.concat(doneCases)
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
  filterIsDone
} = addToDoSlice.actions

export default addToDoSlice.reducer
