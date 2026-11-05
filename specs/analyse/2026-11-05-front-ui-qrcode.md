# 2026-11-05 — Rapport d'exécution : QR code component (v2.0.0)

> SDL-FM 1.5.0, Phases 7 et 8 (remise à niveau, étape B, lot 2). Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `qr-preview`, `http://localhost:4201/front-ui-qrcode/`), page affichée.

## 1. Tests automatiques (Phase 7)

`npm test` : **27 réussis sur 27**, verts au premier lancement après le code.

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768 ; 320 px : carte de 288 et QR code de 256 ; 320 à 1440 sans défilement horizontal ; pied de page) | ✅ 9 / 9 |
| Contenu | S6 à S9 (QR code chargé et texte alternatif, lignes du titre et de la phrase, couleurs et espacement des lettres, fond en thème sombre) | ✅ 4 / 4 |
| Interactions | S10, S11 (clavier, liens) | ✅ 2 / 2 |
| Accessibilité | S12 : axe-core à 375 et 1440 px | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S13 (W3C Nu), S14 (html-validate au réglage de FM), S15 (eslint), longueurs en rem, aria-label, CSS logique ; fitness ADR-0003 et ADR-0004 | ✅ 8 / 8 |
| Visuel | S16, S17 | ✅ 2 / 2 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 960 | `desktop.jpg` | 0,63 % | 5,0 % | 0,62 % |
| Mobile 375 × 812 | `mobile.jpg` | 3,65 % | 5,0 % | 3,80 % |

Contrôle rouge fait avant le code (Phase 4) : 20 échecs pour la bonne raison sur le starter et 5 tests de garde ; fitness functions (Phase 5) : 2 échecs attendus.

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 768 px | 1440 px |
|---|---|---|---|
| Disposition | ✅ carte (16, 104) 288 × 492, QR code de 256, pas de défilement horizontal | ✅ carte (224, 263) 320 × 498, pied de page en bas | ✅ (tests S1, S5) |
| Police, image | ✅ Outfit 400 et 700 chargées ; QR code chargé (576 px affiché sur 256) | — | ✅ |
| Clavier | — | — | ✅ Tab : « Frontend Mentor », contour 2 px `#3E52A3` décalé de 2 px |

## 3. Écarts relevés et suites

Aucun écart.

| Constat | Suite |
|---|---|
| À 320 px, le titre tient sur 3 lignes et se coupe au trait d'union de « front-end » (« front- » / « end skills… ») | Sans suite : coupure normale d'un mot composé ; aucune image FM à cette largeur, aucune règle de FM concernée |

## 4. Verdict

Conforme à la spec et à la maquette validée (G3). Prêt pour la Phase 9 (README).
