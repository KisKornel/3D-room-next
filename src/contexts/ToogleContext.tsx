import { createContext, useState, ReactNode, useContext, useMemo } from "react";

type ToogleProps = {
  isToogle?: boolean;
  setIsToogle: (isToogle: boolean) => void;
};

const ToogleContext = createContext<ToogleProps>({
  isToogle: false,
  setIsToogle: () => {},
});

type StateProviderProps = {
  children: ReactNode;
};

export function ToogleProvider({ children }: StateProviderProps) {
  const [isToogle, setIsToogle] = useState(false);

  const value = useMemo(() => ({ isToogle, setIsToogle }), [isToogle]);

  return (
    <ToogleContext.Provider value={value}>{children}</ToogleContext.Provider>
  );
}

export function useToogleContext() {
  return useContext(ToogleContext);
}
