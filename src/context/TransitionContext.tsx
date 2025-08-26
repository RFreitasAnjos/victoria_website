// src/context/TransitionContext.tsx
import { createContext, useContext, useState } from "react";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: (callback: () => void) => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (callback: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, 500); // tempo da transição
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition deve ser usado dentro de TransitionProvider");
  }
  return context;
};
