/* film-content-en.jsx — DDS × MUA film, ENGLISH version (part 1: opening,
   founder, DDS as an AI software producer, the stakes for the insurer).
   Loaded by en.html INSTEAD of film-content.jsx. Exposes window.SCENES_A. */

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
    MUAmark,
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

  /* ===== founder timeline ===== */
  function TimelineViz() {
    const {
      localTime
    } = useScene();
    const ph = [['1993 — 2003', 'Hospital physician (France)', 'The public system, from the inside'], ['2003 — 2008', 'Clinic founder', 'Operational & financial management'], ['2008 — 2019', 'Health economist', 'Le Figaro ranking · 30+ publications · 2 exits'], ['2019 — 2026', 'Mauritius', 'DDS founder · AI since the LLMs arrived · GPT-3, 2020']];
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

  /* ===== the 4 pillars of the DDS approach ===== */
  function Pillars() {
    const {
      localTime
    } = useScene();
    const cols = [['AI SaaS', 'Software in production, not demos. In real daily use.', C.blue], ['AI agents', 'Autonomous agents that do the work — voice, admin, decisions.', C.teal], ['Domain expertise', 'Real know-how on every product: health, accounting, HR, customer care.', C.gold], ['LLM mastery', 'Every model mastered — the right model in the right place, at the lowest cost.', C.green]];
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
    }, "Seven Mauritians trained in 12 months · the strength of 70 with their AI agents · ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 700
      }
    }, "0 imported talent")));
  }

  /* ===== the stakes: the diabetes burden, seen from the payer ===== */
  function DiabetesStakes() {
    const {
      localTime
    } = useScene();
    const cards = [['1 in 5', 'Mauritian adults is diabetic', C.coral, null], ['1 in 3', "doesn't know it yet", C.gold, null], [null, 'deaths caused by diabetes in 2024 — nearly one in four', C.blue, 2709]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 392,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 26
      }
    }, cards.map((c, i) => /*#__PURE__*/React.createElement(Card3D, {
      key: i,
      w: 480,
      at: 0.4 + i * 0.22,
      i: i,
      accent: c[2],
      accentSide: "top",
      minHeight: 240,
      pad: "34px 34px"
    }, c[0] ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 84,
        lineHeight: 0.95,
        letterSpacing: '-0.03em',
        color: c[2]
      }
    }, c[0]) : /*#__PURE__*/React.createElement(Stat, {
      to: c[3],
      size: 84,
      color: c[2],
      at: 0.8,
      dur: 1.6
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 24,
        color: C.txt,
        marginTop: 20,
        lineHeight: 1.35
      }
    }, c[1]))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 296,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 23,
        color: C.coral,
        opacity: ev(localTime, 1.4, 0.7)
      }
    }, "And the bill lands on the policies ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 800
      }
    }, "MUA"), " carries."));
  }

  /* ============================ THE SCENARIO ============================ */
  const SCENES = [/* ---------- 1 · OPENING ---------- */
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
    }), /*#__PURE__*/React.createElement("img", {
      src: "assets/logos/dds.png",
      alt: "Digital Data Solutions",
      style: {
        position: 'absolute',
        left: 122,
        top: 92,
        height: 88
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 126,
        top: 210,
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 13.5,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(206,219,240,0.5)'
      }
    }, "Presented to"), /*#__PURE__*/React.createElement(MUAmark, {
      h: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 124,
        top: 306,
        width: 900
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 62,
        lineHeight: 1.04,
        letterSpacing: '-0.03em',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.blue
      }
    }, "Sovereign"), " artificial", /*#__PURE__*/React.createElement("br", null), "intelligence, built", /*#__PURE__*/React.createElement("br", null), "in Mauritius.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 130,
        top: 558,
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 29,
        letterSpacing: '-0.01em',
        color: '#D6E0F0'
      }
    }, "TIBOK — Medical Intelligence in the service of MUA"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 130,
        top: 636,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap',
        maxWidth: 860
      }
    }, ['Telemedicine', 'Medical Intelligence', 'Prevention', 'Relevance control'].map((c, i) => /*#__PURE__*/React.createElement(Chip, {
      key: i,
      at: 0.4 + i * 0.14,
      color: C.blue
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 130,
        bottom: 54,
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(206,219,240,0.55)'
      }
    }, "Incubated at"), /*#__PURE__*/React.createElement("img", {
      src: "assets/logos/laturbine.svg",
      alt: "La Turbine",
      style: {
        height: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 42,
        background: 'rgba(255,255,255,0.18)',
        margin: '0 6px'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(206,219,240,0.55)'
      }
    }, "Backed by"), /*#__PURE__*/React.createElement("img", {
      src: "assets/logos/mric.avif",
      alt: "MRIC",
      style: {
        height: 56
      }
    })))
  }, /* ---------- 2 · THE FOUNDER, IN A FEW WORDS ---------- */
  {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "The founder",
      title: "Dr Stéphane Bach"
    }), /*#__PURE__*/React.createElement(TimelineViz, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['My name is Stéphane Bach. I am a physician —', 'a public-health specialist. Thirty years of seeing', 'how healthcare systems really work.', 'I have run clinics, published algorithms', 'with Aix-Marseille University, completed two exits.', 'In 2019, I chose Mauritius — for good.', 'My wife is Mauritian; my children will grow up here.', 'This project is not an exit strategy:', 'it is a long-term vision — for Mauritius,', 'for Africa, and for the Indian Ocean.'],
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
  }, /* ---------- 3 · DDS, AN AI SOFTWARE PRODUCER ---------- */
  {
    dur: 35,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "DDS",
      title: "An AI software producer"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 54,
      weight: 700,
      lines: ['DDS is not an AI agency.', 'It is an AI software producer.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 316,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 44
      }
    }, [['tibok', 150], ['lexora', 210], ['axon', 170]].map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 56,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: l[0],
      w: l[1],
      intro: true,
      at: 0.5 + i * 0.18,
      style: {
        position: 'static'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 20,
        color: C.dim
      }
    }, "3 AI products in production")), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['Three products in production — TIBOK, Lexora, Axon —', 'built by a team of seven Mauritians, trained in twelve months,', 'who, augmented by their AI agents, have the strength of seventy.', 'Zero imported talent. And on every product, the same rule:', 'value creation. Today, I come to present MUA', 'with our flagship product: TIBOK.'],
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
  }, /* ---------- 4 · WHAT IS AT STAKE FOR MUA ---------- */
  {
    dur: 30,
    hue: 'coral',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "The stakes",
      title: "Treating after, always after",
      color: C.coral
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 160,
      size: 56,
      weight: 700,
      lines: ['While the body stays silent,', 'medicine arrives too late.'],
      accentIdx: [1],
      accentColor: C.coral
    }), /*#__PURE__*/React.createElement(DiabetesStakes, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['In Mauritius, one adult in five is diabetic.', "And nearly one in three… doesn't know it yet.", 'In 2024, diabetes caused two thousand seven hundred', 'and nine deaths — nearly one in four.', 'While the body stays silent, medicine arrives too late —', 'and the bill lands on the policies MUA carries.', 'Treating after. Always after.', 'That is the model TIBOK has come to overturn.'],
      x: 960,
      width: 1540,
      align: "center",
      y: 905,
      size: 30,
      italic: true,
      accent: "#F6DED7",
      dim: "rgba(230,200,192,0.24)",
      lead: 1.6,
      tail: 1.2
    }))
  }];
  window.SCENES_A = SCENES;
  window.TimelineViz = TimelineViz;
  window.Pillars = Pillars;
  window.DiabetesStakes = DiabetesStakes;
})();