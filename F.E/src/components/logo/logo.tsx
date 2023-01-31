import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "../ui/buttons/nav_link";

const Logo = () => (
  <NavLink to={"/"} target={"self"}>
    <FontAwesomeIcon icon={faPenToSquare} />
    <span>Take Note</span>
  </NavLink>
);

export default Logo;
