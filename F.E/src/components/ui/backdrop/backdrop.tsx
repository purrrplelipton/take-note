import { useContext } from "react";

import { GlobalContext } from "../../../context/global_context";

import style from "./backdrop.module.css";

function Backdrop() {
  const { states, setStates } = useContext(GlobalContext);
  return states.visible ? (
    <i
      className={style.backdrop}
      onClick={() => setStates({ visible: false })}
    ></i>
  ) : null;
}

export default Backdrop;
