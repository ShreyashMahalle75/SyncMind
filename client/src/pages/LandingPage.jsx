import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">SyncMind</h1>

        <div className="flex gap-8 items-center">
          <a href="#" className="text-gray-300 hover:text-white">
            Features
          </a>

          <a href="#" className="text-gray-300 hover:text-white">
            Pricing
          </a>

          <Link to="/register">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center px-6 py-32">

        <div className="bg-gray-900 px-6 py-2 rounded-full border border-gray-700 mb-8">
          AI-Powered Workspace Intelligence
        </div>

        <h1 className="text-6xl font-bold leading-tight max-w-5xl">
          Your Team’s Knowledge,
          <br />
          <span className="text-blue-500">
            Organized by AI
          </span>
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl leading-relaxed">
          SyncMind automatically organizes company knowledge,
          answers questions instantly, and helps teams find
          information faster using AI-powered semantic search.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-12">

          <Link to="/register">
            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200">
              Start Free
            </button>
          </Link>

          <Link to="/login">
            <button className="border border-gray-700 px-8 py-4 rounded-2xl text-lg hover:bg-gray-900">
              Watch Demo
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;