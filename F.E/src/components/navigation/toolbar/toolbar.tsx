import { useState } from "react";

import { Menu, ArrowBack } from "@mui/icons-material";

import NavBtn from "../../ui/buttons/nav_btn";
import NavigationItems from "../navigation_items/navigation_items";
import Logo from "../../logo/logo";
import Backdrop from "../../ui/backdrop/backdrop";
import GlobalContext from "../../../context/crt_cntxt";

import style from "./toolbar.module.css";

const Toolbar = ({ toggleMenu }: { toggleMenu: Function }) => {
  const [state, setState] = useState(false);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <header className={style.toolbar}>
        <Backdrop visible={state} hideBackdrop={() => setState(false)} />
        <ul>
          <li>
            <NavBtn
              clicked={() => toggleMenu()}
              ariaLabel={"Main Menu"}
              className={""}
            >
              <Menu />
            </NavBtn>
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <label htmlFor={"search"}>
              <input
                type={"search"}
                name={"center-searchbar"}
                id={"center-searchbar"}
                placeholder={"Search your notes"}
              />
              <NavBtn
                className={""}
                ariaLabel={"exit note search"}
                clicked={() => setState(false)}
              >
                <ArrowBack />
              </NavBtn>
            </label>
          </li>
        </ul>

        <nav>
          <NavigationItems />
        </nav>
      </header>
    </GlobalContext.Provider>
  );
};

export default Toolbar;
