import { useState } from 'react'

function VideoCard({ id, title }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="overflow-hidden relative">
      {playing ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="relative cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <img
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            className="w-full aspect-video object-cover"
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-200" />
          
          {/* Bouton play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <div className="w-0 h-0 ml-1" style={{
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeft: '20px solid black'
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Video() {
  const videos = [
    { id: '_meFLQbMrBo', title: 'Vidéo 1' },
    { id: '2EWnn5jS43Q', title: 'Vidéo 2' },
    { id: 'wL8fMMKAM0', title: 'Vidéo 3' },
    { id: 'GX40g7qYM48', title: 'Vidéo 4' },
    { id: 'LmD-a9v6Ggg', title: 'Vidéo 5' },
    { id: 'OvgSYSf25Es', title: 'Vidéo 6' },
  ]

  return (
    <div className="bg-[#121615] text-black pt-32 px-24 pb-20">

      <h1 className="flex justify-center font-aref text-5xl text-[#bea0a4] font-bold mb-12">Vidéo</h1>

      <div className="grid grid-cols-3 gap-8 mb-16">
        {videos.map((video, index) => (
          <VideoCard key={index} id={video.id} title={video.title} />
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/@sarapaone"
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