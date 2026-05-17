import axios from "axios";

export const generateAI = (prompt) => {
  return axios.post("http://localhost:5000/api/ai/generate", {
    prompt,
  });
};