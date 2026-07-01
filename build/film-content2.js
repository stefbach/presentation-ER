/* film-content2.jsx — Film DDS × Groupe ER (partie 2 : produits, TIBOK,
   vision régionale, convergence ER, clôture). Loads after film-content.jsx.
   Exposes window.SCENES_B. */

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
    Swan,
    ERmark,
    C,
    FD,
    FS,
    Easing,
    ev,
    fr,
    clamp,
    useScene,
    Phone,
    FlowSvg,
    FlowLink,
    NodeChip,
    PhotoTile
  } = window;
  const PIMG = n => `assets/people/${n}.jpg`;
  const IMG = n => `assets/team/${n}.jpg`;
  const SCENES_B = [/* ---------- 7 · L'ÉCOSYSTÈME DDS ---------- */
  {
    dur: 26,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "L'écosystème",
      title: "Un producteur, un portefeuille"
    }), /*#__PURE__*/React.createElement(DDSOrg, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['DDS est une holding. Trois produits IA :', 'TIBOK, Lexora, Axon — déjà en service, de premiers clients.', 'Et autour d’eux, des ventures liées :', 'Obesity Care Clinic, et CVMI, tourisme médical au Cap-Vert.', 'Un écosystème — pas une agence.'],
      x: 960,
      width: 1500,
      align: "center",
      y: 888,
      size: 32,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.4,
      tail: 1.2
    }))
  }, /* ---------- 8 · LEXORA ---------- */
  {
    dur: 26,
    hue: 'teal',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Produit — Lexora",
      title: "L'ERP IA-natif",
      color: C.teal
    }), /*#__PURE__*/React.createElement(Logo, {
      name: "lexora",
      w: 300,
      x: 120,
      y: 150,
      at: 0.2
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 300,
      size: 54,
      weight: 700,
      lines: ['Vous scannez. Vous photographiez.', 'La comptabilité se fait toute seule.'],
      accentIdx: [1],
      accentColor: C.teal
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 560,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 22
      }
    }, [['Piloté par des agents IA', 'Un reçu scanné ou photographié — et il est comptabilisé', C.teal], ['Paie & RH simplifiées', 'La paie, les RH — sans effort', C.blue], ['Du temps, pas de la paperasse', 'Des heures gagnées chaque semaine', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(DimCard, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Je l’ai d’abord construit pour moi : RH internes,', 'comptabilité en retard, pas toujours rigoureuse — je connais le problème.', 'J’ai développé mes outils, puis je les ai rendus simples,', 'pour que le plus grand nombre en profite. Expertise métier, valeur créée.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 905,
      size: 29,
      italic: true,
      accent: "#D8F2F4",
      dim: "rgba(200,230,236,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- 9 · AXON ---------- */
  {
    dur: 26,
    hue: 'teal',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Produit — Axon",
      title: "Une équipe d'agents IA",
      color: C.teal
    }), /*#__PURE__*/React.createElement(Logo, {
      name: "axon",
      w: 210,
      x: 120,
      y: 150,
      at: 0.2
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 250,
      size: 52,
      weight: 700,
      lines: ['Une équipe d’agents IA.', 'Voix, secrétariat, back-office.'],
      accentIdx: [1],
      accentColor: C.teal
    }), /*#__PURE__*/React.createElement(Waveform, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 500,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 24
      }
    }, [['Agent vocal', 'Appelle & répond — FR · EN · toutes langues, éprouvé en santé', C.teal], ['Agent administratif', 'Secrétariat : courriers, e-mails, agenda', C.blue], ['Tout le back-office', 'Une équipe multi-services d’agents IA', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(DimCard, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Axon n’est pas qu’un agent vocal. Il appelle, il répond,', 'dans toutes les langues. Mais aussi un agent administratif :', 'secrétariat, courriers, e-mails, planning — tout le back-office.', 'Une vraie équipe d’agents IA. Expertise métier, valeur créée.'],
      x: 960,
      width: 1540,
      align: "center",
      y: 880,
      size: 30,
      italic: true,
      accent: "#D8F2F4",
      dim: "rgba(200,230,236,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 10 · TIBOK — LE HUB ---------- */
  {
    dur: 28,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Produit phare — TIBOK",
      title: "L'intelligence médicale"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 180,
      size: 50,
      weight: 700,
      lines: ['L’intelligence médicale', 'qui connecte tout.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(TibokHub, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['TIBOK n’est pas une app de téléconsultation.', 'C’est une intelligence médicale qui opère autour', 'de chaque point de soin — distanciel, présentiel,', 'pharmacie, labo, radiologie, urgences, soins primaires.', '60 000 références. Premier assureur : Swan, signature en cours.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 918,
      size: 31,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 11 · LA VISION SANTÉ ---------- */
  {
    dur: 28,
    hue: 'coral',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "La vision",
      title: "Augmenter, pas remplacer",
      color: C.coral
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 168,
      size: 48,
      weight: 700,
      lines: ['On ne crée pas 50 000 médecins en 5 ans.', 'On augmente les soignants avec l’IA.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement(Ratios, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['TIBOK est un écosystème de santé — distanciel et présentiel —', 'conçu pour gérer les soins primaires d’un pays, surtout en Afrique.', 'Des outils pour que les médecins soient au niveau, et augmentés.', 'Tous les produits de DDS sont bâtis sur cette même vision.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 882,
      size: 31,
      italic: true,
      accent: "#F6DED7",
      dim: "rgba(230,200,192,0.24)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 12 · COMMENT ÇA MARCHE ---------- */
  {
    dur: 26,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Comment ça marche",
      title: "Distanciel + présentiel"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 18,
        letterSpacing: '0.01em',
        color: C.dim,
        maxWidth: 1500,
        margin: '0 auto'
      }
    }, "Chaque consultation — présentiel et distanciel, urgences, centres de santé et dispensaires — labo · radiologie · pharmacie")), /*#__PURE__*/React.createElement(EcosystemLive, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Le soignant saisit les données.', 'TIBOK les traite face à 60 000 références médicales,', 'ses guidelines, ses algorithmes propriétaires.', 'Une recommandation fondée sur la preuve.', 'Et à chaque cas traité, le système apprend.', 'An 1, c’est bon. An 3, meilleur que bien des médecins.'],
      x: 960,
      width: 1500,
      align: "center",
      y: 860,
      size: 33,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.4
    }))
  }, /* ---------- 13 · LES MODULES ---------- */
  {
    dur: 24,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Une plateforme",
      title: "11 modules, un seul système"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 46,
      weight: 700,
      lines: ['11 modules.', 'Un seul système connecté.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Consultation — distanciel, présentiel, chronique, dermatologie.', 'Les connexions — labo, radiologie, pharmacie.', 'Suivi des maladies chroniques par WhatsApp : tension, diabète, poids.', 'Prévention avec SilentCheck. Urgences, et tableau de bord RH.'],
      x: 960,
      width: 1540,
      align: "center",
      y: 912,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- 14 · SWAN → L'OPPORTUNITÉ ER ---------- */
  {
    dur: 32,
    hue: 'green',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "L'opportunité",
      title: "Swan — signature en cours",
      color: C.green
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 140,
      size: 52,
      weight: 700,
      lines: ['Avec Swan,', 'la signature est en cours.'],
      accentIdx: [1],
      accentColor: C.green
    }), /*#__PURE__*/React.createElement(Swan, {
      h: 70,
      x: 1360,
      y: 150,
      at: 0.5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 308,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      at: 0.4,
      style: {
        maxWidth: 1360
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 29,
        color: '#fff',
        lineHeight: 1.4,
        textAlign: 'center'
      }
    }, "Premier grand assureur à s’", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.green,
        fontWeight: 800
      }
    }, "engager"), " sur le remboursement des consultations et prescriptions faites sur TIBOK."))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 474,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 24,
        color: '#fff',
        marginBottom: 6
      }
    }, "Le ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.blue
      }
    }, "Groupe ER"), " doit entrer dans l’offre TIBOK."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 17,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: C.dim,
        marginTop: 14,
        marginBottom: 16
      }
    }, "En discussion pour le déploiement — salariés & familles"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 0.8,
      color: C.blue
    }, "Groupe ER"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.92,
      color: C.blue
    }, "Taylor Smith"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.04,
      color: C.blue
    }, "Alteo"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.16,
      color: C.blue
    }, "CIM Finance"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.28,
      color: C.gold
    }, "… et bien d’autres"))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Avec Swan, la signature est en cours : le premier grand', 'assureur à s’engager sur le remboursement des consultations', 'et des prescriptions faites sur TIBOK. C’est le tout début', 'de l’histoire — et la place est ouverte. Le Groupe ER,', 'Taylor Smith, Alteo, CIM Finance… Le Groupe ER peut être', 'parmi les premiers à entrer dans l’offre TIBOK.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 912,
      size: 29,
      italic: true,
      accent: "#DDF2E8",
      dim: "rgba(200,230,216,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- 15 · VISION RÉGIONALE ---------- */
  {
    dur: 26,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Vision régionale",
      title: "Maurice, preuve de concept"
    }), /*#__PURE__*/React.createElement(AfricaArc, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 602,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 56,
        letterSpacing: '-0.025em',
        color: '#fff'
      }
    }, "Bien plus qu’un marché."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 30,
        color: C.blue,
        marginTop: 12
      }
    }, "Une infrastructure de santé souveraine pour l’Afrique et l’océan Indien.")), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Maurice est la preuve de concept.', 'Ça marche ici — donc ça marche partout en Afrique.', 'Partout le même problème : pas assez de médecins.', 'C’est bien plus qu’un produit : une infrastructure', 'de santé souveraine, pour un continent et son océan.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 912,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- 16 · CONVERGENCE ER × DDS ---------- */
  {
    dur: 28,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Ensemble",
      title: "Les valeurs ER, la vision DDS",
      color: C.gold
    }), /*#__PURE__*/React.createElement(Statement, {
      align: "center",
      y: 168,
      size: 58,
      weight: 700,
      lines: ['Les valeurs du Groupe ER.', 'La vision de DDS. Une même ambition.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 430,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 24
      }
    }, [['Ancrage mauricien', 'Un groupe d’ici, une IA d’ici — la valeur reste à Maurice'], ['Croissance responsable', 'Des logiciels qui créent de la valeur, durablement'], ['Impact régional', 'L’Afrique et l’océan Indien comme horizon commun']].map((p, i) => /*#__PURE__*/React.createElement(MiniPanel, {
      key: i,
      p: p,
      i: i,
      color: C.gold
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Ce que je cherche : associer cette vision au Groupe ER —', 'entrer dans TIBOK, nouer un partenariat, rejoindre le groupe.', 'De quelque manière que ce soit. Parce qu’ensemble,', 'nous pouvons réaliser de grandes choses — pour Maurice,', 'pour l’Afrique et pour l’océan Indien.'],
      x: 960,
      width: 1500,
      align: "center",
      y: 840,
      size: 33,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.22)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 17 · CLÔTURE ---------- */
  {
    dur: 18,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(FinalScene, null)
  }];

  /* ============================ COMPOSANTS ============================ */

  function DDSOrg() {
    const {
      localTime
    } = useScene();
    const root = ev(localTime, 0.2, 0.6, Easing.easeOutCubic);
    const products = [['tibok', 'OS de santé · présentiel + distanciel'], ['lexora', 'ERP IA-natif · compta & paie'], ['axon', 'Agents vocaux · relation client']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '50%',
        top: 178,
        transform: `translate(-50%,0) scale(${0.92 + 0.08 * root})`,
        opacity: root,
        background: 'rgba(59,131,232,0.12)',
        border: '1px solid rgba(59,131,232,0.4)',
        borderRadius: 16,
        padding: '16px 36px',
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "dds",
      w: 300,
      intro: false,
      style: {
        position: 'static'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 100,
        top: 348,
        width: 1090,
        opacity: ev(localTime, 0.55, 0.6)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: C.blue,
        marginBottom: 18
      }
    }, "Produits IA"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22
      }
    }, products.map((p, i) => /*#__PURE__*/React.createElement(Card3D, {
      key: i,
      at: 0.7 + i * 0.16,
      i: i,
      minHeight: 206,
      pad: "28px 22px",
      radius: 16,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 52,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: p[0],
      w: p[0] === 'axon' ? 170 : p[0] === 'tibok' ? 150 : 210,
      intro: false,
      style: {
        position: 'static'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 18,
        color: C.dim,
        textAlign: 'center',
        lineHeight: 1.35
      }
    }, p[1]))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 1240,
        top: 348,
        width: 580,
        opacity: ev(localTime, 1.05, 0.6)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: C.gold,
        marginBottom: 18
      }
    }, "Ventures liées"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card3D, {
      at: 1.1,
      i: 1,
      minHeight: 96,
      pad: "16px 24px",
      radius: 16,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "obesity",
      w: 200,
      intro: false,
      style: {
        position: 'static'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 16,
        color: C.dim,
        lineHeight: 1.3
      }
    }, "Chirurgie bariatrique · NHS S2")), /*#__PURE__*/React.createElement(Card3D, {
      at: 1.25,
      i: 3,
      accent: C.gold,
      minHeight: 96,
      pad: "18px 24px",
      radius: 16,
      style: {
        background: 'rgba(224,169,59,0.08)',
        border: '1px solid rgba(224,169,59,0.3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 24,
        color: C.gold
      }
    }, "CVMI · Cap-Vert"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 16,
        color: C.dim,
        marginTop: 6,
        lineHeight: 1.3
      }
    }, "Tourisme médical — prévention des maladies chroniques + tourisme")))));
  }
  function Waveform() {
    const {
      localTime
    } = useScene();
    const bars = 46;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 400,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 120
      }
    }, Array.from({
      length: bars
    }).map((_, i) => {
      const amp = ev(localTime, 0.3, 0.8) * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.5)));
      const h = 14 + Math.abs(Math.sin(localTime * 4 + i * 0.55)) * amp * 90;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          width: 7,
          height: h,
          borderRadius: 4,
          background: i % 3 == 0 ? C.teal : 'rgba(39,176,190,0.5)'
        }
      });
    }));
  }
  function Ratios() {
    const {
      localTime
    } = useScene();
    const r = [['Maurice', '≈ 1 : 500', 500, C.green], ['Sénégal', '1 : 7 000', 7000, C.blue], ['Mali', '1 : 15 000', 15000, C.gold], ['Sahel', '1 : 25 000', 25000, C.coral]];
    const maxR = 25000;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 400,
        left: 300,
        right: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, r.map((x, i) => {
      const p = ev(localTime, 0.4 + i * 0.25, 0.8, Easing.easeOutCubic);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 24
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 140,
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 24,
          color: '#fff',
          textAlign: 'right'
        }
      }, x[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          height: 30,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 15,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          width: `${x[2] / maxR * 100 * p}%`,
          background: x[3],
          borderRadius: 15,
          boxShadow: `0 0 24px ${x[3]}55`
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 150,
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 24,
          color: x[3]
        }
      }, x[1]));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        textAlign: 'center',
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 18,
        color: C.dim,
        opacity: ev(localTime, 1.6, 0.7)
      }
    }, "Ratio médecin / habitants — l’auxiliaire de santé, augmenté par TIBOK, devient un praticien."));
  }
  function MiniPanel({
    p,
    i,
    color
  }) {
    return /*#__PURE__*/React.createElement(Card3D, {
      w: 430,
      at: 0.4 + i * 0.18,
      i: i,
      minHeight: 180,
      pad: "26px 28px",
      radius: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 28,
        color: color || '#fff'
      }
    }, p[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 21,
        color: C.dim,
        marginTop: 14,
        lineHeight: 1.4
      }
    }, p[1]));
  }
  function DimCard({
    p,
    i
  }) {
    return /*#__PURE__*/React.createElement(Card3D, {
      w: 470,
      at: 0.4 + i * 0.2,
      i: i,
      accent: p[2],
      minHeight: 236,
      pad: "30px 32px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 29,
        color: p[2]
      }
    }, p[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 22,
        color: C.dim,
        marginTop: 16,
        lineHeight: 1.42
      }
    }, p[1]));
  }
  function TibokHub() {
    const {
      localTime
    } = useScene();
    const nodes = [['Distanciel', C.blue], ['Présentiel', C.blue], ['Pharmacie', C.gold], ['Labo', C.teal], ['Radiologie', C.blue], ['Urgences', C.coral], ['Soins primaires', C.teal]];
    const cx = 960,
      cy = 560,
      rx = 600,
      ry = 178;
    const pts = nodes.map((n, i) => {
      const ang = (-90 + i * (360 / nodes.length)) * Math.PI / 180;
      return {
        n: n[0],
        c: n[1],
        x: cx + Math.cos(ang) * rx,
        y: cy + Math.sin(ang) * ry
      };
    });
    const pulse = 0.5 + 0.5 * Math.sin(localTime * 1.6);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(FlowSvg, null, pts.map((pt, i) => /*#__PURE__*/React.createElement(FlowLink, {
      key: i,
      x1: cx,
      y1: cy,
      x2: pt.x,
      y2: pt.y,
      color: pt.c,
      at: 0.6 + i * 0.1
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx,
        top: cy,
        transform: 'translate(-50%,-50%)',
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.blue}3a, ${C.blue}08)`,
        border: `2px solid ${C.blue}88`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
        opacity: ev(localTime, 0.2, 0.6),
        boxShadow: `0 0 ${70 + 34 * pulse}px ${C.blue}55, inset 0 0 40px ${C.blue}22`
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "tibok",
      w: 150,
      intro: false,
      style: {
        position: 'static'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        color: '#fff'
      }
    }, "Intelligence médicale"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        color: C.teal
      }
    }, "60 000 références")), pts.map((pt, i) => /*#__PURE__*/React.createElement(NodeChip, {
      key: i,
      label: pt.n,
      icon: "◆",
      x: pt.x,
      y: pt.y,
      color: pt.c,
      at: 0.9 + i * 0.11
    })));
  }

  /* ===== écosystème vivant : soignants en action + services connectés ===== */
  function EcosystemLive() {
    const {
      localTime
    } = useScene();
    const cx = 960;
    const glow = 0.4 + 0.6 * Math.abs(Math.sin(localTime * 1.3));
    const nodes = [['Labo', '◆', 660, C.teal], ['Radiologie', '◆', 860, C.blue], ['Pharmacie', '◆', 1060, C.gold], ['Urgences', '◆', 1260, C.coral]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(FlowSvg, null, /*#__PURE__*/React.createElement(FlowLink, {
      x1: 630,
      y1: 350,
      x2: 874,
      y2: 384,
      color: C.blue,
      at: 0.9
    }), /*#__PURE__*/React.createElement(FlowLink, {
      x1: 1290,
      y1: 350,
      x2: 1046,
      y2: 384,
      color: C.teal,
      at: 1.0
    }), nodes.map((n, i) => /*#__PURE__*/React.createElement(FlowLink, {
      key: i,
      x1: cx,
      y1: 588,
      x2: n[2],
      y2: 660,
      color: n[3],
      at: 1.4 + i * 0.12
    }))), /*#__PURE__*/React.createElement(PhotoTile, {
      src: PIMG('doctor-er'),
      x: 130,
      y: 188,
      w: 500,
      h: 322,
      at: 0.3,
      color: C.blue,
      objPos: "48% 50%",
      label: "Médecin · urgences",
      sub: "Consultation augmentée par TIBOK"
    }), /*#__PURE__*/React.createElement(PhotoTile, {
      src: PIMG('nurse-center'),
      x: 1290,
      y: 188,
      w: 500,
      h: 322,
      at: 0.5,
      color: C.teal,
      objPos: "50% 38%",
      label: "Auxiliaire de santé",
      sub: "Saisie structurée au centre de santé"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx,
        top: 384,
        transform: 'translate(-50%,-50%)',
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.blue}33, transparent 70%)`,
        opacity: glow,
        filter: 'blur(6px)'
      }
    }), /*#__PURE__*/React.createElement(Phone, {
      x: cx - 98,
      y: 184,
      h: 400,
      at: 0.7
    }), nodes.map((n, i) => /*#__PURE__*/React.createElement(NodeChip, {
      key: i,
      label: n[0],
      icon: n[1],
      x: n[2],
      y: 662,
      color: n[3],
      at: 1.7 + i * 0.12
    })));
  }

  /* ===== grille des modules ===== */
  function Modules() {
    const {
      localTime
    } = useScene();
    const I = {
      video: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "2.5",
        y: "6",
        width: "13",
        height: "12",
        rx: "2.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15.5 10.5l5-2.5v8l-5-2.5z"
      })),
      person: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "3.4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5.5 20a6.5 6.5 0 0 1 13 0"
      })),
      clip: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "4.5",
        width: "14",
        height: "16.5",
        rx: "2.2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 4.5V3.2h6v1.3M8.6 12l2 2 4-4"
      })),
      derma: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "4.5",
        width: "18",
        height: "15",
        rx: "2.2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "8.5",
        cy: "9.5",
        r: "1.7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3.5 16.5l5-4 4 3 3-2.2 5 4"
      })),
      lab: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M9.5 3.5h5M10.5 3.5v5.5l-4.6 8.2a2 2 0 0 0 1.7 3h8.8a2 2 0 0 0 1.7-3l-4.6-8.2V3.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 15h8"
      })),
      xray: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M4 8V5.5a1.5 1.5 0 0 1 1.5-1.5H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3.4"
      })),
      pill: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M10.6 3.7l9.7 9.7a4.8 4.8 0 0 1-6.8 6.8L3.8 10.5a4.8 4.8 0 0 1 6.8-6.8z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7.2 7.1l9.7 9.7"
      })),
      heart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M20.6 8.6a4.8 4.8 0 0 0-8.6-2 4.8 4.8 0 0 0-8.6 2c0 3.9 4.4 7.3 8.6 10.1 4.2-2.8 8.6-6.2 8.6-10.1z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4.5 11.5h3l1.2-2.2 1.8 4 1.2-1.8h2"
      })),
      shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M12 3.2l7 3v5.3c0 4.8-3 6.8-7 8.8-4-2-7-4-7-8.8V6.2z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 12l2 2 4-4"
      })),
      alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M12 4l9 16H3z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 10v4.5M12 17.4h.01"
      })),
      dash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7.5 15.5v-3M12 15.5v-7M16.5 15.5v-4.5"
      }))
    };
    const mods = [['Consultation', 'Distanciel', 'Téléconsultation vidéo HD — le patient vu où qu’il soit', C.blue, 'video'], ['Consultation', 'Présentiel', 'Le cabinet augmenté par l’IA, en face à face', C.blue, 'person'], ['Consultation', 'Standard', 'Du premier contact au suivi, un seul dossier', C.blue, 'clip'], ['Consultation', 'Dermatologie', 'Analyse assistée par IA des images de peau', C.blue, 'derma'], ['Connexion', 'Labo', 'Résultats d’analyses synchronisés automatiquement', C.teal, 'lab'], ['Connexion', 'Radiologie', 'Imagerie médicale intégrée au dossier patient', C.teal, 'xray'], ['Connexion', 'Pharmacie', 'E-prescription sécurisée, traçable de bout en bout', C.teal, 'pill'], ['Suivi', 'Maladies chroniques', 'Tension · diabète · poids — suivi continu par WhatsApp', C.gold, 'heart'], ['Prévention', 'SilentCheck', 'Dépistage silencieux & détection précoce des risques', C.gold, 'shield'], ['Urgences', 'Triage & alerte', 'Détection précoce et alerte immédiate', C.coral, 'alert'], ['Pilotage', 'Tableau de bord RH', 'Santé au travail pilotée en temps réel', C.green, 'dash']];
    const gap = 18,
      W = 402;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 226,
        left: 120,
        right: 120,
        display: 'flex',
        flexWrap: 'wrap',
        gap: gap,
        justifyContent: 'center'
      }
    }, mods.map((m, i) => {
      const pulse = 0.5 + 0.5 * Math.sin(localTime * 1.5 + i * 0.9);
      return /*#__PURE__*/React.createElement(Card3D, {
        key: i,
        w: W,
        at: 0.3 + i * 0.07,
        i: i,
        accent: m[3],
        accentSide: "left",
        radius: 16,
        pad: "18px 20px",
        style: {
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 52,
          height: 52,
          flex: 'none',
          borderRadius: 14,
          background: `${m[3]}22`,
          border: `1px solid ${m[3]}66`,
          display: 'grid',
          placeItems: 'center',
          color: m[3],
          boxShadow: `0 0 ${9 + 8 * pulse}px ${m[3]}55`
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: "27",
        height: "27",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, I[m[4]])), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: m[3]
        }
      }, m[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 23,
          color: '#fff',
          marginTop: 5,
          lineHeight: 1.05
        }
      }, m[1]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 400,
          fontSize: 15,
          color: C.dim,
          marginTop: 6,
          lineHeight: 1.32
        }
      }, m[2])));
    }));
  }

  /* ===== constellation Afrique / océan Indien ===== */
  function AfricaArc() {
    const {
      localTime
    } = useScene();
    const nodes = [['Maurice', 0], ['Cap-Vert', 1.4], ['Sénégal', 1.9], ['Bénin', 2.3], ['Ghana', 2.7], ['Mali', 3.4], ['Kenya', 3.8], ['Tanzanie', 4.1], ['Mozambique', 4.4]];
    const cx = 960,
      cy = 400,
      rx = 760,
      ry = 200;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, nodes.map((n, i) => {
      const ang = Math.PI * (1.12 - i / (nodes.length - 1) * 1.24);
      const x = cx + Math.cos(ang) * rx,
        y = cy - Math.sin(ang) * ry * 0.9 + (i % 2 ? 28 : -28);
      const p = ev(localTime, n[1] + 0.4, 0.6, Easing.easeOutBack);
      const lit = n[1] < 2 ? C.blue : n[1] < 3 ? C.teal : C.gold;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'absolute',
          left: x,
          top: y,
          transform: 'translate(-50%,-50%)',
          opacity: p,
          scale: `${0.6 + 0.4 * p}`
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 18,
          height: 18,
          borderRadius: 9,
          background: lit,
          boxShadow: `0 0 ${18 * p}px ${lit}, 0 0 ${40 * p}px ${lit}66`,
          margin: '0 auto'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 18,
          color: '#fff',
          marginTop: 10,
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }
      }, n[0]));
    }));
  }

  /* ===== clôture DDS × ER ===== */
  function FinalScene() {
    const {
      localTime
    } = useScene();
    const w = ev(localTime, 0.3, 0.8, Easing.easeOutExpo);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 120,
        top: 300
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        opacity: ev(localTime, 0.2, 0.7),
        transform: `translateY(${(1 - ev(localTime, 0.2, 0.7)) * 20}px)`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logos/dds.png",
      alt: "Digital Data Solutions",
      style: {
        height: 60
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FD,
        fontWeight: 300,
        fontSize: 52,
        color: 'rgba(206,219,240,0.55)'
      }
    }, "×"), /*#__PURE__*/React.createElement(ERmark, {
      h: 54,
      color: "#EAF1FB"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 260 * w,
        height: 8,
        borderRadius: 3,
        background: `linear-gradient(90deg,${C.blue},${C.teal})`,
        margin: '30px 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 34,
        color: '#D6E0F0',
        lineHeight: 1.28,
        opacity: ev(localTime, 0.7, 0.7),
        maxWidth: '20ch'
      }
    }, "Construit à Maurice.", /*#__PURE__*/React.createElement("br", null), "Pour Maurice, l’Afrique", /*#__PURE__*/React.createElement("br", null), "et l’océan Indien.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 120,
        top: 300,
        width: 680,
        opacity: ev(localTime, 1.0, 0.7),
        transform: `translateY(${(1 - ev(localTime, 1.0, 0.7)) * 18}px)`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'flex-start'
      }
    }, ['Swan — signature en cours', 'Équipe 100% mauricienne', 'Écosystème de 3 produits IA'].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        padding: '11px 20px',
        border: '1px solid rgba(255,255,255,0.16)',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 999,
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: C.txt,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 10,
        background: C.green,
        color: C.navy,
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        fontWeight: 800
      }
    }, "✓"), c))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 34,
        paddingTop: 26,
        borderTop: '1px solid rgba(255,255,255,0.14)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 26,
        color: '#fff'
      }
    }, "Dr Stéphane Bach"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 20,
        color: C.dim,
        marginTop: 4
      }
    }, "Fondateur & CEO, Digital Data Solutions Ltd"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: C.blue,
        marginTop: 4
      }
    }, "sbach@tibok.mu")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 19,
        color: '#D6E0F0',
        lineHeight: 1.6
      }
    }, "Mégane · Stephano · Adi · Rain · Baydon · Suzelle · Summer")));
  }
  window.SCENES_B = SCENES_B;
  window.DDSOrg = DDSOrg;
  window.Waveform = Waveform;
  window.Ratios = Ratios;
  window.TibokHub = TibokHub;
  window.DimCard = DimCard;
  window.MiniPanel = MiniPanel;
  window.EcosystemLive = EcosystemLive;
  window.Modules = Modules;
  window.AfricaArc = AfricaArc;
  window.FinalScene = FinalScene;
})();