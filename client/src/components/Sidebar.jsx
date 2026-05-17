export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">SyncMind</h2>

      <button className="bg-blue-600 w-full p-2 rounded mb-4 hover:bg-blue-500">
        + New Chat
      </button>

      <p className="text-gray-400">No history yet</p>
    </div>
  );
}