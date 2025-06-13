import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Zap, Gauge, Shield, Star, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModelsSection from '@/components/ModelsSection';
import ConfiguratorSection from '@/components/ConfiguratorSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll animations
      gsap.from('.animate-fade-up', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.animate-fade-up',
          start: 'top 80%',
        }
      });

      // Hero animations
      gsap.timeline()
        .from('.hero-title', { y: 100, opacity: 0, duration: 1.5, ease: 'power3.out' })
        .from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, ease: 'power2.out' }, '-=1')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      <HeroSection />
      <ModelsSection />
      <ConfiguratorSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
