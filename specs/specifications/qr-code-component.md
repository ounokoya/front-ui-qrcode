# Spec — QR code component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 4 (remise à niveau, étape B, lot 2). Sources : analyse validée (G2) `specs/visuel/front-ui-qrcode-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-front-ui-qrcode.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Une carte qui invite à scanner un QR code menant à Frontend Mentor : l'image du QR code, un titre et une phrase. La page est statique : seuls les liens du pied de page sont interactifs.

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Carte | tout ce qui suit, sauf le pied de page | `article` dans `main` |
| QR code | `image-qr-code.png` (576 × 576) ; texte alternatif « QR code to frontendmentor.io » (Q-B1) | `img` |
| Titre | « Improve your front-end skills by building projects » | `h1` (Q-B2) |
| Phrase | « Scan the QR code to visit Frontend Mentor and take your coding skills to the next level » | `p` |
| Pied de page (Q-B4) | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | QR code component » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`). Aucune couleur dérivée.

| Rôle | Couleur |
|---|---|
| Fond de page | Slate 300 `hsl(212, 45%, 89%)` |
| Carte | White |
| Titre, texte de l'attribution | Slate 900 `hsl(218, 44%, 22%)` |
| Phrase | Slate 500 `hsl(216, 15%, 48%)` (4,55:1) |
| Liens de l'attribution | `hsl(228, 45%, 44%)` (couleur du starter) |

Phrase : 15 px, interligne 21 px, espacement des lettres 0,2 px (G3-3).

## 4. Responsive

Une seule disposition (Q-B3, G3-1) : la carte de 320 × 498 est centrée dans la fenêtre ; sous 352 px de large, elle garde 16 px de marge de chaque côté et rétrécit.

| Élément | 1440 × 960 | 375 × 812 | 768 × 1024 | 320 |
|---|---|---|---|---|
| Carte | (560, 231) 320 × 498 | (28, 157) 320 × 498 | (224, 263) 320 × 498 | x 16, largeur 288 |
| QR code | (576, 247) 288 × 288 | (44, 173) 288 × 288 | — | 256 × 256 |

Titre sur 2 lignes et phrase sur 3 lignes, comme sur l'image FM. Le pied de page ne déplace pas la carte : centré en bas de la fenêtre. La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol | Focus clavier |
|---|---|---|---|
| Liens du pied de page | soulignés, `#3E52A3` | soulignement retiré | contour 2 px `#3E52A3`, décalé de 2 px |

Rien d'autre n'est interactif : le QR code n'est pas un lien. La page n'a aucune animation.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Un seul `h1` : le titre. |
| A2 | Le QR code a un texte alternatif qui dit où il mène (Q-B1). |
| A3 | Contraste AA (4,5:1) pour tous les textes. |
| A4 | Focus visible sur les liens : contour de 2 px au moins. |
| A5 | Le fond de la page est déclaré : le même en thème clair ou sombre de l'appareil. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Carte | article | — (elle a la taille et la place de la carte : S1 à S4) |
| QR code | img | « QR code to frontendmentor.io » |
| Titre | heading (niveau 1) | « Improve your front-end skills by building projects » |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 960   Then carte (560, 231) 320 × 498 ; QR code (576, 247) 288 × 288
S2  Given 375 × 812    Then carte (28, 157) 320 × 498 ; QR code (44, 173) 288 × 288
S3  Given 768 × 1024   Then carte (224, 263) 320 × 498
S4  Given 320 px       Then carte à x 16, 288 de large, QR code 256 × 256 ;
    given 320, 375, 768, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 960   Then le pied de page est sous la carte, centré, dans la fenêtre

Contenu
S6  Given la page  Then le QR code est chargé, avec son texte alternatif (Q-B1) ; un seul h1 ; la phrase
S7  Given 1440 × 960  Then le titre tient sur 2 lignes et la phrase sur 3, comme sur l'image FM
S8  Given la page  Then titre en Slate 900, phrase en Slate 500 avec 0,2 px d'espacement des lettres
S9  Given l'appareil en thème sombre  Then le fond de la page reste Slate 300 (A5)

Interactions
S10 Given la page  When j'appuie sur Tab deux fois  Then « Frontend Mentor » puis « Koya Esdras » reçoivent le focus,
                   chacun avec un contour de 2 px au moins
S11 Given un lien du pied de page  When je le survole  Then son soulignement disparaît

Accessibilité et règles FM
S12 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S13 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S14 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S15 Given le JavaScript du dépôt  Then eslint au réglage de FM : aucune erreur
    (et les tests de garde des règles FM déjà vues : longueurs en rem, aria-label, CSS logique)

Visuel (seuils calibrés en Phase 3, G3-2)
S16 1440 × 960 vs desktop.jpg ≤ 5,0 %
S17 375 × 812 vs mobile.jpg ≤ 5,0 %
```
