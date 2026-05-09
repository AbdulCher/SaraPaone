import cover from '../assets/cover.webp'
import photo1 from '../assets/orleans.jpg'
import photo2 from '../assets/parma.jpg'
import photo3 from '../assets/firenze.jpg'
import ensorcelees from '../assets/ensorcelees.jpg'


// etc.

import portrait from '../assets/portraithome.jpg' // adapte le nom de ton fichier

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div
        className="w-screen h-screen flex items-center pl-20 pb-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${cover}')`,
          backgroundPosition: 'center top',
          backgroundSize: '100%',
          height: '100vh',
          paddingTop: '80px'
        }}
      >
        <div className="ml-10 flex flex-col">
  <span style={{ fontFamily: 'Aref Ruqaa' }} className="text-[#bea0a4] text-9xl ml-20">Sara</span>
  <span style={{ fontFamily: 'Aref Ruqaa' }} className="text-[#bea0a4] text-9xl ml-30">Paone</span>
</div>
      </div>

      {/* Section présentation */}
      <section className="flex items-center gap-16 px-24 py-20">
        
        <div className="flex-1">
          <img src={portrait} alt="Sara Paone" className="w-full h-auto object-cover rounded" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Qui suis-je ?</h2>
          <p className="text-lg leading-relaxed">
            La voix de Sara Paone, au teint sombre et généreux, se déploie dans un répertoire qui s’étend du baroque aux opéras contemporains, en passant par les œuvres du XIXᵉ siècle.
            Sa grande capacité d’interprétation théâtrale et sa passion du mouvement l’ont amenée à se produire dans les arts du cirque.
            Son parcours tout à fait singulier, son chant et sa manière d’habiter la scène, en font une artiste rare.
          </p>
          <a href="#biographie" className="inline-block mt-8 px-6 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
            En savoir plus
          </a>
        </div>

      </section>

      {/* Section Photos */}
      {/* Section Photos */}
<section className="px-24 py-20 max-w-5xl mx-auto">
  
        <div className="grid grid-cols-3 gap-4 mb-10">
          <img src={photo1} alt="Photo 1" className="w-full h-64 object-cover" />
          <img src={photo2} alt="Photo 2" className="w-full h-64 object-cover" />
          <img src={photo3} alt="Photo 3" className="w-full h-64 object-cover" />
        </div>

        <div className="flex justify-center">
          <a href="#photo" className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
            Visiter la galerie photo
          </a>
        </div>

      </section>
      
      {/* Section Ensorcelées */}
      <section
        className="relative w-full bg-center flex flex-col justify-between py-20 px-24"
        style={{ 
          backgroundImage: `url(${ensorcelees})`,
          backgroundSize: '150%',
          height: '1300px'
        }}
      >
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0" />

        {/* Contenu haut */}
        <div className="relative z-10">
          <p className="flex justify-center text-white text-lg tracking-widest uppercase mb-4">
            La compagnie La Mécanique de Circé présente :
          </p>
          <h2 style={{ fontFamily: 'Aboreto, cursive', fontSize: '65px' }} className="flex justify-center mt-16 text-red-600 font-bold uppercase tracking-wide">
            Ensorcelées
          </h2>
        </div>

        {/* Contenu bas */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <p className="text-white text-4xl italic tracking-[0.3em]">
            Opéra aérien sur les traces des sorcières
          </p>
          <p className="text-white/80 text-base max-w-xl leading-relaxed">
            Sara Paone a fondé la Cie La Mécanique de Circé. Elle crée actuellement 
            son premier spectacle, Ensorcelées, avec sa complice Marion André, 
            cheffe d'orchestre et multi-instrumentiste.
          </p>
          <a href="#mecanique" className="inline-block w-fit px-6 py-3 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-200">
            En savoir plus
          </a>
        </div>

      </section>
            
      {/* Bande Contact */}
      <section className="w-full py-24 flex items-center justify-center" style={{ backgroundColor: '#2D3748' }}>
        <h2 className="text-white text-3xl font-bold">
          <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">
            Contacter Sara Paone
          </a>
        </h2>
      </section>
    </>
  );
}


