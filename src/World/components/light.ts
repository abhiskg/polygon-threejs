import { PointLight } from "three";

const createLight = () => {
  const light = new PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  return light;
};

export { createLight };
