import fiesole from '../assets/fiesole.jpg'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="bg-[#121615] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-8">

        {/* Titre — centré sur tous les écrans */}
        

        <section className="flex flex-col md:flex-row items-start gap-16">

          {/* Image — au dessus sur mobile, à droite sur desktop */}
          <div className="block md:hidden w-full">
            <img src={fiesole} alt="Sara Paone" className="w-full h-[300px] object-cover" />
          </div>

          {/* Formulaire */}
          <div className="w-full md:flex-1 flex flex-col gap-6">
            <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-2xl tracking-[0.4em] uppercase text-[#bea0a4] mb-4 mt-6"
        >
          CONTACTER SARA PAONE
        </motion.p>
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wide text-gray-200">Nom</label>
              <input type="text" placeholder="Votre nom" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wide text-gray-200">Email</label>
              <input type="email" placeholder="Votre email" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wide text-gray-200">Message</label>
              <textarea rows={12} placeholder="Votre message" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors resize-none" />
            </div>
            <div className="flex justify-center mt-4">
              <button className="px-8 py-3 bg-black border border-white text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
                Envoyer
              </button>
            </div>
          </div>

          {/* Image — cachée sur mobile, visible sur desktop */}
          <div className="hidden md:block md:w-[500px] shrink-0">
            <img src={fiesole} alt="Sara Paone" className="w-full h-[700px] mt-6 object-cover" />
          </div>

        </section>

      </div>
    </div>
  )
}