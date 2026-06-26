"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OWLogo from "@/components/shared/OWLogo";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("ow-loaded");
    if (!seen) {
      setShow(true);
      sessionStorage.setItem("ow-loaded", "1");
      setTimeout(() => setShow(false), 1900);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#1B2A87] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Logo on white card */}
            <div className="bg-white rounded-2xl px-8 py-6 shadow-2xl mb-6">
              <OWLogo width={220} variant="primary" />
            </div>
            <p className="text-blue-200 text-sm tracking-widest uppercase">Your Trusted Financial Partner</p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            className="mt-10 flex gap-1.5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          >
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="w-2 h-2 bg-[#F97316] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
