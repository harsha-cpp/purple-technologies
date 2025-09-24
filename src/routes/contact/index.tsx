import { component$, useSignal, $ } from '@builder.io/qwik';
import Button from '~/components/ui/button';

export default component$(() => {
  const form = useSignal({ name: '', email: '', company: '', subject: '', message: '' });

  const onSubmit$ = $(() => {
    console.log('Form submitted:', form.value);
  });

  return (
    <div class="min-h-screen bg-white text-gray-900">
      <section class="py-24 px-6 border-b border-gray-200 text-center">
        <div class="max-w-7xl mx-auto">
          <span class="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200 mb-4">Contact Us</span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Ready to start your IoT journey? We're here to help you build the connected future.</p>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="rounded-xl border border-gray-200 p-8 bg-white">
            <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
            <form preventdefault:submit onSubmit$={onSubmit$} class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Name *</label>
                  <input class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300" value={form.value.name} onInput$={(e, el) => (form.value = { ...form.value, name: (el as HTMLInputElement).value })} required />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Email *</label>
                  <input type="email" class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300" value={form.value.email} onInput$={(e, el) => (form.value = { ...form.value, email: (el as HTMLInputElement).value })} required />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Company</label>
                <input class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300" value={form.value.company} onInput$={(e, el) => (form.value = { ...form.value, company: (el as HTMLInputElement).value })} />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Subject *</label>
                <select class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300" value={form.value.subject} onInput$={(e, el) => (form.value = { ...form.value, subject: (el as HTMLSelectElement).value })} required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message *</label>
                <textarea rows={6} class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300" value={form.value.message} onInput$={(e, el) => (form.value = { ...form.value, message: (el as HTMLTextAreaElement).value })} required />
              </div>
              <Button type="submit" class="w-full">Send Message</Button>
              <p class="text-center text-gray-600 text-sm">We'll get back to you within 24 hours!</p>
            </form>
          </div>

          <div class="space-y-8">
            <div class="rounded-xl border border-gray-200 p-6 bg-white">
              <h3 class="text-xl font-semibold mb-4">Office Location</h3>
              <p class="text-gray-600 text-sm">Mullapudi Venkateswara Rao St<br/>Labbipet, Vijayawada, AP 520010<br/>India</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 bg-white">
              <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
              <p class="text-gray-600"><span class="text-gray-500">Email:</span> info@purpletechnosolutions.in</p>
              <p class="text-gray-600"><span class="text-gray-500">Phone:</span> +91 93469 34969</p>
            </div>
            <div class="rounded-xl border border-gray-200 p-6 bg-white">
              <h3 class="text-xl font-semibold mb-4">Business Hours</h3>
              <div class="space-y-2 text-sm text-gray-700">
                <div class="flex justify-between"><span>Monday - Friday:</span><span>9:00 AM - 6:00 PM</span></div>
                <div class="flex justify-between"><span>Saturday:</span><span>10:00 AM - 4:00 PM</span></div>
                <div class="flex justify-between"><span>Sunday:</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
