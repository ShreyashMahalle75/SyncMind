import Chat from "../models/Chat.js";

// CREATE CHAT
export const createChat = async (req, res) => {
  const chat = await Chat.create({
    title: "New Chat",
    messages: [],
  });

  res.json(chat);
};

// GET ALL CHATS
export const getChats = async (req, res) => {
  const chats = await Chat.find().sort({ createdAt: -1 });
  res.json(chats);
};

// GET SINGLE CHAT
export const getChatById = async (req, res) => {
  const chat = await Chat.findById(req.params.id);
  res.json(chat);
};

// UPDATE CHAT
export const updateChat = async (req, res) => {
  try {
    const { messages } = req.body;

    // ✅ STEP 1: GET CHAT FIRST
    const chat = await Chat.findById(req.params.id);

    // ✅ STEP 2: UPDATE MESSAGES
    chat.messages = messages;

    // ✅ STEP 3: ADD TITLE LOGIC (THIS IS YOUR STEP 2)
    if (!chat.title || chat.title === "New Chat") {
      chat.title = messages[0].content.slice(0, 40);
    }

    // ✅ STEP 4: SAVE
    await chat.save();

    res.json(chat);

  } catch (error) {
    res.status(500).json({ error: "Save failed" });
  }
};