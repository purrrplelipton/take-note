import { useState } from "react";

import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              tooltipText={"Main Menu"}
              className={""}
            >
              <FontAwesomeIcon icon={faBars} />
            </NavBtn>
          </li>
          <li>
            <Logo />
          </li>
        </ul>
        <label htmlFor={"search"} className={style.middleSearchbar}>
          <input
            type={"search"}
            name={"search"}
            id={"centre-searchbar"}
            placeholder={"Search notes..."}
          />
          <NavBtn
            className={""}
            ariaLabel={"exit note search"}
            tooltipText={"exit note search"}
            clicked={() => setState(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavBtn>
        </label>
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </GlobalContext.Provider>
  );
};

export default Toolbar;
