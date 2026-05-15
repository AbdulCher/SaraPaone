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
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-200" />
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
    { id: 'GX40g7qYM48', title: 'Vidéo 1' },
    { id: '2EWnn5jS43Q', title: 'Vidéo 2' },
    { id: 'OvgSYSf25Es', title: 'Vidéo 3' },
  ]

  return (
    <div className="bg-[#121615] text-black px-6 md:px-24 pb-20">

<div className="pt-40 pb-16 text-center px-8">
        <p className="text-sm tracking-[0.4em] uppercase text-gray-400 mb-4">Sara Paone — Artiste aérienne</p>
        <h1 className="font-aref text-4xl md:text-4xl font-bold text-[#bea0a4]">Vidéos</h1>
        <div className="w-16 h-px bg-gray-400 mx-auto mt-8" />
      </div>
      {/* Layout zigzag desktop */}
      <div className="hidden md:flex gap-8 mb-16 items-stretch min-h-[500px]">

        {/* Colonne 1 — vidéo en bas */}
        <div className="flex-1 flex flex-col justify-end">
          <VideoCard id={videos[0].id} title={videos[0].title} />
        </div>

        {/* Colonne 2 — vidéo en haut */}
        <div className="flex-1 flex flex-col justify-start">
          <VideoCard id={videos[1].id} title={videos[1].title} />
        </div>

        {/* Colonne 3 — vidéo en bas */}
        <div className="flex-1 flex flex-col justify-end">
          <VideoCard id={videos[2].id} title={videos[2].title} />
        </div>

      </div>

      {/* Mobile — une colonne */}
      <div className="flex md:hidden flex-col gap-6 mb-16">
        {videos.map((video, index) => (
          <VideoCard key={index} id={video.id} title={video.title} />
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/@sarapaone"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-3 border border-gray-600 text-gray-300 text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-200"
        >
          Voir plus sur YouTube
        </a>
      </div>

    </div>
  )
}