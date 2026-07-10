import { Routes, Route } from 'react-router-dom'
import About from './pages/about.tsx'
import Home from './pages/home.tsx'
import MoraleArchives from "./pages/scavenger-hunt/morale-archives.tsx";
import OperationsArchives from "./pages/scavenger-hunt/operations-archives.tsx";
import SettlersArchives from "./pages/scavenger-hunt/settlers-archives.tsx";
import './App.css'

export default function App() {
  // https://www.twinsunsranch.com/#/scavenger-hunt/06282025/2

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/*<Route path="/scavenger-hunt/06282025/:id" element={<Mission/>}/>*/}
        {/*<Route path="/scavenger-hunt/09062025/:id" element={<MissionSept/>}/>*/}
        {/*<Route path="/scavenger-hunt/02212026/:id" element={<MissionSecondChapter/>}/>*/}
        <Route path="/scavenger-hunt/06282025/:id" element={<MoraleArchives/>}/>
        <Route path="/scavenger-hunt/09062025/:id" element={<OperationsArchives/>}/>
        <Route path="/scavenger-hunt/02212026/:id" element={<SettlersArchives/>}/>
      </Routes>
    </>
  )
}
