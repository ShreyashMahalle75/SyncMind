function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-white">
        SyncMind
      </h1>

      <div className="flex items-center gap-6">
        <button className="text-gray-300 hover:text-white transition">
          Features
        </button>

        <button className="text-gray-300 hover:text-white transition">
          Pricing
        </button>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;