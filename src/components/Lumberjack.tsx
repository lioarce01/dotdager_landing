import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { AnimatePresence, motion } from "framer-motion";

interface LumberjackProps {
  isOpen: boolean;
  onClose: () => void;
}

const Lumberjack: React.FC<LumberjackProps> = ({ isOpen, onClose }) => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      setShowIframe(false);
      timer = setTimeout(() => setShowIframe(true), 2000);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0 }}
          className="fixed inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('/bglumberjack.webp')",
          }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0 }}
          className="relative p-2 rounded z-10"
        >
          {showIframe ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <iframe
                title="Lumber Jack Game"
                src="https://tbot.xyz/lumber/"
                className="rounded  w-[350px] h-[650px] md:w-[600px] md:h-[800px]"
              ></iframe>
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                ✖️
              </button>
            </motion.div>
          ) : (
            <Spinner />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Lumberjack;
