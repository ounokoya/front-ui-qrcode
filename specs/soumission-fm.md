# Mise à jour de la solution sur Frontend Mentor

> SDL-FM 1.5.0 Phase 13 (refonte v2.0.0). Textes préparés pour le formulaire « Edit solution » de la solution de 2023 : https://www.frontendmentor.io/solutions/qr-code-component-EZNAAGXXm_ (titre « positionnement, font-size, color, image background », 2 commentaires). La modification est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi. Pas de nouveaux points (solution déjà soumise).
>
> **Envoyée le 2026-11-05** avec l'accord de Koya, textes ci-dessous inchangés (les 4 tags existent sur FM) ; rapport : 0 remarque (`specs/analyse/2026-11-05-rapport-fm.md`).

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | QR code component with Tailwind v4, a centred grid & Playwright tests (69) |
| Repository URL | https://github.com/ounokoya/front-ui-qrcode |
| Live site URL | https://ounokoya.github.io/front-ui-qrcode/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |
| Capture | « Regenerate screenshot » : la page a changé depuis 2023 |

Après l'envoi : « Regenerate report » (vérifications automatiques gratuites), en vérifiant d'abord que la solution n'a pas de rapport IA (sinon un crédit serait consommé : accord de Koya).

## What are you most proud of, and what would you do differently next time?

I'm most proud of how little the page needs: one card, centred by a three-row grid (`1fr auto 1fr`) so the attribution sits at the bottom without pushing the card, and a width of `min(20rem, 100% - 2rem)` that keeps 320 px everywhere and 16 px margins on the smallest screens, without a breakpoint. Screenshots differ from the design JPGs by 0.63 % (desktop) and 3.65 % (mobile) of pixels, and the 27 Playwright tests pass on the live site.

This is a rebuild of my 2023 solution. Next time, I'd start the way I did here: measure the design first, then write the tests, then the code.

## What challenges did you encounter, and how did you overcome them?

- **Line breaks**: the design's sentence is 3 % wider than Outfit with default spacing; 0.2 px of letter spacing gives the same three lines.
- **The QR code's text alternative**: it says where the code leads ("QR code to frontendmentor.io"), because that is what a sighted user gets by scanning it.

## What specific areas of your project would you like help with?

1. Would you make the title an `h1` here, or keep `h1` for a page heading and use `h2` in the card?
2. Is "QR code to frontendmentor.io" a useful text alternative, or would you describe it differently?
