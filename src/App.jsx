import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Biographie from './pages/Biographie'
import Photos from './pages/Photos'
import Videos from './pages/Videos'
import Repertoire from './pages/Repertoire'
import Contact from './pages/Contact'
import Projets from './pages/Projets'







export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biographie" element={<Biographie />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/repertoire" element={<Repertoire />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}