import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home_Page';
import Services from './Pages/Services_Page';
import Gallery from './Pages/Gallery_Page';
import Cv from './Pages/CV_Page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/cv' element={<Cv/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
