# ADR-0005 : Page statique ; une image du QR code en double résolution

## Statut
Accepté (2026-11-05) — décisions G2 (Q-B1, Q-B2).

## Contexte
La page n'a aucun comportement : seuls les liens de l'attribution sont interactifs (spec §5). Le starter fournit `image-qr-code.png` en 576 × 576, le double de sa taille affichée (288 × 288 ; 256 × 256 à 320 px, S4).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Un `img` avec `width`, `height` et `alt` (choisie)** | La place est réservée avant le chargement ; nette sur les écrans à 2 pixels par point ; aucun fichier à fabriquer | — |
| QR code en image de fond CSS | — | Invisible pour les lecteurs d'écran : Q-B1 demande un texte alternatif |

## Décision
- `img` de `image-qr-code.png`, `width="576" height="576"`, largeur 100 % de la carte moins ses marges, hauteur automatique ; texte alternatif « QR code to frontendmentor.io » (Q-B1) ; chargement normal.
- Titre en `h1` (Q-B2), phrase en `p`, dans un `article` à l'intérieur de `main`.
- `src/main.js` n'importe que la feuille de style.

## Conséquences
- Aucun décalage de mise en page au chargement ; aucune erreur JavaScript possible à l'exécution.
- Vérifié par S1, S2, S4 (taille de l'image) et S6 (image chargée, texte alternatif).
