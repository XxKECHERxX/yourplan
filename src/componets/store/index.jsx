import { configureStore } from '@reduxjs/toolkit'
import gearSlice from './gearSlice'

export default configureStore({
  reducer: {
    gear: gearSlice,
  },
})
