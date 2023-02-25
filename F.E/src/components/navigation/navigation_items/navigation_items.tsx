import { useContext } from "react";
import { GlobalContext } from "../../../context/global_context";

import {
  Refresh,
  ViewAgendaOutlined,
  GridViewOutlined,
  Settings,
  Person,
} from "@mui/icons-material";

import NavBtn from "../../ui/buttons/nav_btn";

import style from "./navigation_items.module.css";

const NavigationItems = () => {
  const { states, setStates } = useContext(GlobalContext);

  return (
    <ul className={style.navigationItems}>
      <li>
        <NavBtn clicked={() => null} className={""} ariaLabel={"refresh notes"}>
          <Refresh />
        </NavBtn>
      </li>
      <li>
        <NavBtn
          clicked={() => setStates({ grid: !states.grid })}
          className={""}
          ariaLabel={states.grid ? "multi-column view" : "single-column view"}
        >
          {states.grid ? <GridViewOutlined /> : <ViewAgendaOutlined />}
        </NavBtn>
      </li>
      <li>
        <NavBtn
          clicked={() => null}
          className={""}
          ariaLabel={"notes settings"}
        >
          <Settings />
        </NavBtn>
      </li>
      <li>
        <NavBtn clicked={() => null} className={""} ariaLabel={"notes user"}>
          <Person />
        </NavBtn>
      </li>
    </ul>
  );
};

export default NavigationItems;
