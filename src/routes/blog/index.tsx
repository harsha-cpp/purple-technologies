import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Button from '~/components/ui/button';

const blogPosts = [
  { id: 1, title: 'The Future of 5G in IoT: What to Expect in 2024', excerpt: 'Exploring how 5G technology will revolutionize IoT connectivity and enable new use cases across industries.', author: 'Sarah Chen', date: 'Dec 15, 2023', readTime: '5 min read', category: 'Technology', image: '/placeholder.svg?height=200&width=400', featured: true },
  { id: 2, title: 'Building Secure IoT Systems: Best Practices Guide', excerpt: 'A comprehensive guide to implementing security measures in IoT deployments from device to cloud.', author: 'Dr. Emily Watson', date: 'Dec 12, 2023', readTime: '8 min read', category: 'Security', image: '/placeholder.svg?height=200&width=400', featured: false },
  { id: 3, title: 'Smart Cities: How IoT is Transforming Urban Living', excerpt: 'Case studies and insights into how IoT technology is making cities more efficient and livable.', author: 'Marcus Rodriguez', date: 'Dec 10, 2023', readTime: '6 min read', category: 'Smart Cities', image: '/placeholder.svg?height=200&width=400', featured: false },
];

export default component$(() => {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="py-24 px-6 border-b border-gray-200">
        <div class="max-w-7xl mx-auto text-center">
          <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-4">Blog</span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Insights & Innovation</h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">Stay updated with the latest trends, insights, and innovations in IoT technology.</p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto space-y-12">
          {featuredPost && (
            <div class="rounded-xl border border-gray-200 p-8 lg:p-12 bg-white">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-4">Featured</span>
                  <h2 class="text-3xl md:text-4xl font-semibold mb-3">{featuredPost.title}</h2>
                  <p class="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div class="flex items-center gap-4 mb-6 text-sm text-gray-600">
                    <span>{featuredPost.author}</span><span>•</span><span>{featuredPost.date}</span><span>•</span><span>{featuredPost.readTime}</span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}><Button>Read Article</Button></Link>
                </div>
                <div class="aspect-video bg-gray-50 rounded-xl overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} class="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          )}

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} class="rounded-xl border border-gray-200 overflow-hidden bg-white">
                <div class="aspect-video bg-gray-50">
                  <img src={post.image} alt={post.title} class="w-full h-full object-cover" loading="lazy" />
                </div>
                <div class="p-6">
                  <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-2">{post.category}</span>
                  <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
                  <p class="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div class="flex items-center justify-between text-xs text-gray-600 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-600">{post.readTime}</span>
                    <Link href={`/blog/${post.id}`} class="text-sm text-gray-700 hover:text-gray-900">Read More →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});
