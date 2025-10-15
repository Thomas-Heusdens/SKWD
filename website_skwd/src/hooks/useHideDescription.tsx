import { useEffect, useState } from "react";

export default function useHideDescription() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Hide only if width < 768 AND height < 730
      setHide(width < 768 && height < 730);
    }

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return hide;
}