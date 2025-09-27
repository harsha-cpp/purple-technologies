import { component$ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

const services = [
  {
    id: 1,
    title: 'IoT & Embedded',
    subtitle: 'Connected Solutions & Smart Systems',
    description:
      'Comprehensive IoT development services covering everything from sensor integration to cloud connectivity. We build scalable, secure, and intelligent systems that transform your business operations.',
    features: [
      'Real-time monitoring',
      'Smart energy/logistics',
      'Custom gateways',
      'PCB design'
    ],
    image: '/placeholder.svg?height=400&width=600',
    stats: { projects: '100+', devices: '50K+', uptime: '99.9%' },
  },
  {
    id: 2,
    title: 'Robotics & Automation',
    subtitle: 'Intelligent Manufacturing Solutions',
    description:
      'Advanced robotics and automation systems that enhance productivity and efficiency. From AGV controllers to industrial robotics, we deliver cutting-edge automation solutions for modern manufacturing.',
    features: [
      'AGV Controllers',
      'Process Automation',
      'Industrial Robotics'
    ],
    image: '/placeholder.svg?height=400&width=600',
    stats: { systems: '50+', efficiency: '60%', downtime: '-40%' },
  },
  {
    id: 3,
    title: 'IT & Cloud Services',
    subtitle: 'Digital Transformation Solutions',
    description:
      'Complete IT and cloud services to modernize your business operations. From web applications to cloud deployment, we provide end-to-end technology solutions that scale with your business.',
    features: [
      'Web & Mobile Apps',
      'Cloud Deployment',
      'QA & Testing',
      'Enterprise Integration'
    ],
    image: '/placeholder.svg?height=400&width=600',
    stats: { apps: '200+', cloud: 'AWS/Azure', uptime: '99.95%' },
  },
  {
    id: 4,
    title: 'R&D & Consulting',
    subtitle: 'Innovation & Strategic Guidance',
    description:
      'Expert research, development, and consulting services to drive innovation and ensure compliance. We help you navigate complex technology landscapes and implement best practices for sustainable growth.',
    features: [
      'Product lifecycle',
      'Quality & Compliance',
      'Consulting'
    ],
    image: '/placeholder.svg?height=400&width=600',
    stats: { clients: '75+', projects: '150+', success: '95%' },
  },
];

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="px-5 py-24 border-b border-gray-200 text-center">
        <div class="max-w-7xl mx-auto">
          <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-4">Services</span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology services designed to transform your business and drive innovation across IoT, automation, IT, and consulting.
          </p>
        </div>
      </section>

      <section class="px-5 py-16">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.id} class="group relative rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 flex flex-col overflow-hidden">
                {/* Premium subtle overlay */}
                <div class="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="space-y-6 flex-1 relative z-10">
                  <div class="space-y-4">
                    <span class="inline-block text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-medium tracking-wide">{s.title}</span>
                    <h2 class="text-2xl font-bold text-gray-900">{s.subtitle}</h2>
                    <p class="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                  
                  <div class="space-y-4">
                    <h3 class="font-semibold text-gray-900 text-sm uppercase tracking-wider">Key Services</h3>
                    <ul class="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} class="flex items-center text-sm text-gray-600 group/item">
                          <div class="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                          </div>
                          <span class="group-hover/item:text-gray-900 transition-colors duration-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div class="pt-6 mt-auto relative z-10">
                  <Button class="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});
