import { useContext } from "react";

import { GlobalContext } from "../../../context/global_context";

import { Menu, Close, ArrowBack } from "@mui/icons-material";

import NavBtn from "../../ui/buttons/nav_btn";
import NavigationItems from "../navigation_items/navigation_items";
import Logo from "../../logo/logo";

import style from "./toolbar.module.css";

const Toolbar = () => {
  const { states, setStates } = useContext(GlobalContext);

  return (
    <header className={style.toolbar}>
      <ul>
        <li>
          <NavBtn
            clicked={() => setStates({ visible: !states.visible })}
            ariaLabel={"Main Menu"}
            className={""}
          >
            {states.visible ? <Close /> : <Menu />}
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
              clicked={() => null}
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
  );
};

export default Toolbar;
