import Note from "./note/note";

export default function Notes(props: object) {
  return (
    <section className={"notes-wrapper"}>
      {props.notes?.map((n) => (
        <Note key={n.id} />
      ))}
    </section>
  );
}
