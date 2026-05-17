function Documents() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Documents 📄
      </h1>

      <div className="bg-gray-900 p-8 rounded-2xl">

        <input
          type="file"
          className="mb-4"
        />

        <button
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Upload Document
        </button>

      </div>

    </div>
  );
}

export default Documents;