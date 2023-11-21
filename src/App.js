import './App.css'
import NavBar from './componets/Navig/NavBar'
import MainLayer from './componets/MainLayer'
import LogFrame from './componets/LogFrame/LogFrame'
import Settings from './componets/Settings/Settings'
import AddToDoForm from './componets/AddToDoForm/AddToDoForm'
import { useSelector } from 'react-redux'

function App() {
  const showLog = useSelector((state) => state.auth.showLogFrame)
  const showSet = useSelector((state) => state.gear.showSettings)
  const showAddForm = useSelector((state) => state.addToDo.showAddForm)

  return (
    <div className="App">
      <NavBar />
      <MainLayer />
      {showLog && <LogFrame />}
      {showSet && <Settings />}
      {showAddForm && <AddToDoForm />}
    </div>
  )
}

export default App
