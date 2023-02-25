import {
  CheckBoxOutlined,
  Brush,
  MicNoneOutlined,
  ImageOutlined,
  NoteAddOutlined,
} from "@mui/icons-material";

import style from "./options_bar.module.css";
import NavBtn from "../../ui/buttons/nav_btn";

const Options_Bar = () => {
  return (
    <section className={style.modeSection}>
      <ul>
        <li>
          <NavBtn className={""} ariaLabel={"New list"} clicked={() => null}>
            <CheckBoxOutlined />
          </NavBtn>
        </li>
        <li>
          <NavBtn
            className={""}
            ariaLabel={"New drawing note"}
            clicked={() => null}
          >
            <Brush />
          </NavBtn>
        </li>
        <li>
          <NavBtn
            className={""}
            ariaLabel={"New audio note"}
            clicked={() => null}
          >
            <MicNoneOutlined />
          </NavBtn>
        </li>
        <li>
          <NavBtn
            className={""}
            ariaLabel={"New photo note"}
            clicked={() => null}
          >
            <ImageOutlined />
          </NavBtn>
        </li>
      </ul>
      <NavBtn className={""} ariaLabel={"New text note"} clicked={() => null}>
        <NoteAddOutlined />
      </NavBtn>
    </section>
  );
};

export default Options_Bar;
