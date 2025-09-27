import { component$, useSignal } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const shopItems = [
  { id: 1, name: 'PurpleSense Pro Kit', category: 'Development Kits', price: '₹24,999', originalPrice: '₹29,199', image: '/placeholder.svg?height=300&width=300', description: 'Complete IoT development kit with sensors, gateway, and cloud integration.', inStock: true, rating: 4.8, reviews: 124 },
  { id: 2, name: 'Smart Home Starter Pack', category: 'Smart Home', price: '₹16,599', originalPrice: null, image: '/placeholder.svg?height=300&width=300', description: 'Everything you need to start your smart home journey.', inStock: true, rating: 4.7, reviews: 89 },
  { id: 3, name: 'Industrial Sensor Array', category: 'Industrial', price: '₹74,999', originalPrice: '₹83,249', image: '/placeholder.svg?height=300&width=300', description: 'Professional-grade sensors for industrial monitoring.', inStock: false, rating: 4.9, reviews: 45 },
];

export default component$(() => {
  const selected = useSignal('All');
  const categories = ['All', 'Development Kits', 'Smart Home', 'Industrial'];

  const items = () =>
    selected.value === 'All' ? shopItems : shopItems.filter((i) => i.category === selected.value);

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-6 py-24 border-b border-gray-200 text-center">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Purple Technologies Shop</h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">Premium IoT hardware and development kits for professionals and enthusiasts.</p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <aside class="lg:w-64">
            <div class="rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 class="text-lg font-semibold mb-4">Categories</h3>
              <div class="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick$={() => (selected.value = c)}
                    class={{
                      'w-full text-left px-4 py-2 rounded-lg transition-colors border border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]':
                        selected.value === c,
                      'w-full text-left px-4 py-2 rounded-lg transition-colors text-[#2563EB] hover:bg-[#EFF6FF]':
                        selected.value !== c,
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
              {items().map((item) => (
                <div key={item.id} class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <div class="aspect-square bg-gray-50">
                    <img src={item.image} alt={item.name} class="w-full h-full object-cover" loading="lazy" width="300" height="300" />
                  </div>
                  <div class="p-6">
                    <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-2">{item.category}</span>
                    <h3 class="text-xl font-semibold mb-2">{item.name}</h3>
                    <p class="text-sm text-gray-600 mb-4">{item.description}</p>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center gap-2">
                        <span class="text-2xl font-bold">{item.price}</span>
                        {item.originalPrice && <span class="text-gray-500 line-through">{item.originalPrice}</span>}
                      </div>
                      <span class={{ 'text-xs px-2 py-1 rounded-md bg-green-100 text-green-700 border border-green-200': item.inStock, 'text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200': !item.inStock }}>
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    <Button class="w-full" disabled={!item.inStock}>{item.inStock ? 'Add to Cart' : 'Notify Me'}</Button>
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
