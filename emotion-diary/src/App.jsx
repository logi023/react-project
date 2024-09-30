import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Notfound from "./pages/Notfound"

import { getEmotionImage } from './util/get-emotion-image';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <img src={getEmotionImage(1)}/>
    </>
  )
}

export default App
