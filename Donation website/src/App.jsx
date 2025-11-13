import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Manage from "./components/Manage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#0b1220,_#071025_60%)]">
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl z-40">
          <div className="flex items-center justify-between glass p-3 rounded-2xl">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#6d28d9] to-[#4f46e5] shadow-lg">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path d="M12 2L15 8H9L12 2Z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">
                  Donor<span className="text-[#9f7aea]">Hub</span>
                </div>
             
              </div>
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-gray-300 hover:text-white"
              >
                Explore
              </Link>
              <Link
                to="/manage"
                className="px-3 py-2 rounded-md text-gray-300 hover:text-white"
              >
                Manage
              </Link>
            </nav>
          </div>
        </header>

        <main className="pt-28 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage" element={<Manage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
