import { useState } from "react";

const useStickyHeader = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  const eventHeader = () => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 5) {
        return setStickyHeader(true);
      }
      return setStickyHeader(false);
    });
  };

  return [stickyHeader, eventHeader];
};

export default useStickyHeader;
