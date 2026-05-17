import { useState } from "react";

import API from "../api/authApi";

function AIWorkspace() {

  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

    try {

      setLoading(true);

      const res = await API.post("/ai/generate", {
        prompt,
      });

      setResponse(res.data.response);

    } catch (error) {

      console.log(error);

      alert("AI Response Failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-black text-white p-12">

      <h1 className="text-6xl font-bold mb-10">
        AI Workspace 🤖
      </h1>

      <div className="bg-gray-950 border border-gray-800 p-10 rounded-3xl">

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="w-full h-64 bg-black border border-gray-700 rounded-2xl p-6 text-xl"
        />

        <button
          onClick={handleGenerate}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-xl"
        >
          {loading ? "Generating..." : "Generate Response"}
        </button>

        {response && (

          <div className="mt-10 bg-black border border-gray-700 p-8 rounded-2xl">

            <h2 className="text-3xl font-bold mb-4">
              AI Response
            </h2>

            <p className="text-gray-300 whitespace-pre-wrap">
              {response}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default AIWorkspace;