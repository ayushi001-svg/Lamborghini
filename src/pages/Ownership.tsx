
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Wrench, Phone, Users, Award, Clock, Globe } from 'lucide-react';

const Ownership = () => {
  const services = [
    {
      title: 'Warranty & Protection',
      description: 'Comprehensive coverage for your investment with extended warranty options.',
      features: ['3-Year Warranty', '24/7 Roadside Assistance', 'Genuine Parts Guarantee', 'Paint Protection'],
      icon: Shield,
      badge: 'Essential'
    },
    {
      title: 'Maintenance Services',
      description: 'Expert care from certified technicians using only genuine Lamborghini parts.',
      features: ['Scheduled Maintenance', 'Performance Tuning', 'Diagnostic Services', 'Software Updates'],
      icon: Wrench,
      badge: 'Premium'
    },
    {
      title: 'Concierge Support',
      description: 'Personalized assistance for all your Lamborghini ownership needs.',
      features: ['Personal Advisor', 'Priority Booking', 'Event Invitations', 'Travel Planning'],
      icon: Phone,
      badge: 'VIP'
    },
    {
      title: 'Owner Community',
      description: 'Join an exclusive network of Lamborghini enthusiasts worldwide.',
      features: ['Exclusive Events', 'Track Days', 'Owner Rallies', 'Online Community'],
      icon: Users,
      badge: 'Community'
    }
  ];

  const benefits = [
    {
      title: 'Certified Pre-Owned',
      description: 'Rigorously inspected vehicles with extended warranty coverage.',
      icon: Award
    },
    {
      title: 'Express Service',
      description: 'Fast-track maintenance and service appointments for busy lifestyles.',
      icon: Clock
    },
    {
      title: 'Global Network',
      description: 'Access to authorized dealers and service centers worldwide.',
      icon: Globe
    }
  ];

  const ownershipStats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '160+', label: 'Service Centers Worldwide' },
    { number: '24/7', label: 'Roadside Assistance' },
    { number: '3', label: 'Year Warranty' }
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
              LAMBORGHINI <span className="text-yellow-400">OWNERSHIP</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Owning a Lamborghini is just the beginning. Experience unparalleled service, 
              exclusive benefits, and a community that shares your passion for excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
                Register Your Vehicle
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-3">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ownershipStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OWNERSHIP <span className="text-yellow-400">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From maintenance to exclusive events, we provide everything you need for the ultimate ownership experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="bg-black/40 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <Badge className="bg-yellow-400 text-black font-semibold">
                        {service.badge}
                      </Badge>
                      <IconComponent className="w-8 h-8 text-yellow-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ADDITIONAL <span className="text-yellow-400">BENEFITS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={benefit.title} className="bg-black/40 border-gray-700 text-center">
                  <CardContent className="p-8">
                    <IconComponent className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO JOIN THE <span className="text-yellow-400">FAMILY?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of automotive ownership with Lamborghini's comprehensive ownership program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/configure">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
                Configure Your Lamborghini
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-3">
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;
