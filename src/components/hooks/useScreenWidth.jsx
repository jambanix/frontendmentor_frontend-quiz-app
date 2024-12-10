
import { useState, useEffect } from "react";

const getScreenWidth = () => window.innerWidth;

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const handleResize = () => setScreenWidth(width => getScreenWidth());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (screenWidth < 768) {
    return "mobile";
  }
  else if (screenWidth >= 768 && screenWidth < 1024) {
    return "tablet";
  }
  else {
    return "desktop";
  }
}