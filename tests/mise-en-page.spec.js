import { test, expect } from '@playwright/test'
import { open, card, qr, footer, box, near, textBox } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

for (const [id, w, h, x, y] of [['S1', 1440, 960, 560, 231], ['S2', 375, 812, 28, 157], ['S3', 768, 1024, 224, 263]]) {
  test(`${id} — ${w} × ${h} : carte de 320 × 498 centrée en (${x}, ${y})`, async ({ page }) => {
    await open(page, w, h)
    near(await box(card(page)), { x, y, width: 320, height: 498 }, 'carte')
    if (id !== 'S3') near(await box(qr(page)), { x: x + 16, y: y + 16, width: 288, height: 288 }, 'QR code')
  })
}

test('S4 — 320 px : carte de 288 px à 16 px des bords, QR code de 256 px', async ({ page }) => {
  await open(page, 320, 800)
  near(await box(card(page)), { x: 16, width: 288 }, 'carte')
  near(await box(qr(page)), { x: 32, width: 256, height: 256 }, 'QR code')
})

for (const width of [320, 375, 768, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(qr(page)).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 960 : pied de page centré sous la carte, dans la fenêtre', async ({ page }) => {
  await open(page, 1440, 960)
  const c = await box(card(page))
  // boîte sans arrondi (somme de deux demi-pixels)
  const f = await footer(page).boundingBox()
  const t = await textBox(footer(page))
  expect(f.y).toBeGreaterThanOrEqual(c.y + c.height)
  expect(f.y + f.height).toBeLessThanOrEqual(960)
  expect(Math.abs((t.left + t.right) / 2 - 720)).toBeLessThanOrEqual(1)
})
