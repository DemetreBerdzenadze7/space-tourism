import { ViewTransition } from "react";

// Fades whole pages in/out when navigating from the header (transition type "nav-page")
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransition
      enter={{ "nav-page": "page-in", default: "none" }}
      exit={{ "nav-page": "page-out", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
};

export default PageTransition;
