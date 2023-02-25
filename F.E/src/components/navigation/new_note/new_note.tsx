import { Fragment } from "react";

import {
  ArrowBack,
  PushPinOutlined,
  PushPin,
  AddAlertOutlined,
  AddAlert,
  ArchiveOutlined,
  Archive,
} from "@mui/icons-material";
import NavBtn from "../../ui/buttons/nav_btn";

const New_Note = () => {
  return (
    <Fragment>
      <header>
        <ul>
          <li>
            <NavBtn className={""} clicked={() => null} ariaLabel={"go back"}>
              <ArrowBack />
            </NavBtn>
          </li>
        </ul>
        <ul>
          <li>
            <NavBtn className={""} clicked={() => null} ariaLabel={"Pin"}>
              <PushPinOutlined />
            </NavBtn>
          </li>
          <li>
            <NavBtn className={""} clicked={() => null} ariaLabel={"Reminder"}>
              <AddAlertOutlined />
            </NavBtn>
          </li>
          <li>
            <NavBtn className={""} clicked={() => null} ariaLabel={"Archive"}>
              <ArchiveOutlined />
            </NavBtn>
          </li>
        </ul>
      </header>
      <main>
        <form action={"POST"}>
          <input
            type={"text"}
            name={"note title"}
            id={"title"}
            placeholder={"Title"}
          />
          <input
            type={"text"}
            name={"note content"}
            id={"note"}
            placeholder={"Note"}
          />
        </form>
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default New_Note;
