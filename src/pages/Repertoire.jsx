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
    <div className="bg-white text-black pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-8">
        
        <h1 className="font-aref text-5xl font-bold mb-16">Répertoire</h1>

        <div className="grid grid-cols-3 gap-x-16 gap-y-12">
          {repertoire.map((groupe) => (
            <div key={groupe.compositeur}>
              <p className="text-red-600 text-lg font-semibold mb-3 uppercase tracking-wide">
                {groupe.compositeur}
              </p>
              {groupe.oeuvres.map((oeuvre, index) => (
                <div key={index} className="mb-3">
                  <p className="text-gray-500 text-base">{oeuvre.titre}</p>
                  <p className="text-gray-900 text-base font-medium">{oeuvre.personnage}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}