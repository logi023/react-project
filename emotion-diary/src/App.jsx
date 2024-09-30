import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Notfound from "./pages/Notfound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default App
