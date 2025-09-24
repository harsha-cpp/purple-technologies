import { component$, useSignal } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const categories = [
  'All Products',
  'Smart Sensors',
  'IoT Gateways',
  'Edge Computing',
  'Connectivity Modules',
  'Development Kits',
];

const products = [
  {
    id: 1,
    name: 'PurpleSense Pro',
    category: 'Smart Sensors',
    description:
      'Advanced multi-sensor platform with AI-powered analytics for industrial monitoring.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹24,999',
    features: ['Temperature', 'Humidity', 'Pressure', 'Motion'],
  },
  {
    id: 2,
    name: 'PurpleGateway X1',
    category: 'IoT Gateways',
    description:
      'Enterprise-grade IoT gateway with edge computing capabilities and 5G connectivity.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹74,999',
    features: ['5G Ready', 'Edge AI', 'Secure', 'Scalable'],
  },
  {
    id: 3,
    name: 'PurpleEdge Compute',
    category: 'Edge Computing',
    description:
      'Powerful edge computing unit for real-time data processing and ML inference.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹1,08,999',
    features: ['GPU Accelerated', 'Low Latency', 'AI Ready', 'Rugged'],
  },
  {
    id: 4,
    name: 'PurpleConnect 5G',
    category: 'Connectivity Modules',
    description:
      'Ultra-low power 5G connectivity module for next-generation IoT applications.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹16,999',
    features: ['5G NR', 'Low Power', 'Compact', 'Global Bands'],
  },
  {
    id: 5,
    name: 'PurpleDev Kit Pro',
    category: 'Development Kits',
    description:
      'Complete development platform with sensors, connectivity, and cloud integration.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹37,499',
    features: ['Complete Kit', 'Cloud Ready', 'Open Source', 'Tutorials'],
  },
  {
    id: 6,
    name: 'PurpleSense Micro',
    category: 'Smart Sensors',
    description:
      'Compact wireless sensor node for smart building and environmental monitoring.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹7,499',
    features: ['Wireless', 'Long Battery', 'Weatherproof', 'Easy Setup'],
  },
];

export default component$(() => {
  const selectedCategory = useSignal('All Products');

  const filtered = () =>
    selectedCategory.value === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory.value);

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-6 py-24 border-b border-gray-200">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Explore Our IoT Products</h1>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Cutting-edge IoT hardware and solutions designed to power the next generation of connected experiences.
          </p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <aside class="lg:w-64 flex-shrink-0">
            <div class="rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 class="text-lg font-semibold mb-4">Categories</h3>
              <div class="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick$={() => (selectedCategory.value = c)}
                    class={{
                      'w-full text-left px-4 py-2 rounded-lg transition-colors border border-gray-300 bg-white':
                        selectedCategory.value === c,
                      'w-full text-left px-4 py-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-50':
                        selectedCategory.value !== c,
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div class="flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered().map((product) => (
                <div key={product.id} class="rounded-xl border border-gray-200 overflow-hidden bg-white">
                  <div class="aspect-video bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      class="w-full h-full object-cover"
                      loading="lazy"
                      width="300"
                      height="200"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                        {product.category}
                      </span>
                      <span class="text-2xl font-bold text-gray-900">{product.price}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      {product.features.map((f) => (
                        <span key={f} class="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700 border border-gray-200">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div class="flex gap-3">
                      <Button class="flex-1">View Details</Button>
                      <Button variant="outline">Compare</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
