import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import HomeHero from './components/Home/HomeHero'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomeHero />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App