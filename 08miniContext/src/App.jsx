
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <>
  
    <UserContextProvider>
    <h1>Hello Muntazir Malik</h1>
    <Profile />
    <Login />
    </UserContextProvider>
    </>
  )
}

export default App
