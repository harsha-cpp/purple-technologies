import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/apps', label: 'Apps' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default component$(() => {
  const loc = useLocation();
  const q = useSignal('');
  const mobileMenuOpen = useSignal(false);
  const scrolled = useSignal(false);

  // Turn navbar solid after scrolling past hero area
  useVisibleTask$(() => {
    const onScroll = () => {
      scrolled.value = window.scrollY > 8;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  const isActive = (href: string) => {
    if (href === '/') return loc.url.pathname === '/';
    return loc.url.pathname.startsWith(href);
  };

  return (
    <header class={{
      'sticky top-0 z-50 transition-colors bg-white/90 backdrop-blur border-b border-gray-100': true,
      'shadow-sm': scrolled.value,
    }}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo and version */}
          <div class="flex items-center gap-2">
            <Link href="/" class="flex items-center gap-2">
              <span class="font-semibold tracking-tight text-gray-900">Purple Technologies</span>
            </Link>
            <span class="text-xs px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 font-medium">v2.0</span>
          </div>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center gap-6 ml-auto">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                class={isActive(l.href)
                  ? 'text-[#5E4FDB] font-medium'
                  : 'text-gray-600 hover:text-[#5E4FDB] transition-colors'}
              >
                {l.label}
              </Link>
            ))}
          </nav>


          {/* Mobile menu button */}
          <button 
            onClick$={() => mobileMenuOpen.value = !mobileMenuOpen.value}
            class="md:hidden flex items-center p-2 rounded-md text-gray-600 hover:text-[#5E4FDB] hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {mobileMenuOpen.value 
                ? <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                : <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div class={`md:hidden ${mobileMenuOpen.value ? 'block' : 'hidden'} py-4`}>
          <div class="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                class={isActive(l.href) 
                  ? "text-[#5E4FDB] font-medium px-3 py-2 rounded-md" 
                  : "text-gray-600 hover:text-[#5E4FDB] px-3 py-2 rounded-md hover:bg-gray-50"}
                onClick$={() => mobileMenuOpen.value = false}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" class="btn-primary text-center mt-2">
              Buy Template
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
});