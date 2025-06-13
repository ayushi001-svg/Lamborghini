
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Calendar, MapPin, Users, Trophy, Star, Camera } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Track Experience',
      description: 'Push your Lamborghini to its limits on world-class racing circuits with professional instructors.',
      duration: 'Full Day',
      price: '€2,500',
      features: ['Professional Instruction', 'Circuit Access', 'Safety Equipment', 'Video Recording'],
      badge: 'Most Popular',
      icon: Trophy
    },
    {
      title: 'Factory Tour',
      description: 'Visit the Sant\'Agata Bolognese factory and witness the birth of your dream car.',
      duration: '3 Hours',
      price: '€150',
      features: ['Factory Tour', 'Museum Access', 'Expert Guide', 'Exclusive Merchandise'],
      badge: 'Educational',
      icon: Camera
    },
    {
      title: 'Test Drive',
      description: 'Experience the thrill of driving a Lamborghini on scenic routes with our guided tours.',
      duration: '2 Hours',
      price: '€500',
      features: ['Professional Guide', 'Scenic Routes', 'Multiple Models', 'Insurance Included'],
      badge: 'Beginner Friendly',
      icon: MapPin
    },
    {
      title: 'VIP Event Access',
      description: 'Exclusive access to Lamborghini events, launches, and private gatherings.',
      duration: 'Varies',
      price: 'Invitation Only',
      features: ['Exclusive Events', 'Networking', 'New Model Previews', 'Celebrity Appearances'],
      badge: 'Exclusive',
      icon: Star
    }
  ];

  const testimonials = [
    {
      name: 'Marco Rossi',
      experience: 'Track Experience',
      quote: 'The most exhilarating day of my life. The instructors were phenomenal.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      experience: 'Factory Tour',
      quote: 'Seeing the craftsmanship up close was absolutely incredible.',
      rating: 5
    },
    {
      name: 'David Chen',
      experience: 'Test Drive',
      quote: 'Perfect introduction to the Lamborghini world. Now I\'m a customer for life.',
      rating: 5
    }
  ];

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
              LAMBORGHINI <span className="text-yellow-400">EXPERIENCE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Immerse yourself in the world of Lamborghini. From track experiences to factory tours, 
              discover what makes our brand truly extraordinary.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CHOOSE YOUR <span className="text-yellow-400">ADVENTURE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our curated experiences designed to showcase the passion and performance of Lamborghini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience) => {
              const IconComponent = experience.icon;
              return (
                <Card key={experience.title} className="bg-black/40 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <Badge className="bg-yellow-400 text-black font-semibold">
                        {experience.badge}
                      </Badge>
                      <IconComponent className="w-8 h-8 text-yellow-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{experience.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-yellow-400 font-semibold">Duration</div>
                        <div className="text-white">{experience.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-semibold">Price</div>
                        <div className="text-white font-bold">{experience.price}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {experience.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                      <Calendar className="mr-2 w-4 h-4" />
                      Book Experience
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CUSTOMER <span className="text-yellow-400">STORIES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-yellow-400 text-sm">{testimonial.experience}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
