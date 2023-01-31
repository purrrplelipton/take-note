import { createContext } from "react";

type ContextProps = {
  state: boolean;
  setState: (state: boolean) => void;
};

const GlobalContext = createContext<ContextProps>({
  state: false,
  setState: () => {},
});

export default GlobalContext;
