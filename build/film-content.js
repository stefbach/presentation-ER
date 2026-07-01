/* film-content.jsx — Film DDS × Groupe ER (partie 1 : ouverture, fondateur,
   vision, approche, équipe). Loads after film-lib.jsx. Exposes window.SCENES_A. */

(function () {
  const {
    Scene,
    FX,
    ActTag,
    Narration,
    Statement,
    Photo,
    Stat,
    Chip,
    Bar,
    Panel,
    Card3D,
    Logo,
    ERmark,
    PhotoTile,
    FlowSvg,
    FlowLink,
    NodeChip,
    Phone,
    C,
    FD,
    FS,
    Easing,
    ev,
    fr,
    clamp,
    useScene
  } = window;
  const IMG = n => `assets/team/${n}.jpg`;

  /* ===== faces fan-in : l'équipe, en collectif (sans portrait individuel) ===== */
  function FacesFan() {
    const {
      localTime
    } = useScene();
    const team = [['megane', '50% 20%'], ['stephano', '50% 20%'], ['adi', '50% 20%'], ['rain', '50% 18%'], ['baydon', '50% 16%'], ['suzelle', '50% 22%'], ['summer', '50% 22%']];
    const names = ['Mégane', 'Stephano', 'Adi', 'Rain', 'Baydon', 'Suzelle', 'Summer'];
    const W = 232,
      H = 300,
      gap = 16,
      total = team.length * W + (team.length - 1) * gap;
    const startX = (1920 - total) / 2,
      baseY = 316;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, team.map((t, i) => {
      const p = ev(localTime, 0.3 + i * 0.14, 0.7, Easing.easeOutCubic);
      const x = startX + i * (W + gap);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'absolute',
          left: x,
          top: baseY + (1 - p) * 40,
          width: W,
          opacity: p
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: W,
          height: H,
          borderRadius: 14,
          overflow: 'hidden',
          outline: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 22px 50px rgba(0,0,0,0.45)'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: IMG(t[0]),
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: t[1]
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 22,
          color: '#fff',
          marginTop: 12,
          textAlign: 'center'
        }
      }, names[i]));
    }));
  }

  /* ===== timeline du fondateur ===== */
  function TimelineViz() {
    const {
      localTime
    } = useScene();
    const ph = [['1993 — 2003', 'Médecin hospitalier (France)', 'Le système public, de l’intérieur'], ['2003 — 2008', 'Fondateur de clinique', 'Gestion opérationnelle & financière'], ['2008 — 2019', 'Économiste de la santé', 'Classement Le Figaro · 30+ publications · 2 exits'], ['2019 — 2026', 'Maurice', 'Fondateur DDS · IA dès l’arrivée des LLM · GPT-3, 2020']];
    const W = 380,
      gap = 34,
      total = ph.length * W + (ph.length - 1) * gap,
      sx = (1920 - total) / 2,
      lineY = 336;
    const lineP = ev(localTime, 0.3, 1.4, Easing.easeOutCubic);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: sx + 10,
        top: lineY,
        height: 3,
        width: (total - 20) * lineP,
        background: 'rgba(255,255,255,0.25)'
      }
    }), ph.map((p, i) => {
      const op = ev(localTime, 0.5 + i * 0.5, 0.6, Easing.easeOutCubic);
      const x = sx + i * (W + gap);
      const last = i == ph.length - 1;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'absolute',
          left: x,
          top: lineY - 9,
          width: W,
          opacity: op,
          transform: `translateY(${(1 - op) * 16}px)`
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 18,
          height: 18,
          borderRadius: 9,
          background: last ? C.gold : C.blue,
          boxShadow: `0 0 18px ${last ? C.gold : C.blue}`,
          marginBottom: 30
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 26,
          color: '#fff'
        }
      }, p[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 21,
          color: last ? C.gold : C.blue,
          marginTop: 10
        }
      }, p[1]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 400,
          fontSize: 19,
          color: C.dim,
          marginTop: 8,
          lineHeight: 1.35
        }
      }, p[2]));
    }));
  }

  /* ===== 4 piliers de l'approche DDS ===== */
  function Pillars() {
    const {
      localTime
    } = useScene();
    const cols = [['SaaS IA', 'Des logiciels en production, pas des démos. De vrais clients qui paient.', C.blue], ['Agents IA', 'Des agents autonomes qui exécutent le travail — voix, admin, décisions.', C.teal], ['Expertise métier', 'Un savoir-faire réel sur chaque produit : santé, compta, RH, relation client.', C.gold], ['Maîtrise des LLM', 'Tous les modèles maîtrisés, le bon modèle au bon endroit, à moindre coût.', C.green]];
    const W = 402,
      gap = 20;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 400,
        left: 120,
        right: 120,
        display: 'flex',
        gap: gap,
        justifyContent: 'center'
      }
    }, cols.map((c, i) => {
      const pulse = 0.5 + 0.5 * Math.sin(localTime * 1.5 + i * 0.9);
      return /*#__PURE__*/React.createElement(Card3D, {
        key: i,
        w: W,
        at: 0.4 + i * 0.16,
        i: i,
        accent: c[2],
        accentSide: "top",
        minHeight: 250,
        pad: "28px 28px"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 52,
          height: 52,
          borderRadius: 14,
          background: `${c[2]}22`,
          border: `1px solid ${c[2]}66`,
          display: 'grid',
          placeItems: 'center',
          color: c[2],
          fontFamily: FD,
          fontWeight: 800,
          fontSize: 24,
          boxShadow: `0 0 ${9 + 8 * pulse}px ${c[2]}55`
        }
      }, i + 1), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 27,
          color: '#fff',
          marginTop: 20,
          lineHeight: 1.05
        }
      }, c[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 400,
          fontSize: 19,
          color: C.dim,
          marginTop: 12,
          lineHeight: 1.4
        }
      }, c[1]));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 302,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 22,
        letterSpacing: '0.02em',
        color: C.blue,
        opacity: ev(localTime, 1.6, 0.6)
      }
    }, "Et sur chacun — toujours la même règle : ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 700
      }
    }, "création de valeur"), "."));
  }

  /* ============================ LE SCÉNARIO ============================ */
  const SCENES = [/* ---------- 1 · OUVERTURE ---------- */
  {
    dur: 15,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Photo, {
      src: IMG('bach'),
      x: 1080,
      y: 0,
      w: 840,
      h: 1080,
      radius: 0,
      objPos: "50% 22%",
      from: 1.04,
      to: 1.14,
      pany: -3,
      ring: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 1300,
        background: 'linear-gradient(90deg, #0A1A33 38%, rgba(10,26,51,0.2) 70%, transparent 88%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 124,
        top: 300,
        width: 900
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 68,
        lineHeight: 1.03,
        letterSpacing: '-0.03em',
        color: '#fff'
      }
    }, "L’intelligence artificielle", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.blue
      }
    }, "souveraine"), ", construite", /*#__PURE__*/React.createElement("br", null), "à Maurice.")), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Digital Data Solutions', 'Dr Stéphane Bach · Fondateur & CEO'],
      x: 130,
      width: 760,
      align: "left",
      y: 648,
      size: 30,
      weight: 500,
      accent: "#D6E0F0",
      dim: "rgba(206,219,240,0.32)",
      lead: 1.0,
      tail: 1.2
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 130,
        bottom: 64,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap',
        maxWidth: 820
      }
    }, ['SaaS IA', 'Agents IA', 'Expertise métier', 'Maîtrise de tous les LLM'].map((c, i) => /*#__PURE__*/React.createElement(Chip, {
      key: i,
      at: 0.4 + i * 0.14,
      color: C.blue
    }, c))))
  }, /* ---------- 2 · LE FONDATEUR ---------- */
  {
    dur: 28,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Le fondateur",
      title: "Dr Stéphane Bach"
    }), /*#__PURE__*/React.createElement(TimelineViz, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Je m’appelle Stéphane Bach. Je suis médecin.', 'Trente ans à voir comment fonctionnent', 'vraiment les systèmes de santé —', 'pas comme les manuels le décrivent.', 'J’ai dirigé des cliniques, géré des budgets,', 'publié des algorithmes avec Aix-Marseille.', 'Deux exits derrière moi.', 'Et dès l’arrivée des grands modèles de langage —', 'GPT-3, en juin 2020 — j’ai plongé dans l’IA,', 'j’ai grandi avec elle, ses modèles, ses capacités.'],
      x: 960,
      width: 1500,
      align: "center",
      y: 812,
      size: 38,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.6,
      tail: 1.4
    }))
  }, /* ---------- 3 · ANCRAGE MAURICE ---------- */
  {
    dur: 22,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "L'engagement",
      title: "Maurice, pour y rester",
      color: C.gold
    }), /*#__PURE__*/React.createElement(Photo, {
      src: IMG('bach'),
      x: 120,
      y: 250,
      w: 470,
      h: 560,
      objPos: "50% 22%"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 660,
      y: 300,
      size: 62,
      lines: ['En 2019,', 'j’ai choisi Maurice.', 'Pour y rester.'],
      accentIdx: [2],
      accentColor: C.gold,
      weight: 700
    }), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Mon fils est mauricien. Ma femme est mauricienne.', 'Mes enfants grandiront ici. Cela change tout.', 'Ce projet n’est pas une stratégie de sortie —', 'c’est une vision de long terme : pour Maurice,', 'pour l’Afrique et pour l’océan Indien.'],
      x: 660,
      width: 1140,
      align: "left",
      y: 720,
      size: 35,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.26)",
      lead: 1.4,
      tail: 1.3
    }))
  }, /* ---------- 4 · L'IA REBAT LES CARTES ---------- */
  {
    dur: 20,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Statement, {
      align: "center",
      y: 280,
      size: 100,
      weight: 700,
      lines: ['L’IA rebat', 'les cartes du jeu.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Les géants du logiciel classique sont lents, lourds —', 'ils ne savent pas penser en IA.', 'L’opportunité de Maurice : repartir de zéro,', 'avec des gens ouverts, agiles, mauriciens.'],
      x: 960,
      width: 1500,
      align: "center",
      y: 720,
      size: 40,
      accent: "#CFE0FA",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.4,
      tail: 1.2
    }))
  }, /* ---------- 5 · L'APPROCHE DDS (4 piliers) ---------- */
  {
    dur: 26,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "L'approche",
      title: "Unique & disruptive"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 54,
      weight: 700,
      lines: ['DDS n’est pas une agence IA.', 'C’est un producteur de logiciels IA.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Beaucoup se disent « agence IA » : ils prennent ChatGPT,', 'y versent vos données. C’est inutile — et ça crée de la dépendance.', 'Nous, nous construisons des logiciels qui tournent en production,', 'avec de vrais clients qui paient. Une approche unique à Maurice.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 905,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- 6 · LA PETITE ÉQUIPE ---------- */
  {
    dur: 30,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "La petite équipe",
      title: "Ce que sept Mauriciens ont bâti",
      color: C.gold
    }), /*#__PURE__*/React.createElement(FacesFan, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 672,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 64
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      to: 10,
      prefix: "×",
      suffix: "",
      size: 80,
      color: C.gold,
      label: "Productivité par personne",
      align: "center",
      at: 0.6
    }), /*#__PURE__*/React.createElement(Stat, {
      to: 12,
      prefix: "",
      suffix: " mois",
      size: 80,
      color: C.green,
      label: "Pour devenir experts",
      align: "center",
      at: 0.8
    }), /*#__PURE__*/React.createElement(Stat, {
      to: 0,
      prefix: "",
      suffix: "",
      size: 80,
      color: C.blue,
      label: "Talent importé",
      align: "center",
      at: 1.0
    })), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Sept Mauriciens. Aucun n’était ingénieur IA.', 'Curiosité, envie d’apprendre, foi en l’avenir : j’ai investi en eux.', 'Formés en douze mois — sept personnes qui, avec leurs agents IA,', 'ont la force de soixante-dix. L’IA n’est pas une menace pour Maurice.', 'C’est une opportunité — si l’on investit dans ses gens.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 892,
      size: 30,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.22)",
      lead: 1.6,
      tail: 1.1
    }))
  }];
  window.SCENES_A = SCENES;
  window.FacesFan = FacesFan;
  window.TimelineViz = TimelineViz;
  window.Pillars = Pillars;
})();