
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Star, Zap, Gauge, Car } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Legendary Performance',
      description: 'Experience the raw power of our naturally aspirated V10 and V12 engines, delivering unmatched performance and that unmistakable Lamborghini sound.',
      stats: '770 HP Max Power'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Accelerate from 0-100 km/h in just 2.8 seconds with our advanced all-wheel drive systems and cutting-edge aerodynamics.',
      stats: '2.8s 0-100 km/h'
    },
    {
      icon: Shield,
      title: 'Italian Craftsmanship',
      description: 'Every Lamborghini is meticulously handcrafted in Sant\'Agata Bolognese, combining traditional Italian artistry with modern technology.',
      stats: '100% Handcrafted'
    },
    {
      icon: Star,
      title: 'Exclusive Design',
      description: 'Distinctive angular design language that makes every Lamborghini instantly recognizable and truly one-of-a-kind on the road.',
      stats: 'Iconic Design DNA'
    },
    {
      icon: Car,
      title: 'Advanced Technology',
      description: 'State-of-the-art driving dynamics with multiple driving modes, advanced traction control, and sophisticated suspension systems.',
      stats: '7 Driving Modes'
    },
    {
      icon: Gauge,
      title: 'Track Performance',
      description: 'Born on the track, perfected for the road. Our cars deliver professional racing performance in a road-legal package.',
      stats: 'Track-Proven Tech'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WHAT MAKES US <span className="text-yellow-400">EXTRAORDINARY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the engineering excellence and Italian passion that goes into every Lamborghini.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-black/40 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:scale-105 animate-fade-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <div className="text-yellow-400 font-semibold text-sm">{feature.stats}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                    <span>Learn More</span>
                    <div className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform">→</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-up">
            <div className="text-4xl font-bold text-yellow-400 mb-2">60+</div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          <div className="animate-fade-up">
            <div className="text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
            <div className="text-gray-300">Cars Delivered</div>
          </div>
          <div className="animate-fade-up">
            <div className="text-4xl font-bold text-yellow-400 mb-2">350+</div>
            <div className="text-gray-300">km/h Top Speed</div>
          </div>
          <div className="animate-fade-up">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
