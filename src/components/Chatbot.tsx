import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the Lanos assistant, a helpful AI for Lanos Innovation. 
Help users with questions about services, process, and pricing. 
You can also help them book a call. Be concise and professional.
If you don't know specific details, direct users to hello@lanos.io or the Contact page.`;

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm the Lanos assistant. Ask about services, process, or pricing. I can also help you book a call.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY ?? "",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: next.slice(-10).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply =
        data.content?.[0]?.type === "text"
          ? data.content[0].text
          : "Sorry, I couldn't generate a response.";

      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Something went wrong. Try again or email hello@lanos.io.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl glow-accent"
        style={{
          background: "linear-gradient(135deg, var(--navy), var(--accent-hover))",
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="m"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", damping: 22, stiffness: 240 }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border hairline bg-white shadow-2xl"
          >
            <div
              className="flex items-center gap-3 border-b hairline px-4 py-3"
              style={{
                background:
                  "linear-gradient(135deg, var(--navy), var(--midnight))",
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
              </div>
              <div className="text-white">
                <p className="text-sm font-semibold">Lanos Assistant</p>
                <p className="text-[11px] text-white/60">
                  Usually replies instantly
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-[color:var(--navy)] text-white"
                        : "bg-[color:var(--muted)] text-[color:var(--foreground)]"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-[color:var(--muted)] px-3 py-2 text-sm">
                    <span className="inline-flex gap-1">
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-[color:var(--navy)]/40"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-[color:var(--navy)]/40"
                        style={{ animationDelay: "120ms" }}
                      />
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-[color:var(--navy)]/40"
                        style={{ animationDelay: "240ms" }}
                      />
                    </span>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t hairline p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, pricing…"
                className="flex-1 rounded-full border hairline bg-[color:var(--muted)] px-4 py-2 text-sm outline-none focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/30"
                maxLength={2000}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, var(--navy), var(--accent-hover))",
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}