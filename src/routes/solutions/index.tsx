import { component$ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const solutions = [
  {
    id: 1,
    title: 'Smart Cities',
    subtitle: 'Urban Intelligence Platform',
    description:
      'Transform urban infrastructure with our comprehensive IoT solutions for traffic management, environmental monitoring, and public safety. Our platform integrates thousands of sensors to create responsive, efficient city systems.',
    features: ['Traffic Optimization', 'Air Quality Monitoring', 'Smart Lighting', 'Waste Management', 'Emergency Response'],
    image: '/placeholder.svg?height=400&width=600',
    stats: { deployments: '50+', sensors: '100K+', cities: '25' },
  },
  {
    id: 2,
    title: 'Smart Homes',
    subtitle: 'Connected Living Ecosystem',
    description:
      'Create intelligent homes that adapt to residents\' needs with our comprehensive home automation platform. From energy management to security, our solutions make homes more comfortable, secure, and efficient.',
    features: ['Energy Management', 'Security Systems', 'Climate Control', 'Voice Integration', 'Mobile Control'],
    image: '/placeholder.svg?height=400&width=600',
    stats: { homes: '10K+', devices: '500K+', savings: '30%' },
  },
  {
    id: 3,
    title: 'Industrial IoT',
    subtitle: 'Industry 4.0 Solutions',
    description:
      'Revolutionize manufacturing with predictive maintenance, real-time monitoring, and automated quality control. Our industrial IoT platform reduces downtime, improves efficiency, and ensures optimal production performance.',
    features: ['Predictive Maintenance', 'Asset Tracking', 'Quality Control', 'Energy Optimization', 'Safety Monitoring'],
    image: '/placeholder.svg?height=400&width=600',
    stats: { factories: '200+', uptime: '99.9%', efficiency: '40%' },
  },
  {
    id: 4,
    title: 'Healthcare IoT',
    subtitle: 'Connected Health Platform',
    description:
      'Enhance patient care with remote monitoring, asset tracking, and environmental control systems. Our healthcare IoT solutions improve patient outcomes while reducing operational costs and ensuring regulatory compliance.',
    features: ['Patient Monitoring', 'Asset Tracking', 'Environmental Control', 'Compliance Reporting', 'Emergency Alerts'],
    image: '/placeholder.svg?height=400&width=600',
    stats: { hospitals: '75+', patients: '50K+', response: '2min' },
  },
];

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-6 py-24 border-b border-gray-200 text-center">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Our IoT Development Solutions</h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IoT platforms designed to transform industries and create smarter, more connected environments.
          </p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto space-y-24">
          {solutions.map((s, idx) => (
            <div key={s.id} class={{ 'flex flex-col items-center gap-10': true, 'lg:flex-row': idx % 2 === 0, 'lg:flex-row-reverse': idx % 2 === 1 }}>
              <div class="flex-1 space-y-6">
                <div class="space-y-3">
                  <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">{s.title}</span>
                  <h2 class="text-3xl md:text-4xl font-semibold">{s.subtitle}</h2>
                  <p class="text-gray-600">{s.description}</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {s.features.map((f) => (
                    <div key={f} class="rounded-lg border border-gray-200 p-3 text-center text-sm">{f}</div>
                  ))}
                </div>
                <div class="flex flex-wrap gap-6">
                  {Object.entries(s.stats).map(([k, v]) => (
                    <div key={k} class="text-center">
                      <div class="text-2xl font-bold text-gray-900">{v}</div>
                      <div class="text-sm text-gray-600 capitalize">{k}</div>
                    </div>
                  ))}
                </div>
                <div class="flex gap-3">
                  <Button>Learn More</Button>
                  <Button variant="outline">View Case Studies</Button>
                </div>
              </div>
              <div class="flex-1">
                <div class="rounded-xl border border-gray-200 p-4 bg-white">
                  <div class="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
                    <img src={s.image} alt={s.title} class="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});
