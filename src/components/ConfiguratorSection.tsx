
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ConfiguratorSection = () => {
  const [selectedModel, setSelectedModel] = useState('huracan');
  const [selectedColor, setSelectedColor] = useState('giallo');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const models = {
    huracan: { name: 'Huracán EVO', basePrice: 206295 },
    aventador: { name: 'Aventador SVJ', basePrice: 394000 },
    urus: { name: 'Urus', basePrice: 207326 }
  };

  const colors = [
    { id: 'giallo', name: 'Giallo Orion', hex: '#FFD700', price: 0 },
    { id: 'nero', name: 'Nero Nemesis', hex: '#1a1a1a', price: 0 },
    { id: 'bianco', name: 'Bianco Icarus', hex: '#f8f8ff', price: 2500 },
    { id: 'rosso', name: 'Rosso Mars', hex: '#dc143c', price: 3500 },
    { id: 'verde', name: 'Verde Mantis', hex: '#228b22', price: 4000 }
  ];

  const options = [
    { id: 'carbon-fiber', name: 'Carbon Fiber Package', price: 15000 },
    { id: 'sport-exhaust', name: 'Sport Exhaust System', price: 8500 },
    { id: 'alcantara', name: 'Alcantara Interior', price: 12000 },
    { id: 'lifting-system', name: 'Nose Lifting System', price: 3500 },
    { id: 'branding-package', name: 'Branding Package', price: 2500 },
    { id: 'performance-tires', name: 'High Performance Tires', price: 5500 }
  ];

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const calculateTotal = () => {
    const basePrice = models[selectedModel as keyof typeof models].basePrice;
    const colorPrice = colors.find(c => c.id === selectedColor)?.price || 0;
    const optionsPrice = selectedOptions.reduce((total, optionId) => {
      const option = options.find(o => o.id === optionId);
      return total + (option?.price || 0);
    }, 0);
    return basePrice + colorPrice + optionsPrice;
  };

  return (
    <section id="configure" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            BUILD YOUR <span className="text-yellow-400">DREAM CAR</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Customize every detail of your Lamborghini to match your unique style and preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Car Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border-gray-700 h-full">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <div 
                    className="w-32 h-32 rounded-lg flex items-center justify-center text-4xl"
                    style={{ backgroundColor: colors.find(c => c.id === selectedColor)?.hex }}
                  >
                    🏎️
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-400 text-black font-semibold">
                      {models[selectedModel as keyof typeof models].name}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <div className="text-2xl font-bold">€{calculateTotal().toLocaleString()}</div>
                    <div className="text-sm text-gray-300">Total Price</div>
                  </div>
                </div>

                {/* Model Selection */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Select Model</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(models).map(([key, model]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedModel(key)}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          selectedModel === key
                            ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                            : 'border-gray-600 bg-gray-800/50 text-white hover:border-gray-500'
                        }`}
                      >
                        <div className="font-semibold">{model.name}</div>
                        <div className="text-sm text-gray-400">€{model.basePrice.toLocaleString()}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Exterior Color</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          selectedColor === color.id
                            ? 'border-yellow-400 scale-105'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div
                          className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-white/20"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <div className="text-xs text-white font-medium">{color.name}</div>
                        {color.price > 0 && (
                          <div className="text-xs text-yellow-400">+€{color.price.toLocaleString()}</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Options Panel */}
          <div>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Additional Options</h3>
                
                <div className="space-y-3 mb-6">
                  {options.map((option) => (
                    <div
                      key={option.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedOptions.includes(option.id)
                          ? 'border-yellow-400 bg-yellow-400/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      onClick={() => toggleOption(option.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-white font-medium">{option.name}</div>
                          <div className="text-yellow-400 font-semibold">+€{option.price.toLocaleString()}</div>
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedOptions.includes(option.id)
                            ? 'border-yellow-400 bg-yellow-400'
                            : 'border-gray-400'
                        }`}>
                          {selectedOptions.includes(option.id) && (
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Summary */}
                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Base Price</span>
                    <span>€{models[selectedModel as keyof typeof models].basePrice.toLocaleString()}</span>
                  </div>
                  {colors.find(c => c.id === selectedColor)?.price > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Color Option</span>
                      <span>€{colors.find(c => c.id === selectedColor)?.price.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedOptions.map(optionId => {
                    const option = options.find(o => o.id === optionId);
                    return option ? (
                      <div key={optionId} className="flex justify-between text-gray-300">
                        <span>{option.name}</span>
                        <span>€{option.price.toLocaleString()}</span>
                      </div>
                    ) : null;
                  })}
                  <div className="border-t border-gray-600 pt-2 flex justify-between text-xl font-bold text-yellow-400">
                    <span>Total</span>
                    <span>€{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 transition-all duration-300 hover:scale-105">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorSection;
