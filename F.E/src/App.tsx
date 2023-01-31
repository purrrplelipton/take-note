import { Fragment } from "react";
import "./App.css";

import Layout from "./components/layout/layout";
import NoteCreator from "./components/note_creator/note_creator";

function App() {
  return (
    <Fragment>
      <Layout>
        <NoteCreator />
      </Layout>
    </Fragment>
  );
}

export default App;
