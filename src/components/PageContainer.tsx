import { useTransition } from "../context/TransitionContext";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const { isExiting } = useTransition();
  const base = "transition-all duration-500 ease-in-out"; // Tailwind

  const classes = isExiting
    ? `${base} opacity-0 -translate-y-4`
    : `${base} opacity-100 translate-y-0`;

  return <div className={classes}>{children}</div>;
};

export default PageContainer;
