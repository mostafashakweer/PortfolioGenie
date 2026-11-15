import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import { createServer } from "./server.js";

describe("PortfolioGenie API", () => {
  let server;
  let baseUrl;

  before(async () => {
    server = createServer({ origins: ["http://localhost:5173"] });
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
  });

  after(async () => {
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  });

  it("reports API health as JSON", async () => {
    const response = await fetch(`${baseUrl}/api/health`);

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      status: "ok",
      service: "portfoliogenie-api",
    });
    assert.equal(response.headers.get("cache-control"), "no-store");
  });

  it("allows only configured origins", async () => {
    const allowed = await fetch(`${baseUrl}/api/health`, {
      headers: { Origin: "http://localhost:5173" },
    });
    const rejected = await fetch(`${baseUrl}/api/health`, {
      headers: { Origin: "https://untrusted.example" },
    });

    assert.equal(allowed.headers.get("access-control-allow-origin"), "http://localhost:5173");
    assert.equal(rejected.status, 403);
  });

  it("handles preflight and unknown routes", async () => {
    const preflight = await fetch(`${baseUrl}/api/health`, {
      method: "OPTIONS",
      headers: { Origin: "http://localhost:5173" },
    });
    const missing = await fetch(`${baseUrl}/api/missing`);

    assert.equal(preflight.status, 204);
    assert.equal(preflight.headers.get("access-control-allow-methods"), "GET, OPTIONS");
    assert.equal(missing.status, 404);
    assert.deepEqual(await missing.json(), { error: "Not found" });
  });
});
