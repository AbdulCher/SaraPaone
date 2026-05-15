import cover from '../assets/cover.webp'
import photo1 from '../assets/orleans.jpg'
import photo2 from '../assets/parma.jpg'
import photo3 from '../assets/firenze.jpg'
import ensorcelees from '../assets/ensorcelees.jpg'
import portrait from '../assets/portraithome.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: '#121615' }}>
      
    
      <div
        className="w-screen h-screen flex items-start mt-20 bg-cover"
        style={{ 
          backgroundImage: `url('${cover}')`,
          backgroundPosition: 'center top',
          backgroundSize: '100%',
        }}
      >
        <div className="w-full flex flex-col items-start mt-34">
<span style={{ 
  fontFamily: 'Corinthia',
  fontSize: '120px',
  lineHeight: '92px',
  color: '#bea0a4',
  fontWeight: '300',
  WebkitFontSmoothing: 'antialiased'
  
}}
className="ml-44 leading-none">Sara</span>          
<span style={{ 
  fontFamily: 'Corinthia',
  fontSize: '120px',
  lineHeight: '92px',
  color: '#bea0a4',
  fontWeight: '300',
  WebkitFontSmoothing: 'antialiased'
}}
className='ml-60'>Paone</span>  

<span style={{ fontFamily: 'Corinthia, serif' }} className="text-[#bea0a4] text-[60px] mt-30 ml-40">alto-mezzosoprano</span>
<span style={{ fontFamily: 'Corinthia, serif' }} className="text-[#bea0a4] text-[60px] mt-2 ml-34">artiste aérienne</span>      
</div>
      </div>
      

      {/* Section présentation */}
      <section className="flex items-center gap-12 py-16 max-w-6xl mx-auto px-8">
        
        <div className="flex-1">
          <img src={portrait} alt="Sara Paone" className="w-full h-auto object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Qui suis-je ?</h2>
          <p className="text-lg leading-relaxed text-gray-400">
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
      <div className="w-full max-w-6xl mx-auto px-8">
        <hr className="border-gray-200" />
      </div>

      {/* Section Photos */}
      <section className="py-16 max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-3 gap-3 mb-8">
          <img src={photo1} alt="Photo 1" className="w-full h-56 object-cover" />
          <img src={photo2} alt="Photo 2" className="w-full h-56 object-cover" />
          <img src={photo3} alt="Photo 3" className="w-full h-56 object-cover" />
        </div>
        <div className="flex justify-center">
          <Link to="/photo" className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
            Visiter la galerie photo
          </Link>
        </div>
      </section>

      {/* Section Ensorcelées */}
      {/*<section
        className="relative w-full bg-center flex flex-col justify-between py-24 px-8"
        style={{ 
          backgroundImage: `url(${ensorcelees})`,
          backgroundSize: '150%',
          height: '900px'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenu haut
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-white text-base tracking-widest uppercase mb-4">
            La compagnie La Mécanique de Circé présente :
          </p>
          <h2 style={{ fontFamily: 'Aboreto, cursive', fontSize: '65px' }} className="text-red-600 font-bold uppercase tracking-wide mt-8">
            Ensorcelées
          </h2>
        </div>

        {/* Contenu bas 
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <p className="text-white text-3xl italic tracking-[0.2em]">
            Opéra aérien sur les traces des sorcières
          </p>
          <p className="text-white/80 text-base max-w-lg leading-relaxed">
            Sara Paone a fondé la Cie La Mécanique de Circé. Elle crée actuellement 
            son premier spectacle, Ensorcelées, avec sa complice Marion André, 
            cheffe d'orchestre et multi-instrumentiste.
          </p>
          <Link to="/mecanique" className="inline-block w-fit mt-2 px-6 py-3 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-200">
            En savoir plus
          </Link>
        </div>

      </section> */}
            
      {/* Bande Contact 
      <section className="w-full py-20 flex items-center justify-center" style={{ backgroundColor: '#2D3748' }}>
        <h2 className="text-white text-3xl font-bold">
          <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200">
            Contacter Sara Paone
          </Link>
        </h2>
      </section>*/}
      </div>
    </>
  );
}