# 2026-11-05 — Brainstorming : QR code component (refonte v2.0.0)

> SDL-FM 1.5.0, Pré-dev 1 et 2. Ancienne solution Newbie de 2023, **refaite dans le même dépôt** (étape B de la remise à niveau, lot 2 avec les deux autres cartes du lot). Pas de points en plus : la solution est déjà comptée sur FM.

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape B ; Q1 même dépôt en v2.0.0, Q2 SDL-FM complète avec G2 et G3 par lot, Q3 GitHub Pages). Koya : « Oui, commence B ».
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la modification de la solution sur FM.
- **Lot 2 :** QR code, Order summary, NFT preview card (les trois cartes les plus simples) ; lots 3 et 4 ensuite (Profile card, Stats preview, 3-column ; Product preview).

## Existant (v1, 2023)

- Dépôt `front-ui-qrcode` : 4 commits du 2023-01-23, Vite + Tailwind v3, restes du modèle Vite (`counter.js`), README du starter, aucun test.
- Site sur une adresse Netlify de branche ; titre de la solution sur FM : « positionnement, font-size, color, image background ».
- Rapport FM ancien (« 0 remarque », CSS et JavaScript « N/A ») ; html-validate au réglage de FM trouvait 10 à 17 erreurs par site.

## Import (Phase 0)

- Ancien code retiré (historique gardé) ; starter actuel `frontendmentorio/qr-code-component` (branche `main`, 2026-03-30) copié tel quel, sans le fichier Figma ; `AGENTS.md` et `CLAUDE.md` rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM) ; `.gitignore` du starter complété (dépendances, build, rapports de tests).
- Le starter ne fournit **aucun fichier de police** (Google Fonts) : choix du chargement à l'ADR.

## Analyse (Phase 2)

`specs/visuel/front-ui-qrcode-analyse.png` (et `.excalidraw`).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 2. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-B1 | Texte alternatif du QR code | « QR code to frontendmentor.io » |
| Q-B2 | Niveau du titre | h1 (composant seul sur la page) |
| Q-B3 | Pas de maquette tablette | La même carte centrée à toutes les largeurs ; 16 px de marge à 320 px |
| Q-B4 | Attribution absente des images | Gardée sous la carte comme au lot 1 : 11 px, liens #3E52A3 soulignés, survol sans soulignement, focus 2 px |
| Q-B5 | Refonte | Même dépôt en v2.0.0, historique gardé ; GitHub Pages ; « Edit solution » sur FM |

## Maquette validée (G3, 2026-11-05)

Koya : « Je valide (G3) » pour le lot 2. Maquette : `specs/visuel/penpot/maquette.md`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| G3-1 | Tablette (Q-B3) | La même carte centrée |
| G3-2 | Seuils visuels | 5 % pour les 2 écrans calibrés |
| G3-3 | Paragraphe | Espacement des lettres 0,2 px (les 3 lignes de l'image sont 3 % plus larges qu'à 0 px) |

## Spec, ADR et verrou code (2026-11-05)

- Spec : `specs/specifications/qr-code-component.md` ; tests écrits avant le code, contrôle rouge fait (voir les commits `test:`).
- ADR : `specs/adr/v2.0/` (ADR-0003 à ADR-0006) et leurs fitness functions, contrôle rouge fait.
- Polices : Koya accepte le téléchargement des paquets Fontsource (ADR-0004).
- **Verrou code** : Koya confirme « Claude écrit le code ».
