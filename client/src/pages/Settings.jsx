function Settings() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Settings ⚙️
      </h1>

      <div className="bg-gray-900 p-8 rounded-2xl space-y-6">

        <input
          type="text"
          placeholder="Update Name"
          className="w-full p-4 rounded-xl bg-black border border-gray-700"
        />

        <input
          type="email"
          placeholder="Update Email"
          className="w-full p-4 rounded-xl bg-black border border-gray-700"
        />

        <button
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;