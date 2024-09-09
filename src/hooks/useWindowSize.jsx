import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsSmallScreen(mediaQuery.matches);
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    // Cleanup function
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isSmallScreen;
};

export default useWindowSize;
