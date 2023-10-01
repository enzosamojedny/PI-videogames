import './App.css'
import Navbar from './components/navbar/Navbar'
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
      {/* {isHomePage && <Navbar />} */}
      <Routes>
        {/* <Route path='/videogames'/> */}
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/videogames' element={}/> */}
        <Route path='*' element={<Error />} />
        <Route path='/detail/:detailId' element={<CardDetailContainer />} />

      </Routes>
    </>
  )
}

export default App