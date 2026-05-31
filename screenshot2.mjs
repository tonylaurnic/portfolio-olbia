import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });

await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

// scroll to HowItWorks section
await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll("section")).find(s =>
    s.textContent?.includes("Come funziona")
  );
  el?.scrollIntoView();
});
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/howitworks.png", fullPage: false });

await browser.close();
console.log("done");
