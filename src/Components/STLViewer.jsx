import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

const STLViewer = ({ src, alt }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !src) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f2e9dc");

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.HemisphereLight("#fffaf3", "#722f37", 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight("#fffaf3", 3);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 8;

    let model;
    let animationFrame;
    let disposed = false;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const loader = new STLLoader();
    loader.load(
      src,
      (geometry) => {
        if (disposed) {
          geometry.dispose();
          return;
        }

        geometry.computeVertexNormals();
        geometry.center();
        geometry.computeBoundingSphere();

        const radius = geometry.boundingSphere?.radius || 1;
        const material = new THREE.MeshStandardMaterial({
          color: "#303841",
          roughness: 0.55,
          metalness: 0.05,
        });

        model = new THREE.Mesh(geometry, material);
        model.scale.setScalar(1.8 / radius);
        scene.add(model);
        controls.target.set(0, 0, 0);
        resize();
      },
      undefined,
      (error) => {
        if (!disposed) console.error(`Unable to load STL: ${src}`, error);
      },
    );

    const animate = () => {
      if (disposed) return;
      controls.update();
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      model?.geometry.dispose();
      model?.material.dispose();
      renderer.domElement.remove();
    };
  }, [src]);

  return <div ref={containerRef} className="stl-viewer" role="img" aria-label={alt} />;
};

export default STLViewer;
