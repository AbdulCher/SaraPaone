import { useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'

import image1 from '../assets/galerie/firenze.jpg'
import image2 from '../assets/galerie/firenzeone.jpg'
import image3 from '../assets/galerie/parma.jpg'
import image4 from '../assets/galerie/firenzethree.jpg'
import image5 from '../assets/galerie/firenzefour.jpg'
import image6 from '../assets/galerie/toscana2.jpg'
import image7 from '../assets/galerie/firenzetwo.jpg'
import image8 from '../assets/galerie/cirquelectrique.jpg'
import image9 from '../assets/galerie/cirquelectrique2.jpg'

{/*import onStage11 from '../assets/galerie/parma2.jpg'
import onStage12 from '../assets/galerie/parma3.jpg'
import onStage6 from '../assets/galerie/firenzethree.jpg'
import onStage7 from '../assets/galerie/toscana.jpg'
import onStage8 from '../assets/galerie/bologna.jpg'
*/}

const photos = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
]

const videos = [
  { id: 'oHjCEnd2_jo', title: 'Vidéo 1' },
  { id: '2EWnn5jS43Q', title: 'Vidéo 2' },
  { id: 'GX40g7qYM48', title: 'Vidéo 3' },
]

function VideoCard({ id, title }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="overflow-hidden relative">
      {playing ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative cursor-pointer group" onClick={() => setPlaying(true)}>
          <img
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <div className="w-0 h-0 ml-1" style={{
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: '18px solid black'
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Galerie() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [showNav, setShowNav] = useState(true)

useEffect(() => {
  let timeout
  const handleScroll = () => {
    setShowNav(false)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setShowNav(true)
    }, 800)
  }

  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(timeout)
  }
}, [])
  const openLightbox = (index) => {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="bg-[#121615] px-6 md:px-24 pb-20">

        <div className="pt-40 pb-8 text-center">
          <h2 style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(24px, 4vw, 48px)', color: '#bea0a4', lineHeight: '1.2' }} className="text-4xl text-[#bea0a4] mb-6">Galerie</h2>
          <div className="w-full h-px bg-gray-800" />
        </div>

      {/* Barre sticky 
      <div className={`sticky top-20 z-40 py-4 flex justify-center gap-4 mb-16 transition-opacity duration-500 ${
        showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <a href="#photos" className="px-6 py-2 text-lg tracking-wide transition-colors duration-200 border border-[#bea0a4] text-[#bea0a4] hover:bg-[#bea0a4] hover:text-black">
          Photos
        </a>
        <a href="#videos" className="px-6 py-2 text-lg tracking-wide transition-colors duration-200 border border-[#bea0a4] text-gray-400 hover:border-gray-600 hover:bg-[#bea0a4] hover:text-black">
          Vidéos
        </a>
      </div>*/}

      {/* Section Photos */}
      <section id="photos" className="scroll-mt-28 mb-16">
        <p className="flex justify-center text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Photos</p>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden mb-4 break-inside-avoid group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
            </motion.div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gray-800 mb-16" />

        {/* Section Vidéos */}
        <section id="videos" className="scroll-mt-28 mb-16">
        <p className="flex justify-center text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Vidéos</p>
          <div className="hidden md:flex gap-8 items-stretch min-height-[600px]">
            <div className="flex-1 flex flex-col justify-start">
              <VideoCard id={videos[0].id} title={videos[0].title} />
            </div>
            <div className="flex-1 flex flex-col justify-evenly">
              <VideoCard id={videos[1].id} title={videos[1].title} />
            </div>
            
          </div>
          <div className="flex md:hidden flex-col gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} id={video.id} title={video.title} />
            ))}
          </div>
        </section>
{/* Section Photos */}
      <section id="photos" className="scroll-mt-28 mb-16">
        <p className="flex justify-center text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Photos</p>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden mb-4 break-inside-avoid group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
            </motion.div>
            ))}
          </div>
        </section>
        {/* Section Vidéos */}
        <section id="videos" className="scroll-mt-28 mb-16">
        <p className="flex justify-center text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Vidéos</p>
          <div className="hidden md:flex gap-8 items-stretch min-height-[600px]">
            <div className="flex-1 flex flex-col justify-start">
              <VideoCard id={videos[0].id} title={videos[0].title} />
            </div>
            <div className="flex-1 flex flex-col justify-evenly">
              <VideoCard id={videos[1].id} title={videos[1].title} />
            </div>
            
          </div>
          <div className="flex md:hidden flex-col gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} id={video.id} title={video.title} />
            ))}
          </div>
        </section>
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/@sarapaone"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 border border-gray-600 text-gray-300 text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-200"
          >
            Voir plus sur YouTube
          </a>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={photos}
          index={photoIndex}
        />

      </div>
    </>
  )
}