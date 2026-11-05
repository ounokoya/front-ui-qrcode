import { test, expect } from '@playwright/test'
import { open, qr, title, sentence, lineCount, style, cssColor } from './helpers.js'

// Spec §2, §3 et §6 — S6 à S9

test('S6 — QR code chargé avec son texte alternatif, un seul h1, la phrase', async ({ page }) => {
  await open(page, 1440, 960)
  await expect(qr(page)).toBeVisible()
  // l'effet, pas l'attribut : l'image est réellement chargée
  expect(await qr(page).evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true)
  await expect(title(page)).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(sentence(page)).toBeVisible()
})

test('S7 — 1440 × 960 : titre sur 2 lignes et phrase sur 3, comme sur l\'image FM', async ({ page }) => {
  await open(page, 1440, 960)
  expect(await lineCount(title(page))).toBe(2)
  expect(await lineCount(sentence(page))).toBe(3)
})

test('S8 — couleurs FM ; phrase à 0,2 px d\'espacement des lettres', async ({ page }) => {
  await open(page, 1440, 960)
  expect(await style(title(page), 'color')).toBe(await cssColor(page, 'hsl(218, 44%, 22%)'))
  expect(await style(sentence(page), 'color')).toBe(await cssColor(page, 'hsl(216, 15%, 48%)'))
  expect(parseFloat(await style(sentence(page), 'letterSpacing'))).toBeCloseTo(0.2, 2)
})

test('S9 — appareil en thème sombre : le fond de la page reste Slate 300 (A5)', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await open(page, 375, 812)
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe(await cssColor(page, 'hsl(212, 45%, 89%)'))
})
