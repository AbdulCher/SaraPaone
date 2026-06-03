import { motion } from 'framer-motion'
import secretlife from '../assets/secretlife.jpg'
import piratesofpenzance from '../assets/piratesofpenzance.jpg'
import pariscirque from '../assets/pariscirque.jpg'
import bruxellespeeping from '../assets/bruxellespeeping.jpeg'
import { useTranslation } from 'react-i18next'


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8 }
}

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay: 0.3 }
}



const SectionTitle = ({ children }) => (
  <motion.h3
    {...fadeUp}
    style={{ fontStyle: 'italic' }}
    className="text-[34px] text-[#8A0000] mb-10"
  >
    {children}
  </motion.h3>
)

const TextBlock = ({ children, delay = 0.1 }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col gap-6 text-[24px] text-black leading-relaxed"
  >
    {children}
  </motion.div>
)

export default function Biographie() {
  return (
    <div className="bg-white text-black">

      {/* Hero titre */}
      <div className="pt-40 pb-0 text-center px-8">
        <motion.h2
          style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(24px, 4vw, 48px)', color: '#000000' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Sara Paone
        </motion.h2>
        <div className="w-full h-px bg-[#bea0a4] mt-8 opacity-50" />
      </div>

{/* Section 1 */}
      <section className="mx-auto px-8 flex flex-col lg:flex-row items-start gap-12 lg:gap-20 pt-16">
        <motion.div {...fadeRight} className="w-full lg:w-[55%] shrink-0">
          <img src={piratesofpenzance} alt="Sara Paone" className="w-full h-auto lg:height-[600px] object-cover object-top" />
        </motion.div>
        <div className="w-full lg:w-[45%] px-4 lg:px-8">
          <TextBlock delay={0.2}>
            <p>Le parcours singulier de Sara Paone se place sous le signe d'une vive curiosité et d'une quête d'expressivité intense.</p>
            <p>Elle grandit à Florence, en Italie. Très jeune, elle étudie le théâtre et intègre une troupe anglophone, avec laquelle elle joue ses premiers rôles : Abigail dans The Crucible de Miller, Lady Macbeth de Shakespeare... Mais elle est aussi passionnée par le chant : après avoir créé un groupe rock dans son adolescence, elle intègre une chorale où elle se fait remarquer pour sa voix sombre et sonore par la cheffe Johanna Knauf, qui l'initie alors à l'art lyrique.</p>
            <p>Dans l'opéra elle découvre ce lieu privilégié où l'expressivité théâtrale et le chant font corps.</p>
            <p>Parallèlement à un cursus universitaire en philosophie, elle débute des études de chant à la Scuola di Musica di Fiesole de Florence.</p>
        
          </TextBlock>
        </div>
      </section>
      
      {/* Grand paragraphe */}
      <motion.section {...fadeUp} className="px-10 mx-auto py-8">
        <p className="text-[24px] text-black leading-relaxed">
          En France, elle obtient ses diplômes aux CNR de Beauvais et de Rueil Malmaison.
        </p>
        <p className="text-[24px] text-black leading-relaxed">
          Elle intègre ensuite la troupe Opéraction à Nice, puis l'atelier Opéra Fuoco à Paris. Elle approfondit ses études auprès de Malcolm King, et se spécialise en répertoire baroque avec Sonia Prina. Elle poursuit actuellement un master en musique contemporaine à Santa Cecilia, Rome, sous la direction de Nicholas Isherwood.
        </p>
        <p className="text-[24px] text-black leading-relaxed">
          Sa voix au teint sombre et généreux et sa présence scénique se déploient dans un répertoire qui va du Baroque aux Opéras Contemporains en passant par les œuvres du XIXe. Elle se produit principalement entre la France et l'Italie, sur des scènes comme L'Opéra de Massy, L'Opéra de Nice, La Gaité Lyrique à Paris, Le Théâtre SaintLouis à Pau, le Teatro Verdi à Pise, le Teatro Goldoni à Livourne, le Teatro del Giglio à Lucca, ou encore la Reggia di Colorno à Parme, le Taranto Opera Festival, le Festival di Sarzana… Elle a été invitée également à chanter à Bâle, à Berlin, à Bruxelles, à Istanbul…
        </p>
      </motion.section>
        
      {/* Séparateur */}
      <div className="w-full h-px bg-[#bea0a4] mt-8 opacity-30" />

      {/* Section cantatrice aérienne */}
      <section className="mx-auto px-8 flex flex-col lg:flex-row items-start gap-12 lg:gap-20 pt-16">
        <div className="flex-1 px-4 lg:px-20">
          <SectionTitle>Une cantatrice aérienne</SectionTitle>
          <TextBlock delay={0.1}>
            <p>Les premiers rôles de Sara Paone ont souvent été caractérisés par la nécessité d'une forte présence théâtrale, et l'expressivité corporelle lui est d'emblée apparue cruciale. Elle s'interroge sur la question du corps et du mouvement jusqu'à la découverte des arts du cirque. L'acrobatie aérienne s'impose comme un endroit d'expressivité et de liberté privilégié.</p>
            <p>Elle se forme à L'École des Noctambules à Nanterre, puis avec Zoé Maîstre en trapèze fixe et ballant. Elle développe alors une technique nourrie par la gymnastique sensorielle, par l'attention au souffle comme centre moteur du mouvement.</p>
            <p>Depuis lors elle explore comment la voix peut s'épanouir dans un corps suspendu, en prenant le risque de se mêler au mouvement, de bouleverser ses points d'ancrage, parfois la tête vers le bas... Cela devient un lieu de recherche tout à fait personnel.</p>
            <p>Elle chante perchée à son trapèze en se produisant au sein de spectacles pluridisciplinaires et de cabarets (au Cabaret Sauvage, au Cirque Électrique, au Zèbre de Paris...), dans des théâtres plus « classiques », et même dans la Cathédrale de Bâle en Suisse.</p>
            <p>Dans les mises en scène d'opéra, elle incarne une Carmen circassienne, qui s'évade de prison grimpant au tissu, d'où elle nargue Don José. Elle interprète encore une nounou pirate s'accrochant aux voiles des bateaux dans The Pirates of Penzance de Sullivan, ou un magicien affabulateur acrobatique dans Treemonisha de Joplin.</p>

          </TextBlock>
        </div>
        <motion.div {...fadeRight} className="w-full lg:w-[35%] shrink-0">
          <img src={pariscirque} alt="Sara Paone" className="w-full h-auto lg:height-[800px] object-cover object-center" />
        </motion.div>
      </section>


      <motion.section {...fadeUp} className="px-8 mx-auto py-8">
        <TextBlock delay={0.3}>
          <p>Parallèlement, elle devient professeur de trapèze fixe et de techniques aériennes au sein de l'ENACR (École Nationale des Arts du Cirque de Rosny), où elle transmet sa passion pour le mouvement aérien et met en scène des spectacles.</p>
        </TextBlock>
      </motion.section>
        
      {/* Séparateur */}
      <div className="w-full h-px bg-[#bea0a4] mt-8 opacity-50" />

      {/* Projets hybrides */}
<section className="mx-auto px-8 flex flex-col lg:flex-row items-start gap-12 lg:gap-20 pt-16">
  <motion.div {...fadeRight} className="w-full lg:w-[50%] shrink-0">
    <img src={bruxellespeeping} alt="Sara Paone" className="w-full h-auto lg:height-[500px] object-cover object-top" />
  </motion.div>
  <div className="flex-1 px-4 lg:px-8">
    <SectionTitle>
            Projets hybrides, collaborations hétéroclites et sociales
          </SectionTitle>
          <TextBlock delay={0.1}>
            <p>Sensible aux projets hybrides et aux différentes ouvertures artistiques qu'ils représentent, Sara Paone ne se cantonne pas à mêler sa voix aux arts du cirque. On la retrouve dans des collaborations multiples : elle prête sa voix pour des spectacles de danse de la Cie Kitsou Dubois, ou encore pour le documentaire Jacques Vaché, produit par la fondation André Breton. 
              Elle rejoint le collectif Visual System pour un projet mêlant œuvres visuelles et musique baroque en version électronique et compositions originales à La Gaité Lyrique à Paris et à L'Atomium à Bruxelles.
              Elle participe encore à The Kitchen avec la Cie Peeping Tom.
            </p>
          <p>Sara Paone s'engage par ailleurs à promouvoir la rencontre entre arts lyriques et circassiens, et un public ayant peu accès la culture. </p>
          </TextBlock>
  </div>
</section>

      

      <motion.section {...fadeUp} className="px-8 mx-auto py-8">
        <TextBlock delay={0.3}>
          <p>Elle participe notamment à la création de spectacles de cirque social avec la Cie des Contraires. Elle est artiste associée au Forum Voix Etouffées et sera artiste associée à L'Opéra de Paris pour la médiation culturelle à partir de la saison prochaine.</p>

        </TextBlock>
      </motion.section>

      {/* Séparateur */}
      <div className="w-full h-px bg-[#bea0a4] mt-8 opacity-50" />


      {/* Chercheuse et créatrice */}
<section className="py-20">
  <div className="px-8 lg:pl-38 lg:pr-38 mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
    <TextBlock delay={0.2}>
            <SectionTitle>Chercheuse et créatrice</SectionTitle>
            <p>Sara Paone a mené des études en philosophie à l'université de Paris I Sorbonne et à Paris X Nanterre jusqu'au doctorat de recherche.</p>
            <p>Dans sa thèse de recherche elle s'est intéressée à certaines versions occultées des mythes grecs, s'interrogeant sur la manière dont le corpus mythologique témoigne d'une suprématie du rationnel sur la poiésis. Elle s'inspire actuellement d'une partie de ces recherches afin de donner vie à son premier projet de création à part entière : Ensorcelées (titre provisoire).</p>
            <p>Parallèlement, elle est professeur de trapèze fixe et de techniques aériennes au sein de l'ENACR (Ecole Nationale des Arts du Cirque de Rosny).</p>
            <p>Sa curiosité l'a également menée à poursuivre des études de philosophie jusqu'au doctorat de recherche à l'université Paris X-Nanterre, travaillant sur l'héritage des mythes dans la tragédie grecque et la manière dont certains récits sur les rôles féminins se sont sédimentés dans notre imaginaire, occultant des personnages féminins bien plus indomptables.</p>
          </TextBlock>
          
    <motion.div className="w-full lg:w-[50%] shrink-0">
      <img src={secretlife} alt="Sara Paone" className="w-full h-auto object-contain" />
    </motion.div>
  </div>
</section>

      

    </div>
  )
}