import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfileSection() {
  return (
    <div className="mt-16 mb-8 flex items-center gap-4 relative">
      {/* Avatar with Sparkles */}
      <div className="relative w-12 h-12">
        <img
          src="/avatar.png"
          alt="Manjil Budhathoki"
          className="w-12 h-12 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-0 right-0 text-yellow-400"
        >
          <Sparkles className="w-3 h-3" />
        </motion.div>
      </div>

      {/* Name and Title */}
      <div className="flex flex-col">
        <h1 className="text-white text-[16px] font-medium leading-none">
          Manjil Budhathoki
        </h1>
        <p className="text-[#ffffff66] text-[15px] leading-tight mt-[2px]">
          Design Engineer
        </p>
      </div>
    </div>
  );
}
