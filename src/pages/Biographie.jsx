import cabaret from '../assets/cabaret.jpg'
import ombre from '../assets/ombre.jpg'

export default function Biographie() {
  return (
    <div className="bg-white/90 text-black">

      {/* Section principale */}
      <section className="flex items-start gap-16 px-24 py-20">
        
        {/* Colonne gauche */}
        <div className="flex-1">
          <h2 className="flex justify-center text-[2.8rem] font-bold mb-8 mt-20">Biographie</h2>
          <div className="flex flex-col gap-6 text-[1.4rem] leading-relaxed text-gray-700">
            <p>
              Le parcours atypique de Sara Paone se place sous le signe d'une vive curiosité et d'une quête d'expressivité intense.
            </p>
            <p>
              Elle grandit à Florence, en Italie. Très jeune, elle étudie le théâtre et elle intègre une troupe théâtrale en langue anglaise qui lui permets de jouer ses premiers rôles : Abigail dans The Crucible de Miller, ou Lady Macbeth. Passionnée également par le chant, elle intègre une chorale. Sa voix se fait remarquer par la cheffe Johanna Knauf qui l'initie à l'art lyrique. Dans l'opéra elle découvre ce lieu privilégié où l'expressivité théâtrale et le chant font corps.
            </p>
            <p>
              Elle débute ses études de chant à la Scuala di Musica di Fiesole. En France, elle obtient ses diplômes aux CNR de Beauvais et de Rueil Malmaison. Elle intègre l'atelier de Opéra Fuoco à Paris, ainsi que la troupe Opéraction à Nice. Elle approfondit ses études auprès de Malcolm King, se spécialise en répertoire baroque avec Sonia Prina. Elle se perfectionne actuellement avec Lea Sarfati, et poursuit un master en musique contemporaine à Santa Cecilia, Rome, sous la direction de Nicholas Isherwood.
            </p>
            <p>
              C'est après un doctorat de recherche en philosophie à l'université de ParisX qu'elle se dédie pleinement au chant lyrique.
            </p>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="flex-1 mt-10">
          <img src={cabaret} alt="Sara Paone" className="w-full h-auto pt-8 object-cover" />
        </div>

      </section>

      {/* Citation italique à droite */}
    <section className="px-24 py-10 flex justify-start">
    <div className="max-w-3xl pl-6">
        <p className="text-[1.4rem] font-bold italic text-gray-600 leading-relaxed border-l-4 border-black pl-6">
        Sa voix au teint sombre et généreux, se déploie dans un répertoire qui peut aller du Baroque aux Opéras Contemporains en passant par les œuvres du XIXe. Ses capacités interprétatives lui conférent une présence scénique très remarquable.
        </p>
    </div>
    </section>

{/* Grand paragraphe pleine largeur */}
<section className="px-24 py-10">
  <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6">
    Parmi les rôles qu'elle a interprété, on trouve Carmen de Bizet, Ottavia chez Monteverdi ; Ottone et Rinaldo chez Haendel ; Dido chez Purcell ; la deuxième et troisième dames chez Mozart ; La Ciesca, La Zita, Zia Principessa chez Puccini ; Amneris, Azucena, Maddalena, Flora chez Verdi. Elle a également chanté dans Die Soldaten de Zimmermann, dans Borges de Bacalov et plusieurs autres créations contemporaines. Elle se produit principalement entre la France et l'Italie, sur des scènes comme l'Opéra de Massy, l'Opéra de Nice, La Gaité Lyrique de Paris, Le Théâtre Saint Luis de Pau, le Teatro Verdi à Pisa, le Teatro Goldoni de Livorno, le Teatro del Giglio a Lucca, ou encore la Reggia di Colorno à Parma, le Taranto Opera Festival, le Festival di Sarzana… Elle a été invitée également à chanter à Bâle, à Istanbul, à Berlin…
  </p>
</section>

{/* Section corps et cirque */}
<section className="flex items-start gap-16 px-24 py-20">

  {/* Colonne gauche */}
  <div className="flex-1 ml-24">
    <p className="text-[1.4rem] leading-relaxed text-gray-700">
      Lorsqu'elle joue ses premiers rôles, souvent caractérisés par la nécessité d'une forte présence théâtrale, l'importance du corps et du mouvement dans l'interprétation lui paraît manifeste. Elle s'interroge sur la question du corps et du mouvement jusqu'à la découverte des arts du cirque. L'acrobatie aérienne s'impose comme un endroit d'expressivité et de liberté privilégié. Elle se forme à l'Ecole des Noctambules à Nanterre, puis avec Zoé Maîstre. Elle pousse cet apprentissage le plus loin possible et explore comment la voix peut s'épanouir dans un corps suspendu en prenant le risque de se mêler au mouvement, de bouleverser les points d'ancrage, parfois la tête vers le bas. Cela devient un lieu de recherche tout à fait personnel.
    </p>
  </div>

  {/* Colonne droite */}
  {/* Colonne droite */}
<div className="w-100 mr-24">
  <img src={ombre} alt="Sara Paone" className="w-full h-auto object-cover" />
</div>
</section>

<section className="px-24 py-10">
  <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6">
    
        Elle chante perchée à son trapèze en se produisant au sein de spectacles pluridisciplinaires et de cabarets. (au Cabaret sauvage, au Cirque Electrique, mais également dans des théâtres de tradition jusqu’à des mises en scènes où elle a pu chanter sur son trapèze accroché dans la Cathédrale de Bâle en Suisse). Dans les mises en scène d’opéra, elle incarne une Carmen circassienne, ainsi qu’une nounou pirate s’accrochant aux voiles dans The Pirates of Penzances.<br />
    </p>
    <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6 mb-6">
        Parallèlement elle est professeur de trapèze fixe et de techniques aériennes au sein de l’ENACR ( Ecole National des Arts du Cirque de Rosny).
</p>
    <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6 mb-16">
        En parallèle à ses études de chant lyrique sa curiosité l’a mené à poursuivre des études de philosophie jusqu’au doctorat de recherche au sein de l’université Paris X-Nanterre. Elle a travaillé sur la question de l’héritage des mythes dans la tragédie grecques et à la manière dont certains récits à propos des rôles féminins se sont sédimentés dans notre imaginaire tout en occultant des personnages féminins bien plus indomptables.
    </p>
</section>

<section className="px-24 py-10">
  <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6">
    
    </p>
    <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6">
        Parallèlement elle est professeur de trapèze fixe et de techniques aériennes au sein de l’ENACR ( Ecole National des Arts du Cirque de Rosny).
</p>
    <p className="text-[1.4rem] leading-relaxed text-gray-700 pl-6 mb-16">
        En parallèle à ses études de chant lyrique sa curiosité l’a mené à poursuivre des études de philosophie jusqu’au doctorat de recherche au sein de l’université Paris X-Nanterre. Elle a travaillé sur la question de l’héritage des mythes dans la tragédie grecques et à la manière dont certains récits à propos des rôles féminins se sont sédimentés dans notre imaginaire tout en occultant des personnages féminins bien plus indomptables.
    </p>
</section>

    </div>
  )
}