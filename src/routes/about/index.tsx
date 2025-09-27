import { component$ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const team = [
  { name: 'Arjun Sharma', role: 'CEO & Co-Founder', image: '/placeholder.svg?height=300&width=300', bio: 'Former IoT architect at Google with 15+ years in connected systems and startup experience.' },
  { name: 'Priya Patel', role: 'CTO & Co-Founder', image: '/placeholder.svg?height=300&width=300', bio: 'AI/ML expert and former Tesla Autopilot engineer specializing in edge computing solutions.' },
  { name: 'Dr. Vikram Reddy', role: 'Head of Research', image: '/placeholder.svg?height=300&width=300', bio: 'PhD in Computer Science from IIT Delhi, published researcher in IoT security and protocols.' },
  { name: 'Anjali Gupta', role: 'VP of Engineering', image: '/placeholder.svg?height=300&width=300', bio: 'Former Amazon Web Services architect with expertise in scalable IoT platforms and cloud integration.' },
];

const values = [
  { title: 'Innovation First', description: "We push the boundaries of what's possible in IoT technology." },
  { title: 'Security by Design', description: 'Every solution is built with enterprise-grade security from the ground up.' },
  { title: 'Sustainable Future', description: 'Our technology helps create more efficient and sustainable systems.' },
  { title: 'Customer Success', description: "Your success is our success. We're partners in your IoT journey." },
];

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-6 py-24 text-center border-b border-gray-200">
        <div class="max-w-4xl mx-auto">
          <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-4">About Us</span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Building the Connected Future</h1>
          <p class="text-xl text-gray-600">Purple Technologies was founded in 2019 with a mission to democratize IoT development and make connected systems accessible to everyone.</p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="rounded-xl border border-gray-200 p-8 bg-white">
            <h2 class="text-3xl font-semibold mb-4">Our Vision</h2>
            <p class="text-gray-600">A world where every device is intelligent, every system is connected, and technology seamlessly enhances human experiences while protecting privacy and promoting sustainability.</p>
          </div>
          <div class="rounded-xl border border-gray-200 p-8 bg-white">
            <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
            <p class="text-gray-600">To empower businesses and developers with cutting-edge IoT solutions that drive innovation, improve efficiency, and create meaningful connections between the physical and digital worlds.</p>
          </div>
        </div>
      </section>

      <section class="px-6 py-16 border-t border-gray-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="rounded-xl border border-gray-200 p-6 text-center bg-white">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Lightning Fast Development</h3>
              <p class="text-gray-600 text-sm">Our platform reduces IoT development time by 70% with pre-built components and automated testing.</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 text-center bg-white">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p class="text-gray-600 text-sm">Bank-grade encryption and security protocols ensure your IoT solutions are protected from day one.</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 text-center bg-white">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Expert Support</h3>
              <p class="text-gray-600 text-sm">24/7 support from IoT experts who understand your challenges and help you succeed.</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 text-center bg-white">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p class="text-gray-600 text-sm">From prototype to production, our platform scales with your business from 10 to 10 million devices.</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 text-center bg-white">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Smart Analytics</h3>
              <p class="text-gray-600 text-sm">AI-powered insights help you optimize performance and predict maintenance needs before issues arise.</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 text-center bg-white">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Cost Effective</h3>
              <p class="text-gray-600 text-sm">Reduce development costs by 60% while accelerating time-to-market with our comprehensive platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-16 border-t border-gray-200">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} class="rounded-xl border border-gray-200 p-6 text-center bg-white">
                <h3 class="text-xl font-semibold mb-2">{v.title}</h3>
                <p class="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} class="rounded-xl border border-gray-200 p-6 text-center bg-white">
                <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                  <img src={m.image} alt={m.name} class="w-full h-full object-cover" loading="lazy" width="300" height="300" />
                </div>
                <h3 class="text-xl font-semibold">{m.name}</h3>
                <p class="text-gray-700 mb-2">{m.role}</p>
                <p class="text-gray-600 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div class="max-w-4xl mx-auto text-center rounded-xl border border-gray-200 p-12 bg-white">
          <h2 class="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p class="text-gray-600 mb-6">Ready to be part of the IoT revolution? Let's build the connected future together.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>View Careers</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
});
