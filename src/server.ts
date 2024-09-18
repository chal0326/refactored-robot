import { Hono } from "hono";

type Bindings = {
  ASSETS: {
    fetch: typeof fetch;
  };
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (ctx) => ctx.text("Hello world, this is Hono!!"));
app.get("/public/*", async (ctx) => {
    return await ctx.env.ASSETS.fetch(ctx.req.raw);
  });

export default app;