import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-pink-500 text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp className="mx-auto" />
        </button>
      )}
    </>
  );
};

export default BackToTop;