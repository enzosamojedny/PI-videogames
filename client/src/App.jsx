import './App.css'
import Landing from './components/landing/Landing'
import { Route, Routes, useLocation } from "react-router-dom";
import Error from './components/Error-page/Error';
import Home from './components/home/Home';
import CardDetailContainer from './components/cardDetail/CardDetailContainer';
function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/home'

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/detail/:detailId' element={<CardDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
