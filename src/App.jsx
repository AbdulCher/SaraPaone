import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Biographie from './pages/Biographie'
import Photos from './pages/Photos'
import Videos from './pages/Videos'




export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biographie" element={<Biographie />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/video" element={<Videos />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}