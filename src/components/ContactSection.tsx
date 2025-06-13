
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Calendar, Car } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'test-drive',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Showroom Location',
      details: ['Via Modena 12', 'Sant\'Agata Bolognese', 'Bologna, Italy']
    },
    {
      icon: Phone,
      title: 'Contact Number',
      details: ['+39 051 9596111', 'Monday - Saturday', '9:00 AM - 7:00 PM']
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@lamborghini.com', 'sales@lamborghini.com', 'service@lamborghini.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Saturday: 9:00 AM - 6:00 PM', 'Sunday: By Appointment']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GET IN <span className="text-yellow-400">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience the extraordinary? Contact us to schedule a test drive or learn more about our exclusive collection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-700 animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Schedule Your Experience</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded-md"
                    >
                      <option value="test-drive">Test Drive</option>
                      <option value="purchase">Purchase Inquiry</option>
                      <option value="service">Service Appointment</option>
                      <option value="financing">Financing Options</option>
                      <option value="trade-in">Trade-in Evaluation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
                    placeholder="Tell us about your preferences, preferred models, or any specific questions..."
                  />
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 transition-all duration-300 hover:scale-105">
                  <Car className="mr-2 w-5 h-5" />
                  Schedule Experience
                </Button>
              </form>

              <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                <div className="flex items-center text-yellow-400 mb-2">
                  <Badge className="bg-yellow-400 text-black mr-2">VIP</Badge>
                  <span className="font-semibold">Exclusive Benefits</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Personalized test drive experience</li>
                  <li>• Private showroom viewing</li>
                  <li>• Expert consultation on models and options</li>
                  <li>• Flexible financing and leasing options</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <div key={i} className="text-gray-300 text-sm">{detail}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Visit Our Showroom</h4>
                    <p className="text-gray-300">Sant'Agata Bolognese, Italy</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
