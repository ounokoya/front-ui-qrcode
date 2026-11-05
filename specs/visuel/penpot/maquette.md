# Maquette Penpot — QR code component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 3 (remise à niveau, étape B, lot 2). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « QR code ». **Validée (G3, 2026-11-05)** avec les propositions : même carte centrée en tablette (Q-B3), seuils de 5 %, espacement des lettres de 0,2 px du paragraphe (mesuré).
> Décisions G2 appliquées : texte alternatif du QR code (Q-B1), titre en `h1` (Q-B2), même carte à toutes les largeurs (Q-B3), attribution comme au lot 1 (Q-B4).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, l'image du QR code (adresse interne de Penpot) est remplacée par `image-qr-code.png` du starter (`media.json`), puis il est rendu dans Chromium avec **Outfit** (fichier de la police Google, celui du Recipe page). Les textes centrés de plusieurs lignes ont leurs retours à la ligne écrits en dur (Penpot centre les lignes avec leur espace de fin).

## Bibliothèque

### Couleurs (groupe « QR code »)

| Nom FM | Rôle | Valeur |
|---|---|---|
| White | Carte | `#FFFFFF` |
| Slate 300 | Fond de page | `#D6E2F0` |
| Slate 500 | Paragraphe (4,55:1) | `#68778D` |
| Slate 900 | Titre, texte de l'attribution | `#1F3251` |
| Lien (starter) | Liens de l'attribution (5,44:1 sur Slate 300) | `#3E52A3` |

Aucune couleur dérivée.

### Typographie (Outfit)

| Usage | Valeur |
|---|---|
| Titre (h1) | 700, 22 px, interligne 26 px (1,182), centré |
| Paragraphe | 400, 15 px, interligne 21 px (1,4), espacement des lettres 0,2 px (mesuré : les 3 lignes de l'image sont 3 % plus larges qu'à 0 px), centré |
| Attribution | 400, 11 px |

### Mesures (px)

| Élément | Valeur (desktop 1440 × 960, mobile 375 × 812) |
|---|---|
| Carte | 320 × 498, rayon 20, blanche, ombre 0 25 25 noir 4,77 % ; centrée dans la fenêtre : (560, 231) en desktop, (28, 157) en mobile |
| Image | 288 × 288 à 16 du bord, rayon 10 (fichier 576 × 576, écran 2×) |
| Titre | haut des capitales à 333,5 sous le haut de la carte |
| Paragraphe | capitales de la 1re ligne à 401 ; 3 lignes |

Tablette 768 × 1024 (proposition Q-B3) : la même carte centrée en (224, 263).

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Attribution (pied de page, absente des images FM) | Normal (11 px, liens `#3E52A3` soulignés) · Survol (soulignement retiré) · Focus clavier (contour 2 px `#3E52A3` décalé de 2 px) |

Rien d'autre n'est interactif : le QR code se scanne, ce n'est pas un lien.

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · QR code | `desktop.jpg` | 0,62 % | 5,0 % |
| Mobile · QR code | `mobile.jpg` | 3,80 % | 5,0 % |

Notes :
- Toutes les lignes de texte sont à ± 1 px de l'image, avec les mêmes retours à la ligne.
- Mobile : l'image FM du QR code semble rendue à 289 px et décalée d'un pixel (meilleur calage) ; la maquette garde 288 px, comme le site. Les motifs fins du QR code comptent beaucoup dans l'écart.
- Écran sans image FM : **Tablette · QR code (proposition Q-B3)**.

## Prototype

Pas de parcours : la page n'a aucun élément interactif en dehors de l'attribution, dont les états sont montrés par le composant.

## Fichiers

- `desktop.png`, `mobile.png`, `tablette.png` : rendus des 3 écrans ; `apercu-maquette.png` : les trois côte à côte.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille).
- `composants.png` : les composants et leurs états (échelle 2).
