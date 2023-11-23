import { createSlice } from '@reduxjs/toolkit'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const authSlice = createSlice({
  name: 'user',
  initialState: {
    showLogFrame: false,
    singInUser: {
      email: null,
      token: null,
      id: null,
    },
  },
  reducers: {
    openLogFrame(state, action) {
      state.showLogFrame = action.payload
    },
    setUser(state, action) {
      state.singInUser.email = action.payload.email
      state.singInUser.token = action.payload.token
      state.singInUser.id = action.payload.id
    },
    removeUser(state, action) {
      state.singInUser.email = null
      state.singInUser.token = null
      state.singInUser.id = null
    },
    addDocsFire(state, action) {
      setDoc(doc(db, 'usersCases', state.singInUser.id), {
        userCases: action.payload,
      })
    },
  },
})

export const { openLogFrame, setUser, removeUser, addDocsFire } =
  authSlice.actions

export default authSlice.reducer
