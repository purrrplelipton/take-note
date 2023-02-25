import { GlobalContextProvider } from "../../context/global_context";

import Toolbar from "../navigation/toolbar/toolbar";
import Menu from "../navigation/menu/menu";
import Notes from "../navigation/notes/notes";
import Options_Bar from "../navigation/options_bar/options_bar";

const Layout = () => {
  return (
    <GlobalContextProvider>
      <Toolbar />
      <Menu />
      <Notes />
      <Options_Bar />
    </GlobalContextProvider>
  );
};

export default Layout;
