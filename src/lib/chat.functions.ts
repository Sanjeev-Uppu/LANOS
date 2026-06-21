import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(2000),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(20),
});

const SYSTEM_PROMPT = `You are the Lanos Innovation assistant — a sharp, professional, concise guide for an elite software, AI, and growth studio.

Lanos services:
- Custom Software: Websites, Web Apps, Mobile Apps
- AI Agents & Automation: Workflow automation, AI assistants, custom agents
- AI Ads & Growth: Funnels, ads, analytics

Tone: confident, premium consulting, no fluff. Keep replies under 80 words unless asked for depth. When a user asks about pricing, say projects start at $5k for focused builds and $25k+ for full systems, and offer to book a call. To book, direct them to the Contact page or email hello@lanos.io. Never invent specifics you don't know.`;

export const chatWithLanos = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { reply: "The assistant is not configured yet. Please email hello@lanos.io and we'll respond fast.", error: "missing_key" as const };
    }

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
        }),
      });

      if (!res.ok) {
        if (res.status === 429) return { reply: "We're getting a lot of questions right now. Try again in a moment.", error: "rate_limited" as const };
        if (res.status === 402) return { reply: "Assistant is temporarily unavailable. Email hello@lanos.io instead.", error: "payment" as const };
        const txt = await res.text();
        console.error("AI gateway error:", res.status, txt);
        return { reply: "Something went wrong. Try again or email hello@lanos.io.", error: "upstream" as const };
      }

      const json = await res.json();
      const reply = json.choices?.[0]?.message?.content?.toString() ?? "Sorry, I didn't catch that. Could you rephrase?";
      return { reply, error: null };
    } catch (e) {
      console.error("chat error:", e);
      return { reply: "Network issue. Try again or email hello@lanos.io.", error: "network" as const };
    }
  });
