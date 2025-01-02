const baseDir = "./pages";

// this is a basic page router in js
Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    const path = `${baseDir}${url.pathname}index.html`;
    const file = Bun.file(path);

    const exists = await file.exists(); // boolean;
    if (!exists) {
      console.log(`${url.pathname} does not exists`);
      return new Response("404!");
    }
    return new Response(await file.text());
  },
});
