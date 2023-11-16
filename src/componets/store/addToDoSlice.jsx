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

      state.list.push({
        id: newId,
        extra: newCase.extraCase,
        topic: newCase.nameCase,
        date: newCase.dateCase,
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
  },
})

export const { showForm, addCase, markDoneCase, markExtraCase, deleteCase } =
  addToDoSlice.actions

export default addToDoSlice.reducer
