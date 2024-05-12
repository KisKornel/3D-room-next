import { createContext, useState, ReactNode, useContext, useMemo } from "react";

type TooltipProps = {
  currentStage: number;
  setCurrentStage: (newStage: number) => void;
};

const TooltipContext = createContext<TooltipProps>({
  currentStage: 0,
  setCurrentStage: () => {},
});

type StateProviderProps = {
  children: ReactNode;
};

export function TooltipProvider({ children }: StateProviderProps) {
  const [currentStage, setCurrentStage] = useState(0);

  const value = useMemo(
    () => ({ currentStage, setCurrentStage }),
    [currentStage]
  );

  return (
    <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
  );
}

export function useTooltipContext() {
  return useContext(TooltipContext);
}
