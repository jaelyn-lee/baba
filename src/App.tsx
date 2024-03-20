import { Outlet } from 'react-router'
// import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </>
  )
}

export default App
