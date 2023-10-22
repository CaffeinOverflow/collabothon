import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div className="select-none z-10 min-h-[100vh] flex flex-col justify-between w-[90%] mx-auto px-1">
      {children}
    </div>
  );
}

export default Container;
