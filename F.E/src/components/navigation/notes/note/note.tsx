import NavBtn from "../../../ui/buttons/nav_btn";

import { PushPin, PushPinOutlined } from "@mui/icons-material";

import style from "./note.module.css";

interface NoteProps {
  ttl: string;
  cntnt: string;
  pin: boolean;
}

export default function Note({ ttl, cntnt, pin }: NoteProps) {
  return (
    <div className={style.note}>
      <section>
        <h2>{ttl}</h2>
        <NavBtn
          className={""}
          ariaLabel={pin ? "unpin note" : "pin note"}
          clicked={() => null}
        >
          {pin ? <PushPin /> : <PushPinOutlined />}
        </NavBtn>
      </section>
      <p>{cntnt}</p>
    </div>
  );
}
