import { useEffect, useState } from "react";

export default function useHideDescription() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setHide(width < 768 && height < 730);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return hide;
}