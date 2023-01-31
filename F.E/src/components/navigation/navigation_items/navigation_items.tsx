import {
  faArrowLeft,
  faGear,
  faListSquares,
  faRotateRight,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBtn from "../../ui/buttons/nav_btn";
import useGlobalContext from "../../../context/use_cntxt";

import style from "./navigation_items.module.css";

const NavigationItems = () => {
  const { state, setState } = useGlobalContext();

  const labelClassNames = [style.searchLabel, style.hidden];
  state ? labelClassNames.pop() : null;

  return (
    <ul className={style.navigationItems}>
      <li>
        <NavBtn
          className={""}
          ariaLabel={"search notes"}
          tooltipText={"search notes"}
          clicked={() => setState(true)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </NavBtn>
        <label htmlFor={"search"} className={labelClassNames.join(" ")}>
          <input
            type={"search"}
            name={"search"}
            id={"_search"}
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
      </li>
      <li>
        <NavBtn
          clicked={() => null}
          className={""}
          ariaLabel={"refresh notes"}
          tooltipText={"refresh notes"}
        >
          <FontAwesomeIcon icon={faRotateRight} />
        </NavBtn>
      </li>
      <li>
        <NavBtn
          clicked={() => null}
          className={""}
          ariaLabel={"list view"}
          tooltipText={"list view"}
        >
          <FontAwesomeIcon icon={faListSquares} />
        </NavBtn>
      </li>
      <li>
        <NavBtn
          clicked={() => null}
          className={""}
          ariaLabel={"notes settings"}
          tooltipText={"notes settings"}
        >
          <FontAwesomeIcon icon={faGear} />
        </NavBtn>
      </li>
      <li>
        <NavBtn
          clicked={() => null}
          className={""}
          ariaLabel={"notes user"}
          tooltipText={"notes user"}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavBtn>
      </li>
    </ul>
  );
};

export default NavigationItems;
