
import { useState, useEffect } from "react";

const getScreenWidth = () => window.innerWidth;

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    const handleResize = () => setScreenWidth(getScreenWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  switch (screenWidth) {
    case screenWidth < 768:
      return "mobile";
    case screenWidth > 768 && screenWidth < 1280:
      return "tablet";
    default:
      return "desktop";
  }
}