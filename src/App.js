import Dropzone from "./components/Dropzone";
import './styles/styles.scss'

function App() {
  return (
    <div className="dropZone-app">
    <p className="title">React Drag and Drop image Upload</p>
    <div className="content">
      <Dropzone />
    </div>
  </div>
  );
}

export default App;
