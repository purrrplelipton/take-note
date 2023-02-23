import {
  Refresh,
  ViewAgendaOutlined,
  Settings,
  Person,
} from "@mui/icons-material";

import NavBtn from "../../ui/buttons/nav_btn";

import style from "./navigation_items.module.css";

const NavigationItems = () => {
  return (
    <ul className={style.navigationItems}>
      <li>
        <NavBtn clicked={() => null} className={""} ariaLabel={"refresh notes"}>
          <Refresh />
        </NavBtn>
      </li>
      <li>
        <NavBtn clicked={() => null} className={""} ariaLabel={"list view"}>
          <ViewAgendaOutlined />
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
