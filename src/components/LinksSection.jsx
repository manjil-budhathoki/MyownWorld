import { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 40 },
  }),
};

export default function LinksSection() {
  return (
    <div className="mt-4 mb-20 px-4 sm:px-6 lg:px-0 max-w-[680px] mx-auto">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-[15px] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Column 1: Building */}
        <motion.div className="space-y-4" custom={0} variants={fadeInUp}>
          <h4 className="text-zinc-400 text-[13px] font-medium">Building</h4>
          <div>
            <a href="#" className="font-medium border-b border-zinc-600 hover:border-zinc-300 transition-colors">
              SoloPanels
            </a>
            <p className="text-zinc-500 text-sm">
              Manhwa Shorts Channel <br /> with GenAI
            </p>
          </div>
        </motion.div>

        {/* Column 2: Projects */}
        <motion.div className="space-y-4" custom={1} variants={fadeInUp}>
          <h4 className="text-zinc-400 text-[13px] font-medium">Projects</h4>
          {projects.map((project, idx) => (
            <div key={idx}>
              <a
                href={project.href}
                className="font-medium border-b border-zinc-600 hover:border-zinc-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {project.title}
              </a>
              <p className="text-zinc-500 text-sm whitespace-pre-line">{project.description}</p>
            </div>
          ))}
          <div>
            <a
              href="https://github.com/manjil-budhathoki"
              className="text-sm text-zinc-400 hover:text-white underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              All projects →
            </a>
          </div>
        </motion.div>

        {/* Column 3: Writing */}
        <motion.div className="space-y-4" custom={2} variants={fadeInUp}>
          <h4 className="text-zinc-400 text-[13px] font-medium">Writing</h4>
          <div>
            <a href="#" className="font-medium border-b border-zinc-600 hover:border-zinc-300 transition-colors">
              Estimation Station
            </a>
            <p className="text-zinc-500 text-sm">Fun RMSE <br /> guessing game</p>
          </div>
          <div>
            <a href="#" className="font-medium border-b border-zinc-600 hover:border-zinc-300 transition-colors">
              PromptCraft 101
            </a>
            <p className="text-zinc-500 text-sm">Prompt engineering <br /> for beginners</p>
          </div>
          <div>
            <a href="#" className="text-sm text-zinc-400 hover:text-white underline underline-offset-2">
              All posts →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
