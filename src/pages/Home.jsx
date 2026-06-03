import cover from '../assets/cover.png'
import photo1 from '../assets/cremona.jpg'
import photo2 from '../assets/firenze.jpg'
import photo3 from '../assets/ensorcelees.jpg'
import portrait from '../assets/portraithome.jpg'
import grainvertical from '../assets/grainvertical.webp'
import banniere from '../assets/banniere.webp'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const photos = [photo1, photo2, photo3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <>
      <div>

        {/* Hero */}
        <div
          className="w-full relative"
          style={{ 
            backgroundImage: `url('${cover}')`, backgroundPosition: '70% 90%',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '120vh',
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center pl-8 md:pl-44">

            <div className="flex flex-col" style={{ gap: '0px' }}>
              <span style={{ 
                  fontFamily: 'Corinthia', fontSize: 'clamp(60px, 18vw, 200px)',
                  fontStyle: 'italic', lineHeight: '0.9', color: '#bea0a4',
                  fontWeight: '300', WebkitFontSmoothing: 'antialiased',
                  display: 'block'
              }}>Sara</span>          

              <span style={{ 
                fontFamily: 'Corinthia', fontSize: 'clamp(60px, 18vw, 200px)',
                fontStyle: 'italic', lineHeight: '0.9', color: '#bea0a4',
                fontWeight: '300', WebkitFontSmoothing: 'antialiased',
                display: 'block'
              }} className="ml-4 md:ml-16">Paone</span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="flex flex-col mt-6 lg:mt-66"
              style={{ gap: '-14px' }}
            >
              <span style={{ 
                fontFamily: 'EB Garamond, serif', fontSize: 'clamp(24px, 3vw, 40px)', 
                color: '#bea0a4', lineHeight: '1.2', fontWeight: '300', 
                fontStyle: 'italic' 
              }}>alto-mezzosoprano</span>
              <span style={{ 
                fontFamily: 'EB Garamond, serif', fontSize: 'clamp(22px, 3vw, 38px)', 
                color: '#bea0a4', lineHeight: '1.2', fontWeight: '300', 
                fontStyle: 'italic' 
              }} className="ml-10 md:ml-30">artiste aérienne</span>
            </motion.div>

          </div>
        </div>

        {/* Section présentation */}
        <section
          className="flex flex-col py-16 px-6 md:px-8"
          style={{
            backgroundImage: `url(${grainvertical})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">

            <motion.div className="w-full lg:flex-1 flex flex-col gap-4 lg:p-24">
              <h2 style={{ fontFamily: 'EB Garamond, serif', 
                  fontSize: 'clamp(24px, 4vw, 48px)', 
                  color: '#bea0a4', lineHeight: '1.2' }} 
                  className="flex justify-center md:text-left">
                Biographie
              </h2>
              <p className="text-xl md:text-3xl leading-relaxed text-white/70 md:pt-6">
                La voix de Sara Paone, au teint sombre et généreux, se déploie dans un répertoire qui s'étend du baroque aux opéras contemporains, en passant par les œuvres du XIXᵉ siècle.
              </p>
              <p className="text-xl md:text-3xl leading-relaxed text-white/70">
                Sa grande capacité d'interprétation théâtrale et sa passion du mouvement l'ont amenée à se produire dans les arts du cirque.
              </p>
              <p className="text-xl md:text-3xl leading-relaxed text-white/70">
                Son parcours tout à fait singulier, son chant et sa manière d'habiter la scène, en font une artiste rare.
              </p>
              <div className="flex justify-center mt-4">
                <Link to="/biographie" className="px-6 py-3 border border-gray-600 text-white text-lg tracking-wide hover:bg-[#bea0a4] hover:text-black transition-colors duration-200">
                  En savoir plus
                </Link>
              </div>
            </motion.div>

            <motion.div className="w-full lg:flex-1">
              <img src={portrait} alt="Sara Paone" className="w-full object-cover" style={{ height: '700px' }} />
            </motion.div>

          </div>
        </section>

        {/* Section 3 colonnes */}
        <section
          className="relative py-16 w-full"
          style={{
            backgroundImage: `url(${banniere})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 max-w-8xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              <div className="flex flex-col items-center gap-4">
                <div className="overflow-hidden w-full h-72 md:h-auto lg:h-92">
                  <img src={photo1} alt="Répertoire" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <Link to="/repertoire" className="px-14 py-3 border border-[#bea0a4] text-gray-200 text-xl tracking-wide hover:bg-[#bea0a4] hover:text-black transition-colors duration-200">
                  Répertoire
                </Link>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="overflow-hidden w-full h-72 md:h-auto lg:h-92">
                  <img src={photo2} alt="Galerie" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <Link to="/galerie" className="px-14 py-3 border border-[#bea0a4] text-gray-200 text-xl tracking-wide hover:bg-[#bea0a4] hover:text-black transition-colors duration-200">
                  Galerie
                </Link>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="overflow-hidden w-full h-72 md:h-auto lg:h-92">
                  <img src={photo3} alt="La Mécanique de Circé" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <Link to="/mecanique" className="px-14 py-3 border border-[#bea0a4] text-gray-200 text-xl tracking-wide hover:bg-[#bea0a4] hover:text-black transition-colors duration-200">
                  La Mécanique de Circé
                </Link>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}