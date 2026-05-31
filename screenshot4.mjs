import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(3200); // wait for splash to finish
await page.screenshot({ path: "/tmp/after_splash.png", fullPage: false });

// scroll down to show navbar scrolled state
await page.evaluate(() => window.scrollBy(0, 300));
await page.waitForTimeout(500);
await page.screenshot({ path: "/tmp/navbar_scrolled.png", fullPage: false });

await browser.close();
console.log("done");
