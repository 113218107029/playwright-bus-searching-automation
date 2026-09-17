import { test, expect } from "@playwright/test";
import testData from "../data/testData.json";


test("Search buses in AbhiBus", async({ browser }) => {

    const context = await browser.newContext({
        viewport: { width: 1536, height: 864 }
    });
    const page = await context.newPage();

    for (const data of testData) {
        await page.goto("https://www.abhibus.com/", {
            waitUntil: "domcontentloaded"
        });

        // Leaving From
        await page.locator("[placeholder='Leaving From']").click();
        await page.locator("[placeholder='Leaving From']").fill(data.From);
        await page.getByText("Chennai Tamil Nadu").click();

        // Going To
        await page.locator("[placeholder='Going To']").click();
        await page.locator("[placeholder='Going To']").fill(data.To);
        await page.getByText("Bengaluru").first().click();

        const [day, month, year] = data.Date.split("-");
        console.log("Year:", year);
        console.log("Month:", month);
        console.log("Day:", day);

        // Journey Date
        await page.locator("[placeholder='Onward Journey Date']").click();
        await page.getByRole("button", {name: day,  exact: true }).click();

        // Search
        await page.getByRole("button", {
            name: "Search", exact: true }).click();

        // Wait for results
        await page.waitForLoadState("networkidle");

        // Verify URL
        await expect(page).toHaveURL(/search/i);

        // Example locator – replace with the actual bus card locator
        const busCards = await page.locator(".buses-availability").textContent();
        const busCount = busCards.trim().split(" ")[1];     
        await expect(Number(busCount)).toBeGreaterThan(0);
    }
    await context.close();
 });
