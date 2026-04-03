import { Award, Users, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every project receives our meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We work closely with you to exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We love what we do, and it shows in every print and design we deliver.',
    },
    {
      icon: Target,
      title: 'Result Oriented',
      description: 'We focus on delivering tangible results that help your business grow.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">PrintCraft</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in bringing creative visions to life through premium printing and design services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a creative design and printing service specializing in high-quality banners, wedding ca\rds,
                and customized print solutions. Our goal is to bring your ideas to life with unique
                designs and premium materi,
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We specialize in transforming ideas into tangible, high-quality prints. Whether it's a
                wedding invitation that captures the essence of love, a business banner that commands attention,
                or a custom design that perfectly represents your brand, we bring expertise and creativity to
                every project.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With years of experience in the industry, we understand the importance of
                every occasion—whether it's a wedding, birthday, business promotion, or special event.
                We focus on delivering eye-catching designs that leave a lasting impression.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/ac/c4/8f/acc48f909bdd3d3fdc294ffcdee37860.jpg"
                  alt="Printing workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 hover:border-amber-400 transition-all duration-300 hover:shadow-lg bg-white">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Commitment
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We are committed to providing exceptional printing and design services that exceed expectations.
              Our team works tirelessly to ensure that every project, regardless of size, receives the same
              level of attention and care. We invest in the latest technology and continuously update our
              skills to stay ahead in the industry.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Quality assurance is at the heart of everything we do. From material selection to final delivery,
              we maintain strict quality control processes to ensure that you receive nothing but the best.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">5000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">15000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
