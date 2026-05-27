import cover from '../assets/cover.webp'
import photo1 from '../assets/cremona.jpg'
import photo2 from '../assets/firenze.jpg'
import photo3 from '../assets/ensorcelees.jpg'
import portrait from '../assets/portraithome.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'


export default function Home() {
  const photos = [photo1, photo2, photo3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = (current - 1 + photos.length) % photos.length
  const next = (current + 1) % photos.length

  return (
    <>
      <div style={{ backgroundColor: '#121615' }}>

        {/* Hero */}
        <div
          className="w-full h-screen relative"
          style={{ 
            backgroundImage: `url('${cover}')`,
            backgroundPosition: '70% center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '100px',
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-start pt-32 pl-12 md:pl-44">

            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ 
                fontFamily: 'Corinthia',
                fontSize: 'clamp(200px, 14vw, 180px)',
                fontStyle: 'italic',
                lineHeight: '100px',
                color: '#bea0a4',
                fontWeight: '300',
                WebkitFontSmoothing: 'antialiased'
              }}
              className='mb-6'
            >Sara</motion.span>          

            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ 
                fontFamily: 'Corinthia',
                fontSize: 'clamp(200px, 14vw, 180px)',
                fontStyle: 'italic',
                lineHeight: '100px',
                color: '#bea0a4',
                fontWeight: '300',
                WebkitFontSmoothing: 'antialiased'
              }}
              className="ml-4 md:ml-16"
            >Paone</motion.span>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="flex flex-col mt-46"
              style={{ gap: '-14px' }}
            >
              <span style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(20px, 3vw, 32px)', color: '#bea0a4', lineHeight: '0.8', fontWeight: '300', fontStyle: 'italic', letterSpacing: '0.15em' }}>alto-mezzosoprano</span>
              <span style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(20px, 3vw, 32px)', color: '#bea0a4', lineHeight: '0.8', fontWeight: '300', fontStyle: 'italic', letterSpacing: '0.15em' }} className="ml-4 md:ml-8">artiste aérienne</span>
              </motion.div>

          </div>
        </div>
              
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center text-sm tracking-[0.4em] uppercase text-gray-400 mt-10 mb-4"
        >
          Sara Paone
        </motion.p>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-8" />


        {/* Section présentation */}
        <section className="flex flex-col md:flex-row items-center gap-12 py-16 max-w-6xl mx-auto px-8">

          <div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:flex-1"
        >
          <img src={portrait} alt="Sara Paone" className="w-full h-auto object-cover max-h-[700px]" />
        </div>

        <div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:flex-1 flex flex-col gap-4"
        >
            <p className="text-3xl leading-relaxed text-white/70">
              La voix de Sara Paone, au teint sombre et généreux, se déploie dans un répertoire qui s'étend du baroque aux opéras contemporains, en passant par les œuvres du XIXᵉ siècle.
              Sa grande capacité d'interprétation théâtrale et sa passion du mouvement l'ont amenée à se produire dans les arts du cirque.
              Son parcours tout à fait singulier, son chant et sa manière d'habiter la scène, en font une artiste rare.
            </p>
            <Link to="/biographie" className="inline-block w-fit mt-4 px-6 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
              En savoir plus
            </Link>
          </div>

        </section>

        {/* Séparateur */}
        <div className="w-full max-w-lg mx-auto px-8 mt-6 mb-6">
          <hr className="border-gray-200" />
        </div>

       {/* Section Photos */}
      <section className="py-16 max-w-6xl mx-auto px-8 w-full">
        <div className="flex items-center justify-center gap-6">

          {/* Photo gauche */}
          <div
            className="w-40 h-56 overflow-hidden cursor-pointer shrink-0 opacity-30 hover:opacity-50 transition-all duration-700 scale-95 hover:scale-100"
            onClick={() => setCurrent(prev)}
          >
            <img src={photos[prev]} alt="prev" className="w-full h-full object-cover blur-[2px]" />
          </div>

          {/* Photo centrale */}
          <div className="flex-1 max-w-xl h-96 overflow-hidden relative rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={photos[current]}
                alt={`Photo ${current + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Photo droite */}
          <div
            className="w-40 h-56 overflow-hidden cursor-pointer shrink-0 opacity-30 hover:opacity-50 transition-all duration-700 scale-95 hover:scale-100"
            onClick={() => setCurrent(next)}
          >
            <img src={photos[next]} alt="next" className="w-full h-full object-cover blur-[2px]" />
          </div>

        </div>

        {/* Indicateurs */}
        <div className="flex justify-center gap-2 mt-16">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 rounded-full ${
                current === index ? 'w-8 h-1 bg-[#bea0a4]' : 'w-1 h-1 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/photo" className="inline-block px-8 py-3 border border-gray-600 text-gray-300 text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-200">
            Visiter la galerie photo
          </Link>
        </div>
      </section>

      </div>
    </>
  );
}