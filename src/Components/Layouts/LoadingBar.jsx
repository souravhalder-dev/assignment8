import React from "react";
import { useNavigation } from "react-router-dom";

const LoadingBar = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70">
        {/* Unique carousel spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-8 border-[#00D390] border-t-transparent animate-spin"></div>
          <div className="absolute inset-4 rounded-full border-4 border-[#00D390] border-b-transparent animate-spin-slow"></div>
        </div>
      </div>
    );
  }
  return null;
};

export default LoadingBar;
