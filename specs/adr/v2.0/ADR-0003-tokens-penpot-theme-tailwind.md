# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 4 couleurs FM (aucune dérivée : tous les contrastes passent AA), la couleur des liens de l'attribution (Q-B4), la police, les tailles de texte, les rayons et l'ombre de la carte. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Les longueurs des tokens sont écrites en rem (règle FM).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-white`, `--color-slate-300`, `--color-slate-500`, `--color-slate-900` (valeurs `hsl()` du style-guide) |
| Attribution (Q-B4) | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| Outfit | `--font-sans` (chargement : ADR-0004) |
| Tailles de texte | `--text-title` (22 px, interligne 26 px), `--text-body` (15 px, interligne 21 px, espacement des lettres 0,2 px, G3-3), `--text-attribution` (11 px) |
| Rayons | `--radius-card` (20), `--radius-image` (10) |
| Ombre | `--shadow-card` (0 25 25, noir à 4,77 %) |

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
