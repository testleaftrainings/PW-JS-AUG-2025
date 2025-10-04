import { test, expect } from '@playwright/test';

test.beforeAll(async ({ browser }) => {
  console.log("Global setup – only once before all tests");
});

test.beforeEach(async ({ page }) => {
  console.log("Setup before each test");
  await page.goto("http://leaftaps.com/opentaps/control/main");
});

test.afterEach(async ({ page }) => {
  console.log("Teardown after each test");
  console.log("Page title:", await page.title());
});

test.afterAll(async () => {
  console.log("Global teardown – only once after all tests");
});

test("Check LeafTaps.com title", async ({ page }) => {
  await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform");
});

test("Another test", async ({ page }) => {
  await expect(page.locator("h1")).toHaveText("Leaftaps - TestLeaf Automation Platform");
});
