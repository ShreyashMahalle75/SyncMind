import express from "express";
import {
  createChat,
  getChats,
  getChatById,
  updateChat,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/", createChat);
router.get("/", getChats);
router.get("/:id", getChatById);
router.put("/:id", updateChat);
router.delete("/:id", async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);
    res.json({ message: "Chat deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;