import { useState } from "react";

export default function useMenu() {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  const hideMenu = () => {
    setToggle(false);
  };

  return { toggle, hideMenu, onClick };
}
