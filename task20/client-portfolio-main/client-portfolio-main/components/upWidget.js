import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const UpWidget = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = (documentHeight - windowHeight) * 0.2;

      if (scrollPosition >= threshold) {
        setShowWidget(true);
      } else {
        setShowWidget(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Transition
      show={showWidget}
      enter="transition duration-200 transform ease"
      enterFrom="opacity-0 -rotate-45 scale-75"
      leave="transition duration-100 transform ease"
      leaveTo="opacity-0 -rotate-45"
      className="absolute w-6 h-6 text-white"
    >
      <div
        onClick={scrollToTop}
        className="cursor-pointer fixed z-40 flex items-center justify-center transition duration-300 bg-[#912de9] rounded-full shadow-lg right-5 bottom-20 w-14 h-14 focus:outline-none hover:bg-indigo-500 focus:bg-indigo-500 ease"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </div>
    </Transition>
  );
};

export default UpWidget;
