import pariscirque from '../assets/pariscirque.jpg'
import secretlife from '../assets/secretlife.jpg'

export default function Biographie() {
  return (
    <div className="bg-[#121615] text-black">

      {/* Hero titre */}
      <div className="pt-40 pb-16 text-center px-8">
        <p className="text-sm tracking-[0.4em] uppercase text-gray-400 mb-4">Sara Paone — Artiste aérienne</p>
        <h1 className="font-aref text-4xl md:text-4xl font-bold text-[#bea0a4]">Biographie</h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-8" />
      </div>

      {/* Section 1 — intro + image */}
      <section className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-start gap-12 md:gap-20 pb-20">
        
        <div className="flex-1 flex flex-col gap-6 text-lg leading-relaxed text-gray-500 pt-4">
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Le parcours atypique de Sara Paone se place sous le signe d'une vive curiosité et d'une quête d'expressivité intense.
          </p>
          <p>
            Elle grandit à Florence, en Italie. Très jeune, elle étudie le théâtre et intègre une troupe théâtrale en langue anglaise qui lui permet de jouer ses premiers rôles : Abigail dans The Crucible de Miller, ou Lady Macbeth. Passionnée également par le chant, elle intègre une chorale. Sa voix se fait remarquer par la cheffe Johanna Knauf qui l'initie à l'art lyrique. Dans l'opéra elle découvre ce lieu privilégié où l'expressivité théâtrale et le chant font corps.
          </p>
          <p>
            Elle débute ses études de chant à la Scuola di Musica di Fiesole. En France, elle obtient ses diplômes aux CNR de Beauvais et de Rueil Malmaison. Elle intègre l'atelier Opéra Fuoco à Paris, ainsi que la troupe Opéraction à Nice. Elle approfondit ses études auprès de Malcolm King, se spécialise en répertoire baroque avec Sonia Prina, et se perfectionne actuellement avec Lea Sarfati. Elle poursuit un master en musique contemporaine à Santa Cecilia, Rome, sous la direction de Nicholas Isherwood.
          </p>
          <p>
            C'est après un doctorat de recherche en philosophie à l'université de Paris X qu'elle se dédie pleinement au chant lyrique.
          </p>
        </div>

        <div className="w-full md:w-80 shrink-0">
          <img src={pariscirque} alt="Sara Paone" className="w-full h-auto object-cover" />
        </div>

      </section>

      {/* Citation */}
      <section style={{ backgroundColor: '#0b0f0d' }} className="py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl italic text-gray-400 leading-relaxed">
            « Sa voix au teint sombre et généreux, se déploie dans un répertoire qui peut aller du Baroque aux Opéras Contemporains en passant par les œuvres du XIXe. Ses capacités interprétatives lui confèrent une présence scénique très remarquable. »
          </p>
        </div>
      </section>

      {/* Répertoire */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <p className="text-lg leading-relaxed text-gray-500">
          Parmi les rôles qu'elle a interprétés, on trouve Carmen de Bizet, Ottavia chez Monteverdi ; Ottone et Rinaldo chez Haendel ; Dido chez Purcell ; la deuxième et troisième dames chez Mozart ; La Ciesca, La Zita, Zia Principessa chez Puccini ; Amneris, Azucena, Maddalena, Flora chez Verdi. Elle a également chanté dans Die Soldaten de Zimmermann, dans Borges de Bacalov et plusieurs autres créations contemporaines. Elle se produit principalement entre la France et l'Italie, sur des scènes comme l'Opéra de Massy, l'Opéra de Nice, La Gaité Lyrique de Paris, Le Théâtre Saint Luis de Pau, le Teatro Verdi à Pisa, le Teatro Goldoni de Livorno, le Teatro del Giglio a Lucca, ou encore la Reggia di Colorno à Parma, le Taranto Opera Festival, le Festival di Sarzana… Elle a été invitée également à chanter à Bâle, à Istanbul, à Berlin…
        </p>
      </section>

      {/* Section cirque */}
      <section style={{ backgroundColor: '#121615' }} className="py-20">
        <div className="max-w-6xl mx-auto px-8">

          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 mb-12">
            <div className="w-full md:w-72 shrink-0">
              <img src={secretlife} alt="Sara Paone" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-6 text-lg leading-relaxed text-gray-500">
              <p className="text-xl text-gray-500 font-medium">
                L'acrobatie aérienne s'impose comme un endroit d'expressivité et de liberté privilégié.
              </p>
              <p>
                Lorsqu'elle joue ses premiers rôles, souvent caractérisés par la nécessité d'une forte présence théâtrale, l'importance du corps et du mouvement dans l'interprétation lui paraît manifeste. Elle s'interroge sur la question du corps et du mouvement jusqu'à la découverte des arts du cirque. Elle se forme à l'Ecole des Noctambules à Nanterre, puis avec Zoé Maîstre. Elle explore comment la voix peut s'épanouir dans un corps suspendu, prenant le risque de se mêler au mouvement, de bouleverser les points d'ancrage, parfois la tête vers le bas.
              </p>
              <p>
                Elle chante perchée à son trapèze dans des spectacles pluridisciplinaires et des cabarets — au Cabaret Sauvage, au Cirque Electrique — mais également dans des mises en scène d'opéra où elle incarne une Carmen circassienne, ou encore une nounou pirate dans The Pirates of Penzance.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-500">
            <p>
              Parallèlement, elle est professeur de trapèze fixe et de techniques aériennes au sein de l'ENACR (Ecole Nationale des Arts du Cirque de Rosny).
            </p>
            <p>
              Sa curiosité l'a également menée à poursuivre des études de philosophie jusqu'au doctorat de recherche à l'université Paris X-Nanterre, travaillant sur l'héritage des mythes dans la tragédie grecque et la manière dont certains récits sur les rôles féminins se sont sédimentés dans notre imaginaire, occultant des personnages féminins bien plus indomptables.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}