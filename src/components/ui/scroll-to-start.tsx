import { useScrollContext } from "@/context/scrollContext";

const ScrollToStart = () => {
  const { isScrolled } = useScrollContext();

  return (
    <div
      className={isScrolled ? "hidden" : "absolute bottom-10 animate-bounce"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-down text-default-white"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
};

export default ScrollToStart;
