import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Biographie from './pages/Biographie'
import Galerie from './pages/Galerie'
import Videos from './pages/Videos'
import Repertoire from './pages/Repertoire'
import Contact from './pages/Contact'
import Mecanique from './pages/Mecanique'
import ScrollToTop from './components/ScrollToTop'








export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biographie" element={<Biographie />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/repertoire" element={<Repertoire />} />
        <Route path="/mecanique" element={<Mecanique />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}