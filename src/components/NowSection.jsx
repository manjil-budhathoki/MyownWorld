import { motion } from "framer-motion";

// Simple triangle layout to represent focus areas
function FocusTriangle() {
  return (
    <div className="flex justify-center mt-12 mb-12">
      <div className="relative w-[240px] h-[180px] mx-auto text-center text-sm text-zinc-400">
        {/* Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <div className="w-3 h-3 mx-auto mb-1 bg-white/10 rounded-full" />
          <span>Research</span>
        </div>
        <div className="absolute left-0 bottom-0">
          <div className="w-3 h-3 mx-auto mb-1 bg-white/10 rounded-full" />
          <span>Engineering</span>
        </div>
        <div className="absolute right-0 bottom-0">
          <div className="w-3 h-3 mx-auto mb-1 bg-white/10 rounded-full" />
          <span>Product</span>
        </div>
        {/* Optional connecting lines (commented out for cleaner design) */}
        {/* You can use SVG if you'd like triangle lines later */}
      </div>
    </div>
  );
}

export default function NowSection() {
  return (
    <motion.div
      className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-0 mb-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {/* Section Title */}
      <h2 className="text-white text-[14px] font-semibold mb-5 tracking-wide uppercase">Now</h2>

      {/* Intro */}
      <p className="text-zinc-300 text-[16px] leading-[1.8] mb-10">
        I'm transitioning into the world of Large Language Models, Retrieval-Augmented Generation (RAG), and agentic AI systems. I’m currently refining how systems can reason, retrieve, and respond—closer to human cognition.
      </p>

      {/* Focus Triangle */}
      <FocusTriangle />

      {/* Main paragraph */}
      <p className="text-zinc-300 text-[16px] leading-[1.9] mb-6">
        These three disciplines drive how I think and what I build. Whether it's designing agent flows, orchestrating tools with LangGraph, or optimizing prompt chains—I operate at the intersection of:
      </p>

      {/* Styled 3-point highlight (no bullets) */}
      <div className="space-y-4 text-[15.5px] text-zinc-400 leading-[1.9]">
        <p>
          <span className="text-white font-medium">Research Thinking</span> — staying curious, experimenting, and grounding systems in evolving AI understanding.
        </p>
        <p>
          <span className="text-white font-medium">Engineering Rigor</span> — writing stable code, scalable workflows, and infrastructure that supports growth.
        </p>
        <p>
          <span className="text-white font-medium">Product Focus</span> — ensuring the final tool is usable, purposeful, and intuitive for real-world users.
        </p>
      </div>

      {/* Outro */}
      <p className="text-zinc-300 text-[16px] leading-[1.9] mt-10">
        I like to ship fast. I love bridging deep tech with user-centric design. For me, AI is not just about prediction—it's about purpose, personalization, and pushing boundaries.
      </p>
    </motion.div>
  );
}
