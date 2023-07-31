import './App.css';
import initCornerStone from "./helpers/initCornerStone";
import { useEffect } from "react";
import {
  RenderingEngine,
  Enums,
  getRenderingEngine,
} from "@cornerstonejs/core";
import setCtTransferFunctionForVolumeActor from './helpers/setCtTransferFunctionForVolumeActor';
import initVolumeLoader from './helpers/initVolumeLoader';

function App() {

  async function init() {
    await initCornerStone();
  }

  useEffect(() => {
    init();
    initVolumeLoader();
  }, []);

  const renderingEngineId = "myRenderingEngine";
  const viewportId = "CT_AXIAL_STACK";


  const renderImage = () =>{
    const element = document.querySelector(".image");
    // element.style.width = '500px' ;
    // element.style.height = '500px';

    const renderingEngine = new RenderingEngine(renderingEngineId);

    const viewportInput = { viewportId, element, type: Enums.ViewportType.STACK, };

    renderingEngine.enableElement(viewportInput);

    const viewport = renderingEngine.getViewport(viewportInput.viewportId);

    const url = ["wadouri:http://localhost:9999"]

    viewport.setStack(url);

    viewport.render();
  }

  const rotateImage = () =>{
    const renderingEngine = getRenderingEngine(renderingEngineId);
  
    const viewport = renderingEngine.getViewport(viewportId);
  
    const { rotation } = viewport.getProperties();

    viewport.setProperties({ rotation: rotation + 90 });
  
    viewport.render();
  }

  // const renderVolume = async () =>{
  //   const element = document.querySelector(".image");
  //   const imageIds = ["wadouri:http://localhost:9999"]

  //   const renderingEngineId = 'myRenderingEngine';
  //   const renderingEngine = new RenderingEngine(renderingEngineId);
  
  //   const viewportId = 'CT_SAGITTAL_STACK';
  //   const viewportInput = {
  //     viewportId,
  //     type: Enums.ViewportType.ORTHOGRAPHIC,
  //     element,
  //     defaultOptions: {
  //       orientation: Enums.OrientationAxis.SAGITTAL,
  //     },
  //   };
  
  //   renderingEngine.enableElement(viewportInput);
  
  //   const viewport = (
  //     renderingEngine.getViewport(viewportId)
  //   );
  
  //   const volumeName = 'My_volumn'; // Id of the volume less loader prefix
  //   const volumeLoaderScheme = 'cornerstoneStreamingImageVolume'; // Loader id which defines which volume loader to use
  //   const volumeId = `${volumeLoaderScheme}:${volumeName}`; // VolumeId with loader id + volume id
  
  //   const volume = await volumeLoader.createAndCacheVolume(volumeId, {
  //     imageIds,
  //   });
  
  //   volume.load();
  
  //   viewport.setVolumes([
  //     { volumeId, callback: setCtTransferFunctionForVolumeActor },
  //   ]);
  //   viewport.render();
  // }


 
  return (
    <div className="app">
      <div className="buttons">
          <button onClick={() => renderImage()} >Load image</button>
          <button onClick={() => rotateImage()} >Rotate image</button>
          {/* Faltou a implementação do crosshair*/}
          {/* <button onClick={() => renderVolume()}>Render volume</button> */}
          {/* <button onClick={() => crosshair()}>Crosshair</button> */}
      </div>
      <div className="imageContainer">
        <div className="image"></div >
      </div>
    </div>
  );
}

export default App;
