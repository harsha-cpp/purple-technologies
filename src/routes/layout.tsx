import { component$, Slot } from '@builder.io/qwik';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main class="flex-1">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
