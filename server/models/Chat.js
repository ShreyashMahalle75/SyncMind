import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "New Chat",
  },
  messages: Array,
});

export default mongoose.model("Chat", chatSchema);