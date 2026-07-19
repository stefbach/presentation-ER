/* film-content2.jsx — Film DDS × EDB (partie 2 : la plateforme TIBOK comme
   preuve d'IA souveraine — cadre légal, écosystème, Medical Intelligence,
   SilentCheck, second avis, contrôle de pertinence, preuve Swan, proposition
   à l'EDB, vision, clôture). Loads after film-content.jsx. Exposes window.SCENES_B. */

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
    EDBmark,
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
  const SCENES_B = [/* ---------- 5 · TIBOK, LA PLATEFORME ---------- */
  {
    dur: 40,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "TIBOK",
      title: "Un OS clinique pour tout le système de santé"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 168,
      size: 50,
      weight: 700,
      lines: ['Pas une app de consultation.', 'Une couche d’intelligence médicale.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(TibokHub, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 342,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 14
      }
    }, ['20+ médecins — Medical Council of Mauritius', 'FR · EN · Kreol', '7 jours sur 7'].map((c, i) => /*#__PURE__*/React.createElement(Chip, {
      key: i,
      at: 0.6 + i * 0.16,
      color: C.teal
    }, c))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Tibok est la première plateforme mauricienne de télémédecine grand public.', 'Plus de vingt médecins inscrits au Medical Council of Mauritius', 'prennent en charge les patients en vidéo — en français, en anglais,', 'ou en kreol — sept jours sur sept. Mais Tibok n’est pas une app', 'de consultation : c’est une couche d’intelligence médicale,', 'un système d’exploitation clinique pour tout le système de santé.', 'Là où le système ne voit que la trace papier d’un acte', 'déjà survenu, Tibok produit l’acte lui-même — natif, structuré,', 'horodaté, vérifiable. Le tout, conçu et opéré depuis Maurice.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 918,
      size: 30,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 6 · CADRE LÉGAL ---------- */
  {
    dur: 45,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Cadre légal",
      title: "Un fait accompli depuis 30 ans",
      color: C.gold
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 158,
      size: 54,
      weight: 700,
      lines: ['Ce qui n’est pas interdit', 'est permis.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement(LegalTimeline, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 700,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      at: 1.6,
      style: {
        maxWidth: 1400
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 27,
        color: '#fff',
        lineHeight: 1.45,
        textAlign: 'center'
      }
    }, "Un acte médical ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.gold,
        fontWeight: 800
      }
    }, "légal, opposable et adjudicable"), " — un cadre clair, que Maurice peut revendiquer, ériger en standard, et exporter."))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['La téléconsultation n’est pas un débat juridique.', 'C’est un fait accompli — depuis bientôt trente ans.', 'Depuis 1997, l’OMS la définit comme un acte médical à part entière.', 'La France la rembourse depuis 2018. Les États-Unis, le Royaume-Uni,', 'l’Allemagne, l’Australie, le Canada, la Suisse l’ont intégrée à leur droit.', 'Et à Maurice ? Le Medical Council Act de 1999 n’impose', 'aucune condition de présence physique. Ce qui n’est pas interdit est permis.', 'La téléconsultation Tibok est un acte médical légal, opposable,', 'et adjudicable — un standard que Maurice peut revendiquer et exporter.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 928,
      size: 29,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.22)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 7 · L'ÉCOSYSTÈME TIBOK ---------- */
  {
    dur: 45,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "L'écosystème",
      title: "Dix outils, une intelligence centrale"
    }), /*#__PURE__*/React.createElement(ToolsGrid, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 620,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: C.gold,
        marginBottom: 14
      }
    }, "Des agents IA qui ne dorment jamais"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 1.4,
      color: C.gold
    }, "Agent de suivi chronique — rappels WhatsApp, alertes"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.55,
      color: C.gold
    }, "Agent de prévention — cohortes × référentiels"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.7,
      color: C.gold
    }, "Agent de contrôle — chaque ordonnance analysée"))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Dix outils — gravitant autour d’une intelligence centrale.', 'La téléconsultation sans rendez-vous. L’ordonnance numérique signée.', 'Le réseau de pharmacies qui livre jusqu’à Rodrigues. Les analyses', 'et l’imagerie. Le suivi des maladies chroniques. La gestion famille.', 'SilentCheck pour la prévention. Le second avis. Le contrôle de pertinence.', 'Et autour, des agents IA qui ne dorment jamais : suivi chronique,', 'prévention, contrôle. Pour Maurice, ce n’est pas un gadget :', 'c’est une infrastructure de santé numérique souveraine —', 'pilotée, tracée, verrouillée — construite ici.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 928,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 8 · MEDICAL INTELLIGENCE & RAG ---------- */
  {
    dur: 40,
    hue: 'teal',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Medical Intelligence",
      title: "LLM + RAG — le socle scientifique",
      color: C.teal
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 158,
      size: 50,
      weight: 700,
      lines: ['L’IA ne remplace pas le médecin.', 'Elle l’augmente.'],
      accentIdx: [1],
      accentColor: C.teal
    }), /*#__PURE__*/React.createElement(IntelCore, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Au cœur de Tibok, notre signature : la Medical Intelligence.', 'Les meilleurs grands modèles de langage — Claude, GPT, Gemini, Mistral —', 'combinés à un système RAG adossé à plus de soixante mille références', 'des plus grandes sociétés savantes : OMS, Société européenne de cardiologie,', 'American Heart Association, NICE, INSERM, HAS, FDA.', 'Chaque consultation, chaque ordonnance est verrouillée par ce socle.', 'L’IA ne remplace pas le médecin. Elle l’augmente. Elle vérifie,', 'elle suggère, elle alerte — et le médecin garde, toujours, la décision finale.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 928,
      size: 29,
      italic: true,
      accent: "#D8F2F4",
      dim: "rgba(200,230,236,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 9 · SILENTCHECK ---------- */
  {
    dur: 50,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Prévention active",
      title: "SilentCheck · Score BSD",
      color: C.gold
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 50,
      weight: 700,
      lines: ['Détecter 5 à 10 ans à l’avance', 'ce que les symptômes taisent.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement(SilentCheckViz, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Notre innovation phare s’appelle SilentCheck —', 'la stratification du risque cardiovasculaire, basée sur le Score BSD.', 'Quatre millions de patients suivis dans cinquante-deux pays.', 'Cinquante-trois références publiées dans le New England Journal', 'of Medicine, The Lancet, JACC, Circulation. Quinze biomarqueurs.', 'SilentCheck détecte cinq à dix ans à l’avance les anomalies', 'que les symptômes ne révèlent pas encore. Un système de santé', 'classique regarde dans le rétroviseur. SilentCheck regarde devant :', 'c’est la brique qui fait passer Maurice de la médecine subie', 'à la prévention active.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 928,
      size: 29,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.22)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 10 · SECOND AVIS MÉDICAL ---------- */
  {
    dur: 35,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Second avis",
      title: "Une seconde lecture, entièrement sourcée"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 158,
      size: 50,
      weight: 700,
      lines: ['Un contrôle qualité automatisé,', 'avant tout acte coûteux.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(SecondOpinionFlow, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Pour les pathologies complexes : le Second Avis Médical.', 'Le dossier complet du patient — anamnèse, ordonnance, imagerie,', 'biologie, antécédents — est revérifié par notre dispositif IA et RAG,', 'puis validé par un médecin Tibok. Une seconde lecture entièrement sourcée.', 'Pour le patient : un dossier revu sans angle mort. Pour le système :', 'un contrôle qualité automatisé avant tout acte coûteux — le geste lourd,', 'l’hospitalisation, l’orientation à l’étranger.', 'Exactement là où se joue la dépense de santé.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 918,
      size: 30,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 11 · LE CONTRÔLE DE PERTINENCE ---------- */
  {
    dur: 45,
    hue: 'green',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Le module clé",
      title: "Contrôle de pertinence",
      color: C.green
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 50,
      weight: 700,
      lines: ['Du contrôle ex-post sur papier', 'au contrôle natif, en temps réel.'],
      accentIdx: [1],
      accentColor: C.green
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 352,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 14
      }
    }, ['Horodatage', 'Signature électronique', 'Traçabilité vidéo', 'Analyse de pertinence'].map((c, i) => /*#__PURE__*/React.createElement(Chip, {
      key: i,
      at: 0.5 + i * 0.14,
      color: C.green
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 470,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 22
      }
    }, [['Fin de la sur-prescription', 'Chaque examen, chaque acte confronté aux référentiels avant d’entrer dans la dépense. La prescription opportuniste devient visible.', C.teal], ['Lutte structurée contre la fraude', 'L’acte fantôme et le sur-codage n’ont plus d’angle mort — l’acte est nativement prouvable.', C.blue], ['Maîtrise des coûts de santé', 'Détection précoce, parcours coordonné, donnée clinique structurée — pour les assureurs, les employeurs, l’État.', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(DimCard, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Et voici le module qui change l’économie de la santé.', 'Aujourd’hui, on vérifie un document reconstruit après coup —', 'personne n’a observé l’acte. Tibok renverse ce modèle :', 'chaque ordonnance, chaque examen transite par la plateforme,', 'nativement prouvable — horodatage, signature électronique,', 'traçabilité vidéo, analyse de pertinence. On passe du contrôle', 'ex-post sur papier au contrôle natif, en temps réel. Trois leviers :', 'fin de la sur-prescription, lutte structurée contre la fraude,', 'maîtrise des coûts. Un produit prêt à l’export.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 928,
      size: 29,
      italic: true,
      accent: "#DDF2E8",
      dim: "rgba(200,230,216,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 12 · LA PREUVE : SWAN ---------- */
  {
    dur: 30,
    hue: 'green',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "La preuve",
      title: "Le principe est validé",
      color: C.green
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 54,
      weight: 700,
      lines: ['Ce modèle n’est pas une promesse.', 'Il est déjà engagé.'],
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
        top: 380,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      at: 0.5,
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
    }, "Avec Swan, la signature est en cours — le premier grand assureur à s’", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.green,
        fontWeight: 800
      }
    }, "engager"), " sur le remboursement des consultations et prescriptions faites sur TIBOK."))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 588,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 30,
        color: '#fff',
        opacity: 1
      }
    }, "La preuve commerciale existe. Il faut maintenant une ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.gold
      }
    }, "plateforme pays"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 22,
        color: C.dim
      }
    }, "Et c’est ce que je viens chercher à l’"), /*#__PURE__*/React.createElement(EDBmark, {
      h: 30
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Ce modèle n’est pas une promesse. Avec Swan, la signature est en cours :', 'le premier grand assureur à s’engager sur le remboursement', 'des consultations et des prescriptions faites sur Tibok.', 'Le principe est validé sur le marché mauricien.', 'La preuve commerciale existe. Ce qu’il faut maintenant,', 'c’est une plateforme pays — et c’est ce que je viens chercher à l’EDB.'],
      x: 960,
      width: 1500,
      align: "center",
      y: 912,
      size: 31,
      italic: true,
      accent: "#DDF2E8",
      dim: "rgba(200,230,216,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 13 · LA PROPOSITION : UN CHAMPION NATIONAL DE L'IA ---------- */
  {
    dur: 50,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "La proposition",
      title: "Un champion national pour le pilier IA",
      color: C.gold
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 144,
      size: 46,
      weight: 700,
      lines: ['Maurice a fait de l’IA son premier pilier.', 'TIBOK est la preuve que ça marche.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement(OfferCards, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Voici ce que je propose à l’EDB. Le Budget 2026-27 fait de l’IA', 'et de la digitalisation le premier pilier stratégique du pays.', 'TIBOK est exactement ce que cette stratégie veut produire :', 'une IA souveraine, en production, cent pour cent mauricienne,', 'déjà validée par le marché. Trois axes. Un : la vitrine —', 'faire de TIBOK le cas d’école du Mauritius AI Hub.', 'Deux : l’accélération — Startup Act, accélérateur EDB,', 'incitations IA, zone spéciale de Côte d’Or : appliquons ces leviers', 'à un produit déjà en production. Trois : l’export —', 'embarquer TIBOK dans vos missions africaines, et faire', 'de la Medical Intelligence un produit d’exportation mauricien.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 935,
      size: 28,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.22)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- 14 · VISION RÉGIONALE ---------- */
  {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Vision régionale",
      title: "Maurice, puis l'Afrique"
    }), /*#__PURE__*/React.createElement(AfricaArc, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 588,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 52,
        letterSpacing: '-0.025em',
        color: '#fff'
      }
    }, "L’EDB est déjà là où TIBOK veut aller."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 28,
        color: C.blue,
        marginTop: 12
      }
    }, "Votre plateforme pays · notre infrastructure de santé souveraine")), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Maurice est la preuve de concept. Ça marche ici — donc ça marche', 'partout où le problème est le même : pas assez de médecins.', 'Et l’EDB est déjà là où Tibok veut aller : ses missions,', 'son réseau, son mandat de promotion couvrent le continent.', 'Votre plateforme pays, notre infrastructure de santé souveraine.', 'Ensemble, le standard mauricien peut devenir le standard', 'du continent et de son océan.'],
      x: 960,
      width: 1560,
      align: "center",
      y: 912,
      size: 30,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- 15 · CLÔTURE ---------- */
  {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FinalScene, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Maurice est à un tournant. Le pays a fait de l’intelligence', 'artificielle le premier pilier de sa stratégie économique.', 'Il lui faut maintenant des preuves — des produits réels,', 'en production, exportables. TIBOK est cette preuve.', 'Votre mandat : faire de Maurice une économie à hauts revenus,', 'innovante, ouverte sur l’Afrique. Le nôtre : construire', 'les logiciels souverains qui la portent.', 'Bâtissons ensemble le standard de demain — pour Maurice,', 'pour l’Afrique et pour l’océan Indien.', 'Docteur Stéphane Bach · Digital Data Solutions · tibok.mu'],
      x: 960,
      width: 1560,
      align: "center",
      y: 905,
      size: 30,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.4,
      tail: 1.6
    }))
  }];

  /* ============================ COMPOSANTS ============================ */

  function TibokHub() {
    const {
      localTime
    } = useScene();
    const nodes = [['Consultation', C.blue], ['Ordonnance', C.teal], ['Pharmacie', C.gold], ['Analyses', C.teal], ['Suivi chronique', C.gold], ['Second avis', C.blue], ['Prévention', C.green], ['Contrôle', C.coral]];
    const cx = 960,
      cy = 584,
      rx = 620,
      ry = 176;
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
    }, "Medical Intelligence"), /*#__PURE__*/React.createElement("div", {
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

  /* ===== chronologie légale de la téléconsultation ===== */
  function LegalTimeline() {
    const {
      localTime
    } = useScene();
    const ph = [['1997', 'OMS', 'Acte médical à part entière', C.blue], ['2018', 'France', 'Remboursée par l’Assurance Maladie', C.blue], ['Medicare Act', 'États-Unis', 'Généralisée aux cinquante États', C.blue], ['Droit commun', 'UK · DE · AU · CA · CH', 'Intégrée au droit national', C.teal], ['1999', 'Maurice — Medical Council Act', 'Aucune condition de présence physique', C.gold]];
    const W = 316,
      gap = 24,
      total = ph.length * W + (ph.length - 1) * gap,
      sx = (1920 - total) / 2,
      lineY = 452;
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
      const op = ev(localTime, 0.5 + i * 0.3, 0.6, Easing.easeOutCubic);
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
          background: p[3],
          boxShadow: `0 0 18px ${p[3]}`,
          marginBottom: 24
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 25,
          color: '#fff'
        }
      }, p[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 20,
          color: p[3],
          marginTop: 8,
          lineHeight: 1.25
        }
      }, p[1]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 400,
          fontSize: 17,
          color: C.dim,
          marginTop: 7,
          lineHeight: 1.35
        }
      }, p[2]));
    }));
  }

  /* ===== grille des 10 outils de l'écosystème ===== */
  function ToolsGrid() {
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
      rx: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "4.5",
        width: "14",
        height: "16.5",
        rx: "2.2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 4.5V3.2h6v1.3M8.6 12l2 2 4-4"
      })),
      pill: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M10.6 3.7l9.7 9.7a4.8 4.8 0 0 1-6.8 6.8L3.8 10.5a4.8 4.8 0 0 1 6.8-6.8z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7.2 7.1l9.7 9.7"
      })),
      lab: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M9.5 3.5h5M10.5 3.5v5.5l-4.6 8.2a2 2 0 0 0 1.7 3h8.8a2 2 0 0 0 1.7-3l-4.6-8.2V3.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 15h8"
      })),
      heart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M20.6 8.6a4.8 4.8 0 0 0-8.6-2 4.8 4.8 0 0 0-8.6 2c0 3.9 4.4 7.3 8.6 10.1 4.2-2.8 8.6-6.2 8.6-10.1z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4.5 11.5h3l1.2-2.2 1.8 4 1.2-1.8h2"
      })),
      family: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "8.5",
        cy: "7.5",
        r: "2.6"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "16",
        cy: "8.6",
        r: "2.1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3.8 19.5a4.8 4.8 0 0 1 9.4 0M12.8 19.5a3.9 3.9 0 0 1 6.6-2.4"
      })),
      shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M12 3.2l7 3v5.3c0 4.8-3 6.8-7 8.8-4-2-7-4-7-8.8V6.2z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 12l2 2 4-4"
      })),
      second: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "10",
        cy: "10",
        r: "6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14.5 14.5L20 20M8 10h4M10 8v4"
      })),
      control: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7.5 12l3 3 6-6"
      })),
      brain: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3.2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
      }))
    };
    const mods = [['Téléconsultation', 'Vidéo, sans rendez-vous', C.blue, 'video'], ['Ordonnance numérique', 'Signée, transmise à la pharmacie', C.teal, 'rx'], ['Réseau pharmacies', 'Livraison jusqu’à Rodrigues', C.gold, 'pill'], ['Analyses & imagerie', 'Biologie et radiologie intégrées', C.teal, 'lab'], ['Suivi chronique', 'Tension · diabète · poids, par WhatsApp', C.gold, 'heart'], ['Gestion famille', 'Tous les proches, un seul compte', C.blue, 'family'], ['SilentCheck', 'Prévention & détection précoce', C.gold, 'shield'], ['Second avis', 'Dossier revu par IA + médecin', C.blue, 'second'], ['Contrôle de pertinence', 'Chaque acte vérifié avant la dépense', C.green, 'control'], ['Medical Intelligence', 'Au cœur — sur chaque consultation, ordonnance, examen', C.coral, 'brain']];
    const gap = 18,
      W = 402;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 196,
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
        accent: m[2],
        accentSide: "left",
        radius: 16,
        pad: "17px 20px",
        style: {
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 50,
          height: 50,
          flex: 'none',
          borderRadius: 14,
          background: `${m[2]}22`,
          border: `1px solid ${m[2]}66`,
          display: 'grid',
          placeItems: 'center',
          color: m[2],
          boxShadow: `0 0 ${9 + 8 * pulse}px ${m[2]}55`
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, I[m[3]])), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 22,
          color: '#fff',
          lineHeight: 1.05
        }
      }, m[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 400,
          fontSize: 15,
          color: C.dim,
          marginTop: 6,
          lineHeight: 1.32
        }
      }, m[1])));
    }));
  }

  /* ===== LLM + RAG : le cœur scientifique ===== */
  function IntelCore() {
    const {
      localTime
    } = useScene();
    const cx = 960,
      cy = 520;
    const pulse = 0.5 + 0.5 * Math.sin(localTime * 1.6);
    const llms = [['Claude', 392], ['GPT', 462], ['Gemini', 532], ['Mistral', 602]];
    const socs = ['OMS', 'ESC — cardiologie', 'American Heart Association', 'NICE', 'INSERM', 'HAS', 'FDA'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(FlowSvg, null, llms.map((l, i) => /*#__PURE__*/React.createElement(FlowLink, {
      key: i,
      x1: 430,
      y1: l[1],
      x2: cx - 130,
      y2: cy,
      color: C.teal,
      at: 0.5 + i * 0.12
    })), /*#__PURE__*/React.createElement(FlowLink, {
      x1: cx + 130,
      y1: cy,
      x2: 1500,
      y2: cy,
      color: C.blue,
      at: 1.1
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 250,
        top: 352,
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: C.teal,
        opacity: ev(localTime, 0.4, 0.6)
      }
    }, "Les meilleurs LLM"), llms.map((l, i) => /*#__PURE__*/React.createElement(NodeChip, {
      key: i,
      label: l[0],
      icon: "◆",
      x: 330,
      y: l[1],
      color: C.teal,
      at: 0.5 + i * 0.12
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx,
        top: cy,
        transform: 'translate(-50%,-50%)',
        width: 260,
        height: 260,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.teal}3a, ${C.teal}08)`,
        border: `2px solid ${C.teal}88`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        opacity: ev(localTime, 0.3, 0.6),
        boxShadow: `0 0 ${70 + 34 * pulse}px ${C.teal}55, inset 0 0 40px ${C.teal}22`
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "tibok",
      w: 140,
      intro: false,
      style: {
        position: 'static'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 16,
        color: '#fff'
      }
    }, "Medical Intelligence"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 14,
        color: C.teal
      }
    }, "LLM + RAG")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 1500,
        top: cy,
        transform: 'translate(0,-50%)',
        opacity: ev(localTime, 1.3, 0.6)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(16,30,56,0.85)',
        border: `1px solid ${C.blue}66`,
        borderRadius: 18,
        padding: '22px 30px',
        boxShadow: `0 12px 34px rgba(0,0,0,0.4), 0 0 26px ${C.blue}33`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 42,
        color: C.blue,
        lineHeight: 1
      }
    }, "60 000"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 18,
        color: '#fff',
        marginTop: 8
      }
    }, "références scientifiques"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 15,
        color: C.dim,
        marginTop: 4
      }
    }, "RAG — Retrieval-Augmented Generation"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 712,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        flexWrap: 'wrap',
        maxWidth: 1500,
        margin: '0 auto'
      }
    }, socs.map((s, i) => /*#__PURE__*/React.createElement(Chip, {
      key: i,
      at: 1.4 + i * 0.1,
      color: C.blue
    }, s))));
  }

  /* ===== SilentCheck : la science en chiffres ===== */
  function SilentCheckViz() {
    const {
      localTime
    } = useScene();
    const bars = [['des maladies cardiaques se développent sans symptôme pendant 10 ans', 80, C.coral], ['des complications sont évitables avec une détection précoce', 85, C.green]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 380,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 70
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      to: 4,
      suffix: " M",
      size: 72,
      color: C.gold,
      label: "patients · 52 pays",
      align: "center",
      at: 0.5
    }), /*#__PURE__*/React.createElement(Stat, {
      to: 53,
      size: 72,
      color: C.blue,
      label: "références — NEJM · Lancet · JACC",
      align: "center",
      at: 0.7
    }), /*#__PURE__*/React.createElement(Stat, {
      to: 69612,
      size: 72,
      color: C.teal,
      label: "cohorte de validation",
      align: "center",
      at: 0.9
    }), /*#__PURE__*/React.createElement(Stat, {
      to: 11,
      size: 72,
      color: C.green,
      label: "profils ethniques",
      align: "center",
      at: 1.1
    }), /*#__PURE__*/React.createElement(Stat, {
      to: 15,
      size: 72,
      color: C.coral,
      label: "biomarqueurs",
      align: "center",
      at: 1.3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 614,
        left: 330,
        right: 330,
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, bars.map((b, i) => {
      const p = ev(localTime, 1.5 + i * 0.3, 1.0, Easing.easeOutCubic);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          opacity: ev(localTime, 1.4 + i * 0.3, 0.5)
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 120,
          fontFamily: FD,
          fontWeight: 800,
          fontSize: 44,
          color: b[2],
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums'
        }
      }, Math.round(b[1] * p), "%"), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 22,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 11,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          width: `${b[1] * p}%`,
          background: b[2],
          borderRadius: 11,
          boxShadow: `0 0 24px ${b[2]}55`
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 500,
          fontSize: 18,
          color: C.dim,
          marginTop: 8
        }
      }, b[0])));
    })));
  }

  /* ===== flux du second avis médical ===== */
  function SecondOpinionFlow() {
    const {
      localTime
    } = useScene();
    const y = 520;
    const steps = [['Dossier complet', '◆', 300, C.blue], ['LLM — analyse globale', '◆', 780, C.teal], ['RAG — 60 000 références', '◆', 1230, C.blue], ['Médecin TIBOK — validation', '◆', 1650, C.green]];
    const docs = ['Anamnèse', 'Ordonnance', 'Imagerie', 'Biologie', 'Antécédents'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(FlowSvg, null, steps.slice(0, -1).map((s, i) => /*#__PURE__*/React.createElement(FlowLink, {
      key: i,
      x1: s[2],
      y1: y,
      x2: steps[i + 1][2],
      y2: y,
      color: steps[i + 1][3],
      at: 0.6 + i * 0.3
    }))), steps.map((s, i) => /*#__PURE__*/React.createElement(NodeChip, {
      key: i,
      label: s[0],
      icon: s[1],
      x: s[2],
      y: y,
      color: s[3],
      at: 0.5 + i * 0.3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 600,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 12
      }
    }, docs.map((d, i) => /*#__PURE__*/React.createElement(Chip, {
      key: i,
      at: 1.5 + i * 0.1,
      color: C.blue,
      tick: false
    }, d))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 702,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 24,
        color: C.teal,
        opacity: ev(localTime, 2.0, 0.7)
      }
    }, "Une seconde lecture entièrement sourcée — avant le geste lourd, l’hospitalisation, l’orientation à l’étranger."));
  }

  /* ===== la proposition : trois axes alignés sur la stratégie EDB ===== */
  function OfferCards() {
    const {
      localTime
    } = useScene();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 330,
        left: 0,
        right: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement(Card3D, {
      w: 470,
      at: 0.4,
      i: 0,
      accent: C.blue,
      accentSide: "top",
      minHeight: 300,
      pad: "30px 32px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: C.blue
      }
    }, "Axe 1 · Mauritius AI Hub"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 58,
        color: '#fff',
        marginTop: 16,
        lineHeight: 1
      }
    }, "La vitrine"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: C.dim,
        marginTop: 8
      }
    }, "pilier « Leveraging AI & Digitisation »"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 17,
        color: C.dim,
        marginTop: 14,
        lineHeight: 1.45
      }
    }, "Une IA souveraine en production, cas d’école du branding pays — ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 600
      }
    }, "Maurice ne consomme pas l’IA : elle la produit"), ".")), /*#__PURE__*/React.createElement(Card3D, {
      w: 470,
      at: 0.6,
      i: 1,
      accent: C.green,
      accentSide: "top",
      minHeight: 300,
      pad: "30px 32px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: C.green
      }
    }, "Axe 2 · Startup Act & AI SEZ"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 58,
        color: '#fff',
        marginTop: 16,
        lineHeight: 1
      }
    }, "L’accélération"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: C.dim,
        marginTop: 8
      }
    }, "les leviers EDB, sur un produit déjà en production"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 17,
        color: C.txt,
        marginTop: 14,
        lineHeight: 1.6
      }
    }, "✓ Startup Act & accélérateur EDB", /*#__PURE__*/React.createElement("br", null), "✓ Incitations IA · innovation grants", /*#__PURE__*/React.createElement("br", null), "✓ AI SEZ de Côte d’Or")), /*#__PURE__*/React.createElement(Card3D, {
      w: 490,
      at: 0.8,
      i: 2,
      accent: C.gold,
      accentSide: "top",
      minHeight: 300,
      pad: "30px 32px",
      style: {
        background: 'rgba(224,169,59,0.08)',
        border: '1px solid rgba(224,169,59,0.35)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: C.gold
      }
    }, "Axe 3 · Missions Afrique"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 58,
        color: C.gold,
        marginTop: 16,
        lineHeight: 1
      }
    }, "L’export"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: '#fff',
        marginTop: 8
      }
    }, "la Medical Intelligence, produit d’exportation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 17,
        color: C.dim,
        marginTop: 14,
        lineHeight: 1.45
      }
    }, "Embarquer TIBOK dans les missions économiques de l’EDB — le ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 600
      }
    }, "standard mauricien"), " de la santé numérique, vendu au continent."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      at: 1.3,
      style: {
        maxWidth: 1420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 24,
        color: '#fff',
        lineHeight: 1.45,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.gold,
        fontWeight: 800
      }
    }, "Gagnant-gagnant"), " — DDS apporte la preuve vivante ; l’EDB apporte la plateforme pays. Ensemble : le ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.teal,
        fontWeight: 700
      }
    }, "standard mauricien"), " de la santé numérique, exporté vers l’Afrique."))));
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

  /* ===== constellation Afrique de l'Est / océan Indien ===== */
  function AfricaArc() {
    const {
      localTime
    } = useScene();
    // gold = missions & réseau EDB en Afrique · blue = TIBOK aujourd'hui · teal = expansion naturelle
    const nodes = [['Maurice', 0, C.blue], ['Rodrigues', 0.8, C.blue], ['Madagascar', 1.6, C.teal], ['Mozambique', 2.0, C.teal], ['Tanzanie', 2.6, C.gold], ['Kenya', 3.0, C.gold], ['Ouganda', 3.4, C.gold], ['Rwanda', 3.8, C.gold]];
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
      const lit = n[2];
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
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 492,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 28,
        opacity: ev(localTime, 3.4, 0.7)
      }
    }, [['TIBOK aujourd’hui', C.blue], ['Missions & réseau EDB — Afrique', C.gold], ['Expansion naturelle', C.teal]].map((l, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 18,
        color: C.dim
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 12,
        height: 12,
        borderRadius: 6,
        background: l[1],
        boxShadow: `0 0 12px ${l[1]}`
      }
    }), l[0]))));
  }

  /* ===== clôture DDS × EDB ===== */
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
    }, "×"), /*#__PURE__*/React.createElement(EDBmark, {
      h: 48
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
        maxWidth: '22ch'
      }
    }, "Bâtissons ensemble", /*#__PURE__*/React.createElement("br", null), "le standard de demain —", /*#__PURE__*/React.createElement("br", null), "pour Maurice, l’Afrique", /*#__PURE__*/React.createElement("br", null), "et l’océan Indien.")), /*#__PURE__*/React.createElement("div", {
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
    }, ['Swan — signature en cours', '3 produits IA en production', 'Équipe 100% mauricienne'].map((c, i) => /*#__PURE__*/React.createElement("span", {
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
    }, "sbach@tibok.mu · tibok.mu")), /*#__PURE__*/React.createElement("div", {
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
  window.TibokHub = TibokHub;
  window.LegalTimeline = LegalTimeline;
  window.ToolsGrid = ToolsGrid;
  window.IntelCore = IntelCore;
  window.SilentCheckViz = SilentCheckViz;
  window.SecondOpinionFlow = SecondOpinionFlow;
  window.OfferCards = OfferCards;
  window.DimCard = DimCard;
  window.MiniPanel = MiniPanel;
  window.AfricaArc = AfricaArc;
  window.FinalScene = FinalScene;
})();