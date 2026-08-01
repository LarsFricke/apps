import { readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { execSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appsDir = join(root, "apps");
const distDir = join(root, "dist");

const apps = readdirSync(appsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(appsDir, d.name, "package.json")))
  .map((d) => d.name)
  .sort();

console.log("Found apps:", apps.join(", "));

rmSync(distDir, { recursive: true, force: true });

for (const app of apps) {
  console.log(`\nBuilding ${app}...`);
  execSync("npm run build", { stdio: "inherit", cwd: join(appsDir, app) });
}

const redirectLines = apps.map((app) => `/${app}/*  /${app}/index.html  200`).join("\n");
writeFileSync(join(distDir, "_redirects"), redirectLines + "\n");

const routes = { version: 1, include: [], exclude: ["/*"] };
writeFileSync(join(distDir, "_routes.json"), JSON.stringify(routes, null, 2) + "\n");

console.log(`\nDone. Output: ${distDir}`);