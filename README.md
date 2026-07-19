# Digital Data Solutions × EDB — TIBOK Medical Intelligence

Film animé cinématique (**≈ 12 min**, **FR** + **EN**) présentant **TIBOK** — la Medical
Intelligence de **Digital Data Solutions** (DDS) — à l'**Economic Development Board**
(EDB), l'agence apex de promotion économique de Maurice : une courte introduction DDS
(fondateur Dr Stéphane Bach, producteur de logiciels IA, équipe 100 % mauricienne), puis
la preuve produit — l'enjeu du diabète à Maurice, la plateforme, le cadre légal de la
téléconsultation, la Medical Intelligence (LLM + RAG, 60 000 références), SilentCheck,
le second avis médical, le contrôle de pertinence, la preuve commerciale Swan — et enfin
la proposition à l'EDB, alignée sur le pilier « Leveraging AI and Digitisation » du
Budget 2026-27 : **la vitrine** (Mauritius AI Hub), **l'accélération** (Startup Act,
accélérateur EDB, incitations IA, AI SEZ de Côte d'Or) et **l'export** (missions
économiques de l'EDB en Afrique).

Le texte défile à l'écran (téléprompteur) pendant que les visuels s'animent : photos en
Ken Burns, chiffres animés, diagrammes qui se construisent. Une **voix-off** narre chaque
scène ; le film est **recalé sur la durée de chaque clip**. La voix se coupe/réactive au
clic sur le bouton en bas à droite, ou avec la touche **M**.

> **Voix-off à réenregistrer.** Les pistes de l'ancienne version MUA ont été retirées :
> le texte a changé. Enregistrer les nouvelles pistes depuis `SCRIPT_EDB_FR.md`
> (→ `assets/vo/edb_scene_0.mp3 … edb_scene_14.mp3`) et `SCRIPT_EDB_EN.md`
> (→ `assets/vo/edb_scene_en_0.mp3 … edb_scene_en_14.mp3`), puis mettre à jour les durées
> dans `build/vo-manifest.js` / `build/vo-manifest-en.js`. Sans les fichiers audio, le
> film tourne en silencieux avec le même minutage.

C'est un site statique : React 18 + JS précompilé, servi en local, sans CDN.

Le script complet de la narration est dans `SCRIPT_EDB_FR.md` (et `SCRIPT_EDB_EN.md`).

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page de production (FR) — charge les fonts locales, React et le JS précompilé de `build/` |
| `en.html` | Page de production (EN) — même moteur, contenus et voix-off anglais |
| `Film DDS - EDB.html` | Source éditable — React + Babel (in-browser) chargeant les `.jsx` |
| `animations.jsx` | Moteur d'animation réutilisable (`Stage`, `Sprite`, timeline, scrubber, easing) |
| `film-lib.jsx` | Primitives cinématiques (`Scene`, `FX`, `Narration`, `Photo`, `Stat`, `Logo`, `Hud`, `EDBmark`…) |
| `film-content.jsx` | Scènes 1–4 (ouverture, fondateur, DDS, l'enjeu pour Maurice) → `window.SCENES_A` |
| `film-content2.jsx` | Scènes 5–15 (TIBOK, cadre légal, écosystème, Medical Intelligence, SilentCheck, second avis, contrôle de pertinence, preuve Swan, proposition EDB, vision, clôture) → `window.SCENES_B` |
| `film-content-en.jsx` / `film-content2-en.jsx` | Mêmes scènes, version anglaise (chargées par `en.html`) |
| `main.jsx` | Monte le film et la timeline |
| `assets/team/` | Photos de l'équipe |
| `assets/logos/` | Logos (TIBOK, Lexora, Axon, DDS, EDB, La Turbine, MRIC…) |
| `assets/vo/` | Voix-off — une piste par scène (`edb_scene_*.mp3`, à réenregistrer) |
| `build/vo-manifest.js` / `build/vo-manifest-en.js` | Table `window.VO` : fichier + durée de chaque clip (sert au recalage) |

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/  (FR)  ou  http://localhost:8000/en.html  (EN)
```

## Modifier & recompiler

Éditer les fichiers `.jsx` (et `main.jsx`), puis recompiler vers `build/` :

```bash
npm install          # installe @babel/standalone (voir package.json)
npm run build        # équivaut à: node build.js
```

`index.html` et `en.html` servent le JS précompilé de `build/`. Le fichier
`Film DDS - EDB.html` transpile les `.jsx` directement dans le navigateur (pratique pour
itérer), et doit être servi en HTTP (pas en `file://`).

## Commandes du lecteur

- **Espace** : lecture / pause
- **← / →** : naviguer
- **0** : revenir au début
- **M** : couper / réactiver la voix off
- Barre de progression cliquable en bas ; bouton FR/EN en bas à gauche
