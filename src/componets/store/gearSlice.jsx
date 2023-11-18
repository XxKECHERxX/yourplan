import { createSlice } from '@reduxjs/toolkit'

const gearSlice = createSlice({
  name: 'gear',
  initialState: {
    showSettings: false,
    showCalendar: true,
    showWeather: true,
    cityWeather: 'Москва',
    showStatTable: true,
    amountItemToDo: '4',
    currNumVisList: '4'
  },
  reducers: {
    showSet(state, action) {
      state.showSettings = action.payload
    },
    showCalen(state, action) {
      state.showCalendar = action.payload
    },
    showWeath(state, action) {
      state.showWeather = action.payload
    },
    showStat(state, action) {
      state.showStatTable = action.payload
    },
    changeCityWeather(state, action) {
      state.cityWeather = action.payload
    },
    changeAmountCase(state, action) {
      state.amountItemToDo = action.payload
    },
    changeLengthList(state, action) {
      state.currNumVisList = action.payload
      state.amountItemToDo = action.payload
    },
  },
})

export const { showSet, showCalen, showWeath, showStat, changeCityWeather, changeAmountCase, changeLengthList } =
  gearSlice.actions

export default gearSlice.reducer
