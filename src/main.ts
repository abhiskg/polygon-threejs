import {
  Scene,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  PointLight,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new Scene();

const canvas = document.querySelector("#webgl") as HTMLElement;
// Create our sphere
const geometry = new SphereGeometry(3, 64, 30);
const material = new MeshStandardMaterial({
  color: "#00ff83",
});

const mesh = new Mesh(geometry, material);
scene.add(mesh);

// light
const light = new PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera

const camera = new PerspectiveCamera(
  45,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  100
);
2;
// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.z = 20;
scene.add(camera);

// renderer
const renderer = new WebGLRenderer();
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
canvas.append(renderer.domElement);
// finally, set the pixel ratio so that our scene will look good on HiDPI displays otherwise will be blurry on mobile devices
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.update();

const loop = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();
