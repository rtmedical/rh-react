import { useEffect } from "react";
import initCS from "./helpers/initCS";
import {
  renderImage,
  rotateImage,
  applyCrosshair,
} from "./utils/stackManipulation";

import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  useEffect(() => {
    async function initCsAndCsTools() {
      await initCS();
    }

    initCsAndCsTools();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="actions">
          <button onClick={() => renderImage()}>Carregar imagem</button>
          <button onClick={() => rotateImage()}>Rotacionar imagem</button>
          <button onClick={() => applyCrosshair()}>Aplicar crosshair</button>
        </div>

        <div
          id="dicomViewer"
          style={{ width: "780px", height: "500px", background: "black" }}
        />
      </div>
    </div>
  );
};

export default App;
