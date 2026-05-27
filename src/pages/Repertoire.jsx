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
    <div className="bg-[#121615] text-black pb-20">

      {/* Hero titre */}
      <div className="pt-40 pb-16 text-center px-8">
        <p className="text-sm tracking-[0.4em] uppercase text-gray-400 mb-4">Sara Paone — Répertoire</p>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-8" />
      </div>

      {/* Grille répertoire */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {repertoire.map((groupe) => (
            <div key={groupe.compositeur} className="text-center">
              <p style={{ fontStyle: 'italic' }} className="text-red-600 text-xl sm:text-lg font-semibold mb-2 uppercase tracking-wide">
                {groupe.compositeur}
              </p>
              {groupe.oeuvres.map((oeuvre, i) => (
                <div key={i} className="mb-2">
                  <p className="text-gray-400 text-lg sm:text-base">{oeuvre.titre}</p>
                  <p className="text-gray-200 text-lg sm:text-base font-medium">{oeuvre.personnage}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}