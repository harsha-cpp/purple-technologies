import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const showFooterFlow = useSignal(false);

  // Equivalent to useEffect for scroll detection
  useVisibleTask$(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerElement = document.querySelector("footer");
      const footerTop = footerElement ? footerElement.offsetTop : document.body.scrollHeight;
      const windowBottom = scrollY + window.innerHeight;

      // Show footer flow animation when approaching footer
      showFooterFlow.value = windowBottom > footerTop - 200;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <footer class="relative bg-white px-8 md:px-16 lg:px-24 xl:px-32 py-16 border-t border-gray-200 overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div>
            <h4 class="font-bold mb-4 text-gray-500 text-sm uppercase tracking-wider">SITEMAP</h4>
            <ul class="space-y-3 text-gray-700">
              <li>
                <Link href="/" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/apps" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/shop" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4 text-gray-500 text-sm uppercase tracking-wider">COMPANY</h4>
            <ul class="space-y-3 text-gray-700">
              <li>
                <Link href="/about" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4 text-gray-500 text-sm uppercase tracking-wider">CONTACT</h4>
            <ul class="space-y-3 text-gray-700">
              <li>
                <Link href="/contact" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" class="font-medium hover:text-[#5E4FDB] transition-colors duration-300">
                  Support
                </a>
              </li>
            </ul>
          </div>

          
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          <div class="text-[#5E4FDB] text-sm font-semibold ">©2025 PURPLE TECHNOLOGIES. ALL RIGHTS RESERVED.</div>
          <div class="text-[#5E4FDB] text-sm font-semibold hover:text-[#5E4FDB] transition-colors duration-300 cursor-pointer">LINKEDIN, TWITTER, GITHUB</div>
          <div class="text-[#5E4FDB] text-sm font-semibold">BUILT WITH INNOVATION</div>
        </div>

        {/* Large watermark text */}
        <div class="relative text-center py-16">
          <div class="text-[8vw] font-bold text-gray-100 leading-none select-none">Purple Technologies</div>
        </div>
      </div>
    </footer>
  );
});
