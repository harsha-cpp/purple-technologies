import { component$, useSignal, $ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const categories = [
  'All Products',
  'Car GPS Tracker',
  'Bike GPS Tracker',
  'Bus Tracking System',
  'Truck Tracking System',
  'Video Telematics',
  'Asset Tracking',
  'Fuel Monitoring',
  'E-Lock with GPS Tracker',
  'Wifi Based Tracking',
  'Electric Vehicle',
  'Accessories',
];

const products = [
  // Car GPS Tracker
  {
    id: 1,
    name: 'PurpleCar Pro',
    category: 'Car GPS Tracker',
    description: 'Advanced GPS tracker with real-time monitoring, geofencing, and anti-theft features.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹12,999',
    features: ['Real-time GPS', 'Geofencing', 'Anti-theft', 'Mobile App'],
  },
  {
    id: 2,
    name: 'PurpleCar Mini',
    category: 'Car GPS Tracker',
    description: 'Compact GPS tracker with 3G connectivity and long battery life for personal vehicles.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹8,499',
    features: ['3G Connectivity', 'Long Battery', 'Compact', 'Easy Install'],
  },

  // Bike GPS Tracker
  {
    id: 3,
    name: 'PurpleBike Pro',
    category: 'Bike GPS Tracker',
    description: 'Waterproof GPS tracker designed for motorcycles with vibration detection and theft alerts.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹6,999',
    features: ['Waterproof', 'Vibration Alert', 'Theft Detection', 'Mobile Tracking'],
  },
  {
    id: 4,
    name: 'PurpleBike Lite',
    category: 'Bike GPS Tracker',
    description: 'Lightweight GPS tracker for bicycles with solar charging and motion detection.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹4,999',
    features: ['Solar Charging', 'Motion Detection', 'Lightweight', 'Weatherproof'],
  },

  // Bus Tracking System
  {
    id: 5,
    name: 'PurpleBus Fleet',
    category: 'Bus Tracking System',
    description: 'Complete fleet management system for public transport with passenger counting and route optimization.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹45,999',
    features: ['Fleet Management', 'Passenger Count', 'Route Optimization', 'Real-time Updates'],
  },

  // Truck Tracking System
  {
    id: 6,
    name: 'PurpleTruck Heavy',
    category: 'Truck Tracking System',
    description: 'Heavy-duty GPS tracking system for commercial trucks with fuel monitoring and driver behavior analysis.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹32,999',
    features: ['Heavy Duty', 'Fuel Monitoring', 'Driver Analytics', 'Fleet Management'],
  },

  // Video Telematics
  {
    id: 7,
    name: 'PurpleVision Pro',
    category: 'Video Telematics',
    description: 'AI-powered dashcam system with real-time driver monitoring and incident detection.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹28,999',
    features: ['AI Detection', 'Real-time Monitoring', 'Incident Recording', 'Cloud Storage'],
  },

  // Asset Tracking
  {
    id: 8,
    name: 'PurpleAsset Pro',
    category: 'Asset Tracking',
    description: 'Multi-sensor asset tracking device with temperature monitoring and tamper detection.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹15,999',
    features: ['Multi-sensor', 'Temperature Monitor', 'Tamper Detection', 'Long Battery'],
  },
  {
    id: 9,
    name: 'PurpleAsset Mini',
    category: 'Asset Tracking',
    description: 'Compact asset tracker for high-value items with geofencing and shock detection.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹9,999',
    features: ['Compact Design', 'Geofencing', 'Shock Detection', 'Long Range'],
  },

  // Fuel Monitoring
  {
    id: 10,
    name: 'PurpleFuel Pro',
    category: 'Fuel Monitoring',
    description: 'Advanced fuel monitoring system with real-time consumption tracking and theft detection.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹22,999',
    features: ['Real-time Tracking', 'Theft Detection', 'Consumption Analytics', 'Fleet Integration'],
  },

  // E-Lock with GPS Tracker
  {
    id: 11,
    name: 'PurpleLock Smart',
    category: 'E-Lock with GPS Tracker',
    description: 'Smart electronic lock with GPS tracking, remote control, and anti-tamper features.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹18,999',
    features: ['Smart Lock', 'GPS Tracking', 'Remote Control', 'Anti-tamper'],
  },

  // Wifi Based Tracking
  {
    id: 12,
    name: 'PurpleWiFi Pro',
    category: 'Wifi Based Tracking',
    description: 'WiFi-based tracking device for indoor and outdoor monitoring with mesh networking.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹14,999',
    features: ['WiFi Tracking', 'Mesh Network', 'Indoor/Outdoor', 'Low Power'],
  },

  // Electric Vehicle
  {
    id: 13,
    name: 'PurpleEV Monitor',
    category: 'Electric Vehicle',
    description: 'Specialized tracking system for electric vehicles with battery monitoring and charging optimization.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹25,999',
    features: ['Battery Monitor', 'Charging Optimization', 'Range Tracking', 'EV Analytics'],
  },

  // Accessories
  {
    id: 14,
    name: 'PurpleAntenna Pro',
    category: 'Accessories',
    description: 'High-gain GPS antenna for improved signal strength in challenging environments.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹3,999',
    features: ['High Gain', 'Weatherproof', 'Easy Install', 'Universal Fit'],
  },
  {
    id: 15,
    name: 'PurpleCable Set',
    category: 'Accessories',
    description: 'Professional installation cable set with connectors and mounting hardware.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹2,499',
    features: ['Professional Grade', 'Complete Set', 'Weatherproof', 'Easy Install'],
  },
  {
    id: 16,
    name: 'PurpleMount Pro',
    category: 'Accessories',
    description: 'Universal mounting bracket for secure installation of tracking devices.',
    image: '/placeholder.svg?height=200&width=300',
    price: '₹1,999',
    features: ['Universal Fit', 'Secure Mount', 'Weatherproof', 'Easy Install'],
  },
];

export default component$(() => {
  const selectedCategory = useSignal('All Products');

  const filtered = () =>
    selectedCategory.value === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory.value);

  const handleCategoryChange = $((category: string) => {
    selectedCategory.value = category;
  });

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-5 py-24 border-b border-gray-200">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Explore Our IoT Products</h1>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Cutting-edge IoT hardware and solutions designed to power the next generation of connected experiences.
          </p>
        </div>
      </section>

      <section class="px-5 py-16">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <aside class="lg:w-64 flex-shrink-0">
            <div class="rounded-xl border border-gray-200 p-6 sticky top-8">
              <h3 class="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
              <div class="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick$={() => handleCategoryChange(c)}
                    class={{
                      'w-full text-left px-4 py-2 rounded-lg transition-colors border border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] font-medium':
                        selectedCategory.value === c,
                      'w-full text-left px-4 py-2 rounded-lg transition-colors text-gray-600 hover:text-[#2563EB] hover:bg-gray-50':
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
                <div key={product.id} class="rounded-xl border border-gray-200 overflow-hidden bg-white flex flex-col">
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
                  <div class="p-6 flex flex-col flex-1">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                        {product.category}
                      </span>
                      <span class="text-2xl font-bold text-gray-900">{product.price}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      {product.features.map((f) => (
                        <span key={f} class="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-600 border border-gray-200">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div class="flex gap-3 mt-auto">
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
