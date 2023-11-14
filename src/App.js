import './App.css'
import NavBar from './componets/Navig/NavBar'
import MainLayer from './componets/MainLayer'
import Settings from './componets/Settings/Settings'
import { useSelector } from 'react-redux'

function App() {

  const showSet = useSelector(state => state.gear.showSettings)

  return (
    <div className="App">
      <NavBar />
      <MainLayer />
      {showSet && <Settings />}
    </div>
  )
}

export default App
