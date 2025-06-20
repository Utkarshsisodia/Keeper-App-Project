import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map(note => <Notes key={note.key} title={note.title} content={note.content}/>)}
      <Footer />
    </>
  );
}

export default App;
