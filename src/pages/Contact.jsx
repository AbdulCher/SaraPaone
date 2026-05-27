import fiesole from '../assets/fiesole.jpg'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="bg-[#121615] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center text-2xl tracking-[0.4em] uppercase text-[#bea0a4] mb-14"
        >
          CONTACTER SARA PAONE
        </motion.p>
        <section className="flex items-start gap-16">

          {/* Formulaire */}
          <div className="flex-1 flex flex-col gap-6">
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
              <textarea rows={6} placeholder="Votre message" className="border border-gray-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors resize-none" />
            </div>
            
          </div>

          {/* Image temporaire */}
        <div className="w-80 shrink-0">
  <img src={fiesole} alt="Sara Paone" className="w-full h-auto mt-6 object-cover" />
</div>

        </section>
        <div className="flex justify-center mt-10">
  <button className="px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
    Envoyer
  </button>
</div>

      </div>
    </div>
  )
}