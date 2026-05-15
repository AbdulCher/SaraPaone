import cover from '../assets/cover.webp'
import photo1 from '../assets/orleans.jpg'
import photo2 from '../assets/parma.jpg'
import photo3 from '../assets/firenze.jpg'
import portrait from '../assets/portraithome.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: '#121615' }}>

        {/* Hero */}
        <div
  className="w-full h-screen relative"
  style={{ 
    backgroundImage: `url('${cover}')`,
    backgroundPosition: '70% center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '80px',
  }}
>
          <div className="absolute inset-0 flex flex-col justify-start pt-32 pl-12 md:pl-44">
            <span style={{ 
              fontFamily: 'Corinthia',
              fontSize: 'clamp(60px, 10vw, 120px)',
              lineHeight: '92px',
              color: '#bea0a4',
              fontWeight: '300',
              WebkitFontSmoothing: 'antialiased'
            }}>Sara</span>          
            <span style={{ 
              fontFamily: 'Corinthia',
              fontSize: 'clamp(60px, 10vw, 120px)',
              lineHeight: '92px',
              color: '#bea0a4',
              fontWeight: '300',
              WebkitFontSmoothing: 'antialiased'
            }} className="ml-4 md:ml-16">Paone</span>  
            <span style={{ fontFamily: 'Corinthia, serif', fontSize: 'clamp(30px, 5vw, 60px)', color: '#bea0a4' }} className="mt-8">alto-mezzosoprano</span>
            <span style={{ fontFamily: 'Corinthia, serif', fontSize: 'clamp(30px, 5vw, 60px)', color: '#bea0a4' }} className="mt-2 ml-4 md:ml-8">artiste aérienne</span>      
          </div>
        </div>

        {/* Section présentation */}
        <section className="flex flex-col md:flex-row items-center gap-12 py-16 max-w-6xl mx-auto px-8">
          
          <div className="w-full md:flex-1">
            <img src={portrait} alt="Sara Paone" className="w-full h-auto object-cover" />
          </div>

          <div className="w-full md:flex-1 flex flex-col gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
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

      </div>
    </>
  );
}