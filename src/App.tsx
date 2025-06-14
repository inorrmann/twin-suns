import { Routes, Route } from 'react-router-dom'
import About from './pages/about.tsx'
import Home from './pages/home.tsx'
import Mission from "./pages/scavenger-hunt/mission.tsx";
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/scavenger-hunt/06282025/mission/:id" element={<Mission/>}/>
      </Routes>
    </>
  )
}
