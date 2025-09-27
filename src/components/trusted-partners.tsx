import { component$, useSignal, useTask$ } from '@builder.io/qwik';

// Define type for the carousel element with style properties
type CarouselElement = HTMLDivElement & {
  style: {
    transition: string;
    transform: string;
    animationPlayState: string;
  };
  addEventListener: (type: string, listener: () => void) => void;
  removeEventListener: (type: string, listener: () => void) => void;
};

export default component$(() => {
  const partners = [
    { name: 'AWS', logo: '/images/partners/aws.png' },
    { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    { name: 'Create Robot', logo: '/images/partners/createRobot.png' },
    { name: 'Acebott', logo: '/images/partners/acebott.png' },
    { name: 'WEEeMAKE', logo: '/images/partners/weeemake.png' },
  ];

  // Create a seamless loop by duplicating the partners array multiple times
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  const carouselRef = useSignal<HTMLDivElement>();
  const containerRef = useSignal<HTMLDivElement>();

  useTask$(({ cleanup }) => {
    if (typeof window === 'undefined') return;

    const carousel = carouselRef.value as unknown as CarouselElement;
    const container = containerRef.value;

    if (!carousel || !container) return;

    const duration = 20; // seconds for one full loop

    // Reset animation when it completes to create infinite loop
    const resetAnimation = () => {
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(0)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          carousel.style.transition = `transform ${duration}s linear`;
        });
      });
    };

    // Set initial styles
    carousel.style.transition = `transform ${duration}s linear`;
    carousel.style.transform = 'translateX(0)';

    // Start animation
    requestAnimationFrame(() => {
      carousel.style.transform = 'translateX(-50%)';
    });

    // Set up event listeners
    carousel.addEventListener('transitionend', resetAnimation);

    const handleMouseEnter = () => {
      carousel.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      carousel.style.animationPlayState = 'running';
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    cleanup(() => {
      carousel.removeEventListener('transitionend', resetAnimation);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    });
  });

  return (
    <section class="py-16 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        <div ref={containerRef} class="carousel-container relative w-full overflow-hidden">
          <div ref={carouselRef} class="carousel-track flex items-center">
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} class="carousel-slide flex-shrink-0 px-8">
                <div class="h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={48}
                    class="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={`
        .carousel-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .carousel-slide {
          flex: 0 0 auto;
          padding: 0 2rem;
        }

        .carousel-slide img {
          max-height: 4rem;
          max-width: 12rem;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .carousel-slide:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .carousel-container:hover .carousel-track {
            animation-play-state: paused;
          }
        }
      `} />
    </section>
  );
});
