import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight } from 'lucide-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const [modelError, setModelError] = React.useState(false);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Floating animation for the car
      gsap.to(carRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    // THREE.js 3D Scene
    let renderer: THREE.WebGLRenderer | undefined;
    let controls: OrbitControls | undefined;
    let frameId: number;
    let carModel: THREE.Group | undefined;
    if (threeCanvasRef.current) {
      const width = threeCanvasRef.current.clientWidth;
      const height = threeCanvasRef.current.clientHeight;
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x18181b);
      // Camera
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(0, 1.5, 8);
      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x18181b, 1);
      renderer.shadowMap.enabled = true;
      threeCanvasRef.current.appendChild(renderer.domElement);
      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
      scene.add(ambientLight);
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
      hemiLight.position.set(0, 20, 0);
      scene.add(hemiLight);
      const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
      dirLight1.position.set(10, 20, 10);
      dirLight1.castShadow = true;
      scene.add(dirLight1);
      const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight2.position.set(-10, 10, -10);
      scene.add(dirLight2);
      // Ground plane for shadow
      const groundGeo = new THREE.PlaneGeometry(20, 20);
      const groundMat = new THREE.ShadowMaterial({ opacity: 0.18 });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.position.y = -0.5;
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);
      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = false;
      controls.minDistance = 5;
      controls.maxDistance = 15;
      controls.target.set(0, 0.5, 0);
      controls.update();
      // Load Lamborghini model
      const loader = new GLTFLoader();
      loader.load(
        '/lamborghini.glb',
        (gltf) => {
          carModel = gltf.scene;
          // Get bounding box and size
          const box = new THREE.Box3().setFromObject(carModel);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          // Center the model
          carModel.position.x += (0 - center.x);
          carModel.position.y += (0.1 - center.y);
          carModel.position.z += (0 - center.z);
          // Auto-scale to fit in box (80% of canvas height)
          const maxDim = Math.max(size.x, size.y, size.z);
          const targetSize = 3.2; // Target size for the largest dimension (adjust for padding)
          let scale = targetSize / maxDim;
          scale *= 1.3; // Increase size by 1.3x
          carModel.scale.set(scale, scale, scale);
          // Camera distance based on scaled size
          const fov = camera.fov * (Math.PI / 180);
          const cameraZ = (targetSize / 2) / Math.tan(fov / 2) + 1.2; // 1.2 = extra padding
          camera.position.set(0, 0.7, cameraZ);
          controls.target.set(0, 0.5, 0);
          controls.update();
          // Restore original materials
          carModel.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              let mat = mesh.material as THREE.MeshStandardMaterial;
              // If material is black or fully transparent, use fallback
              if (
                (mat.color && mat.color.r === 0 && mat.color.g === 0 && mat.color.b === 0) ||
                (mat.opacity !== undefined && mat.opacity === 0)
              ) {
                mesh.material = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.7, roughness: 0.3 });
              }
              mesh.castShadow = true;
              mesh.receiveShadow = true;
            }
          });
          scene.add(carModel);
        },
        undefined,
        (error) => {
          setModelError(true);
        }
      );
      // Animation
      const animate = () => {
        if (carModel) {
          carModel.rotation.y += 0.004;
        }
        controls && controls.update();
        renderer!.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();
      // Cleanup
      return () => {
        ctx.revert();
        if (renderer && renderer.domElement) {
          renderer.domElement.remove();
        }
        if (controls) controls.dispose();
        cancelAnimationFrame(frameId);
      };
    }
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-yellow-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              UNLEASH THE
              <span className="text-yellow-400 block">EXTRAORDINARY</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience the pinnacle of automotive excellence with our exclusive collection of Lamborghini supercars.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Explore Models
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Experience
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">630+</div>
                <div className="text-gray-400">Horsepower</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2.9s</div>
                <div className="text-gray-400">0-100 km/h</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">325</div>
                <div className="text-gray-400">km/h Top Speed</div>
              </div>
            </div>
          </div>

          {/* Car Visual */}
          <div className="relative">
            <div ref={carRef} className="relative z-10">
              {/* 3D Canvas for Lamborghini (Three.js) */}
              <div
                ref={threeCanvasRef}
                className="mx-auto aspect-video max-w-2xl w-full h-auto min-h-[340px] rounded-xl overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-800 flex items-center justify-center"
                style={{ background: '#18181b' }}
              >
                {modelError && (
                  <div className="text-white text-center w-full p-8">3D Lamborghini model failed to load.</div>
                )}
              </div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 text-center text-black font-bold text-2xl mt-4 shadow-lg">
                LAMBORGHINI AVENTADOR
                <div className="text-sm font-normal mt-2">Starting from €206,295</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border border-yellow-400/30 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-yellow-400/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
