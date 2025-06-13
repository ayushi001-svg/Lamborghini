
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Zap, Gauge, Shield, Star, Award, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';

const LearnMore = () => {
  const [searchParams] = useSearchParams();
  const modelName = searchParams.get('model') || 'Huracán EVO';

  const modelDetails = {
    'Huracán EVO': {
      overview: 'The Huracán EVO represents the evolution of the most successful V10-powered Lamborghini ever. It features enhanced aerodynamics, improved handling, and cutting-edge technology.',
      engine: {
        type: 'V10 naturally aspirated',
        displacement: '5.2L',
        power: '630 HP @ 8,000 rpm',
        torque: '600 Nm @ 6,500 rpm'
      },
      performance: {
        acceleration: '2.9 seconds (0-100 km/h)',
        topSpeed: '325 km/h',
        transmission: '7-speed dual-clutch automatic',
        drivetrain: 'All-wheel drive'
      },
      features: [
        'Lamborghini Dinamica Veicolo Integrata (LDVI)',
        'Lamborghini Active Aerodynamics (ALA)',
        'Advanced traction control system',
        'Magnetic ride suspension',
        'Carbon fiber components',
        '8.4" touchscreen infotainment'
      ],
      specifications: {
        length: '4,520 mm',
        width: '1,933 mm',
        height: '1,165 mm',
        wheelbase: '2,620 mm',
        weight: '1,422 kg',
        fuelCapacity: '83 liters'
      }
    }
  };

  const details = modelDetails[modelName] || modelDetails['Huracán EVO'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <div className="pt-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mr-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Models
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{modelName}</h1>
              <p className="text-gray-300">Discover the engineering excellence behind this masterpiece</p>
            </div>
          </div>

          {/* Hero Image */}
          <Card className="bg-black/40 border-gray-700 mb-8">
            <CardContent className="p-8">
              <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-9xl">🏎️</div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold">{modelName}</h2>
                  <p className="text-yellow-400 text-lg">Pure Italian Excellence</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Overview */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{details.overview}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{details.engine.power.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">Horsepower</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Gauge className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{details.performance.acceleration.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">0-100 km/h</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engine Specifications */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-yellow-400 mr-2" />
                  <h3 className="text-2xl font-bold text-white">Engine</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Type</span>
                    <span className="text-white font-medium">{details.engine.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Displacement</span>
                    <span className="text-white font-medium">{details.engine.displacement}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Max Power</span>
                    <span className="text-white font-medium">{details.engine.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Max Torque</span>
                    <span className="text-white font-medium">{details.engine.torque}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-yellow-400 mr-2" />
                  <h3 className="text-2xl font-bold text-white">Performance</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">0-100 km/h</span>
                    <span className="text-white font-medium">{details.performance.acceleration}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Top Speed</span>
                    <span className="text-white font-medium">{details.performance.topSpeed}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Transmission</span>
                    <span className="text-white font-medium">{details.performance.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Drivetrain</span>
                    <span className="text-white font-medium">{details.performance.drivetrain}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Length</span>
                    <span className="text-white font-medium">{details.specifications.length}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Width</span>
                    <span className="text-white font-medium">{details.specifications.width}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Height</span>
                    <span className="text-white font-medium">{details.specifications.height}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Wheelbase</span>
                    <span className="text-white font-medium">{details.specifications.wheelbase}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Dry Weight</span>
                    <span className="text-white font-medium">{details.specifications.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Fuel Capacity</span>
                    <span className="text-white font-medium">{details.specifications.fuelCapacity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card className="bg-black/40 border-gray-700 mt-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-2xl font-bold text-white">Key Features</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 mb-12">
            <Link to={`/configure?model=${encodeURIComponent(modelName)}`} className="flex-1">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                Configure This Model
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black">
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
