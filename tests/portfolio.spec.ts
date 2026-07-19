import { test, expect } from "@playwright/test";

test.describe("Главная страница", () => {
  test("загружается с корректным заголовком и без ошибок консоли", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.goto("/");

    await expect(page).toHaveTitle(/Шукур Нагметов/);
    expect(errors).toEqual([]);
  });

  test("основные секции присутствуют на странице", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#achievements")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("навигация по якорным ссылкам работает", async ({ page }) => {
    await page.goto("/");

    await page
      .locator("nav")
      .getByRole("link", { name: "Проекты", exact: true })
      .click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator("#projects")).toBeInViewport();
  });

  test("достижения показывают реальный контент", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByText("Robotics Laboratory")
    ).toBeVisible();
    await expect(
      page.getByText("Универсиаде «Ломоносов»")
    ).toBeVisible();
  });

  test("email и GitHub-ссылки корректны", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.locator('a[href="mailto:nagmetov.2003@gmail.com"]').first()
    ).toBeVisible();
    await expect(
      page
        .locator('a[href="https://github.com/Nagmetov"]')
        .first()
    ).toBeVisible();
  });
});

test.describe("Переключение языка", () => {
  test("кнопка переключает контент между RU и EN", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Обо мне", exact: true })
    ).toBeVisible();

    await page.getByRole("button", { name: "Switch language" }).click();

    await expect(
      page.getByRole("heading", { name: "About", exact: true })
    ).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("выбор языка сохраняется после перезагрузки", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Switch language" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.reload();

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(
      page.getByRole("heading", { name: "About", exact: true })
    ).toBeVisible();
  });
});

test.describe("SEO и метаданные", () => {
  test("robots.txt доступен и ссылается на sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();
    expect(body).toContain("Sitemap:");
  });

  test("sitemap.xml доступен и валиден", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();
    expect(body).toContain("<urlset");
  });

  test("favicon/icon отдаётся успешно", async ({ request }) => {
    const response = await request.get("/icon");
    expect(response.ok()).toBeTruthy();
  });
});
