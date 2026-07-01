# Digital Data Solutions × Groupe ER — Film stratégique

Film animé cinématique (**≈ 7 min**, en **français**) présentant **Digital Data Solutions**
(DDS) au **Groupe ER** : le fondateur Dr Stéphane Bach, l'approche IA unique et disruptive
(SaaS IA · agents IA · expertise métier · maîtrise de tous les LLM), la petite équipe
mauricienne, les produits (TIBOK, Lexora, Axon), l'écosystème de santé TIBOK pour l'Afrique
et l'océan Indien, l'opportunité autour de Swan, et la convergence avec les valeurs du
Groupe ER.

Le texte défile à l'écran (téléprompteur) pendant que les visuels s'animent : photos en
Ken Burns, chiffres animés, diagrammes qui se construisent. Le film est **auto-chronométré**
(chaque scène porte sa durée `dur`) — **sans voix-off**.

C'est un site statique : React 18 + JS précompilé, servi en local, sans CDN.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page de production — charge les fonts locales, React et le JS précompilé de `build/` |
| `Film DDS - Groupe ER.html` | Source éditable — React + Babel (in-browser) chargeant les `.jsx` |
| `animations.jsx` | Moteur d'animation réutilisable (`Stage`, `Sprite`, timeline, scrubber, easing) |
| `film-lib.jsx` | Primitives cinématiques (`Scene`, `FX`, `Narration`, `Photo`, `Stat`, `Logo`, `Hud`, `ERmark`…) |
| `film-content.jsx` | Scènes 1–6 (ouverture, fondateur, vision, approche, équipe) → `window.SCENES_A` |
| `film-content2.jsx` | Scènes 7–17 (produits, TIBOK, vision régionale, convergence ER, clôture) → `window.SCENES_B` |
| `main.jsx` | Monte le film et la timeline |
| `assets/team/` | Photos de l'équipe |
| `assets/logos/` | Logos (TIBOK, Lexora, Axon, DDS, Obesity Care Clinic, La Turbine, MRIC…) |
| `assets/vo/` | Anciens fichiers de voix-off (non utilisés dans ce montage français) |

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

`index.html` sert le JS précompilé de `build/`. Le fichier `Film DDS - Groupe ER.html`
transpile les `.jsx` directement dans le navigateur (pratique pour itérer), et doit être
servi en HTTP (pas en `file://`).

## Commandes du lecteur

- **Espace** : lecture / pause
- **← / →** : naviguer
- **0** : revenir au début
- Barre de progression cliquable en bas
