import React, { useEffect, useRef } from 'react';

const HeroVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderer;
    let scene;
    let camera;
    let sphere;
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

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(3, 3, 2);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(-2, -2, 4);

        scene.add(ambientLight, directionalLight, pointLight);

        const geometry = new THREE.SphereGeometry(1.1, 64, 64);
        const material = new THREE.MeshStandardMaterial({
          color: 0xa63e3e,
          roughness: 0.25,
          metalness: 0.5,
        });
        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

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
          sphere.rotation.y = time * 0.4;
          sphere.rotation.x = time * 0.25;
          sphere.position.y = Math.sin(time) * 0.15;
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
    };
  }, []);

  return (
    <div className="canvas-shell rounded-[32px] p-6 shadow-2xl">
      <div className="h-72 sm:h-80">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-[#57574f]/60 dark:text-[#f9f9f9]/60">
          <span>3D Studies</span>
          <span>Three.js</span>
        </div>
        <p className="text-base sm:text-lg font-semibold text-[#57574f] dark:text-[#f9f9f9]">
          Interactive 3D storytelling using WebGL surfaces and motion-tuned lighting.
        </p>
      </div>
    </div>
  );
};

export default HeroVisual;
