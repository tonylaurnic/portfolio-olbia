import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(3200);

await page.evaluate(() => document.querySelector("#about")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/about.png" });

await page.evaluate(() => document.querySelector("#portfolio")?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: "/tmp/portfolio2.png" });

await browser.close();
console.log("done");
