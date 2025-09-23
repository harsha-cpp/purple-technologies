import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { useLocation, Link } from '@builder.io/qwik-city';
import Button from '~/components/ui/button';

const products = [
  { id: 1, name: 'PurpleSense Pro', category: 'Smart Sensors', description: 'Advanced multi-sensor platform with AI-powered analytics for industrial monitoring.', price: '₹24,999', type: 'product', href: '/products' },
  { id: 2, name: 'PurpleGateway X1', category: 'IoT Gateways', description: 'Enterprise-grade IoT gateway with edge computing capabilities and 5G connectivity.', price: '₹74,999', type: 'product', href: '/products' },
];
const blogPosts = [
  { id: 1, title: 'The Future of 5G in IoT: What to Expect in 2024', excerpt: 'Exploring how 5G technology will revolutionize IoT connectivity and enable new use cases across industries.', category: 'Technology', type: 'blog', href: '/blog/1' },
  { id: 2, title: 'Building Secure IoT Systems: Best Practices Guide', excerpt: 'A comprehensive guide to implementing security measures in IoT deployments from device to cloud.', category: 'Security', type: 'blog', href: '/blog/2' },
];

export default component$(() => {
  const loc = useLocation();
  const q = useSignal('');
  const results = useSignal<any[]>([]);

  useTask$(({ track }) => {
    track(() => loc.url.search);
    const query = new URLSearchParams(loc.url.search).get('q') || '';
    q.value = query;
    const list: any[] = [];
    if (query) {
      const ql = query.toLowerCase();
      list.push(
        ...products.filter((i) => [i.name, i.description, i.category].some((t) => t.toLowerCase().includes(ql))),
        ...blogPosts.filter((i) => [i.title, i.excerpt, i.category].some((t) => t.toLowerCase().includes(ql)))
      );
    }
    results.value = list;
  });

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="py-16 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-8">
            <h1 class="text-4xl font-bold mb-3">Search Results</h1>
            <p class="text-gray-600">
              {q.value ? (
                <>Showing {results.value.length} results for "<span class="text-gray-900 font-medium">{q.value}</span>"</>
              ) : (
                'Enter a search query to find products and blog posts'
              )}
            </p>
          </div>

          {q.value && results.value.length === 0 && (
            <div class="text-center py-16">
              <div class="text-6xl mb-4">🔍</div>
              <h2 class="text-2xl font-bold mb-4">No results found</h2>
              <p class="text-gray-600 mb-8">Try adjusting your search terms or browse our categories</p>
              <div class="flex gap-4 justify-center">
                <Link href="/products"><Button>Browse Products</Button></Link>
                <Link href="/blog"><Button variant="outline">Read Blog</Button></Link>
              </div>
            </div>
          )}

          {results.value.length > 0 && (
            <div class="space-y-12">
              {results.value.some((i) => i.type === 'product') && (
                <div>
                  <h2 class="text-2xl font-bold mb-6">Products</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.value.filter((i) => i.type === 'product').map((p: any) => (
                      <div key={p.id} class="rounded-xl border border-gray-200 p-6 bg-white">
                        <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-2">{p.category}</span>
                        <h3 class="text-xl font-semibold mb-2">{p.name}</h3>
                        <p class="text-sm text-gray-600 mb-4">{p.description}</p>
                        <div class="flex items-center justify-between">
                          <span class="text-2xl font-bold">{p.price}</span>
                          <Link href={p.href}><Button size="sm">View Details</Button></Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.value.some((i) => i.type === 'blog') && (
                <div>
                  <h2 class="text-2xl font-bold mb-6">Blog Posts</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.value.filter((i) => i.type === 'blog').map((b: any) => (
                      <div key={b.id} class="rounded-xl border border-gray-200 p-6 bg-white">
                        <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-2">{b.category}</span>
                        <h3 class="text-xl font-semibold mb-2">{b.title}</h3>
                        <p class="text-sm text-gray-600 mb-4">{b.excerpt}</p>
                        <Link href={b.href} class="text-sm text-gray-700 hover:text-gray-900">Read More →</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
});
