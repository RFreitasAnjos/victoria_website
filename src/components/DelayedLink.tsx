import { useNavigate } from "react-router-dom";
import { useTransition } from "../context/TransitionContext";
import type { ReactNode } from "react";

type DelayedLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

const DelayedLink = ({ to, children, className }: DelayedLinkProps) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => navigate(to));
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default DelayedLink;
