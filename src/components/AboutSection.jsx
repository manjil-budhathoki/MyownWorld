import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const content = `
I'm a **Design Engineer** with a passion for building interfaces where form meets function. I love turning ideas into real products and bringing delightful user experiences to life.

Currently working on projects like [SoloPanels](#), a manhwa-focused YouTube Shorts channel, and [ThinkDump](#), a personal note and idea dumping app.

I’m also exploring **LLMs**, **RAG systems**, and **agentic AI**, alongside academic pursuits in **Cyber Security**, **MLOps**, **Software Design**, and **Data Management** at Sunway College.

Beyond academics, I’m involved with [DataCamp Fellowship](#), [Pie & AI: Kathmandu](#), and I build tools like [Minishu](#), a virtual assistant chatbot for Sunway students.

Always learning, always building.
`;

const sentenceVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 40 },
  }),
};

export default function AboutSection() {
  const sentences = content.trim().split("\n\n");

  return (
    <motion.div
      className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-0 mt-16 mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className="text-sm text-zinc-400 mb-4">About me</h2>

      <div className="space-y-4 text-zinc-300 text-[16px] leading-[1.8]">
        {sentences.map((sentence, i) => (
          <motion.div key={i} custom={i} variants={sentenceVariants}>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    {...props}
                    className="text-blue-400 hover:underline underline-offset-2 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong
                    className="font-semibold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
                    {...props}
                  />
                ),
              }}
            >
              {sentence}
            </ReactMarkdown>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
