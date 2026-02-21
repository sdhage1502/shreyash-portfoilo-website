import React, { useEffect, useRef } from 'react';

const HeroVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderer;
    let scene;
    let camera;
    let coreMesh;
    let orbitRing;
    let haloRing;
    let orbitNodes = [];
    let animationFrame;
    let isMounted = true;
    let removeResizeListener;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    const initScene = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.min.js');
        if (!isMounted || !window.THREE || !canvasRef.current) return;
        const { THREE } = window;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 3.2;

        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio || 1);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
        const directionalLight = new THREE.DirectionalLight(0xfff2ea, 1.15);
        directionalLight.position.set(3, 3, 2);
        const pointLight = new THREE.PointLight(0xa63e3e, 0.7);
        pointLight.position.set(-2, -2, 4);

        scene.add(ambientLight, directionalLight, pointLight);

        const coreGeometry = new THREE.IcosahedronGeometry(0.85, 1);
        const coreMaterial = new THREE.MeshStandardMaterial({
          color: 0xa63e3e,
          roughness: 0.35,
          metalness: 0.55,
          flatShading: true,
        });

        coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
        scene.add(coreMesh);

        haloRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.95, 0.02, 18, 140),
          new THREE.MeshStandardMaterial({
            color: 0xffd2d2,
            roughness: 0.55,
            metalness: 0.2,
          })
        );
        haloRing.rotation.y = Math.PI / 2;
        scene.add(haloRing);

        const ringGeometry = new THREE.TorusGeometry(1.45, 0.045, 24, 160);
        const ringMaterial = new THREE.MeshStandardMaterial({
          color: 0xf0d7d7,
          roughness: 0.5,
          metalness: 0.25,
        });
        orbitRing = new THREE.Mesh(ringGeometry, ringMaterial);
        orbitRing.rotation.x = Math.PI / 2.8;
        scene.add(orbitRing);

        const nodeColors = [0xff8a8a, 0xa63e3e, 0xf9f9f9, 0xc79191];
        orbitNodes = nodeColors.map((nodeColor) => {
          const node = new THREE.Mesh(
            new THREE.BoxGeometry(0.24, 0.24, 0.24),
            new THREE.MeshStandardMaterial({
              color: nodeColor,
              roughness: 0.2,
              metalness: 0.6,
            })
          );
          scene.add(node);
          return node;
        });

        const resize = () => {
          if (!canvasRef.current || !canvasRef.current.parentElement) return;
          const { clientWidth, clientHeight } = canvasRef.current.parentElement;
          renderer.setSize(clientWidth, clientHeight);
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
        };

        resize();
        window.addEventListener('resize', resize);
        removeResizeListener = () => window.removeEventListener('resize', resize);

        const animate = () => {
          if (!isMounted) return;
          const time = performance.now() * 0.001;

          coreMesh.rotation.y = time * 0.45;
          coreMesh.rotation.x = time * 0.23;
          coreMesh.position.y = Math.sin(time * 1.2) * 0.08;

          haloRing.rotation.z = -time * 0.5;
          haloRing.rotation.x = Math.sin(time * 0.7) * 0.25;

          orbitRing.rotation.z = time * 0.32;
          orbitRing.rotation.y = Math.sin(time * 0.25) * 0.22;

          const orbitRadius = 1.45;
          orbitNodes.forEach((node, index) => {
            const angle = time * 0.95 + (index * (Math.PI * 2)) / orbitNodes.length;
            node.position.set(
              Math.cos(angle) * orbitRadius,
              Math.sin(angle * 1.15) * 0.32,
              Math.sin(angle) * orbitRadius
            );
            node.rotation.x = time * 0.8 + index;
            node.rotation.y = time * 0.6 + index * 0.5;
          });

          renderer.render(scene, camera);
          animationFrame = requestAnimationFrame(animate);
        };
        animate();

      } catch (error) {
        console.error('Failed to load Three.js', error);
      }
    };

    initScene();

    return () => {
      isMounted = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (removeResizeListener) {
        removeResizeListener();
      }
      if (renderer) {
        renderer.dispose();
      }
      orbitNodes = [];
    };
  }, []);

  return (
    <div className="canvas-shell rounded-[32px] p-6 shadow-2xl">
      <div className="h-72 sm:h-80">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-[#57574f]/60 dark:text-[#f9f9f9]/60">
          <span>Experience Constellation</span>
          <span>Three.js</span>
        </div>
        <p className="text-base sm:text-lg font-semibold text-[#57574f] dark:text-[#f9f9f9]">
          MCA core at center, with orbiting nodes for Next.js, backend APIs, and Web3 projects from my GitHub + LinkedIn journey.
        </p>
      </div>
    </div>
  );
};

export default HeroVisual;
