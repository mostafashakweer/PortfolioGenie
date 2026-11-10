import { Route, Routes } from 'react-router-dom'
import HomeHero from './components/Home/HomeHero'
import PortfolioEditorPage from './pages/EditorPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomeHero />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/editor" element={<PortfolioEditorPage />} />
      <Route path="/my-portfolio" element={<PortfolioEditorPage />} />
    </Routes>
  )
}

export default App
