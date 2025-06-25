import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TestDriveBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | undefined;
    let frameId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let lines: THREE.Line[] = [];
    const lineCount = 18;

    if (mountRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
      camera.position.z = 100;
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);
      // Create glowing lines
      for (let i = 0; i < lineCount; i++) {
        const y = (Math.random() - 0.5) * 120;
        const z = (Math.random() - 0.5) * 100;
        const color = i % 3 === 0 ? 0xffd700 : 0xffffff;
        const material = new THREE.LineBasicMaterial({ color, linewidth: 2, transparent: true, opacity: 0.7 });
        const points = [
          new THREE.Vector3(-120, y, z),
          new THREE.Vector3(120, y, z)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        (line as any).speed = 0.7 + Math.random() * 1.2;
        scene.add(line);
        lines.push(line);
      }
      const animate = () => {
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          line.position.x += (line as any).speed;
          if (line.position.x > 120) line.position.x = -120;
        }
        renderer!.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();
      const handleResize = () => {
        if (!renderer) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        if (renderer && renderer.domElement) {
          renderer.domElement.remove();
        }
        cancelAnimationFrame(frameId);
      };
    }
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};

export default TestDriveBackground; 