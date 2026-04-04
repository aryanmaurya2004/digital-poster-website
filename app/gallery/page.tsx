import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const revalidate = 0;

// ✅ Dummy Data
async function getGalleryItems() {
  return [
    {
      id: 1,
      title: "Royal Wedding Card",
      category: "Wedding Cards",
      image_url: "https://i.pinimg.com/1200x/3d/78/c1/3d78c14b64dbb16fe29ff58c1562adfd.jpg",
      description: "Elegant royal theme wedding invitation",
      display_order: 1,
    },
    {
      id: 2,
      title: "Business Banner",
      category: "Banners",
      image_url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description: "Modern promotional banner design",
      display_order: 2,
    },
    {
      id: 3,
      title: "Creative Visiting Card",
      category: "Visiting Cards",
      image_url: "https://i.pinimg.com/736x/d1/75/8d/d1758d1d96db4e9a71d7bb56472629ee.jpg",
      description: "Minimal and clean business card",
      display_order: 3,
    },
    {
      id: 4,
      title: "Event Poster",
      category: "Posters",
      image_url: "https://i.pinimg.com/736x/c2/c7/7e/c2c77e007a498aa4b7cd72a1c6ced6da.jpg",
      description: "Eye-catching event poster design",
      display_order: 4,
    },
    {
      id: 5,
      title: "Luxury Wedding Invite",
      category: "Wedding Cards",
      image_url: "https://i.pinimg.com/736x/d5/56/2d/d5562d15904b4726003ecfbb80f5968a.jpg",
      description: "Premium golden wedding card",
      display_order: 5,
    },
    {
      id: 6,
      title: "Shop Opening Banner",
      category: "Banners",
      image_url: "https://i.pinimg.com/736x/7f/ce/18/7fce18c25c8b077403e03bda8d4523b8.jpg",
      description: "Grand opening promotional banner",
      display_order: 6,
    },
  ];
}

export default async function GalleryPage() {
  const items = await getGalleryItems();

  const categories = ['All', 'Wedding Cards', 'Banners', 'Visiting Cards', 'Posters'];

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300">
            Explore our portfolio of stunning designs
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge key={category} className="px-4 py-2 cursor-pointer">
                {category}
              </Badge>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition">

                {/* IMAGE */}
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <Badge className="mt-2">{item.category}</Badge>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>
                </CardContent>

              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
        <a href="/contact" className="bg-amber-500 text-white px-6 py-3 rounded-lg">
          Start Your Project
        </a>
      </section>

    </div>
  );
}