import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import ImgPlaceholder from '~/media/placeholder.svg?jsx';
import AnnouncementPill from '~/components/announcement-pill';
import TrustedPartners from '~/components/trusted-partners';

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section class="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center px-5 text-white">
        <div class="absolute inset-0"></div>
        
        
        <div class="max-w-5xl mx-auto text-center space-y-4 relative z-10 py-10">
          <div class="mb-4 flex justify-center">
            <AnnouncementPill />
          </div>
          <h1 class="text-3xl md:text-6xl font-bold tracking-tight text-balance leading-tight text-gray-900">
            Build <span class="text-[#2563EB]">smarter</span>, scale <span class="text-[#2563EB]">faster</span>
            <br />with Purple Technologies
          </h1>
          <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Purple Technologies simplifies your business growth with a flexible, easy-to-use
            template for startups.
          </p>
          <div class="flex items-center justify-center gap-4 pt-2">
            <Link href="/products" class="text-white bg-[#2563EB] hover:bg-gray-100 hover:text-[#2563EB] px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div class="relative mt-2">
            <div class="absolute -bottom-4 -right-8 w-24 h-24 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
            <div class="absolute -bottom-2 left-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full blur-sm"></div>
          </div>
        </div>
      </section>

      <TrustedPartners />

      {/* Features */}
      <section class="px-5 py-24">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="text-[#2563EB] text-sm font-semibold tracking-wider">WHO WE ARE</div>
              <h2 class="text-3xl md:text-4xl font-semibold">Smarter Solutions for a Connected Tomorrow</h2>
              <p class="text-gray-600">
                At Purple Technologies, we are redefining the way the world connects through the power of the Internet of Things. As a forward-thinking IoT solutions company, we specialize in creating intelligent systems that bridge the gap between the physical and digital worlds.
              </p>
              <p class="text-gray-600">
                Our team of innovators, engineers, and problem-solvers is passionate about building technology that makes everyday life smarter, safer, and more efficient. From smart devices and connected platforms to end-to-end IoT ecosystems, we deliver solutions that help businesses and communities thrive in a connected future.
              </p>
              <Link href="/products" class="btn-primary inline-block">
                Know More
              </Link>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 bg-white shadow-lg">
              <ImgPlaceholder 
                class="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="px-5 py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto text-center space-y-8">
          <div class="text-[#2563EB] text-sm font-semibold tracking-wider">PROVEN RESULTS</div>
          <h2 class="text-3xl md:text-4xl font-semibold mb-6">Our global impact</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Empowering startups worldwide with tailored solutions, trusted by thousands to deliver success and growth.
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div class="space-y-2">
              <div class="text-4xl font-bold">50+</div>
              <div class="text-[#2563EB] text-sm font-semibold">IOT SOLUTIONS DEPLOYED</div>
              <p class="text-gray-600 text-sm">Helping industries, businesses, and communities connect smarter</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold">100+</div>
              <div class="text-[#2563EB] text-sm font-semibold">CLIENTS SERVED</div>
              <p class="text-gray-600 text-sm">Trusted by startups, enterprises, and innovators worldwide</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold">5+</div>
              <div class="text-[#2563EB] text-sm font-semibold">YEARS OF INNOVATION</div>
              <p class="text-gray-600 text-sm">Driving cutting-edge IoT research and development</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold">95%</div>
              <div class="text-[#2563EB] text-sm font-semibold">CLIENT SATISFACTION</div>
              <p class="text-gray-600 text-sm">Delivering reliable, future-ready solutions tailored to business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="px-5 py-24 bg-white">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center space-y-4">
            <div class="text-[#2563EB] text-sm font-semibold tracking-wider">WHY CHOOSE US</div>
            <h2 class="text-3xl md:text-4xl font-semibold">The Purple Advantage</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              We're your trusted partner in IoT innovation, offering end-to-end solutions that transform ideas into reality.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="p-6 space-y-4">
                <div class="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">White Label Solutions</h3>
                <p class="text-gray-600">
                  Complete IoT products and platforms, fully developed and ready to launch under your brand. We help you go to market faster without the heavy R&D costs.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="p-6 space-y-4">
                <div class="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Low-Cost Prototype Development</h3>
                <p class="text-gray-600">
                  Affordable, fast, and efficient prototyping to help you test, validate, and refine your ideas. Turn concepts into functional models with minimal investment.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="p-6 space-y-4">
                <div class="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20V10"></path>
                    <path d="M18 20V4"></path>
                    <path d="M6 20v-6"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Your Idea, Our Expertise</h3>
                <p class="text-gray-600">
                  A collaborative approach where we combine your vision with our technical expertise to bring innovations to life. We build solutions that are practical and scalable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="px-6 py-16 bg-white text-gray-900 relative">
        <div class="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div class="text-[#2563EB] text-sm font-semibold tracking-wider">CONTACT US</div>
          <h2 class="text-2xl md:text-3xl font-semibold">Ready to Transform Your Business?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how our IoT solutions can help you achieve your business goals. Get in touch with our experts today.
          </p>
          <div class="flex justify-center gap-4 pt-3">
            <Link href="/contact" class="bg-[#2563EB] text-white hover:bg-[#1D4ED8] px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Purple Technologies - AI/ML Powered IoT",
  meta: [
    {
      name: "description",
      content:
        "Purple Technologies provides cutting-edge IoT solutions powered by AI/ML to help businesses transform and grow in the digital age.",
    },
  ],
};
