import {
  RenderingEngine,
  Enums,
  getRenderingEngine,
} from "@cornerstonejs/core";

const renderingEngineId = "myRenderingEngine";
const viewportId = "CT_AXIAL_STACK";

export function renderImage() {
  const element = document.getElementById("dicomViewer");
  const { ViewportType } = Enums;

  const renderingEngine = new RenderingEngine(renderingEngineId);

  const viewportInput = {
    viewportId,
    element,
    type: ViewportType.STACK,
  };

  renderingEngine.enableElement(viewportInput);

  const viewport = renderingEngine.getViewport(viewportInput.viewportId);

  viewport.setStack(["wadouri:http://localhost:9999"]);

  viewport.render();
}

export function rotateImage() {
  const renderingEngine = getRenderingEngine(renderingEngineId);

  if (!renderingEngine) {
    alert("Carregue primeiro a imagem");
    return;
  }
  // Get the stack viewport
  const viewport = renderingEngine.getViewport(viewportId);

  const { rotation } = viewport.getProperties();
  viewport.setProperties({ rotation: rotation + 180 });

  viewport.render();
}

//not implemented
export function applyCrosshair() {}
