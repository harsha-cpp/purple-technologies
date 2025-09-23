import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section class="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center px-6 text-white">
        {/* Neutral hero background */}
        <div class="absolute inset-0"></div>
        
        {/* Premium grid background */}
        <div class="grid-background">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
        
        {/* Removed colorful orbs for clean look */}
        
        <div class="max-w-5xl mx-auto text-center space-y-4 relative z-10 py-10">
          <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-balance leading-tight text-gray-900">
            Build smarter, scale faster
            <br />with Purple Technologies template.
          </h1>
          <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Purple Technologies simplifies your business growth with a flexible, easy-to-use
            template for startups.
          </p>
          <div class="flex items-center justify-center gap-4 pt-2">
            <Link href="/products" class="bg-white text-[#5E4FDB] hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Decorative elements - reduced size */}
          <div class="relative mt-2">
            <div class="absolute -bottom-4 -right-8 w-24 h-24 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
            <div class="absolute -bottom-2 left-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full blur-sm"></div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section class="px-6 py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto text-center space-y-8">
          <div class="text-[#5E4FDB] text-sm font-semibold tracking-wider">SOME TRUSTED PARTNERS</div>
          <h2 class="text-3xl md:text-4xl font-semibold mb-12">The globe's top reliable enterprise</h2>
          <div class="flex flex-wrap justify-center items-center gap-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} class="grayscale opacity-50 hover:opacity-100 transition-opacity">
                <div class="h-8 w-24 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="px-6 py-24">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="inline-flex items-center text-[#5E4FDB] gap-2 font-semibold">
                <span class="w-6 h-6 rounded-full bg-[#5E4FDB]/10 flex items-center justify-center text-sm">1</span>
                <span>Brand Customization</span>
              </div>
              <div class="text-[#5E4FDB] text-sm font-semibold tracking-wider">MAXIMIZE YOUR BRAND</div>
              <h2 class="text-3xl md:text-4xl font-semibold">Tailor your brand for maximum impact</h2>
              <p class="text-gray-600">
                Create a unique brand experience effortlessly with our customizable template, designed to fit your startup's needs.
              </p>
              <Link href="/products" class="btn-primary inline-block">
                Get Started
              </Link>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 bg-white shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Brand Customization" 
                class="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="px-6 py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto text-center space-y-8">
          <div class="text-[#5E4FDB] text-sm font-semibold tracking-wider">PROVEN RESULTS</div>
          <h2 class="text-3xl md:text-4xl font-semibold mb-6">Our global impact</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Empowering startups worldwide with tailored solutions, trusted by thousands to deliver success and growth.
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div class="space-y-2">
              <div class="text-4xl font-bold">1,200+</div>
              <div class="text-[#5E4FDB] text-sm font-semibold">STARTUPS EMPOWERED</div>
              <p class="text-gray-600 text-sm">Startups and businesses have launched successfully.</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold">5,000+</div>
              <div class="text-[#5E4FDB] text-sm font-semibold">TEMPLATES CUSTOMIZED</div>
              <p class="text-gray-600 text-sm">Templates customized to meet unique business needs.</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold">75+</div>
              <div class="text-[#5E4FDB] text-sm font-semibold">GLOBAL REACH</div>
              <p class="text-gray-600 text-sm">Used by founders worldwide across 75+ countries.</p>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold">98%</div>
              <div class="text-[#5E4FDB] text-sm font-semibold">SUPPORT SATISFACTION</div>
              <p class="text-gray-600 text-sm">With our 24/7 support and dedicated assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section class="px-6 py-24">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="text-[#5E4FDB] text-sm font-semibold tracking-wider">INTEGRATIONS</div>
              <h2 class="text-3xl md:text-4xl font-semibold">Enhance your product by the applications</h2>
              <p class="text-gray-600">
                Seamlessly connect with essential tools and platforms, ensuring smooth functionality and enhanced performance for your business operations.
              </p>
            </div>
            <div class="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} class="aspect-square rounded-xl bg-[#5E4FDB]/5 flex items-center justify-center">
                  <div class="w-10 h-10 rounded-full bg-[#5E4FDB]/20 flex items-center justify-center">
                    <div class="w-6 h-6 rounded-full bg-[#5E4FDB]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="px-6 py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center space-y-4">
            <div class="text-[#5E4FDB] text-sm font-semibold tracking-wider">DESIGNED FOR FOUNDERS</div>
            <h2 class="text-3xl md:text-4xl font-semibold">Empower your startup's growth</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Unlock new opportunities and scale effortlessly with a template built to meet the needs of ambitious founders.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="p-6 space-y-4">
                <div class="w-10 h-10 rounded-lg bg-[#5E4FDB]/10 flex items-center justify-center text-[#5E4FDB]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Tailored for Your Strong Vision</h3>
                <p class="text-gray-600">
                  Adapt every element to reflect your startup's identity and growth trajectory with ease.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="p-6 space-y-4">
                <div class="w-10 h-10 rounded-lg bg-[#5E4FDB]/10 flex items-center justify-center text-[#5E4FDB]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Lightspeed Launch in Minutes</h3>
                <p class="text-gray-600">
                  Get your website up and faster, allowing you to focus on building your businesses.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="p-6 space-y-4">
                <div class="w-10 h-10 rounded-lg bg-[#5E4FDB]/10 flex items-center justify-center text-[#5E4FDB]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20V10"></path>
                    <path d="M18 20V4"></path>
                    <path d="M6 20v-6"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Ready to Grow Your Startup</h3>
                <p class="text-gray-600">
                  Our template evolves with you, your business always looks and performs best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="px-6 py-16 gradient-hero text-white relative">
        <div class="absolute inset-0 opacity-10">
          <div class="grid grid-cols-6 grid-rows-6 h-full w-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} class="border border-white/20"></div>
            ))}
          </div>
        </div>
        <div class="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div class="text-white/80 text-sm font-semibold tracking-wider">AFFORDABLE PLANS</div>
          <h2 class="text-2xl md:text-3xl font-semibold">Preferred by startups and growing businesses</h2>
          <p class="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by thousands of entrepreneurs and teams to deliver high value at a competitive price.
          </p>
          <div class="flex justify-center gap-4 pt-3">
            <Link href="/contact" class="bg-white text-[#5E4FDB] hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started
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
        "Fast Qwik site for Purple Technologies with AI/ML powered IoT solutions.",
    },
  ],
};