# ADR-0004 : Outfit par Fontsource

## Statut
Accepté (2026-11-05) — même situation et même choix que le Social proof et REST Countries (choix de Koya : Fontsource plutôt que le lien Google Fonts).

## Contexte
Le starter ne fournit **aucun fichier de police** ; le guide de style renvoie à Google Fonts (Outfit 400, 700). La maquette a été calée avec Outfit de Google Fonts (le fichier variable du starter du Recipe page) ; les tests visuels comparent des pixels (S16, S17) : la police doit être là au moment des captures.

## Options
| Option | Pour | Contre |
|---|---|---|
| **`@fontsource/outfit` (choisie)** | Les fichiers de Google Fonts, en woff2 découpés par alphabet, servis avec le site ; aucun appel à un tiers ; tests indépendants du réseau | Une dépendance de plus |
| Lien Google Fonts | Ce que suggère le guide de style ; aucune dépendance | Dépend du réseau et de Google (vie privée, captures des tests) |
| Fichier copié d'un autre starter FM | Le fichier exact du calage | Fichier étranger au challenge, à tenir à jour à la main ; ADR-0002 parle des fichiers du starter |

## Décision
- `@fontsource/outfit` en dépendance d'exécution ; seules les graisses 400 et 700 sont importées dans `src/style.css`.
- `font-display: swap` (valeur du paquet).

## Conséquences
- Aucun appel à un serveur de polices.
- Si le rendu visuel s'écarte du calage au-delà des seuils, l'écart est repris en Phase 7 (seuils de la spec inchangés).
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; les graisses 400 et 700 se chargent.
