export const generateAIResponse = async (req, res) => {
  try {
    const { prompt, history } = req.body;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-8b-instruct",
          messages: [
            {
              role: "system",
              content:
                "Give clean, structured answers with headings, bullet points, and proper spacing.",
            },
            ...(history || []),
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // ✅ SAFE RESPONSE EXTRACTION
    const aiText =
      data?.choices?.[0]?.message?.content || "No response generated";

    // ✅ SEND CLEAN RESPONSE
    res.json({
      response: aiText.trim(),
    });

  } catch (error) {
    console.error("AI ERROR:", error);

    res.status(500).json({
      response: "AI failed. Try again.",
    });
  }
};

