# 📻 Radio Time Machine

A full-stack web app that lets you explore the most popular tracks across decades — from the 1700s to today — using the Last.fm API. Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## 🔗 Live Demo

[Click!](https://radio-time-machine.vercel.app/)

---

## 🧠 Features

- 📅 Browse top tracks by year (from 1750 to the present)
- 🎶 View detailed info about each track, artist, and album
- 🔍 Discover similar artists and tag-based categorization
- ⏳ Load more tracks on demand (infinite scroll style)
- ⚙️ Server-side data fetching via Next.js Route Handlers
- 🔒 API key stored securely with environment variables
- 🎨 Clean and responsive UI styled with Tailwind CSS
- 🧭 Graceful fallback for missing data and 404 pages

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **API:** [Last.fm API](https://www.last.fm/api/)
- **Routing:** App Router (`app/` directory)
- **Image Handling:** Next.js `<Image />` with fallback support

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/radio-time-machine.git
   cd radio-time-machine
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a .env.local file and add your API keys:

   ```env
   LASTFM_API_KEY=your_api_key_here
   YOUTUBE_API_KEY=your_api_key_here
   ```

4. **Run the app in development mode**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## 📁 Project structure

```bach
src/
├── app/
│ ├── year/[year]/page.tsx # Tracks by year
│ ├── artist/[name]/page.tsx # Artist info
│ ├── album/[album]/page.tsx # Album info
│ ├── api/ # Server API proxy
│ ├── pages/ # Page UI
│ ├── components/ # UI components
│ ├── icons/ # Custom SVG icons
│ ├── types/ # Typescript types
│ ├── utils/ # Utility functions
│ ├── error.tsx # Global error fallback
│ ├── not-found.tsx # 404 handler
├── public/
├── styles/
```

## ❓ Why "Radio Time Machine"?

This project explores the history of music by year, giving users an interactive way to explore different musical eras. Think of it as a digital jukebox powered by data and nostalgia.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.
