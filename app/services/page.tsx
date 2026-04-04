import { Image, Heart, CreditCard, LayoutGrid as Layout, Sparkles, Package, CircleCheck as CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Image,
      title: 'Banner Printing',
      description: 'High-quality large format printing for all your promotional needs.',
      features: [
        'Indoor and outdoor banners',
        'Various sizes available',
        'Weather-resistant materials',
        'Vibrant color printing',
        'Fast turnaround time',
      ],
      image: 'https://i.pinimg.com/1200x/7e/06/da/7e06da4c7397e7d8b60b587f8c8de1e9.jpg',
    },
    {
      icon: Heart,
      title: 'Wedding Card Design',
      description: 'Elegant and personalized wedding invitations for your special day.',
      features: [
        'Custom design options',
        'Premium paper quality',
        'Gold/silver embossing',
        'Multiple design themes',
        'Envelope printing included',
      ],
      image: 'https://i.pinimg.com/736x/0b/6c/57/0b6c578f22c5d332efa0c0afadda5b6a.jpg',
    },
    {
      icon: CreditCard,
      title: 'Visiting Cards',
      description: 'Professional business cards that make a lasting impression.',
      features: [
        'Premium card stock',
        'Matte or glossy finish',
        'Both-sided printing',
        'Quick delivery',
        'Affordable pricing',
      ],
      image: 'https://i.pinimg.com/736x/77/51/32/77513228311b7b70aa47fe37e41bd7a2.jpg',
    },
    {
      icon: Layout,
      title: 'Poster & Flex Printing',
      description: 'Eye-catching posters and flex for events, promotions, and advertising.',
      features: [
        'Large format printing',
        'UV-resistant inks',
        'Multiple material options',
        'Custom sizes available',
        'Perfect for outdoor use',
      ],
      image: 'https://i.pinimg.com/736x/ca/58/2c/ca582cf1b2abf2a57aa62cca285447b0.jpg',
    },
    {
      icon: Sparkles,
      title: 'Custom Graphic Design',
      description: 'Unique design solutions tailored to your brand and vision.',
      features: [
        'Logo design',
        'Branding materials',
        'Social media graphics',
        'Marketing collateral',
        'Unlimited revisions',
      ],
      image: 'https://i.pinimg.com/736x/06/cc/5c/06cc5cfd2b45b63cbaa8f9bf39641bd5.jpg',
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Creative packaging solutions that make your products stand out.',
      features: [
        'Product box design',
        'Label printing',
        'Custom packaging',
        'Brand-focused design',
        'Eco-friendly options',
      ],
      image: 'https://i.pinimg.com/736x/1e/6d/48/1e6d487dd7f338aa493c56e271ddcd71.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive printing and design solutions to meet all your business and personal needs
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <Card key={index} className="overflow-hidden border-2 hover:border-amber-400 transition-all duration-300">
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>

                  {/* IMAGE */}
                  <div className={`relative h-full ${isEven ? '' : 'lg:col-start-2'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="text-white" size={28} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                        Get a Quote
                      </Button>
                    </Link>
                  </CardContent>

                </div>
              </Card>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Contact us today to discuss your printing needs and get a free quote
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg mt-4">
            Contact Us Now
          </Button>
        </Link>
      </section>

    </div>
  );
}