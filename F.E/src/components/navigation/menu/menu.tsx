import { Fragment } from "react";

import {
  Lightbulb,
  Archive,
  Notifications,
  Edit,
  Delete,
  Settings,
  Favorite,
} from "@mui/icons-material";

import Backdrop from "../../ui/backdrop/backdrop";
import Logo from "../../logo/logo";
import NavBtn from "../../ui/buttons/nav_btn";
import NavLink from "../../ui/buttons/nav_link";

import style from "./menu.module.css";

const Menu = ({
  showMenu,
  closeMenu,
}: {
  showMenu: boolean;
  closeMenu: Function;
}) => {
  const menuClasses = [style.sideMenu, style.hide];
  showMenu ? menuClasses.pop() : null;

  return (
    <Fragment>
      <Backdrop visible={showMenu} hideBackdrop={() => closeMenu()} />{" "}
      <nav className={menuClasses.join(" ")}>
        <Logo />
        <NavLink className={""} to={"#notes"} target={"_self"}>
          <Lightbulb />
          <span>Notes</span>
        </NavLink>
        <NavLink className={""} to={"#reminders"} target={"_self"}>
          <Notifications />
          <span>Reminders</span>
        </NavLink>
        <NavBtn className={""} clicked={() => null} ariaLabel={"Edit labels"}>
          <Edit />
          <span>Edit labels</span>
        </NavBtn>
        <NavLink className={""} to={"#archive"} target={"_self"}>
          <Archive />
          <span>Archive</span>
        </NavLink>
        <NavLink className={""} to={"#bin"} target={"_self"}>
          <Delete />
          <span>Trash</span>
        </NavLink>
        <NavBtn
          clicked={() => null}
          className={""}
          ariaLabel={"notes settings"}
        >
          <Settings />
          <span>Settings</span>
        </NavBtn>
        <footer>
          made with <Favorite /> by{" "}
          <NavLink
            className={""}
            to={"https://github.com/purrrplelipton"}
            target={"_blank"}
          >
            Toby
          </NavLink>
        </footer>
      </nav>
    </Fragment>
  );
};

export default Menu;
