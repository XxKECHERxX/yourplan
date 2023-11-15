import { configureStore } from '@reduxjs/toolkit'
import gearSlice from './gearSlice'
import addToDoSlice from './addToDoSlice'

export default configureStore({
  reducer: {
    gear: gearSlice,
    addToDo: addToDoSlice,
  },
})
