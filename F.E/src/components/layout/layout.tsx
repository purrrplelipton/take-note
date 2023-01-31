import { Fragment, ReactNode, useState } from "react";

import GlobalContext from "../../context/crt_cntxt";
import Toolbar from "../navigation/toolbar/toolbar";
import Menu from "../navigation/menu/menu";

const Layout = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(false);

  const toggleMenu = () => setState((exState) => !exState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <Fragment>
        <Toolbar toggleMenu={() => toggleMenu()} />
        <Menu showMenu={state} closeMenu={() => toggleMenu()} />
        <main>{children}</main>
      </Fragment>
    </GlobalContext.Provider>
  );
};

export default Layout;
