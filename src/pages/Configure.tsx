import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Palette, Settings, DollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ConfigureBackground from '@/components/ConfigureBackground';

const Configure = () => {
  const [searchParams] = useSearchParams();
  const modelName = searchParams.get('model') || 'Huracán EVO';
  
  const [selectedColor, setSelectedColor] = useState('Giallo Orion');
  const [selectedInterior, setSelectedInterior] = useState('Alcantara Black');
  const [selectedWheels, setSelectedWheels] = useState('Standard');
  const [selectedPackage, setSelectedPackage] = useState('Base');

  const colors = [
    { name: 'Giallo Orion', code: '#FFD700', price: 0 },
    { name: 'Rosso Mars', code: '#8B0000', price: 3500 },
    { name: 'Nero Nemesis', code: '#1C1C1C', price: 2500 },
    { name: 'Bianco Icarus', code: '#F8F8FF', price: 2000 },
    { name: 'Verde Mantis', code: '#228B22', price: 4000 }
  ];

  const interiors = [
    { name: 'Alcantara Black', price: 0 },
    { name: 'Leather Nero Alde', price: 5000 },
    { name: 'Leather Rosso Alala', price: 5500 },
    { name: 'Carbon Fiber Package', price: 8000 }
  ];

  const wheels = [
    { name: 'Standard', price: 0 },
    { name: '20" Giano Wheels', price: 3000 },
    { name: '20" Taigete Wheels', price: 4500 },
    { name: '20" Forged Carbon Wheels', price: 8000 }
  ];

  const packages = [
    { name: 'Base', price: 0 },
    { name: 'Sport Package', price: 15000 },
    { name: 'Track Package', price: 25000 },
    { name: 'Performante Package', price: 35000 }
  ];

  const basePrice = 206295;
  const totalPrice = basePrice + 
    colors.find(c => c.name === selectedColor)?.price +
    interiors.find(i => i.name === selectedInterior)?.price +
    wheels.find(w => w.name === selectedWheels)?.price +
    packages.find(p => p.name === selectedPackage)?.price;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <ConfigureBackground color={colors.find(c => c.name === selectedColor)?.code || '#FFD700'} />
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
              <h1 className="text-4xl font-bold text-white mb-2">Configure Your {modelName}</h1>
              <p className="text-gray-300">Customize every detail to create your perfect Lamborghini</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Car Preview */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-8">
                <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl">🏎️</div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{modelName}</h3>
                    <p className="text-yellow-400">{selectedColor}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    €{totalPrice.toLocaleString()}
                  </div>
                  <p className="text-gray-300">Total Price</p>
                </div>
              </CardContent>
            </Card>

            {/* Configuration Options */}
            <div className="space-y-6">
              {/* Exterior Color */}
              <Card className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Palette className="w-5 h-5 text-yellow-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Exterior Color</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`p-3 rounded-lg border transition-all ${
                          selectedColor === color.name
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-center">
                          <div 
                            className="w-6 h-6 rounded-full mr-3 border-2 border-gray-400"
                            style={{ backgroundColor: color.code }}
                          ></div>
                          <div className="text-left">
                            <div className="text-white font-medium">{color.name}</div>
                            <div className="text-yellow-400 text-sm">
                              {color.price > 0 ? `+€${color.price.toLocaleString()}` : 'Included'}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interior */}
              <Card className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="w-5 h-5 text-yellow-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Interior</h3>
                  </div>
                  <div className="space-y-2">
                    {interiors.map((interior) => (
                      <button
                        key={interior.name}
                        onClick={() => setSelectedInterior(interior.name)}
                        className={`w-full p-3 rounded-lg border transition-all text-left ${
                          selectedInterior === interior.name
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{interior.name}</span>
                          <span className="text-yellow-400">
                            {interior.price > 0 ? `+€${interior.price.toLocaleString()}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Wheels */}
              <Card className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Wheels</h3>
                  <div className="space-y-2">
                    {wheels.map((wheel) => (
                      <button
                        key={wheel.name}
                        onClick={() => setSelectedWheels(wheel.name)}
                        className={`w-full p-3 rounded-lg border transition-all text-left ${
                          selectedWheels === wheel.name
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{wheel.name}</span>
                          <span className="text-yellow-400">
                            {wheel.price > 0 ? `+€${wheel.price.toLocaleString()}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Package */}
              <Card className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Performance Package</h3>
                  <div className="space-y-2">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => setSelectedPackage(pkg.name)}
                        className={`w-full p-3 rounded-lg border transition-all text-left ${
                          selectedPackage === pkg.name
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{pkg.name}</span>
                          <span className="text-yellow-400">
                            {pkg.price > 0 ? `+€${pkg.price.toLocaleString()}` : 'Included'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Request Quote
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black">
                  Save Configuration
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configure;
