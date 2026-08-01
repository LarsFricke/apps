export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let p = url.pathname;
    if (p === "/app2" || p.startsWith("/app2/")) {
      p = p.slice("/app2".length) || "/";
    }
    url.pathname = p;
    return env.ASSETS.fetch(new Request(url, request));
  },
};