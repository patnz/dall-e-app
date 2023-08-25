import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, Post } from './pages'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt={logo} className="w-28 object-contain" />
        </Link>
        <div className="flex gap-2">
          <Link
            to="/"
            className="font-fira font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Gallery
          </Link>
          <Link
            to="/post"
            className="font-fira font-medium bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </main>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
