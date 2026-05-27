import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Galerie from './pages/Galerie'
import Videos from './pages/Videos'
import Repertoire from './pages/Repertoire'
import Contact from './pages/Contact'
import Projets from './pages/Projets'
import SocialIcons from './components/SocialIcons'







export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SocialIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/repertoire" element={<Repertoire />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}