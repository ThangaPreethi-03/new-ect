import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="charm-gift-wrap">
      {!open && (
        <motion.div
          className="charm-gift"
          onClick={() => setOpen(true)}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.div
            className="charm-lid"
            initial={false}
            animate={{ y: open ? -40 : 0, rotate: open ? -25 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <div className="charm-box">
            <span className="ribbon-v" />
            <span className="ribbon-h" />
          </div>

          <p className="tap-hint">Tap gently 🎁</p>
        </motion.div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="charm-reveal"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="float-emojis">
              💖 ✨ 🎉 💕 ✨
            </div>
            <p className="charm-text">
              This little moment was crafted just for you 💝
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
