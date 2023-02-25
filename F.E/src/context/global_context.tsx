import { createContext, useReducer } from "react";

interface statesProps {
  visible: boolean;
  grid: boolean;
  notes: { id: number; title: string; content: string; important: boolean }[];
}

interface ContextProps {
  states: statesProps;
  setStates: React.Dispatch<Partial<statesProps>>;
}

const GlobalContext = createContext<ContextProps>({
  states: { visible: false, grid: true, notes: [] },
  setStates: () => {},
});

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [states, setStates] = useReducer(
    (prev: statesProps, next: Partial<statesProps>) => ({ ...prev, ...next }),
    { visible: false, grid: true, notes: [] }
  );

  return (
    <GlobalContext.Provider value={{ states, setStates }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
