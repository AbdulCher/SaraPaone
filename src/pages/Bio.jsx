import { motion } from 'framer-motion'
import pariscirque from '../assets/pariscirque.jpg'
import secretlife from '../assets/secretlife.jpg'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8 }
}

export default function Bio() {
  return (
    <div className="bg-[#121615] text-black">

      {/* Hero titre */}
      <div className="pt-40 pb-16 text-center px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm tracking-[0.4em] uppercase text-gray-400 mb-4"
        >
          Sara Paone
        </motion.p>
        {/*<motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-aref text-4xl font-bold text-[#bea0a4]"
        >
          Biographie
        </motion.h1>*/}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '4rem' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-px bg-gray-400 mx-auto mt-8"
        />
      </div>

      {/* Section 1 — intro + image */}
      <section className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start gap-12 md:gap-20 pb-6">
        
        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 flex flex-col gap-6 text-2xl leading-relaxed text-gray-200 pt-4">
          <p className="font-medium leading-relaxed">
            Le parcours singulier de Sara Paone se place sous le signe d'une vive curiosité et d'une quête d'expressivité intense.
          </p>
          <p>
            Elle grandit à Florence, en Italie. Très jeune, elle étudie le théâtre et intègre une troupe anglophone, avec laquelle elle joue ses premiers rôles : Abigail dans The Crucible de Miller, Lady Macbeth de Shakespeare... Mais elle est aussi passionnée par le chant : après avoir créé un groupe rock dans son adolescence, elle intègre une chorale où elle se fait remarquer pour sa voix sombre et sonore par la cheffe Johanna Knauf, qui l'initie alors à l'art lyrique.
          </p>
          <p>
            Dans l'opéra elle découvre ce lieu privilégié où l'expressivité théâtrale et le chant font corps.
          </p>
          <p>
            Parallèlement à un cursus universitaire en philosophie, elle débute des études de chant à la Scuola di Musica di Fiesole de Florence. En France, elle obtient ses diplômes aux CNR de Beauvais et de Rueil Malmaison. Elle intègre ensuite la troupe Opéraction à Nice, puis l'atelier Opéra Fuoco à Paris. Elle approfondit ses études auprès de Malcolm King, et se spécialise en répertoire baroque avec Sonia Prina. Elle poursuit actuellement un master en musique contemporaine à Santa Cecilia, Rome, sous la direction de Nicholas Isherwood.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-130 shrink-0"
        >
          <img src={pariscirque} alt="Sara Paone" className="w-full h-auto object-cover" />
        </motion.div>

      </section>

      {/* Grand paragraphe */}
      <motion.section {...fadeUp} className="max-w-7xl mx-auto px-8 py-12">
        <p className="text-2xl text-gray-200 leading-relaxed">
          Sa voix au teint sombre et généreux et sa présence scénique se déploient dans un répertoire qui va du Baroque aux Opéras Contemporains en passant par les œuvres du XIXe. Elle se produit principalement entre la France et l'Italie, sur des scènes comme L'Opéra de Massy, L'Opéra de Nice, La Gaité Lyrique à Paris, Le Théâtre SaintLouis à Pau, le Teatro Verdi à Pise, le Teatro Goldoni à Livourne, le Teatro del Giglio à Lucca, ou encore la Reggia di Colorno à Parme, le Taranto Opera Festival, le Festival di Sarzana… Elle a été invitée également à chanter à Bâle, à Berlin, à Bruxelles, à Istanbul…
        </p>
      </motion.section>

      {/* Section cantatrice aérienne */}
      <section style={{ backgroundColor: '#0b0f0d' }} className="py-16 px-8">
        <motion.h3
          {...fadeUp}
          style={{ fontStyle: 'italic' }}
          className="max-w-6xl mx-auto text-3xl text-[#bea0a4] mb-10"
        >
          Une cantatrice aérienne
        </motion.h3>

        <div className="max-w-6xl mx-auto gap-12">

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="flex flex-col gap-6 text-2xl text-gray-200 leading-relaxed">
            <p>
              Les premiers rôles de Sara Paone ont souvent été caractérisés par la nécessité d'une forte présence théâtrale, et l'expressivité corporelle lui est d'emblée apparue cruciale. Elle s'interroge sur la question du corps et du mouvement jusqu'à la découverte des arts du cirque. L'acrobatie aérienne s'impose comme un endroit d'expressivité et de liberté privilégié.
            </p>
            <p>
              Elle se forme à L'École des Noctambules à Nanterre, puis avec Zoé Maîstre en trapèze fixe et ballant. Elle développe alors une technique nourrie par la gymnastique sensorielle, par l'attention au souffle comme centre moteur du mouvement.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col gap-6 text-2xl text-gray-200 leading-relaxed">
            <p>
              Depuis lors elle explore comment la voix peut s'épanouir dans un corps suspendu, en prenant le risque de se mêler au mouvement, de bouleverser ses points d'ancrage, parfois la tête vers le bas... Cela devient un lieu de recherche tout à fait personnel.
            </p>
            <p>
              Elle chante perchée à son trapèze en se produisant au sein de spectacles pluridisciplinaires et de cabarets (au Cabaret Sauvage, au Cirque Électrique, au Zèbre de Paris...), dans des théâtres plus « classiques », et même dans la Cathédrale de Bâle en Suisse.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col gap-6 text-2xl text-gray-200 leading-relaxed">
            <p>
              Dans les mises en scène d'opéra, elle incarne une Carmen circassienne, qui s'évade de prison grimpant au tissu, d'où elle nargue Don José. Elle interprète encore une nounou pirate s'accrochant aux voiles des bateaux dans The Pirates of Penzance de Sullivan, ou un magicien affabulateur acrobatique dans Treemonisha de Joplin.
            </p>
            <p>
              Parallèlement, elle devient professeur de trapèze fixe et de techniques aériennes au sein de l'ENACR (École Nationale des Arts du Cirque de Rosny), où elle transmet sa passion pour le mouvement aérien et met en scène des spectacles.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Projets hybrides */}
      <motion.section {...fadeUp} className="max-w-7xl mx-auto px-8 py-20">
        <h3 style={{ fontStyle: 'italic' }} className="text-3xl text-[#bea0a4] mb-8">
          Projets hybrides, collaborations hétéroclites et sociales
        </h3>
        <p className="text-2xl leading-relaxed text-gray-200 mb-6">
          Sensible aux projets hybrides et aux différentes ouvertures artistiques qu'ils représentent, Sara Paone ne se cantonne pas à mêler sa voix aux arts du cirque. On la retrouve dans des collaborations multiples : elle prête sa voix pour des spectacles de danse de la Cie Kitsou Dubois, ou encore pour le documentaire Jacques Vaché, produit par la fondation André Breton. Elle rejoint le collectif Visual System pour un projet mêlant œuvres visuelles et musique baroque en version électronique et compositions originales à La Gaité Lyrique à Paris et à L'Atomium à Bruxelles. Elle participe encore à The Kitchen avec la Cie Peeping Tom.
        </p>
        <p className="text-2xl leading-relaxed text-gray-200">
          Sara Paone s'engage par ailleurs à promouvoir la rencontre entre arts lyriques et circassiens, et un public ayant peu accès la culture. Elle participe notamment à la création de spectacles de cirque social avec la Cie des Contraires. Elle est artiste associée au Forum Voix Etouffées et sera artiste associée à L'Opéra de Paris pour la médiation culturelle à partir de la saison prochaine.
        </p>
      </motion.section>

      {/* Section cirque — image + texte */}
      <section style={{ backgroundColor: '#0b0f0d' }} className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-130 shrink-0"
            >
              <img src={secretlife} alt="Sara Paone" className="w-full h-auto object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex flex-col gap-6 text-2xl leading-relaxed text-gray-200"
            >
              <h3 style={{ fontStyle: 'italic' }} className="text-3xl text-[#bea0a4] font-medium">
                Chercheuse et créatrice
              </h3>
              <p>
                Sara Paone a mené des études en philosophie à l'université de Paris I Sorbonne et à Paris X Nanterre jusqu'au doctorat de recherche.
              </p>
              <p>
                Dans sa thèse de recherche elle s'est intéressée à certaines versions occultées des mythes grecs, s'interrogeant sur la manière dont le corpus mythologique témoigne d'une suprématie du rationnel sur la poiésis. Elle s'inspire actuellement d'une partie de ces recherches afin de donner vie à son premier projet de création à part entière : Ensorcelées (titre provisoire).
              </p>
              <p>
                Parallèlement, elle est professeur de trapèze fixe et de techniques aériennes au sein de l'ENACR (Ecole Nationale des Arts du Cirque de Rosny).
              </p>
              <p>
                Sa curiosité l'a également menée à poursuivre des études de philosophie jusqu'au doctorat de recherche à l'université Paris X-Nanterre, travaillant sur l'héritage des mythes dans la tragédie grecque et la manière dont certains récits sur les rôles féminins se sont sédimentés dans notre imaginaire, occultant des personnages féminins bien plus indomptables.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}