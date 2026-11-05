# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [2.0.0] — 2026-11-05

Refonte complète de la solution de 2023 (SDL-FM 1.5.0, remise à niveau du profil, étape B, lot 2), à partir du starter actuel, dans le même dépôt.

### Added
- Carte de 320 × 498 centrée dans la fenêtre à toutes les largeurs, 16 px de marge sous 352 px (Q-B3, G3-1, ADR-0006).
- QR code avec le texte alternatif « QR code to frontendmentor.io » (Q-B1) ; titre en `h1` (Q-B2) ; espacement des lettres de 0,2 px de la phrase (G3-3).
- Outfit servie avec le site par Fontsource (ADR-0004).
- Attribution de Koya Esdras : liens soulignés sauf au survol, contour de focus (Q-B4).
- Tests : 17 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, règles FM déjà vues (rem, aria-label, CSS logique), fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (0,63 % ; 3,65 % pour un seuil de 5 %).

### Changed
- Vite 8 et Tailwind CSS v4 (tokens dans `@theme`, ADR-0003) au lieu de Vite et Tailwind v3 ; publication sur GitHub Pages (branche `gh-pages`) au lieu de Netlify.

### Removed
- Code de 2023 (restes du modèle Vite, dont `counter.js`) et README du starter.
