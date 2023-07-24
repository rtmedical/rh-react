import * as cornerstone from "@cornerstonejs/core";
import * as cornerstoneTools from "@cornerstonejs/tools";
import initCornerstoneWadoImageLoader from "./initCornerstoneWadoImageLoader";

export default async function initCS() {
  initCornerstoneWadoImageLoader();
  await cornerstone.init();
  await cornerstoneTools.init();
}
