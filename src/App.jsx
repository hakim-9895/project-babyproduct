import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Combonents/Register'
import Login from './Combonents/Login'
import Home from './Dash/Home'
function App() {

  return (
    <>
      <div>
<Routes>
   <Route path='register' element={<Register/>}/>  
   <Route path='/' element={<Login/>}/>  
   <Route path='home' element={<Home/>}/>
</Routes>

       </div>
    </>
  )
}

export default App
