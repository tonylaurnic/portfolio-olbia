import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });

await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
await page.screenshot({ path: "/tmp/hero.png", fullPage: false });

await page.evaluate(() => document.querySelector("#services")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/services.png", fullPage: false });

await page.evaluate(() => document.querySelector("#portfolio")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/portfolio.png", fullPage: false });

await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/contact.png", fullPage: false });

await browser.close();
console.log("done");
