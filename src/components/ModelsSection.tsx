
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Gauge, ChevronRight } from 'lucide-react';

const ModelsSection = () => {
  const models = [
    {
      name: 'Huracán EVO',
      category: 'Super Sports Car',
      price: '€206,295',
      specs: {
        power: '630 HP',
        acceleration: '2.9s',
        topSpeed: '325 km/h'
      },
      description: 'The evolution of fun. The Huracán EVO represents the evolution of the most successful V10-powered Lamborghini ever.',
      features: ['Rear-wheel drive', 'V10 naturally aspirated', 'Advanced aerodynamics'],
      badge: 'Most Popular'
    },
    {
      name: 'Aventador SVJ',
      category: 'Ultimate Super Sports Car',
      price: '€394,000',
      specs: {
        power: '770 HP',
        acceleration: '2.8s',
        topSpeed: '350+ km/h'
      },
      description: 'The most powerful and fastest series production Lamborghini ever made.',
      features: ['All-wheel drive', 'V12 naturally aspirated', 'Track-focused'],
      badge: 'Limited Edition'
    },
    {
      name: 'Urus',
      category: 'Super SUV',
      price: '€207,326',
      specs: {
        power: '650 HP',
        acceleration: '3.6s',
        topSpeed: '305 km/h'
      },
      description: 'The world\'s first Super Sport Utility Vehicle. Unmistakable Lamborghini DNA.',
      features: ['All-terrain capability', 'V8 twin-turbo', 'Luxury interior'],
      badge: 'SUV'
    },
    {
      name: 'Huracán STO',
      category: 'Track-focused',
      price: '€249,412',
      specs: {
        power: '640 HP',
        acceleration: '3.0s',
        topSpeed: '310 km/h'
      },
      description: 'Super Trofeo Omologata. Racing technology meets road legality.',
      features: ['Race-derived', 'Lightweight', 'Aerodynamic excellence'],
      badge: 'Track Edition'
    }
  ];

  return (
    <section id="models" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OUR <span className="text-yellow-400">MODELS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of supercars, each engineered to deliver an unparalleled driving experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Card key={model.name} className="bg-black/40 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:scale-[1.02] animate-fade-up">
              <CardContent className="p-8">
                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-yellow-400 text-black font-semibold">
                    {model.badge}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-400">{model.price}</div>
                    <div className="text-sm text-gray-400">Starting from</div>
                  </div>
                </div>

                {/* Car placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl">🏎️</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    {model.name}
                  </div>
                </div>

                {/* Model info */}
                <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-yellow-400 font-medium mb-4">{model.category}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{model.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-white font-semibold">{model.specs.power}</div>
                    <div className="text-xs text-gray-400">Power</div>
                  </div>
                  <div className="text-center">
                    <Gauge className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-white font-semibold">{model.specs.acceleration}</div>
                    <div className="text-xs text-gray-400">0-100 km/h</div>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 text-yellow-400 mx-auto mb-2 flex items-center justify-center font-bold">⚡</div>
                    <div className="text-white font-semibold">{model.specs.topSpeed}</div>
                    <div className="text-xs text-gray-400">Top Speed</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {model.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link to={`/configure?model=${encodeURIComponent(model.name)}`} className="flex-1">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-300">
                      Configure
                    </Button>
                  </Link>
                  <Link to={`/learn-more?model=${encodeURIComponent(model.name)}`}>
                    <Button variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300">
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
