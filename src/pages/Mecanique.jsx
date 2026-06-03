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
          
          <p className="text-white text-lg md:text-2xl">
  La compagnie La Mécanique de Circé présente :
</p>

<h1
  style={{ fontFamily: 'Aboreto, cursive', fontSize: 'clamp(40px, 8vw, 80px)' }}
  className="text-red-600 tracking-wide leading-none"
>
  Ensorcelées
</h1>

<p className="text-white text-2xl md:text-5xl italic">
  Opéra aérien sur les traces des sorcières
</p>
          <div className="w-16 h-px bg-white/40 my-2" />

          <div className="flex flex-col gap-4 max-w-xl">
            
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