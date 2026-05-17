import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  // ✅ Hooks MUST be inside component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.message);
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">

      <div className="bg-[#202123] p-8 rounded-xl w-[350px] text-white">

        <h1 className="text-xl font-bold mb-6 text-center">
          🚀 SyncMind Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 outline-none"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded hover:bg-blue-500"
        >
          Login
        </button>

        <p className="text-gray-400 text-xs mt-4 text-center">
          Secure login • Powered by SyncMind AI
        </p>

      </div>

    </div>
  );
}

export default LoginPage;