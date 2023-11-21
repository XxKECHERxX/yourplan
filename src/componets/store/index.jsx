import { configureStore } from '@reduxjs/toolkit'
import gearSlice from './gearSlice'
import addToDoSlice from './addToDoSlice'
import authSlice from './authSlice'

export default configureStore({
  reducer: {
    auth: authSlice,
    gear: gearSlice,
    addToDo: addToDoSlice,
  },
})
