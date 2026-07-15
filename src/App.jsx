import './App.css'
import AddLine from './components/AddLine'
import AddTime from './components/AddTime'
import AppName from './components/AppName'

function App() {
  
  return <center className='clock-container' >
   <AppName />
   <AddLine />
   <AddTime />
  </center>
        
}

export default App;
