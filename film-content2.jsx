/* film-content2.jsx — Film DDS × MUA (partie 2 : la plateforme TIBOK vue
   de l'assureur — cadre légal, écosystème, Medical Intelligence, SilentCheck,
   second avis, contrôle de pertinence, preuve Swan, offre, vision, clôture).
   Loads after film-content.jsx. Exposes window.SCENES_B. */

(function(){
const { Scene, FX, ActTag, Narration, Statement, Photo, Stat, Chip, Bar, Panel, Card3D, Logo, Swan, MUAmark,
        C, FD, FS, Easing, ev, fr, clamp, useScene,
        Phone, FlowSvg, FlowLink, NodeChip, PhotoTile } = window;

const PIMG = (n)=>`assets/people/${n}.jpg`;
const IMG = (n)=>`assets/team/${n}.jpg`;

const SCENES_B = [

/* ---------- 5 · TIBOK, LA PLATEFORME ---------- */
{ dur:40, hue:'blue', node:(<React.Fragment>
  <ActTag act="TIBOK" title="Un OS clinique au-dessus de l'assurance santé"/>
  <Statement x={120} y={168} size={50} weight={700}
    lines={['Pas une app de consultation.','Une couche d’intelligence médicale.']} accentIdx={[1]} accentColor={C.blue}/>
  <TibokHub/>
  <div style={{position:'absolute',top:342,left:0,right:0,display:'flex',justifyContent:'center',gap:14}}>
    {['20+ médecins — Medical Council of Mauritius','FR · EN · Kreol','7 jours sur 7'].map((c,i)=>(
      <Chip key={i} at={0.6+i*0.16} color={C.teal}>{c}</Chip>
    ))}
  </div>
  <Narration lines={[
    'Tibok est la première plateforme mauricienne de télémédecine grand public.',
    'Plus de vingt médecins inscrits au Medical Council of Mauritius',
    'prennent en charge les patients en vidéo — en français, en anglais,',
    'ou en kreol — sept jours sur sept. Mais Tibok n’est pas une app',
    'de consultation : c’est une couche d’intelligence médicale,',
    'un système d’exploitation clinique conçu pour s’installer',
    'au-dessus de l’assurance santé. Là où l’assureur ne voit que',
    'la trace papier d’un acte déjà survenu, Tibok produit l’acte',
    'lui-même — natif, structuré, horodaté, vérifiable.']}
    x={960} width={1560} align="center" y={918} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 6 · CADRE LÉGAL ---------- */
{ dur:45, hue:'gold', node:(<React.Fragment>
  <ActTag act="Cadre légal" title="Un fait accompli depuis 30 ans" color={C.gold}/>
  <Statement x={120} y={158} size={54} weight={700}
    lines={['Ce qui n’est pas interdit','est permis.']} accentIdx={[1]} accentColor={C.gold}/>
  <LegalTimeline/>
  <div style={{position:'absolute',top:700,left:0,right:0,display:'flex',justifyContent:'center'}}>
    <Panel at={1.6} style={{maxWidth:1400}}>
      <div style={{fontFamily:FD,fontWeight:600,fontSize:27,color:'#fff',lineHeight:1.45,textAlign:'center'}}>
        Un acte médical <span style={{color:C.gold,fontWeight:800}}>légal, opposable et adjudicable</span> — que la MUA peut couvrir et rembourser en droit commun, dans la nomenclature qu’elle pilote déjà.</div>
    </Panel>
  </div>
  <Narration lines={[
    'La téléconsultation n’est pas un débat juridique.',
    'C’est un fait accompli — depuis bientôt trente ans.',
    'Depuis 1997, l’OMS la définit comme un acte médical à part entière.',
    'La France la rembourse depuis 2018. Les États-Unis, le Royaume-Uni,',
    'l’Allemagne, l’Australie, le Canada, la Suisse l’ont intégrée à leur droit.',
    'Et à Maurice ? Le Medical Council Act de 1999 n’impose',
    'aucune condition de présence physique. Ce qui n’est pas interdit est permis.',
    'La téléconsultation Tibok est un acte médical légal, opposable,',
    'et adjudicable — que la MUA peut couvrir et rembourser en droit commun.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 7 · L'ÉCOSYSTÈME TIBOK ---------- */
{ dur:45, hue:'blue', node:(<React.Fragment>
  <ActTag act="L'écosystème" title="Dix outils, une intelligence centrale"/>
  <ToolsGrid/>
  <div style={{position:'absolute',top:620,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:16,letterSpacing:'0.12em',textTransform:'uppercase',color:C.gold,marginBottom:14}}>Des agents IA qui ne dorment jamais</div>
    <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap'}}>
      <Chip at={1.4} color={C.gold}>Agent de suivi chronique — rappels WhatsApp, alertes</Chip>
      <Chip at={1.55} color={C.gold}>Agent de prévention — cohortes × référentiels</Chip>
      <Chip at={1.7} color={C.gold}>Agent de contrôle — chaque ordonnance analysée</Chip>
    </div>
  </div>
  <Narration lines={[
    'Dix outils — gravitant autour d’une intelligence centrale.',
    'La téléconsultation sans rendez-vous. L’ordonnance numérique signée.',
    'Le réseau de pharmacies qui livre jusqu’à Rodrigues. Les analyses',
    'et l’imagerie. Le suivi des maladies chroniques. La gestion famille.',
    'SilentCheck pour la prévention. Le second avis. Le contrôle de pertinence.',
    'Et autour, des agents IA qui ne dorment jamais : suivi chronique,',
    'prévention, contrôle. Pour la MUA, ce sont les bras que votre gestion',
    'du risque n’a jamais eus — une chaîne pilotée, tracée, verrouillée.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 8 · MEDICAL INTELLIGENCE & RAG ---------- */
{ dur:40, hue:'teal', node:(<React.Fragment>
  <ActTag act="Medical Intelligence" title="LLM + RAG — le socle scientifique" color={C.teal}/>
  <Statement x={120} y={158} size={50} weight={700}
    lines={['L’IA ne remplace pas le médecin.','Elle l’augmente.']} accentIdx={[1]} accentColor={C.teal}/>
  <IntelCore/>
  <Narration lines={[
    'Au cœur de Tibok, notre signature : la Medical Intelligence.',
    'Les meilleurs grands modèles de langage — Claude, GPT, Gemini, Mistral —',
    'combinés à un système RAG adossé à plus de soixante mille références',
    'des plus grandes sociétés savantes : OMS, Société européenne de cardiologie,',
    'American Heart Association, NICE, INSERM, HAS, FDA.',
    'Chaque consultation, chaque ordonnance est verrouillée par ce socle.',
    'L’IA ne remplace pas le médecin. Elle l’augmente. Elle vérifie,',
    'elle suggère, elle alerte — et le médecin garde, toujours, la décision finale.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#D8F2F4" dim="rgba(200,230,236,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 9 · SILENTCHECK ---------- */
{ dur:50, hue:'gold', node:(<React.Fragment>
  <ActTag act="Prévention active" title="SilentCheck · Score BSD" color={C.gold}/>
  <Statement x={120} y={150} size={50} weight={700}
    lines={['Détecter 5 à 10 ans à l’avance','ce que les symptômes taisent.']} accentIdx={[1]} accentColor={C.gold}/>
  <SilentCheckViz/>
  <Narration lines={[
    'Notre innovation phare s’appelle SilentCheck —',
    'la stratification du risque cardiovasculaire, basée sur le Score BSD.',
    'Quatre millions de patients suivis dans cinquante-deux pays.',
    'Cinquante-trois références publiées dans le New England Journal',
    'of Medicine, The Lancet, JACC, Circulation. Quinze biomarqueurs.',
    'SilentCheck détecte cinq à dix ans à l’avance les anomalies',
    'que les symptômes ne révèlent pas encore. Un assureur classique',
    'regarde dans le rétroviseur. SilentCheck regarde devant :',
    'c’est la brique qui fait passer la MUA de la sinistralité subie',
    'à la prévention active.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 10 · SECOND AVIS MÉDICAL ---------- */
{ dur:35, hue:'blue', node:(<React.Fragment>
  <ActTag act="Second avis" title="Une seconde lecture, entièrement sourcée"/>
  <Statement x={120} y={158} size={50} weight={700}
    lines={['Un contrôle qualité automatisé,','avant tout acte coûteux.']} accentIdx={[1]} accentColor={C.blue}/>
  <SecondOpinionFlow/>
  <Narration lines={[
    'Pour les pathologies complexes : le Second Avis Médical.',
    'Le dossier complet du patient — anamnèse, ordonnance, imagerie,',
    'biologie, antécédents — est revérifié par notre dispositif IA et RAG,',
    'puis validé par un médecin Tibok. Une seconde lecture entièrement sourcée.',
    'Pour l’assuré : un dossier revu sans angle mort. Pour la MUA :',
    'un contrôle qualité automatisé avant tout acte coûteux — le geste lourd,',
    'l’hospitalisation, l’orientation à l’étranger.',
    'Exactement là où se joue la dépense.']}
    x={960} width={1560} align="center" y={918} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 11 · LE CONTRÔLE DE PERTINENCE ---------- */
{ dur:45, hue:'green', node:(<React.Fragment>
  <ActTag act="Le module clé" title="Contrôle de pertinence" color={C.green}/>
  <Statement x={120} y={150} size={50} weight={700}
    lines={['Du contrôle ex-post sur papier','au contrôle natif, en temps réel.']} accentIdx={[1]} accentColor={C.green}/>
  <div style={{position:'absolute',top:352,left:0,right:0,display:'flex',justifyContent:'center',gap:14}}>
    {['Horodatage','Signature électronique','Traçabilité vidéo','Analyse de pertinence'].map((c,i)=>(
      <Chip key={i} at={0.5+i*0.14} color={C.green}>{c}</Chip>
    ))}
  </div>
  <div style={{position:'absolute',top:470,left:0,right:0,display:'flex',justifyContent:'center',gap:22}}>
    {[['Fin de la sur-prescription','Chaque examen, chaque acte confronté aux référentiels avant d’entrer dans la dépense. La prescription opportuniste devient visible.',C.teal],
      ['Lutte structurée contre la fraude','L’acte fantôme et le sur-codage n’ont plus d’angle mort — l’acte est nativement prouvable.',C.blue],
      ['Ratio sinistres / primes','Détection précoce, parcours coordonné, donnée clinique structurée pour piloter cohortes et tarification.',C.gold]].map((p,i)=>(
      <DimCard key={i} p={p} i={i}/>
    ))}
  </div>
  <Narration lines={[
    'Et voici le module clé pour la MUA.',
    'Aujourd’hui, on vérifie un document reconstruit après coup —',
    'personne n’a observé l’acte. Tibok renverse ce modèle :',
    'chaque ordonnance, chaque examen transite par la plateforme,',
    'nativement prouvable — horodatage, signature électronique,',
    'traçabilité vidéo, analyse de pertinence. La MUA passe du contrôle',
    'ex-post sur papier au contrôle natif, en temps réel. Trois leviers :',
    'fin de la sur-prescription, lutte structurée contre la fraude,',
    'maîtrise du ratio sinistres sur primes.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#DDF2E8" dim="rgba(200,230,216,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 12 · LA PREUVE : SWAN ---------- */
{ dur:30, hue:'green', node:(<React.Fragment>
  <ActTag act="La preuve" title="Le principe est validé" color={C.green}/>
  <Statement x={120} y={150} size={54} weight={700}
    lines={['Ce modèle n’est pas une promesse.','Il est déjà engagé.']} accentIdx={[1]} accentColor={C.green}/>
  <Swan h={70} x={1360} y={150} at={0.5}/>
  <div style={{position:'absolute',top:380,left:0,right:0,display:'flex',justifyContent:'center'}}>
    <Panel at={0.5} style={{maxWidth:1360}}>
      <div style={{fontFamily:FD,fontWeight:600,fontSize:29,color:'#fff',lineHeight:1.4,textAlign:'center'}}>
        Avec Swan, la signature est en cours — le premier grand assureur à s’<span style={{color:C.green,fontWeight:800}}>engager</span> sur le remboursement des consultations et prescriptions faites sur TIBOK.</div>
    </Panel>
  </div>
  <div style={{position:'absolute',top:588,left:0,right:0,display:'flex',flexDirection:'column',alignItems:'center',gap:22}}>
    <div style={{fontFamily:FD,fontWeight:700,fontSize:30,color:'#fff',opacity:1}}>
      La place de <span style={{color:C.gold}}>partenaire de référence</span> est encore ouverte.</div>
    <div style={{display:'flex',alignItems:'center',gap:18}}>
      <span style={{fontFamily:FD,fontWeight:600,fontSize:22,color:C.dim}}>C’est cette place que je propose à la</span>
      <MUAmark h={30}/>
    </div>
  </div>
  <Narration lines={[
    'Ce modèle n’est pas une promesse. Avec Swan, la signature est en cours :',
    'le premier grand assureur à s’engager sur le remboursement',
    'des consultations et des prescriptions faites sur Tibok.',
    'Le principe est validé sur le marché mauricien.',
    'La place de partenaire de référence, elle, est encore ouverte.',
    'C’est cette place que je propose à la MUA.']}
    x={960} width={1500} align="center" y={912} size={31} italic={true}
    accent="#DDF2E8" dim="rgba(200,230,216,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 13 · L'OFFRE : PARTENARIAT DE PLATEFORME ---------- */
{ dur:50, hue:'gold', node:(<React.Fragment>
  <ActTag act="L'offre" title="Un partenariat de plateforme" color={C.gold}/>
  <Statement x={120} y={144} size={46} weight={700}
    lines={['Pas un produit de plus à gérer.','Une couche d’intelligence sur tout votre portefeuille.']} accentIdx={[1]} accentColor={C.gold}/>
  <OfferCards/>
  <Narration lines={[
    'Pas un produit de plus à gérer — une couche d’intelligence',
    'à embarquer sur l’ensemble de votre portefeuille.',
    'L’accès à la plateforme est offert à la MUA — en marque conjointe,',
    'MUA Medical Intelligence, powered by Tibok. Pas d’abonnement.',
    'Vos assurés paient uniquement la consultation : cinq cents roupies,',
    'au lieu de huit cents. Tout le reste leur est offert — le second avis,',
    'le suivi des maladies chroniques, SilentCheck.',
    'Un seul module se paie : le contrôle de pertinence,',
    'cinquante roupies par mois et par vie couverte. Ou, mieux :',
    'le gagnant-gagnant — pas d’abonnement, un partage des économies',
    'générées, documentées et auditables. Vous ne payez que sur les coûts évités.']}
    x={960} width={1560} align="center" y={935} size={28} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 14 · VISION RÉGIONALE ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Vision régionale" title="Maurice, puis l'Afrique"/>
  <AfricaArc/>
  <div style={{position:'absolute',top:588,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:700,fontSize:52,letterSpacing:'-0.025em',color:'#fff'}}>La MUA est déjà là où TIBOK veut aller.</div>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:28,color:C.blue,marginTop:12}}>Votre réseau régional · notre infrastructure de santé souveraine</div>
  </div>
  <Narration lines={[
    'Maurice est la preuve de concept. Ça marche ici — donc ça marche',
    'partout où le problème est le même : pas assez de médecins.',
    'Et la MUA est déjà là où Tibok veut aller : en Afrique de l’Est.',
    'Votre réseau régional, notre infrastructure de santé souveraine.',
    'Ensemble, le standard mauricien peut devenir le standard',
    'du continent et de son océan.']}
    x={960} width={1560} align="center" y={912} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

/* ---------- 15 · CLÔTURE ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <FinalScene/>
  <Narration lines={[
    'Le marché mauricien de l’assurance santé est à un tournant.',
    'Les assurés attendent des services modernes. Les régulateurs',
    'attendent de la transparence. Les coûts de santé augmentent.',
    'Votre métier : protéger ce qui compte le plus — la santé de vos assurés.',
    'Ce qui rend cette protection durable, c’est l’intelligence —',
    'la prévention, le contrôle natif, la donnée clinique.',
    'C’est ce que Tibok apporte à la MUA.',
    'Bâtissons ensemble le standard de demain — pour Maurice,',
    'pour l’Afrique et pour l’océan Indien.',
    'Docteur Stéphane Bach · Digital Data Solutions · tibok.mu']}
    x={960} width={1560} align="center" y={905} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.4} tail={1.6}/>
</React.Fragment>)},

];

/* ============================ COMPOSANTS ============================ */

function TibokHub(){
  const {localTime}=useScene();
  const nodes=[['Consultation',C.blue],['Ordonnance',C.teal],['Pharmacie',C.gold],['Analyses',C.teal],['Suivi chronique',C.gold],['Second avis',C.blue],['Prévention',C.green],['Contrôle',C.coral]];
  const cx=960, cy=584, rx=620, ry=176;
  const pts=nodes.map((n,i)=>{const ang=(-90 + i*(360/nodes.length))*Math.PI/180;return {n:n[0],c:n[1],x:cx+Math.cos(ang)*rx,y:cy+Math.sin(ang)*ry};});
  const pulse=0.5+0.5*Math.sin(localTime*1.6);
  return (
    <div style={{position:'absolute',inset:0}}>
      <FlowSvg>
        {pts.map((pt,i)=>(<FlowLink key={i} x1={cx} y1={cy} x2={pt.x} y2={pt.y} color={pt.c} at={0.6+i*0.1}/>))}
      </FlowSvg>
      <div style={{position:'absolute',left:cx,top:cy,transform:'translate(-50%,-50%)',width:250,height:250,borderRadius:'50%',
        background:`radial-gradient(circle, ${C.blue}3a, ${C.blue}08)`,border:`2px solid ${C.blue}88`,
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:9,
        opacity:ev(localTime,0.2,0.6),boxShadow:`0 0 ${70+34*pulse}px ${C.blue}55, inset 0 0 40px ${C.blue}22`}}>
        <Logo name="tibok" w={150} intro={false} style={{position:'static'}}/>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:15,color:'#fff'}}>Medical Intelligence</div>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:15,color:C.teal}}>60 000 références</div>
      </div>
      {pts.map((pt,i)=>(<NodeChip key={i} label={pt.n} icon="◆" x={pt.x} y={pt.y} color={pt.c} at={0.9+i*0.11}/>))}
    </div>
  );
}

/* ===== chronologie légale de la téléconsultation ===== */
function LegalTimeline(){
  const {localTime}=useScene();
  const ph=[['1997','OMS','Acte médical à part entière',C.blue],
    ['2018','France','Remboursée par l’Assurance Maladie',C.blue],
    ['Medicare Act','États-Unis','Généralisée aux cinquante États',C.blue],
    ['Droit commun','UK · DE · AU · CA · CH','Intégrée au droit national',C.teal],
    ['1999','Maurice — Medical Council Act','Aucune condition de présence physique',C.gold]];
  const W=316,gap=24,total=ph.length*W+(ph.length-1)*gap,sx=(1920-total)/2,lineY=452;
  const lineP=ev(localTime,0.3,1.4,Easing.easeOutCubic);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:sx+10,top:lineY,height:3,width:(total-20)*lineP,background:'rgba(255,255,255,0.25)'}}/>
      {ph.map((p,i)=>{
        const op=ev(localTime,0.5+i*0.3,0.6,Easing.easeOutCubic);
        const x=sx+i*(W+gap);
        const last=i==ph.length-1;
        return (
          <div key={i} style={{position:'absolute',left:x,top:lineY-9,width:W,opacity:op,transform:`translateY(${(1-op)*16}px)`}}>
            <div style={{width:18,height:18,borderRadius:9,background:p[3],boxShadow:`0 0 18px ${p[3]}`,marginBottom:24}}/>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:25,color:'#fff'}}>{p[0]}</div>
            <div style={{fontFamily:FD,fontWeight:600,fontSize:20,color:p[3],marginTop:8,lineHeight:1.25}}>{p[1]}</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:17,color:C.dim,marginTop:7,lineHeight:1.35}}>{p[2]}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ===== grille des 10 outils de l'écosystème ===== */
function ToolsGrid(){
  const {localTime}=useScene();
  const I={
    video:<React.Fragment><rect x="2.5" y="6" width="13" height="12" rx="2.5"/><path d="M15.5 10.5l5-2.5v8l-5-2.5z"/></React.Fragment>,
    rx:<React.Fragment><rect x="5" y="4.5" width="14" height="16.5" rx="2.2"/><path d="M9 4.5V3.2h6v1.3M8.6 12l2 2 4-4"/></React.Fragment>,
    pill:<React.Fragment><path d="M10.6 3.7l9.7 9.7a4.8 4.8 0 0 1-6.8 6.8L3.8 10.5a4.8 4.8 0 0 1 6.8-6.8z"/><path d="M7.2 7.1l9.7 9.7"/></React.Fragment>,
    lab:<React.Fragment><path d="M9.5 3.5h5M10.5 3.5v5.5l-4.6 8.2a2 2 0 0 0 1.7 3h8.8a2 2 0 0 0 1.7-3l-4.6-8.2V3.5"/><path d="M8 15h8"/></React.Fragment>,
    heart:<React.Fragment><path d="M20.6 8.6a4.8 4.8 0 0 0-8.6-2 4.8 4.8 0 0 0-8.6 2c0 3.9 4.4 7.3 8.6 10.1 4.2-2.8 8.6-6.2 8.6-10.1z"/><path d="M4.5 11.5h3l1.2-2.2 1.8 4 1.2-1.8h2"/></React.Fragment>,
    family:<React.Fragment><circle cx="8.5" cy="7.5" r="2.6"/><circle cx="16" cy="8.6" r="2.1"/><path d="M3.8 19.5a4.8 4.8 0 0 1 9.4 0M12.8 19.5a3.9 3.9 0 0 1 6.6-2.4"/></React.Fragment>,
    shield:<React.Fragment><path d="M12 3.2l7 3v5.3c0 4.8-3 6.8-7 8.8-4-2-7-4-7-8.8V6.2z"/><path d="M9 12l2 2 4-4"/></React.Fragment>,
    second:<React.Fragment><circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L20 20M8 10h4M10 8v4"/></React.Fragment>,
    control:<React.Fragment><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M7.5 12l3 3 6-6"/></React.Fragment>,
    brain:<React.Fragment><circle cx="12" cy="12" r="3.2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></React.Fragment>,
  };
  const mods=[
    ['Téléconsultation','Vidéo, sans rendez-vous',C.blue,'video'],
    ['Ordonnance numérique','Signée, transmise à la pharmacie',C.teal,'rx'],
    ['Réseau pharmacies','Livraison jusqu’à Rodrigues',C.gold,'pill'],
    ['Analyses & imagerie','Biologie et radiologie intégrées',C.teal,'lab'],
    ['Suivi chronique','Tension · diabète · poids, par WhatsApp',C.gold,'heart'],
    ['Gestion famille','Tous les proches, un seul compte',C.blue,'family'],
    ['SilentCheck','Prévention & détection précoce',C.gold,'shield'],
    ['Second avis','Dossier revu par IA + médecin',C.blue,'second'],
    ['Contrôle de pertinence','Chaque acte vérifié avant la dépense',C.green,'control'],
    ['Medical Intelligence','Au cœur — sur chaque consultation, ordonnance, examen',C.coral,'brain'],
  ];
  const gap=18, W=402;
  return (
    <div style={{position:'absolute',top:196,left:120,right:120,display:'flex',flexWrap:'wrap',gap:gap,justifyContent:'center'}}>
      {mods.map((m,i)=>{
        const pulse=0.5+0.5*Math.sin(localTime*1.5+i*0.9);
        return (
        <Card3D key={i} w={W} at={0.3+i*0.07} i={i} accent={m[2]} accentSide="left" radius={16} pad="17px 20px"
          style={{display:'flex',gap:16,alignItems:'flex-start'}}>
          <div style={{width:50,height:50,flex:'none',borderRadius:14,background:`${m[2]}22`,border:`1px solid ${m[2]}66`,
            display:'grid',placeItems:'center',color:m[2],boxShadow:`0 0 ${9+8*pulse}px ${m[2]}55`}}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{I[m[3]]}</svg>
          </div>
          <div style={{minWidth:0}}>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:22,color:'#fff',lineHeight:1.05}}>{m[0]}</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:15,color:C.dim,marginTop:6,lineHeight:1.32}}>{m[1]}</div>
          </div>
        </Card3D>
      );})}
    </div>
  );
}

/* ===== LLM + RAG : le cœur scientifique ===== */
function IntelCore(){
  const {localTime}=useScene();
  const cx=960, cy=520;
  const pulse=0.5+0.5*Math.sin(localTime*1.6);
  const llms=[['Claude',392],['GPT',462],['Gemini',532],['Mistral',602]];
  const socs=['OMS','ESC — cardiologie','American Heart Association','NICE','INSERM','HAS','FDA'];
  return (
    <div style={{position:'absolute',inset:0}}>
      <FlowSvg>
        {llms.map((l,i)=>(<FlowLink key={i} x1={430} y1={l[1]} x2={cx-130} y2={cy} color={C.teal} at={0.5+i*0.12}/>))}
        <FlowLink x1={cx+130} y1={cy} x2={1500} y2={cy} color={C.blue} at={1.1}/>
      </FlowSvg>
      <div style={{position:'absolute',left:250,top:352,fontFamily:FD,fontWeight:700,fontSize:16,letterSpacing:'0.14em',textTransform:'uppercase',color:C.teal,opacity:ev(localTime,0.4,0.6)}}>Les meilleurs LLM</div>
      {llms.map((l,i)=>(<NodeChip key={i} label={l[0]} icon="◆" x={330} y={l[1]} color={C.teal} at={0.5+i*0.12}/>))}
      <div style={{position:'absolute',left:cx,top:cy,transform:'translate(-50%,-50%)',width:260,height:260,borderRadius:'50%',
        background:`radial-gradient(circle, ${C.teal}3a, ${C.teal}08)`,border:`2px solid ${C.teal}88`,
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8,
        opacity:ev(localTime,0.3,0.6),boxShadow:`0 0 ${70+34*pulse}px ${C.teal}55, inset 0 0 40px ${C.teal}22`}}>
        <Logo name="tibok" w={140} intro={false} style={{position:'static'}}/>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:16,color:'#fff'}}>Medical Intelligence</div>
        <div style={{fontFamily:FD,fontWeight:600,fontSize:14,color:C.teal}}>LLM + RAG</div>
      </div>
      <div style={{position:'absolute',left:1500,top:cy,transform:'translate(0,-50%)',opacity:ev(localTime,1.3,0.6)}}>
        <div style={{background:'rgba(16,30,56,0.85)',border:`1px solid ${C.blue}66`,borderRadius:18,padding:'22px 30px',boxShadow:`0 12px 34px rgba(0,0,0,0.4), 0 0 26px ${C.blue}33`}}>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:42,color:C.blue,lineHeight:1}}>60 000</div>
          <div style={{fontFamily:FD,fontWeight:600,fontSize:18,color:'#fff',marginTop:8}}>références scientifiques</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:15,color:C.dim,marginTop:4}}>RAG — Retrieval-Augmented Generation</div>
        </div>
      </div>
      <div style={{position:'absolute',top:712,left:0,right:0,display:'flex',justifyContent:'center',gap:12,flexWrap:'wrap',maxWidth:1500,margin:'0 auto'}}>
        {socs.map((s,i)=>(<Chip key={i} at={1.4+i*0.1} color={C.blue}>{s}</Chip>))}
      </div>
    </div>
  );
}

/* ===== SilentCheck : la science en chiffres ===== */
function SilentCheckViz(){
  const {localTime}=useScene();
  const bars=[['des maladies cardiaques se développent sans symptôme pendant 10 ans',80,C.coral],
    ['des complications sont évitables avec une détection précoce',85,C.green]];
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',top:380,left:0,right:0,display:'flex',justifyContent:'center',gap:70}}>
        <Stat to={4} suffix=" M" size={72} color={C.gold} label="patients · 52 pays" align="center" at={0.5}/>
        <Stat to={53} size={72} color={C.blue} label="références — NEJM · Lancet · JACC" align="center" at={0.7}/>
        <Stat to={69612} size={72} color={C.teal} label="cohorte de validation" align="center" at={0.9}/>
        <Stat to={11} size={72} color={C.green} label="profils ethniques" align="center" at={1.1}/>
        <Stat to={15} size={72} color={C.coral} label="biomarqueurs" align="center" at={1.3}/>
      </div>
      <div style={{position:'absolute',top:614,left:330,right:330,display:'flex',flexDirection:'column',gap:24}}>
        {bars.map((b,i)=>{const p=ev(localTime,1.5+i*0.3,1.0,Easing.easeOutCubic);return(
          <div key={i} style={{display:'flex',alignItems:'center',gap:24,opacity:ev(localTime,1.4+i*0.3,0.5)}}>
            <div style={{width:120,fontFamily:FD,fontWeight:800,fontSize:44,color:b[2],textAlign:'right',fontVariantNumeric:'tabular-nums'}}>{Math.round(b[1]*p)}%</div>
            <div style={{flex:1}}>
              <div style={{height:22,background:'rgba(255,255,255,0.06)',borderRadius:11,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${b[1]*p}%`,background:b[2],borderRadius:11,boxShadow:`0 0 24px ${b[2]}55`}}/>
              </div>
              <div style={{fontFamily:FD,fontWeight:500,fontSize:18,color:C.dim,marginTop:8}}>{b[0]}</div>
            </div>
          </div>
        );})}
      </div>
    </div>
  );
}

/* ===== flux du second avis médical ===== */
function SecondOpinionFlow(){
  const {localTime}=useScene();
  const y=520;
  const steps=[['Dossier complet','◆',300,C.blue],['LLM — analyse globale','◆',780,C.teal],['RAG — 60 000 références','◆',1230,C.blue],['Médecin TIBOK — validation','◆',1650,C.green]];
  const docs=['Anamnèse','Ordonnance','Imagerie','Biologie','Antécédents'];
  return (
    <div style={{position:'absolute',inset:0}}>
      <FlowSvg>
        {steps.slice(0,-1).map((s,i)=>(<FlowLink key={i} x1={s[2]} y1={y} x2={steps[i+1][2]} y2={y} color={steps[i+1][3]} at={0.6+i*0.3}/>))}
      </FlowSvg>
      {steps.map((s,i)=>(<NodeChip key={i} label={s[0]} icon={s[1]} x={s[2]} y={y} color={s[3]} at={0.5+i*0.3}/>))}
      <div style={{position:'absolute',top:600,left:0,right:0,display:'flex',justifyContent:'center',gap:12}}>
        {docs.map((d,i)=>(<Chip key={i} at={1.5+i*0.1} color={C.blue} tick={false}>{d}</Chip>))}
      </div>
      <div style={{position:'absolute',top:702,left:0,right:0,textAlign:'center',fontFamily:FD,fontWeight:600,fontSize:24,color:C.teal,opacity:ev(localTime,2.0,0.7)}}>
        Une seconde lecture entièrement sourcée — avant le geste lourd, l’hospitalisation, l’orientation à l’étranger.</div>
    </div>
  );
}

/* ===== l'offre : trois cartes tarifaires + gainsharing ===== */
function OfferCards(){
  const {localTime}=useScene();
  return (
    <div style={{position:'absolute',top:330,left:0,right:0}}>
      <div style={{display:'flex',justifyContent:'center',gap:24,alignItems:'stretch'}}>
        <Card3D w={440} at={0.4} i={0} accent={C.blue} accentSide="top" minHeight={300} pad="30px 32px">
          <div style={{fontFamily:FD,fontWeight:700,fontSize:15,letterSpacing:'0.14em',textTransform:'uppercase',color:C.blue}}>Accès plateforme · MUA</div>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:64,color:'#fff',marginTop:16,lineHeight:1}}>Offert</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:C.dim,marginTop:8}}>pas d’abonnement, pas de surcoût</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:17,color:C.dim,marginTop:14,lineHeight:1.45}}>En marque conjointe — <span style={{color:'#fff',fontWeight:600}}>MUA Medical Intelligence</span>, powered by TIBOK — sur tout le portefeuille.</div>
        </Card3D>
        <Card3D w={470} at={0.6} i={1} accent={C.green} accentSide="top" minHeight={300} pad="30px 32px">
          <div style={{fontFamily:FD,fontWeight:700,fontSize:15,letterSpacing:'0.14em',textTransform:'uppercase',color:C.green}}>Assurés MUA</div>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:64,color:'#fff',marginTop:16,lineHeight:1}}>Rs 500 <span style={{fontSize:26,fontWeight:600,color:C.dim,textDecoration:'line-through'}}>800</span></div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:C.dim,marginTop:8}}>la consultation — seul paiement</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:17,color:C.txt,marginTop:14,lineHeight:1.6}}>✓ Second avis médical offert<br/>✓ Suivi des maladies chroniques offert<br/>✓ SilentCheck offert</div>
        </Card3D>
        <Card3D w={520} at={0.8} i={2} accent={C.gold} accentSide="top" minHeight={300} pad="30px 32px"
          style={{background:'rgba(224,169,59,0.08)',border:'1px solid rgba(224,169,59,0.35)'}}>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:15,letterSpacing:'0.14em',textTransform:'uppercase',color:C.gold}}>Seul module payant · Contrôle de pertinence</div>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:56,color:C.gold,marginTop:14,lineHeight:1}}>Rs 50</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:'#fff',marginTop:6}}>par mois · par vie couverte</div>
          <div style={{fontFamily:FD,fontWeight:600,fontSize:18,color:C.teal,marginTop:14,lineHeight:1.4}}>ou l’option gagnant-gagnant :</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:17,color:C.dim,marginTop:6,lineHeight:1.45}}>pas d’abonnement — une part des <span style={{color:'#fff',fontWeight:600}}>économies générées</span>, documentées et auditables.</div>
        </Card3D>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:26}}>
        <Panel at={1.3} style={{maxWidth:1420}}>
          <div style={{fontFamily:FD,fontWeight:600,fontSize:24,color:'#fff',lineHeight:1.45,textAlign:'center'}}>
            <span style={{color:C.gold,fontWeight:800}}>Gagnant-gagnant</span> — la véracité native rend l’économie mesurable : vous ne payez que sur les <span style={{color:C.teal,fontWeight:700}}>coûts évités</span>. <span style={{color:C.dim,fontWeight:400,fontSize:19}}>(part et seuils à fixer ensemble)</span></div>
        </Panel>
      </div>
    </div>
  );
}

function MiniPanel({p,i,color}){
  return (
    <Card3D w={430} at={0.4+i*0.18} i={i} minHeight={180} pad="26px 28px" radius={16}>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:28,color:color||'#fff'}}>{p[0]}</div>
      <div style={{fontFamily:FD,fontWeight:400,fontSize:21,color:C.dim,marginTop:14,lineHeight:1.4}}>{p[1]}</div>
    </Card3D>
  );
}

function DimCard({p,i}){
  return (
    <Card3D w={470} at={0.4+i*0.2} i={i} accent={p[2]} minHeight={236} pad="30px 32px">
      <div style={{fontFamily:FD,fontWeight:800,fontSize:29,color:p[2]}}>{p[0]}</div>
      <div style={{fontFamily:FD,fontWeight:400,fontSize:22,color:C.dim,marginTop:16,lineHeight:1.42}}>{p[1]}</div>
    </Card3D>
  );
}

/* ===== constellation Afrique de l'Est / océan Indien ===== */
function AfricaArc(){
  const {localTime}=useScene();
  // gold = réseau MUA en Afrique de l'Est · blue = TIBOK aujourd'hui · teal = expansion naturelle
  const nodes=[['Maurice',0,C.blue],['Rodrigues',0.8,C.blue],['Madagascar',1.6,C.teal],['Mozambique',2.0,C.teal],['Tanzanie',2.6,C.gold],['Kenya',3.0,C.gold],['Ouganda',3.4,C.gold],['Rwanda',3.8,C.gold]];
  const cx=960, cy=400, rx=760, ry=200;
  return (
    <div style={{position:'absolute',inset:0}}>
      {nodes.map((n,i)=>{
        const ang=Math.PI*(1.12 - (i/(nodes.length-1))*1.24);
        const x=cx+Math.cos(ang)*rx, y=cy-Math.sin(ang)*ry*0.9 + (i%2?28:-28);
        const p=ev(localTime,n[1]+0.4,0.6,Easing.easeOutBack);
        const lit=n[2];
        return (
          <div key={i} style={{position:'absolute',left:x,top:y,transform:'translate(-50%,-50%)',opacity:p,scale:`${0.6+0.4*p}`}}>
            <div style={{width:18,height:18,borderRadius:9,background:lit,boxShadow:`0 0 ${18*p}px ${lit}, 0 0 ${40*p}px ${lit}66`,margin:'0 auto'}}/>
            <div style={{fontFamily:FD,fontWeight:600,fontSize:18,color:'#fff',marginTop:10,textAlign:'center',whiteSpace:'nowrap'}}>{n[0]}</div>
          </div>
        );
      })}
      <div style={{position:'absolute',top:492,left:0,right:0,display:'flex',justifyContent:'center',gap:28,opacity:ev(localTime,3.4,0.7)}}>
        {[['TIBOK aujourd’hui',C.blue],['Réseau MUA — Afrique de l’Est',C.gold],['Expansion naturelle',C.teal]].map((l,i)=>(
          <span key={i} style={{display:'inline-flex',alignItems:'center',gap:10,fontFamily:FD,fontWeight:600,fontSize:18,color:C.dim}}>
            <i style={{width:12,height:12,borderRadius:6,background:l[1],boxShadow:`0 0 12px ${l[1]}`}}/>{l[0]}</span>
        ))}
      </div>
    </div>
  );
}

/* ===== clôture DDS × MUA ===== */
function FinalScene(){
  const {localTime}=useScene();
  const w=ev(localTime,0.3,0.8,Easing.easeOutExpo);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:120,top:300}}>
        <div style={{display:'flex',alignItems:'center',gap:22,opacity:ev(localTime,0.2,0.7),transform:`translateY(${(1-ev(localTime,0.2,0.7))*20}px)`}}>
          <img src="assets/logos/dds.png" alt="Digital Data Solutions" style={{height:60}}/>
          <span style={{fontFamily:FD,fontWeight:300,fontSize:52,color:'rgba(206,219,240,0.55)'}}>×</span>
          <MUAmark h={48}/>
        </div>
        <div style={{width:260*w,height:8,borderRadius:3,background:`linear-gradient(90deg,${C.blue},${C.teal})`,margin:'30px 0'}}/>
        <div style={{fontFamily:FD,fontWeight:500,fontSize:34,color:'#D6E0F0',lineHeight:1.28,opacity:ev(localTime,0.7,0.7),maxWidth:'22ch'}}>
          Bâtissons ensemble<br/>le standard de demain —<br/>pour Maurice, l’Afrique<br/>et l’océan Indien.</div>
      </div>
      <div style={{position:'absolute',right:120,top:300,width:680,opacity:ev(localTime,1.0,0.7),transform:`translateY(${(1-ev(localTime,1.0,0.7))*18}px)`}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'flex-start'}}>
          {['Swan — signature en cours','60 000 références scientifiques','Équipe 100% mauricienne'].map((c,i)=>(
            <span key={i} style={{padding:'11px 20px',border:'1px solid rgba(255,255,255,0.16)',background:'rgba(255,255,255,0.05)',borderRadius:999,fontFamily:FD,fontWeight:500,fontSize:20,color:C.txt,display:'inline-flex',alignItems:'center',gap:10}}>
              <span style={{width:20,height:20,borderRadius:10,background:C.green,color:C.navy,display:'grid',placeItems:'center',fontSize:12,fontWeight:800}}>✓</span>{c}</span>
          ))}
        </div>
        <div style={{marginTop:34,paddingTop:26,borderTop:'1px solid rgba(255,255,255,0.14)'}}>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color:'#fff'}}>Dr Stéphane Bach</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:20,color:C.dim,marginTop:4}}>Fondateur & CEO, Digital Data Solutions Ltd</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:C.blue,marginTop:4}}>sbach@tibok.mu · tibok.mu</div>
        </div>
        <div style={{marginTop:24,fontFamily:FD,fontWeight:400,fontSize:19,color:'#D6E0F0',lineHeight:1.6}}>
          Mégane · Stephano · Adi · Rain · Baydon · Suzelle · Summer</div>
      </div>
    </div>
  );
}

window.SCENES_B = SCENES_B;
window.TibokHub=TibokHub; window.LegalTimeline=LegalTimeline; window.ToolsGrid=ToolsGrid; window.IntelCore=IntelCore;
window.SilentCheckViz=SilentCheckViz; window.SecondOpinionFlow=SecondOpinionFlow; window.OfferCards=OfferCards;
window.DimCard=DimCard; window.MiniPanel=MiniPanel; window.AfricaArc=AfricaArc; window.FinalScene=FinalScene;
})();
