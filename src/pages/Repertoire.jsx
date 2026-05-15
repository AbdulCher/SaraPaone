const repertoire = [
  {
    compositeur: 'Monteverdi',
    oeuvres: [
      { titre: "L'incoronazione di Poppea", personnage: 'Ottavia' },
    ]
  },
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
    compositeur: 'Purcell',
    oeuvres: [
      { titre: 'Dido and Aeneas', personnage: 'Dido, sorceress' },
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
    compositeur: 'Donizetti',
    oeuvres: [
      { titre: 'Lucrezia Borgia', personnage: 'Maffio Orsini' },
    ]
  },
  {
    compositeur: 'Baraldi',
    oeuvres: [
      { titre: 'La Principessa Le Thi', personnage: 'Ngoq' },
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
    compositeur: 'Verdi',
    oeuvres: [
      { titre: 'Traviata', personnage: 'Flora' },
      { titre: 'Rigoletto', personnage: 'Maddalena' },
      { titre: 'Aida', personnage: 'Amneris' },
      { titre: 'Un Ballo in Maschera', personnage: 'Ulrica' },
    ]
  },
  {
    compositeur: 'Mascagni',
    oeuvres: [
      { titre: 'Cavalleria Rusticana', personnage: 'Mamma Lucia' },
    ]
  },
  {
    compositeur: 'Menotti',
    oeuvres: [
      { titre: 'The Medium', personnage: 'Baba' },
    ]
  },
  {
    compositeur: 'Zimmermann',
    oeuvres: [
      { titre: 'Die Soldaten', personnage: 'Mutter, Charlotte' },
    ]
  },
  {
    compositeur: 'Bacalov',
    oeuvres: [
      { titre: 'Borges Quenta Que', personnage: 'La Negra' },
    ]
  },
]

export default function Repertoire() {
  return (
    <div className="bg-[#121615] text-black pb-20">

      {/* Hero titre */}
      <div className="pt-40 pb-16 text-center px-8">
        <p className="text-sm tracking-[0.4em] uppercase text-gray-400 mb-4">Sara Paone — Mezzo-soprano</p>
        <h1 className="font-aref text-4xl font-bold text-[#bea0a4]">Répertoire</h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-8" />
      </div>

      {/* Grille répertoire */}
      
      <div className="max-w-6xl mx-auto px-8">
  {repertoire.map((groupe, index) => (
    <div
      key={groupe.compositeur}
      className={`mb-10 ${
        index % 3 === 0 ? 'text-left' :
        index % 3 === 1 ? 'text-center' :
        'text-right'
      }`}
    >
      <p className="text-red-600 text-lg font-semibold mb-2 uppercase tracking-wide">
        {groupe.compositeur}
      </p>
      {groupe.oeuvres.map((oeuvre, i) => (
        <div key={i}>
          <p className="text-gray-400 text-base">{oeuvre.titre}</p>
          <p className="text-gray-200 text-base font-medium">{oeuvre.personnage}</p>
        </div>
      ))}
    </div>
  ))}
</div>

    </div>
  )
}