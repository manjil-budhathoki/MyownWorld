import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 40,
    },
  }),
};

function HighlightLink({ children, href, preview }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <span
      className="relative inline-block underline underline-offset-2 font-medium text-white hover:text-zinc-100 cursor-pointer"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>

      {showPreview && (
        <div className="absolute z-50 mt-2 w-64 p-3 bg-zinc-900 border border-zinc-700 rounded-md shadow-xl">
          <h4 className="text-white font-semibold text-sm">{preview.title}</h4>
          <p className="text-zinc-400 text-xs">{preview.url}</p>
          <p className="text-zinc-500 text-xs mt-1">{preview.description}</p>
        </div>
      )}
    </span>
  );
}

export default function AboutSection() {
  const paragraphs = [
    `Writing impactful & elegant software. Relentlessly devoted to intricacy, efficiency, and detailed polish. Unsatisfiably curious about magical design and high performance systems.`,
  ];

  return (
    <motion.div
      className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-0 mb-10 text-zinc-300 text-[15.5px] leading-[1.8] space-y-4 font-[450]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {paragraphs.map((text, i) => (
        <motion.p key={i} custom={i} variants={fadeInUp}>
          {text}
        </motion.p>
      ))}

      <motion.p custom={1} variants={fadeInUp}>
        Based in Kathmandu, Nepal, I am currently pursuing a{" "}
        <span className="underline underline-offset-2 font-medium text-white">
          Bachelor's degree
        </span>{" "}
        at{" "}
        <HighlightLink
          href="https://sunway.edu.np"
          preview={{
            title: "Sunway College",
            url: "https://sunway.edu.np",
            description:
              "A premier computing college in Nepal offering cutting-edge IT programs.",
          }}
        >
          Sunway College
        </HighlightLink>{" "}
        and working on tools and experiences that combine AI, storytelling, and practical design.
      </motion.p>
    </motion.div>
  );
}
