import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircleLoader color="#3B82F6" size={80} />
    </div>
  );
};

export default Loading;
