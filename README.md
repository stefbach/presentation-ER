# Digital Data Solutions × MUA — TIBOK Medical Intelligence

Film animé cinématique (**≈ 12 min**, en **français**) présentant **TIBOK** — la Medical
Intelligence de **Digital Data Solutions** (DDS) — à la **MUA**, assureur mauricien de
référence : une courte introduction DDS (fondateur Dr Stéphane Bach, producteur de
logiciels IA, équipe mauricienne), puis le cœur du pitch assureur — l'enjeu du diabète à
Maurice, la plateforme, le cadre légal de la téléconsultation, la Medical Intelligence
(LLM + RAG, 60 000 références), SilentCheck, le second avis médical, le contrôle de
pertinence, la preuve Swan, l'offre de partenariat (marque conjointe, gainsharing), et la
vision régionale portée par le réseau MUA en Afrique de l'Est.

Le texte défile à l'écran (téléprompteur) pendant que les visuels s'animent : photos en
Ken Burns, chiffres animés, diagrammes qui se construisent. Une **voix-off française**
narre chaque scène ; le film est **recalé sur la durée de chaque clip**. La voix se
coupe/réactive au clic sur le bouton en bas à droite, ou avec la touche **M**.

C'est un site statique : React 18 + JS précompilé, servi en local, sans CDN.

Le script complet de la narration est dans `SCRIPT_MUA_FR.md`.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page de production — charge les fonts locales, React et le JS précompilé de `build/` |
| `Film DDS - MUA.html` | Source éditable — React + Babel (in-browser) chargeant les `.jsx` |
| `animations.jsx` | Moteur d'animation réutilisable (`Stage`, `Sprite`, timeline, scrubber, easing) |
| `film-lib.jsx` | Primitives cinématiques (`Scene`, `FX`, `Narration`, `Photo`, `Stat`, `Logo`, `Hud`, `MUAmark`…) |
| `film-content.jsx` | Scènes 1–4 (ouverture, fondateur, DDS, l'enjeu pour la MUA) → `window.SCENES_A` |
| `film-content2.jsx` | Scènes 5–15 (TIBOK, cadre légal, écosystème, Medical Intelligence, SilentCheck, second avis, contrôle de pertinence, Swan, offre, vision, clôture) → `window.SCENES_B` |
| `main.jsx` | Monte le film et la timeline |
| `assets/team/` | Photos de l'équipe |
| `assets/logos/` | Logos (TIBOK, Lexora, Axon, DDS, MUA, La Turbine, MRIC…) |
| `assets/vo/mua_scene_*.mp3` | Voix-off française — une piste par scène |
| `build/vo-manifest.js` | Table `window.VO` : fichier + durée de chaque clip (sert au recalage) |

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Modifier & recompiler

Éditer les fichiers `.jsx` (et `main.jsx`), puis recompiler vers `build/` :

```bash
npm install          # installe @babel/standalone (voir package.json)
npm run build        # équivaut à: node build.js
```

`index.html` sert le JS précompilé de `build/`. Le fichier `Film DDS - MUA.html`
transpile les `.jsx` directement dans le navigateur (pratique pour itérer), et doit être
servi en HTTP (pas en `file://`).

## Commandes du lecteur

- **Espace** : lecture / pause
- **← / →** : naviguer
- **0** : revenir au début
- Barre de progression cliquable en bas
