import ensorcelees from '../assets/ensorcelees.jpg'

export default function Mecanique() {
  return (
    <div>

      {/* Section Hero */}
      <section
        className="relative w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${ensorcelees})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center text-center px-8 gap-8">
          
          <p className="text-white text-sm tracking-[0.4em] uppercase">
            La compagnie La Mécanique de Circé présente :
          </p>

          <h1
            style={{ fontFamily: 'Aboreto, cursive', fontSize: '80px' }}
            className="text-red-600 uppercase tracking-wide leading-none"
          >
            Ensorcelées
          </h1>

          <p className="text-white text-2xl font-bold italic tracking-[0.2em]">
            Opéra aérien sur les traces des sorcières
          </p>

          <div className="w-16 h-px bg-white/40 my-2" />

          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-white/80 text-lg leading-relaxed">
              Sara Paone a fondé la Cie La Mécanique de Circé.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Elle crée actuellement son premier spectacle, Ensorcelées, avec sa complice Marion André, cheffe d'orchestre et multi-instrumentiste.
            </p>
          </div>

        </div>

      </section>

      {/* Section Vidéo */}
<section className="bg-black py-20 flex flex-col items-center gap-8">
  <div className="w-full max-w-4xl px-8">
    <iframe
      className="w-full aspect-video"
      src="https://www.youtube.com/embed/aY71zBx3eHs?si=fK9-WutTG9GsFS6F" 
      title="Ensorcelées"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</section>

    </div>
  )
}