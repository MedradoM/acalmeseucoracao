"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ScrollContextType = {
  isScrolled: boolean;
};

const ScrollContext = createContext<ScrollContextType>({} as ScrollContextType);

const ScrollProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

const useScrollContext = () => {
  const context = useContext(ScrollContext);

  return context;
};

export default ScrollProvider;

export { useScrollContext };
