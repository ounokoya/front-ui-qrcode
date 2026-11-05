# ADR-0006 : Carte centrée dans la fenêtre, pied de page en bas sans la décaler

## Statut
Accepté (2026-11-05) — même principe que le Results summary (ADR-0006).

## Contexte
À toutes les largeurs, la même carte de 320 × 498 est centrée dans la fenêtre (Q-B3, G3-1 : (560, 231) à 1440 × 960, (28, 157) à 375 × 812, (224, 263) à 768 × 1024) ; sous 352 px, elle garde 16 px de marge de chaque côté (S4). L'attribution (Q-B4), absente des images FM, doit tenir sous la carte sans la déplacer (S5).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Grille de 3 rangées `1fr auto 1fr` sur toute la hauteur (choisie)** | La carte est exactement au centre, à toutes les largeurs ; le pied de page se place en bas de la 3e rangée ; si la fenêtre est trop basse, la page s'allonge au lieu de superposer | — |
| Pied de page en position absolue en bas de la fenêtre | Simple | Passe sur la carte dans une fenêtre basse |
| Pied de page dans le flux, sous la carte | Simple | Décale la carte de la moitié de la hauteur du pied de page |

## Décision
- `body` en grille `grid-rows-[1fr_auto_1fr]` de hauteur minimale `100dvh`, `main` dans la 2e rangée, `footer` en bas de la 3e.
- Carte : largeur `min(20rem, 100% - 2rem)`, marge interne de 16 px ; aucun point de rupture.

## Conséquences
- Positions S1 à S5 tenues par une seule règle ; rien ne se superpose quelle que soit la hauteur de la fenêtre.
