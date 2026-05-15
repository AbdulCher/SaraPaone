import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import onStage1 from '../assets/galerie/firenze.jpg'
import onStage2 from '../assets/galerie/firenzeone.jpg'
import onStage3 from '../assets/galerie/firenzetwo.jpg'
import onStage4 from '../assets/galerie/firenzethree.jpg'
import onStage5 from '../assets/galerie/firenzefour.jpg'

import offStage1 from '../assets/galerie/firenze.jpg'
import offStage2 from '../assets/galerie/firenzeone.jpg'
import offStage3 from '../assets/galerie/firenzetwo.jpg'
import offStage4 from '../assets/galerie/firenzethree.jpg'

const onStagePhotos = [
  { src: onStage1 },
  { src: onStage2 },
  { src: onStage3 },
  { src: onStage4 },
  { src: onStage5 },
]

const offStagePhotos = [
  { src: offStage1 },
  { src: offStage2 },
  { src: offStage3 },
  { src: offStage4 },
]

export default function Photos() {
  const [activeTab, setActiveTab] = useState('onstage')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const photos = activeTab === 'onstage' ? onStagePhotos : offStagePhotos

  const openLightbox = (index) => {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-[#121615] text-black pt-32 px-6 md:px-24 pb-20">

      <h1 className="flex justify-center text-4xl md:text-5xl text-[#bea0a4] font-bold mb-12">Photos</h1>

      {/* Onglets */}
      <div className="flex justify-center gap-8 md:gap-12 mb-12 border-b border-gray-700">
        <button
          onClick={() => setActiveTab('onstage')}
          className={`pb-4 text-lg md:text-xl tracking-wide transition-colors duration-200 ${
            activeTab === 'onstage'
              ? 'border-b-2 border-[#bea0a4] text-[#bea0a4] font-semibold'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          On stage
        </button>
        <button
          onClick={() => setActiveTab('offstage')}
          className={`pb-4 text-lg md:text-xl tracking-wide transition-colors duration-200 ${
            activeTab === 'offstage'
              ? 'border-b-2 border-[#bea0a4] text-[#bea0a4] font-semibold'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Off stage
        </button>
      </div>

      {/* Grille photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden"
            onClick={() => openLightbox(index)}
          >
            <img
              src={photo.src}
              alt={`Photo ${index + 1}`}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={photos}
        index={photoIndex}
      />

    </div>
  )
}