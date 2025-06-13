
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, Star, Crown, Car, Phone, Mail, User } from 'lucide-react';

const BookTestDrive = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isVIP, setIsVIP] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    location: ''
  });

  const models = [
    { name: 'Huracán', price: '€200,000' },
    { name: 'Aventador', price: '€350,000' },
    { name: 'Urus', price: '€250,000' },
    { name: 'Revuelto', price: '€500,000' }
  ];

  const locations = [
    'Milan Showroom',
    'Rome Showroom', 
    'Bologna Factory',
    'Monaco Dealership'
  ];

  const vipBenefits = [
    'Priority scheduling',
    'Dedicated VIP lounge',
    'Complimentary refreshments',
    'Private track access',
    'Personal concierge service',
    'Premium gift package'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test drive booking:', { ...formData, model: selectedModel, vip: isVIP });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="relative bg-black/40 py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              BOOK YOUR <span className="text-yellow-400">TEST DRIVE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the thrill of Lamborghini. Schedule your exclusive test drive and feel the power of Italian engineering.
            </p>
          </div>
        </div>
      </div>

      {/* VIP Toggle Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <Card className="bg-black/40 border-gray-700 max-w-md">
              <CardContent className="p-6 text-center">
                <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">VIP Experience</h3>
                <p className="text-gray-300 mb-6">Upgrade to our exclusive VIP test drive experience</p>
                <Button 
                  onClick={() => setIsVIP(!isVIP)}
                  className={`w-full ${isVIP ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'} hover:bg-yellow-500`}
                >
                  {isVIP ? 'VIP Selected' : 'Select VIP Experience'}
                </Button>
                {isVIP && (
                  <Badge className="mt-4 bg-yellow-400 text-black font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    VIP Member
                  </Badge>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VIP Benefits Section */}
      {isVIP && (
        <section className="py-16 bg-gradient-to-r from-yellow-900/20 to-yellow-800/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Crown className="inline w-8 h-8 mr-2 text-yellow-400" />
                VIP EXCLUSIVE BENEFITS
              </h2>
              <p className="text-xl text-gray-300">Experience Lamborghini like never before</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {vipBenefits.map((benefit, index) => (
                <Card key={index} className="bg-black/40 border-yellow-400/30 hover:border-yellow-400/60 transition-all">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <p className="text-white font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/40 border-gray-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white text-center">
                  <Car className="inline w-8 h-8 mr-2 text-yellow-400" />
                  Book Your Test Drive
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-yellow-400 font-semibold mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  {/* Car Selection */}
                  <div>
                    <label className="block text-yellow-400 font-semibold mb-3">
                      <Car className="inline w-4 h-4 mr-2" />
                      Select Model
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {models.map((model) => (
                        <Card 
                          key={model.name}
                          className={`cursor-pointer transition-all ${
                            selectedModel === model.name 
                              ? 'bg-yellow-400/20 border-yellow-400' 
                              : 'bg-gray-800 border-gray-600 hover:border-yellow-400/50'
                          }`}
                          onClick={() => setSelectedModel(model.name)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-white font-semibold">{model.name}</h4>
                                <p className="text-gray-400 text-sm">Starting from {model.price}</p>
                              </div>
                              {selectedModel === model.name && (
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2">
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Preferred Date
                      </label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-400 font-semibold mb-2">
                        <Clock className="inline w-4 h-4 mr-2" />
                        Preferred Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border-gray-600 text-white rounded-md px-3 py-2"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-yellow-400 font-semibold mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border-gray-600 text-white rounded-md px-3 py-2"
                      required
                    >
                      <option value="">Select location</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className={`w-full py-4 text-lg font-semibold transition-all ${
                      isVIP 
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600' 
                        : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                    }`}
                  >
                    {isVIP ? (
                      <>
                        <Crown className="mr-2 w-5 h-5" />
                        Book VIP Test Drive
                      </>
                    ) : (
                      'Book Test Drive'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookTestDrive;
