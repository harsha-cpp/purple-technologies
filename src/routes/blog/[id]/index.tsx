import { component$ } from '@builder.io/qwik';
import { Link, type RequestHandler, type DocumentHead, useLocation } from '@builder.io/qwik-city';
import Button from '~/components/ui/button';

const blogPosts = [
  { id: 1, title: 'The Future of 5G in IoT: What to Expect in 2024', excerpt: 'Exploring how 5G technology will revolutionize IoT connectivity and enable new use cases across industries.', content: `<h2>Introduction</h2><p>5G technology is set to revolutionize the Internet of Things (IoT) landscape...</p>`, author: 'Sarah Chen', date: 'Dec 15, 2023', readTime: '5 min read', category: 'Technology', image: '/placeholder.svg?height=400&width=800' },
  { id: 2, title: 'Building Secure IoT Systems: Best Practices Guide', excerpt: 'A comprehensive guide to implementing security measures in IoT deployments from device to cloud.', content: `<h2>Introduction</h2><p>Security is paramount in IoT systems...</p>`, author: 'Dr. Emily Watson', date: 'Dec 12, 2023', readTime: '8 min read', category: 'Security', image: '/placeholder.svg?height=400&width=800' },
];

export default component$(() => {
  const loc = useLocation();
  const id = Number(loc.params.id);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div class="px-6 py-24 max-w-3xl mx-auto">
        <h1 class="text-2xl font-semibold mb-4">Post not found</h1>
        <Link href="/blog" class="text-gray-700 hover:text-gray-900">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <article class="py-16 px-6">
        <div class="max-w-4xl mx-auto">
          <Link href="/blog" class="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">← Back to Blog</Link>
          <header class="mb-10">
            <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-3">{post.category}</span>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p class="text-gray-600 text-lg mb-6">{post.excerpt}</p>
            <div class="flex items-center gap-6 text-gray-600">
              <span class="font-medium">{post.author}</span><span>•</span><span>{post.date}</span><span>•</span><span>{post.readTime}</span>
            </div>
            <div class="aspect-video bg-gray-50 rounded-xl overflow-hidden mt-8">
              <img src={post.image} alt={post.title} class="w-full h-full object-cover" loading="lazy" />
            </div>
          </header>
          <div class="prose max-w-none" dangerouslySetInnerHTML={post.content} />
          <footer class="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <div>
              <p class="font-semibold">{post.author}</p>
              <p class="text-gray-600 text-sm">IoT Technology Expert</p>
            </div>
            <Link href="/blog"><Button variant="outline">Read More Articles</Button></Link>
          </footer>
        </div>
      </article>
    </div>
  );
});
