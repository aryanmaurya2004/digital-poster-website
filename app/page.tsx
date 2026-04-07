import Link from 'next/link';
import { Printer, Heart, CreditCard, Image, LayoutGrid as Layout, Sparkles, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const services = [
    {
      icon: Image,
      title: 'Banner Printing',
      description: 'High-quality large format banners for events and promotions',
    },
    {
      icon: Heart,
      title: 'Wedding Cards',
      description: 'Elegant and custom wedding invitation designs',
    },
    {
      icon: CreditCard,
      title: 'Visiting Cards',
      description: 'Professional business cards that make an impression',
    },
    {
      icon: Layout,
      title: 'Poster & Flex',
      description: 'Eye-catching posters and flex printing services',
    },
    {
      icon: Sparkles,
      title: 'Custom Designs',
      description: 'Unique graphic design solutions for your needs',
    },
    {
      icon: Printer,
      title: 'Digital Printing',
      description: 'Fast and precise digital printing technology',
    },
  ];

  const features = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Trusted by thousands of satisfied customers',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled designers and printing professionals',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-950 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/wedding-bg.jpg')] bg-cover bg-center opacity-50 brightness-[0.4]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-block">
              <div className="bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-amber-400 text-sm font-semibold">Premium Printing Solutions</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Creative Printing &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Design Services
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your ideas into stunning prints. From wedding cards to business banners,
              we deliver excellence in every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">
                  Order Now
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-yellow-100 hover:text-slate-900 px-8 py-6 text-lg">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive printing and design solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-amber-400  hover:bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 space-y-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white " size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine experience, quality, and speed to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-20 h-20 bg-amber-500/10 border-2 border-amber-400 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-amber-400" size={36} />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let&apos;s create something amazing together!
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
