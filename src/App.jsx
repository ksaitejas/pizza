import Home from './Components1/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Components1/LoginPage'
import SignUp from './Components1/SignUp'
// import './App.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>    
      </BrowserRouter>
    </div>
  )
}

export default App
