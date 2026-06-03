import fiesolen from '../assets/fiesolen.jpg'
import { motion } from 'framer-motion'
import banierebas from '../assets/bannierebas.webp'

export default function Contact() {
  return (
    <div
      className="py-16 px-2 lg:px-4"
      style={{
        backgroundImage: `url(${banierebas})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="flex flex-col lg:flex-row items-start gap-4 p-4 lg:p-10">

        {/* Image mobile et tablette */}
        <div className="block lg:hidden w-full">
          <img src={fiesolen} alt="Sara Paone" className="w-full h-[920px] object-cover" />
        </div>

        {/* Formulaire */}
        <div className="w-full lg:w-2/4 flex flex-col gap-6 px-4 lg:px-10 pt-2">
          <div className="w-full h-px bg-[#bea0a4] mt-8 opacity-50" />
          <motion.h2
            style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(24px, 4vw, 48px)', color: '#bea0a4', lineHeight: '1.2' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center text-4xl mt-8 text-[#bea0a4] mb-4"
          >
            Contacter Sara Paone
          </motion.h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide text-gray-200">Nom</label>
            <input type="text" placeholder="Votre nom" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide text-gray-200">Email</label>
            <input type="email" placeholder="Votre email" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide text-gray-200">Sujet</label>
            <input type="text" placeholder="Sujet de votre message" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide text-gray-200">Message</label>
            <textarea rows={10} placeholder="Votre message" className="border border-gray-300 px-4 py-3 h-122 text-base focus:outline-none focus:border-black transition-colors resize-none" />
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-8 py-3 bg-black border border-white text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
              Envoyer
            </button>
          </div>
          <div className="w-full h-px bg-[#bea0a4] mt-8 opacity-50" />
        </div>

        {/* Image desktop */}
        <div className="hidden lg:block lg:w-2/4 shrink-0 h-[1200px] overflow-hidden pr-10">
          <img src={fiesolen} alt="Sara Paone" className="w-full h-full object-contain" />
        </div>

      </section>
    </div>
  )
}