import { Routes, Route } from 'react-router-dom'
import About from './pages/about.tsx'
import Home from './pages/home.tsx'
import Mission from "./pages/scavenger-hunt/mission.tsx";
import MissionSept from "./pages/scavenger-hunt/mission-25-09.tsx";
import './App.css'

export default function App() {
  // https://www.twinsunsranch.com/#/scavenger-hunt/06282025/2

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/scavenger-hunt/06282025/:id" element={<Mission/>}/>
        <Route path="/scavenger-hunt/09062025/:id" element={<MissionSept/>}/>
      </Routes>
    </>
  )
}
