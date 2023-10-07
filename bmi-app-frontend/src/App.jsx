
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <div className='w-full h-[93px]'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}


export default App
