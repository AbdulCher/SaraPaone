export default function Videos() {
  const videos = [
    { id: '_meFLQbMrBo', title: 'Vidéo 1' },
    { id: '2EWnn5jS43Q', title: 'Vidéo 2' },
    { id: 'wL8fMMKAM0', title: 'Vidéo 3' },
    { id: 'GX40g7qYM48', title: 'Vidéo 4' },
    { id: 'LmD-a9v6Ggg', title: 'Vidéo 5' },
    { id: 'OvgSYSf25Es', title: 'Vidéo 6' },
  ]

  return (
    <div className="bg-white text-black pt-32 px-24 pb-20">
        <h1 className="text-5xl font-bold mb-12">Vidéos</h1>
      {/* Grille vidéos */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        {videos.map((video, index) => (
          <div key={index} className="overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* Bouton YouTube */}
      <div className="flex justify-center">
        <a
        
          href="https://www.youtube.com/@sarapaone5499"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200"
        >
          Voir plus sur YouTube
        </a>
      </div>

    </div>
  )
}