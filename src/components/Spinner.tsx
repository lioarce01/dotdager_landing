import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin text-6xl">🥒</div>
    </div>
  );
};

export default Spinner;
