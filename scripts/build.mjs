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

const landing = `<!doctype html>
<html><head><meta charset="utf-8"><title>my-apps</title></head>
<body style="font-family:sans-serif;padding:2rem">
<h1>my-apps</h1>
<ul>
${apps.map((a) => `  <li><a href="/${a}/">${a}</a></li>`).join("\n")}
</ul>
</body></html>
`;
writeFileSync(join(distDir, "index.html"), landing);

writeFileSync(
  join(distDir, ".assetsignore"),
  `_redirects
_headers
_routes.json
`
);

console.log(`\nDone. Output: ${distDir}`);