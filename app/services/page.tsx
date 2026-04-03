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
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive printing and design solutions to meet all your business and personal needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <Card key={index} className="overflow-hidden border-2 hover:border-amber-400 transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    <div className={`relative h-64 lg:h-auto ${isEven ? '' : 'lg:col-start-2'}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

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
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
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
          </div>
        </div>
      </section>
    </div>
  );
}
