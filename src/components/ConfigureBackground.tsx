import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ConfigureBackgroundProps {
  color?: string;
}

const ConfigureBackground: React.FC<ConfigureBackgroundProps> = ({ color = '#FFD700' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | undefined;
    let frameId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let particles: THREE.Points;
    let geometry: THREE.BufferGeometry;
    const particleCount = 120;

    if (mountRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
      camera.position.z = 120;
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color, size: 2.5, opacity: 0.6, transparent: true });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      const animate = () => {
        const positions = geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += 0.06 * Math.sin(Date.now() * 0.0007 + i);
          if (positions[i * 3 + 1] > 70) positions[i * 3 + 1] = -60;
        }
        geometry.attributes.position.needsUpdate = true;
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
  }, [color]);

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

export default ConfigureBackground; 