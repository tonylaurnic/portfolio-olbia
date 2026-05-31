"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("splash_seen");
    if (seen) return;
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splash_seen", "1");
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070d1f] overflow-hidden"
        >
          {/* Glow blobs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 2.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-blue-600 blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.15, scale: 1.8 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
            className="absolute w-[350px] h-[350px] rounded-full bg-cyan-400 blur-3xl pointer-events-none"
          />

          <div className="relative flex flex-col items-center gap-6">

            {/* Big animated Q */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.5, 0.64, 1] }}
            >
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="qg1" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="40%" stopColor="#0072ff" />
                    <stop offset="100%" stopColor="#003ab0" />
                  </linearGradient>
                </defs>
                {/* Full Q circle */}
                <motion.circle
                  cx="72" cy="72" r="52"
                  stroke="url(#qg1)" strokeWidth="16" fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
                {/* Inner wave */}
                <motion.path
                  d="M50 90 Q65 76 80 86 Q93 95 108 82"
                  stroke="url(#qg1)" strokeWidth="10" strokeLinecap="round" fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                />
                {/* Q tail — the "cut" diagonal */}
                <motion.line
                  x1="108" y1="108" x2="148" y2="148"
                  stroke="url(#qg1)" strokeWidth="16" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
                />
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              className="flex items-baseline"
            >
              <span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
                Qui.Site
              </span>
              <span className="text-4xl font-extrabold text-white tracking-tight">App</span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-52 h-[3px] bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.1, duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
