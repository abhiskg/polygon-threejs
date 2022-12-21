import { createCamera } from "./components/camera";
import { createLight } from "./components/light";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";

let camera: any;
let renderer: any;
let scene: any;
let light;

class World {
  constructor(container: any) {
    camera = createCamera();
    scene = createScene();
    light = createLight();
    renderer = createRenderer();
    container.append(renderer.domElement);
  }
  render() {
    renderer.render(scene, camera);
  }
}

export { World };
