import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/bglumberjack.png')",
        }}
      ></div>

      <div className="relative p-2 rounded z-10">
        {showIframe ? (
          <>
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
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Lumberjack;
