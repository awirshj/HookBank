import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from 'svelte-adapter-github';

export default {

    kit: {
        // default options are shown
        adapter: adapter({
   pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      domain: '',
      jekyll: false
        })
    },
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
};
