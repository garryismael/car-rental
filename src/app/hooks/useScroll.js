import { useEffect, useState } from "react";

const useScroll = () => {
  const [sticky, setSticky] = useState("");

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 30 ? "shadow-md" : "";
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sticky]);

  return sticky;
};

export default useScroll;
