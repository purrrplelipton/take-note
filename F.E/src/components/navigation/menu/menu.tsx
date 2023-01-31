import { Fragment } from "react";

import { faBell, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faArchive,
  faHeart,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "../../ui/backdrop/backdrop";
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
        <NavLink to={"#notes"} target={"_self"}>
          <FontAwesomeIcon icon={faLightbulb} />
          <span>Notes</span>
        </NavLink>
        <NavLink to={"#reminders"} target={"_self"}>
          <FontAwesomeIcon icon={faBell} />
          <span>Reminders</span>
        </NavLink>
        <NavBtn
          className={""}
          clicked={() => null}
          tooltipText={"Edit labels"}
          ariaLabel={"Edit labels"}
        >
          <FontAwesomeIcon icon={faPencil} />
          <span>Edit labels</span>
        </NavBtn>
        <NavLink to={"#archive"} target={"_self"}>
          <FontAwesomeIcon icon={faArchive} />
          <span>Archive</span>
        </NavLink>
        <NavLink to={"#bin"} target={"_self"}>
          <FontAwesomeIcon icon={faTrashCan} />
          <span>Bin</span>
        </NavLink>
      </nav>
      <footer>
        made with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <NavLink to={"https://github.com/purrrplelipton"} target={"_blank"}>
          Toby
        </NavLink>
      </footer>
    </Fragment>
  );
};

export default Menu;
