import { component$ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const apps = [
  {
    id: 1,
    name: 'TechHub',
    category: 'Education Platform',
    description:
      'An online education platform designed to equip students with practical skills in trending technologies. Learn AI/ML, IoT, Embedded Systems, Cybersecurity, and more with expert instructors.',
    platform: 'Android',
    downloads: '1K+',
    rating: '4.5',
    features: ['Interactive Learning', 'Expert Instructors', 'Flexible Scheduling', 'Hands-on Projects'],
    deviceType: 'mobile',
    appIcon: '/placeholder.svg?height=80&width=80',
    screenshot: '/placeholder.svg?height=600&width=300',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=co.lenord.fqicu',
    courses: ['AI & Machine Learning', 'IoT', 'Embedded Systems & VLSI', 'Cybersecurity', 'Full Stack Development', 'Python', 'DevOps', 'AR/VR'],
  },
  {
    id: 2,
    name: 'Locate360',
    category: 'Tracking Solution',
    description:
      'Comprehensive tracking solution providing real-time GPS tracking for assets, vehicles, pets, and more. Features geo-fencing alerts, historical data analysis, and multi-platform support.',
    platform: 'Android',
    downloads: '10+',
    rating: '4.0',
    features: ['Real-time GPS Tracking', 'Geo-fencing Alerts', 'Historical Data Analysis', 'Multi-platform Support'],
    deviceType: 'mobile',
    appIcon: '/placeholder.svg?height=80&width=80',
    screenshot: '/placeholder.svg?height=600&width=300',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tracking.locatets',
    trackingTypes: ['Asset Tracking', 'Vehicle Tracking', 'Pet Tracking', 'Human Tracking', 'Animal Tracking'],
  },
];

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-5 py-24 text-center border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Our Mobile Applications</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative mobile applications designed to enhance learning and provide comprehensive tracking solutions.
          </p>
        </div>
      </section>

      <section class="px-5 py-16">
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
                
                {/* Course/Tracking Types */}
                {app.courses && (
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900">Course Offerings:</h4>
                    <div class="flex flex-wrap gap-2">
                      {app.courses.map((course) => (
                        <span key={course} class="px-2 py-1 text-xs bg-blue-50 rounded-md text-blue-700 border border-blue-200">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {app.trackingTypes && (
                  <div class="space-y-2">
                    <h4 class="font-semibold text-gray-900">Tracking Solutions:</h4>
                    <div class="flex flex-wrap gap-2">
                      {app.trackingTypes.map((type) => (
                        <span key={type} class="px-2 py-1 text-xs bg-green-50 rounded-md text-green-700 border border-green-200">{type}</span>
                      ))}
                    </div>
                  </div>
                )}
                
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
                  <Button onClick$={() => window.open(app.playStoreUrl, '_blank')}>Download App</Button>
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

      <section class="px-5 py-20">
        <div class="max-w-4xl mx-auto text-center rounded-xl border border-gray-200 p-12 bg-white">
          <h2 class="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p class="text-gray-600 mb-6">Download our apps and start learning or tracking today.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button class="px-8" onClick$={() => window.open('https://play.google.com/store/apps/details?id=co.lenord.fqicu', '_blank')}>Download TechHub</Button>
            <Button variant="outline" class="px-8" onClick$={() => window.open('https://play.google.com/store/apps/details?id=com.tracking.locatets', '_blank')}>Download Locate360</Button>
          </div>
        </div>
      </section>
    </div>
  );
});
