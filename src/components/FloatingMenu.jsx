import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Home,
  Pencil,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';

export default function FloatingMenu() {
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState('light');
  const ref = useRef(null);
  const navigate = useNavigate();

  // Initial theme setup
  useEffect(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme') || (systemDark ? 'dark' : 'light');
    setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: 0, rotate: -90, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      x: (i + 1) * 48,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.04,
        type: 'spring',
        stiffness: 500,
        damping: 22,
      },
    }),
  };

  // Action buttons
  const actions = [
    {
      icon: <Home size={20} className="text-white cursor-pointer" />,
      color: 'bg-red-500',
      onClick: () => navigate('/'),
    },
    {
      icon: <Pencil size={20} className="text-white cursor-pointer" />,
      color: 'bg-yellow-500',
      onClick: () => navigate('/writing'),
    },
    {
      icon: <Sparkles size={20} className="text-white cursor-pointer" />,
      color: 'bg-purple-500',
      onClick: () => navigate('/highlights'),
    },
    {
      icon:
        theme === 'dark' ? (
          <Sun size={20} className="text-white cursor-pointer" />
        ) : (
          <Moon size={20} className="text-white cursor-pointer" />
        ),
      color: 'bg-neutral-800',
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center" ref={ref}>
      <motion.button
        animate={{ rotate: expanded ? 45 : 0 }}
        whileTap={{ scale: 1.1 }}
        onClick={() => setExpanded(!expanded)}
        className="h-12 w-12 rounded-full bg-black dark:bg-white p-3 flex items-center justify-center cursor-pointer"
      >
        <Plus size={20} className="text-white dark:text-black" />
      </motion.button>

      <AnimatePresence>
        {expanded &&
          actions.map((action, i) => (
            <motion.button
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={action.onClick}
              className={`absolute h-12 w-12 rounded-full ${action.color} flex items-center justify-center cursor-pointer`}
              style={{
                left: `${(i + 1) * 3.2}rem`,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {action.icon}
            </motion.button>
          ))}
      </AnimatePresence>
    </div>
  );
}
