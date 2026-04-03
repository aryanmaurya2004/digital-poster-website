import { supabase } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const revalidate = 0;

async function getGalleryItems() {
  const { data, error } = await supabase
    .from('gallery_items')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching gallery items:', error);
    return [];
  }

  return data || [];
}

export default async function GalleryPage() {
  const items = await getGalleryItems();

  const categories = ['All', 'Wedding Cards', 'Banners', 'Visiting Cards', 'Posters'];

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of stunning prints and designs that showcase our craftsmanship
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                  category === 'All'
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'hover:bg-amber-50 hover:border-amber-400'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No gallery items available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden border-2 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Like What You See?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing for you. Get in touch to start your project today!
            </p>
            <a
              href="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
