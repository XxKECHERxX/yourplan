import './App.css'
import NavBar from './componets/Navig/NavBar'
import MainLayer from './componets/MainLayer'
import Settings from './componets/Settings/Settings'
import AddToDoForm from './componets/AddToDoForm/AddToDoForm'
import { useSelector } from 'react-redux'

function App() {
  const showSet = useSelector((state) => state.gear.showSettings)
  const showAddForm = useSelector((state) => state.addToDo.showAddForm)

  return (
    <div className="App">
      <NavBar />
      <MainLayer />
      {showSet && <Settings />}
      {showAddForm && <AddToDoForm />}
    </div>
  )
}

export default App
