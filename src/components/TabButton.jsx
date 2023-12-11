import React from "react";



const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-white border-b border-purple-700"
    : "text-[#ADB7Be] ";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass} `}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
