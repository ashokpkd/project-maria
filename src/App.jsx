import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home_Page';
import Services from './Pages/Services_Page';
import Gallery from './Pages/Gallery_Page';
import Cv from './Pages/CV_Page';
import Boi_page from './Pages/Boi_Page';
import LifegatePage from './Pages/LifeGate_Page';
import DDPage from './Pages/DD_Page';
import TptPage from './Pages/TPT_Page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/boi' element={<Boi_page />} />
          <Route path='/lifegate' element={<LifegatePage />} />
          <Route path='/dd' element={<DDPage />} />
          <Route path='/tpt' element={<TptPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
