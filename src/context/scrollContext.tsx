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
  scroll?: number;
};

const ScrollContext = createContext<ScrollContextType>({} as ScrollContextType);

const ScrollProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[scroll])

  return (
    <ScrollContext.Provider value={{ isScrolled, scroll }}>
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
