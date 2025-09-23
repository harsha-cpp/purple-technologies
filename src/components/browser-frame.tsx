import { Slot, component$ } from '@builder.io/qwik';

type BrowserFrameProps = {
  url?: string;
  class?: string;
};

export default component$<BrowserFrameProps>(({ url = 'venus.framer.wiki', class: className }) => {
  return (
    <div class={`glass-card rounded-xl p-3 shadow-2xl ${className || ''}`}>
      <div class="flex items-center gap-1.5 mb-2 pl-2">
        <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div class="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div class="flex-1 flex justify-center">
          <div class="bg-white/10 backdrop-blur-sm rounded-md px-3 py-0.5 text-xs flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            {url}
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-inner">
        <Slot />
      </div>
    </div>
  );
});


