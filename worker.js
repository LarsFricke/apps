export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const direct = await env.ASSETS.fetch(request);
    if (direct.status !== 404) return direct;

    const m = path.match(/^\/([^\/]+)(\/.*)?$/);
    if (m && !m[1].includes(".")) {
      const appName = m[1];
      const indexReq = new Request(
        new URL(`/${appName}/index.html`, url.origin),
        request
      );
      const indexRes = await env.ASSETS.fetch(indexReq);
      if (indexRes.status !== 404) return indexRes;
    }

    if (path === "/" || path === "") {
      const rootReq = new Request(new URL("/index.html", url.origin), request);
      const rootRes = await env.ASSETS.fetch(rootReq);
      if (rootRes.status !== 404) return rootRes;
    }

    return new Response("Not found", { status: 404 });
  },
};