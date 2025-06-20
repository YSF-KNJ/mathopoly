import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter({
      edge: false,  // SSR via Node-based Netlify Functions (default)
      split: false  // bundle SSR into one function; set to true for route-based split
    })
  }
};
