import { createServer as createHttpServer } from "node:http";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const allowedOrigins = (value = "") =>
  value
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

export function createServer({ origins = allowedOrigins(process.env.CORS_ORIGIN) } = {}) {
  return createHttpServer((request, response) => {
    const origin = request.headers.origin;

    if (origin && !origins.includes(origin)) {
      response.writeHead(403, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ error: "Origin is not allowed" }));
      return;
    }

    if (origin) {
      response.setHeader("Access-Control-Allow-Origin", origin);
      response.setHeader("Vary", "Origin");
    }

    if (request.method === "OPTIONS") {
      response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      response.setHeader("Access-Control-Allow-Headers", "Content-Type");
      response.writeHead(204);
      response.end();
      return;
    }

    if (request.method === "GET" && request.url === "/api/health") {
      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": "application/json; charset=utf-8",
      });
      response.end(JSON.stringify({ status: "ok", service: "portfoliogenie-api" }));
      return;
    }

    response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ error: "Not found" }));
  });
}

function getPort(value) {
  const port = Number(value ?? 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535");
  }
  return port;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const port = getPort(process.env.PORT);
  const host = process.env.HOST ?? "0.0.0.0";
  createServer().listen(port, host, () => {
    console.log(`PortfolioGenie API listening on ${host}:${port}`);
  });
}
