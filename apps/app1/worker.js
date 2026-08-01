export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let p = url.pathname;
    if (p === "/app1" || p.startsWith("/app1/")) {
      p = p.slice("/app1".length) || "/";
    }
    url.pathname = p;
    return env.ASSETS.fetch(new Request(url, request));
  },
};