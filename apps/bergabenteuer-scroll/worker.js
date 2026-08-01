export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let p = url.pathname;
    const prefix = "/bergabenteuer-scroll";
    if (p === prefix || p.startsWith(prefix + "/")) {
      p = p.slice(prefix.length) || "/";
    }
    url.pathname = p;
    return env.ASSETS.fetch(new Request(url, request));
  },
};