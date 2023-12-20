import { test } from "@playwright/test";

test("screenshot cards", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.setViewportSize({
    width: 409 * 10,
    height: 567 * 1,
  });

  await page.locator(".cards").screenshot({ path: "build/cards.png" });
});

// test("screenshot boards", async ({ page }) => {
//   await page.goto("http://localhost:5173/");

//   await page.setViewportSize({
//     width: 409 * 10,
//     height: 567 * 1,
//   });

//   await page
//     .locator(".hazard-book")
//     .screenshot({ path: "build/hazard-book.png" });
//   await page
//     .locator(".player-board")
//     .screenshot({ path: "build/playerboard.png" });
//   await page
//     .locator(".orbit-board")
//     .screenshot({ path: "build/orbitboard.png" });
// });
