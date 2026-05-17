function Analytics() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Analytics 📊
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl mb-2">
            Total Users
          </h2>

          <p className="text-4xl font-bold">
            120
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl mb-2">
            AI Requests
          </h2>

          <p className="text-4xl font-bold">
            2,450
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl mb-2">
            Uploaded Docs
          </h2>

          <p className="text-4xl font-bold">
            87
          </p>
        </div>

      </div>

    </div>
  );
}

export default Analytics;