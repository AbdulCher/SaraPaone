import cremona from '../assets/cremona.jpg'

const repertoire = [
  {
    compositeur: 'Haendel',
    oeuvres: [
      { titre: 'Agrippina', personnage: 'Ottone' },
      { titre: 'Giulio Cesare', personnage: 'Cornelia' },
      { titre: 'Rinaldo', personnage: 'Rinaldo' },
      { titre: 'Semele', personnage: 'Ino' },
    ]
  },
  {
    compositeur: 'Verdi',
    oeuvres: [
      { titre: 'Traviata', personnage: 'Flora' },
      { titre: 'Rigoletto', personnage: 'Maddalena' },
      { titre: 'Aida', personnage: 'Amneris' },
      { titre: 'Un Ballo in Maschera', personnage: 'Ulrica' },
    ]
  },
  {
    compositeur: 'Puccini',
    oeuvres: [
      { titre: 'Gianni Schicchi', personnage: 'La Zita, la Ciesca' },
      { titre: 'Il Tabarro', personnage: 'La Frugola' },
      { titre: 'Suor Angelica', personnage: 'Zia Principessa' },
      { titre: 'Madama Butterfly', personnage: 'Suzuki' },
    ]
  },
  {
    compositeur: 'Rossini',
    oeuvres: [
      { titre: "L'italiana a Algeri", personnage: 'Isabella' },
      { titre: 'Cenerentola', personnage: 'Tisbe' },
    ]
  },
  {
    compositeur: 'Bizet',
    oeuvres: [
      { titre: 'Carmen', personnage: 'Carmen' },
    ]
  },
  {
    compositeur: 'Purcell',
    oeuvres: [
      { titre: 'Dido and Aeneas', personnage: 'Dido, sorceress' },
    ]
  },
  {
    compositeur: 'Monteverdi',
    oeuvres: [
      { titre: "L'incoronazione di Poppea", personnage: 'Ottavia' },
    ]
  },
  {
    compositeur: 'Zimmermann',
    oeuvres: [
      { titre: 'Die Soldaten', personnage: 'Mutter, Charlotte' },
    ]
  },
  {
    compositeur: 'Donizetti',
    oeuvres: [
      { titre: 'Lucrezia Borgia', personnage: 'Maffio Orsini' },
    ]
  },
  {
    compositeur: 'Menotti',
    oeuvres: [
      { titre: 'The Medium', personnage: 'Baba' },
    ]
  },
  {
    compositeur: 'Bacalov',
    oeuvres: [
      { titre: 'Borges Quenta Que', personnage: 'La Negra' },
    ]
  },
  {
    compositeur: 'Baraldi',
    oeuvres: [
      { titre: 'La Principessa Le Thi', personnage: 'Ngoq' },
    ]
  },
  {
    compositeur: 'Mascagni',
    oeuvres: [
      { titre: 'Cavalleria Rusticana', personnage: 'Mamma Lucia' },
    ]
  }, 
]

export default function Repertoire() {
  return (
    <div
      className="text-black pb-20 relative"
      style={{
        backgroundImage: `url(${cremona})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/84" />

      <div className="relative z-10">

        {/* Hero titre */}
        <div className="pt-40 pb-16 text-center px-8">
          <h1 style={{ fontFamily: 'EB Garamond, serif', fontSize: 'clamp(24px, 4vw, 48px)', color: '#bea0a4', lineHeight: '1.2' }}>
            Répertoire
          </h1>
          <div className="w-full h-px bg-gray-800 mt-4" />
        </div>

        {/* Grille répertoire */}
        <div className="px-6 md:px-12 lg:px-20 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-52 gap-y-8 w-full pl-8">            {repertoire.map((groupe) => (
              <div key={groupe.compositeur} className="py-4 border-b border-gray-800/50 md:border-none">
                <p style={{ fontFamily: 'EB Garamond' }} className="text-[#8A0000] text-2xl md:text-xl font-semibold mb-3 uppercase tracking-[0.02em]">
                  {groupe.compositeur}
                </p>
                {groupe.oeuvres.map((oeuvre, i) => (
                  <div key={i} className="mb-2 text-left">
                    <p className="text-gray-200 text-xl md:text-lg">
                      {oeuvre.personnage}
                      <span className="text-[#bea0a4] mx-2">—</span>
                      <span style={{ fontStyle: 'italic' }} className="text-gray-400">
                        {oeuvre.titre}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}