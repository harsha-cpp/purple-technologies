import { component$ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const apps = [
  {
    id: 1,
    name: 'PurpleConnect Mobile',
    category: 'Mobile App',
    description:
      'Comprehensive IoT device management and monitoring on the go. Control your entire IoT ecosystem from anywhere.',
    platform: 'iOS & Android',
    downloads: '50K+',
    rating: '4.8',
    features: ['Real-time Monitoring', 'Remote Control', 'Push Notifications', 'Offline Mode'],
    deviceType: 'mobile',
    appIcon: '/placeholder.svg?height=80&width=80',
    screenshot: '/placeholder.svg?height=600&width=300',
  },
  {
    id: 2,
    name: 'PurpleDash Web',
    category: 'Web Application',
    description:
      'Advanced analytics dashboard for enterprise IoT deployments. Visualize data, manage devices, and optimize performance.',
    platform: 'Web Browser',
    downloads: '25K+',
    rating: '4.9',
    features: ['Advanced Analytics', 'Custom Dashboards', 'Team Collaboration', 'API Integration'],
    deviceType: 'desktop',
    appIcon: '/placeholder.svg?height=80&width=80',
    screenshot: '/placeholder.svg?height=400&width=600',
  },
];

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-6 py-24 text-center border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">IoT Apps for Seamless Connectivity</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful applications designed to manage, monitor, and optimize your IoT ecosystem across all platforms and devices.
          </p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-5xl mx-auto space-y-16">
          {apps.map((app) => (
            <div key={app.id} class="flex flex-col lg:flex-row items-center gap-8">
              <div class="flex-1 space-y-6 max-w-lg">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl bg-gray-900 text-white flex items-center justify-center">
                    <img src={app.appIcon} alt={`${app.name} icon`} class="w-12 h-12 rounded-xl" loading="lazy" width="80" height="80" />
                  </div>
                  <div>
                    <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">{app.category}</span>
                    <h3 class="text-2xl font-bold">{app.name}</h3>
                  </div>
                </div>
                <p class="text-gray-600">{app.description}</p>
                <div class="flex flex-wrap gap-2">
                  {app.features.map((f) => (
                    <span key={f} class="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 border border-gray-200">{f}</span>
                  ))}
                </div>
                <div class="flex items-center gap-6 text-sm">
                  <div>
                    <span class="text-gray-600">Platform: </span>
                    <span class="text-gray-900">{app.platform}</span>
                  </div>
                  <div>
                    <span class="text-gray-600">Downloads: </span>
                    <span class="text-gray-900 font-semibold">{app.downloads}</span>
                  </div>
                  <div>
                    <span class="text-gray-600">Rating: </span>
                    <span class="text-yellow-600 font-semibold">★ {app.rating}</span>
                  </div>
                </div>
                <div class="flex gap-3">
                  <Button>{app.platform.includes('App') ? 'Download App' : 'Launch App'}</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div class="flex-1">
                <div class="rounded-xl border border-gray-200 p-6 bg-white">
                  <img src={app.screenshot} alt="App Screenshot" class="w-full h-auto rounded-lg" loading="lazy" width="600" height="400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="px-6 py-20">
        <div class="max-w-4xl mx-auto text-center rounded-xl border border-gray-200 p-12 bg-white">
          <h2 class="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p class="text-gray-600 mb-6">Download our apps and start managing your IoT ecosystem today.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button class="px-8">Download Mobile App</Button>
            <Button variant="outline" class="px-8">Try Web App</Button>
          </div>
        </div>
      </section>
    </div>
  );
});
