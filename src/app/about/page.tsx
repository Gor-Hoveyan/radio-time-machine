export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About Music Chart</h1>

      <p className="text-lg leading-relaxed mb-6">
        Music Chart is a dynamic web application that allows you to explore the
        most popular songs from different years based on Last.fm&apos;s music
        data. Whether you&apos;re reliving your favorite hits or discovering
        classics from the past, Music Chart gives you a beautifully organized
        timeline of music history.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Explore top tracks by year from 1920 to today</li>
        <li>Play music directly via embedded YouTube integration</li>
        <li>View track details including artist, album, tags, and listeners</li>
        <li>Minimalist and responsive design</li>
        <li>Fast performance using Next.js and modern web technologies</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Powered By</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          🎧 <strong>Last.fm API</strong> – for music data
        </li>
        <li>
          📺 <strong>YouTube API</strong> – to stream songs
        </li>
        <li>
          ⚙️ <strong>Next.js (App Router)</strong> – for server/client rendering
        </li>
        <li>
          🎨 <strong>Tailwind CSS</strong> – for clean, flexible UI
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Who Made This?</h2>
      <p className="text-lg leading-relaxed">
        This project was built by a passionate developer who loves music,
        design, and performance. It&apos;s open to future improvements like
        playlist building, user login, genre filtering, and more.
      </p>
    </div>
  );
}
