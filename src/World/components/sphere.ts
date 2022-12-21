import { Mesh, MeshStandardMaterial, SphereGeometry } from "three";

const createSphere = () => {
  const geometry = new SphereGeometry(3, 64, 30);
  const material = new MeshStandardMaterial({
    color: "#00ff83",
  });

  const sphere = new Mesh(geometry, material);
  return sphere;
};

export { createSphere };
