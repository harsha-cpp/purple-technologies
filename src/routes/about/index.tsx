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
            <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
            <p class="text-gray-600">To empower businesses and developers with cutting-edge IoT solutions that drive innovation, improve efficiency, and create meaningful connections between the physical and digital worlds.</p>
          </div>
          <div class="rounded-xl border border-gray-200 p-8 bg-white">
            <h2 class="text-3xl font-semibold mb-4">Our Vision</h2>
            <p class="text-gray-600">A world where every device is intelligent, every system is connected, and technology seamlessly enhances human experiences while protecting privacy and promoting sustainability.</p>
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
