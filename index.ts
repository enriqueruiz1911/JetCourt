const ROOT_PATH = "./dist";

const server = Bun.serve({
  hostname: "0.0.0.0",
  port: 3000,
  fetch: (req) => {
    let url = new URL(req.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
    }
    return new Response(Bun.file(ROOT_PATH + url.pathname));
  },
});

console.log(`Listening on ${server.url}`);
