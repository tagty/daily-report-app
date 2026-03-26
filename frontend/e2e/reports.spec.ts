import { test, expect } from "@playwright/test";

test("日報を作成できる", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("/reports/new");

  await page.fill("#date", "2026-03-26");
  await page.fill("#body", "E2Eテストから作成した日報");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("/reports");
  await expect(page.getByText("E2Eテストから作成した日報")).toBeVisible();

  expect(errors).toEqual([]);
});
