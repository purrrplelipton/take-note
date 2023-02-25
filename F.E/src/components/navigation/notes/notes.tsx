import { useEffect, useContext } from "react";

import { GlobalContext } from "../../../context/global_context";

import services from "../../../services/notes";
import Note from "./note/note";

import style from "./notes.module.css";

export default function Notes() {
  const wrapperClasses = [style.notesWrapper, style.singleColumnView];
  const { states, setStates } = useContext(GlobalContext);

  states.grid ? null : wrapperClasses.pop();

  useEffect(() => {
    services.getAll().then((n: []) => setStates({ notes: [...n] }));
  }, []);

  return (
    <section className={wrapperClasses.join(" ")}>
      {states.notes.map((note) => (
        <Note
          key={note.id}
          ttl={note.title}
          cntnt={note.content}
          pin={note.important}
        />
      ))}
    </section>
  );
}
