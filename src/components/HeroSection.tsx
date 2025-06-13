
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
              <div className="w-full h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 text-center text-black font-bold text-2xl">
                🏎️ HURACÁN EVO
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
