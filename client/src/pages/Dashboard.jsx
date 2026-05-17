import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const deleteChat = async (id) => {
  await fetch(`http://localhost:5000/api/chat/${id}`, {
    method: "DELETE",
  });

  // refresh chats
  fetchChats();

  // clear screen if deleted current chat
  if (currentChatId === id) {
    setMessages([]);
    setCurrentChatId(null);
  }
};

  const chatEndRef = useRef(null);

  // ✅ Protect route
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, []);

  // ✅ Fetch chats
  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const res = await fetch("http://localhost:5000/api/chat");
    const data = await res.json();
    setChats(data);
  };

  // ✅ New chat (NO DB creation)
  const handleNewChat = () => {
    setCurrentChatId(null);
    setMessages([]);
  };

  // ✅ Load chat
  const loadChat = async (id) => {
    const res = await fetch(`http://localhost:5000/api/chat/${id}`);
    const data = await res.json();
    const typeText = (text) => {
  let index = 0;
  setTypingText("");

  const interval = setInterval(() => {
    setTypingText((prev) => prev + text.charAt(index));
    index++;

    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 15);
};

    setCurrentChatId(id);
    setMessages(data.messages || []);
  };

  // ✅ Send message
  const handleAI = async () => {
    if (!prompt.trim()) return;

    let chatId = currentChatId;

    // ✅ Create chat ONLY when first message sent
    if (!chatId) {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
      });
      const data = await res.json();
      chatId = data._id;
      setCurrentChatId(chatId);
    }

    const userMessage = { role: "user", content: prompt };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setPrompt("");
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        history: updatedMessages,
      }),
    });

    const data = await res.json();

    const botMessage = {
      role: "assistant",
      content: data.response,
    };

    const finalMessages = [...updatedMessages, botMessage];
    setMessages(finalMessages);
    setLoading(false);

    // ✅ Save chat (this triggers title generation in backend)
    await fetch(`http://localhost:5000/api/chat/${chatId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: finalMessages,
      }),
    });

    fetchChats();
  };

  return (
    <div className="flex h-screen bg-[#343541] text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#202123] flex flex-col p-4">

        <h1 className="text-lg font-semibold mb-4">🚀 SyncMind</h1>

        <button
          onClick={handleNewChat}
          className="border border-gray-600 rounded-lg p-2 mb-4 hover:bg-gray-700"
        >
          + New Chat
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          className="mb-4 bg-red-500 hover:bg-red-400 text-white py-2 rounded-lg"
        >
          Logout
        </button>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {chats
  .filter(
    (chat) =>
      chat.messages &&
      chat.messages.length > 0 &&
      chat.title !== "New Chat"
  )
  .map((chat) => (
            <div
  key={chat._id}
  className="flex items-center justify-between p-2 bg-[#2a2b32] hover:bg-[#343541] rounded cursor-pointer group"
>
  {/* TITLE */}
  <span
    onClick={() => loadChat(chat._id)}
    className="truncate text-sm flex-1"
  >
    {chat.title}
  </span>

  {/* DELETE BUTTON */}
  <button
    onClick={() => deleteChat(chat._id)}
    className="hidden group-hover:block text-red-400 hover:text-red-300 text-xs ml-2"
  >
    🗑
  </button>
</div>
            ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="flex flex-col flex-1">

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.length === 0 && (
            <p className="text-gray-400 text-center mt-20">
              Start a conversation...
            </p>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[60%] whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-[#444654]"
                }`}
              >
               <div className="prose prose-invert max-w-none text-sm">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {msg.content}
  </ReactMarkdown>
</div>
              </div>
            </div>
          ))}

          {loading && <p className="text-gray-400">AI is typing...</p>}

          <div ref={chatEndRef}></div>
        </div>

        {/* INPUT */}
        <div className="p-4 flex gap-2 border-t border-gray-700">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 bg-gray-800 rounded outline-none"
          />
          <button
            onClick={handleAI}
            className="bg-green-600 px-4 rounded hover:bg-green-500"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;