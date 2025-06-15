import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Plus,
  Home,
  Pencil,
  Sparkles,
  BookOpen,
  BookMarked,
  Settings,
} from "lucide-react";

const actions = [
  { icon: Home, route: "/", color: "bg-red-500" },
  { icon: Pencil, route: "/writing", color: "bg-yellow-500" },
  { icon: Sparkles, route: "/highlights", color: "bg-purple-500" },
  { icon: BookOpen, route: "/library", color: "bg-blue-500" },
  { icon: BookMarked, route: "/notes", color: "bg-green-500" },
  { icon: Settings, route: "/settings", color: "bg-neutral-700" },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const rawRotation = useMotionValue(0);
  const rotation = useSpring(rawRotation, { stiffness: 100, damping: 20 });

  const radius = 100;
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/click.mp3");
  }, []);

  const handleClick = (route) => {
    navigate(route);
    setOpen(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  // 🖱 Scroll to rotate
  const handleWheel = (e) => {
    const newVal = rawRotation.get() + e.deltaY * 0.3;
    const snapped = Math.round(newVal / 45) * 45;
    rawRotation.set(snapped);
  };

  // 📱 Touch drag to rotate
  useEffect(() => {
    let startY = null;
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e) => {
      if (startY !== null && e.touches.length === 1) {
        const deltaY = e.touches[0].clientY - startY;
        const newVal = rawRotation.get() + deltaY * 0.5;
        const snapped = Math.round(newVal / 45) * 45;
        rawRotation.set(snapped);
        startY = e.touches[0].clientY;
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [rawRotation]);

  return (
    <div
      className="fixed bottom-6 left-6 z-50 select-none touch-none"
      onWheel={handleWheel}
    >
      {/* Action Buttons */}
      <motion.div
        className="relative"
        style={{ rotate: rotation }}
        initial={{ scale: 0 }}
        animate={{ scale: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {open &&
          actions.map((action, index) => {
            const baseAngle = (index / actions.length) * 360;
            const rad = (baseAngle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isActive = location.pathname === action.route;

            return (
              <motion.div
                key={index}
                style={{ x, y }}
                className="absolute"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="relative group">
                  <button
                    onClick={() => handleClick(action.route)}
                    className={`h-12 w-12 rounded-full ${action.color} flex items-center justify-center shadow-md relative z-10 ${
                      isActive ? "ring-4 ring-white/40" : ""
                    }`}
                  >
                    <action.icon size={20} className="text-white" />
                  </button>
                  {/* Pinpoint glow */}
                  <div className="absolute inset-0 rounded-full z-0 scale-110 opacity-0 group-hover:opacity-80 group-hover:scale-125 transition-all duration-300 blur-xl bg-white/10 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
      </motion.div>

      {/* Central Toggle Button */}
      <motion.button
        whileTap={{ scale: 1.1 }}
        animate={{ rotate: open ? 45 : 0 }}
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-full bg-black dark:bg-white p-3 flex items-center justify-center shadow-xl cursor-pointer"
      >
        <Plus size={20} className="text-white dark:text-black" />
      </motion.button>
    </div>
  );
}
