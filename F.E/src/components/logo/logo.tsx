import NavLink from "../ui/buttons/nav_link";

import style from "./logo.module.css";

const Logo = () => (
  <NavLink className={style.logoStyle} to={"/"} target={"self"}>
    <i className={"fi fi-rs-notebook"}></i>
    <span>Take Note</span>
  </NavLink>
);

export default Logo;
