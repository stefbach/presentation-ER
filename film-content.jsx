/* film-content.jsx — Film DDS × MUA (partie 1 : ouverture, fondateur,
   DDS producteur de logiciels IA, l'enjeu santé pour l'assureur).
   Loads after film-lib.jsx. Exposes window.SCENES_A. */

(function(){
const { Scene, FX, ActTag, Narration, Statement, Photo, Stat, Chip, Bar, Panel, Card3D, Logo, MUAmark,
        PhotoTile, FlowSvg, FlowLink, NodeChip, Phone,
        C, FD, FS, Easing, ev, fr, clamp, useScene } = window;

const IMG = (n)=>`assets/team/${n}.jpg`;

/* ===== timeline du fondateur ===== */
function TimelineViz(){
  const {localTime}=useScene();
  const ph=[['1993 — 2003','Médecin hospitalier (France)','Le système public, de l’intérieur'],
    ['2003 — 2008','Fondateur de clinique','Gestion opérationnelle & financière'],
    ['2008 — 2019','Économiste de la santé','Classement Le Figaro · 30+ publications · 2 exits'],
    ['2019 — 2026','Maurice','Fondateur DDS · IA dès l’arrivée des LLM · GPT-3, 2020']];
  const W=380,gap=34,total=ph.length*W+(ph.length-1)*gap,sx=(1920-total)/2,lineY=336;
  const lineP=ev(localTime,0.3,1.4,Easing.easeOutCubic);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:sx+10,top:lineY,height:3,width:(total-20)*lineP,background:'rgba(255,255,255,0.25)'}}/>
      {ph.map((p,i)=>{
        const op=ev(localTime,0.5+i*0.5,0.6,Easing.easeOutCubic);
        const x=sx+i*(W+gap);
        const last=i==ph.length-1;
        return (
          <div key={i} style={{position:'absolute',left:x,top:lineY-9,width:W,opacity:op,transform:`translateY(${(1-op)*16}px)`}}>
            <div style={{width:18,height:18,borderRadius:9,background:last?C.gold:C.blue,boxShadow:`0 0 18px ${last?C.gold:C.blue}`,marginBottom:30}}/>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color:'#fff'}}>{p[0]}</div>
            <div style={{fontFamily:FD,fontWeight:600,fontSize:21,color:last?C.gold:C.blue,marginTop:10}}>{p[1]}</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:19,color:C.dim,marginTop:8,lineHeight:1.35}}>{p[2]}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ===== 4 piliers de l'approche DDS ===== */
function Pillars(){
  const {localTime}=useScene();
  const cols=[
    ['SaaS IA','Des logiciels en production, pas des démos. En usage réel, au quotidien.',C.blue],
    ['Agents IA','Des agents autonomes qui exécutent le travail — voix, admin, décisions.',C.teal],
    ['Expertise métier','Un savoir-faire réel sur chaque produit : santé, compta, RH, relation client.',C.gold],
    ['Maîtrise des LLM','Tous les modèles maîtrisés, le bon modèle au bon endroit, à moindre coût.',C.green]];
  const W=402,gap=20;
  return (
    <div style={{position:'absolute',top:400,left:120,right:120,display:'flex',gap:gap,justifyContent:'center'}}>
      {cols.map((c,i)=>{
        const pulse=0.5+0.5*Math.sin(localTime*1.5+i*0.9);
        return (
        <Card3D key={i} w={W} at={0.4+i*0.16} i={i} accent={c[2]} accentSide="top" minHeight={250} pad="28px 28px">
          <div style={{width:52,height:52,borderRadius:14,background:`${c[2]}22`,border:`1px solid ${c[2]}66`,
            display:'grid',placeItems:'center',color:c[2],fontFamily:FD,fontWeight:800,fontSize:24,boxShadow:`0 0 ${9+8*pulse}px ${c[2]}55`}}>{i+1}</div>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:27,color:'#fff',marginTop:20,lineHeight:1.05}}>{c[0]}</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:19,color:C.dim,marginTop:12,lineHeight:1.4}}>{c[1]}</div>
        </Card3D>
      );})}
      <div style={{position:'absolute',top:302,left:0,right:0,textAlign:'center',fontFamily:FD,fontWeight:600,fontSize:22,letterSpacing:'0.02em',color:C.blue,opacity:ev(localTime,1.6,0.6)}}>
        Sept Mauriciens formés en 12 mois · la force de 70 avec leurs agents IA · <span style={{color:'#fff',fontWeight:700}}>0 talent importé</span></div>
    </div>
  );
}

/* ===== l'enjeu : le fardeau du diabète, vu du payeur ===== */
function DiabetesStakes(){
  const {localTime}=useScene();
  const cards=[
    ['1 sur 5','adulte mauricien est diabétique',C.coral,null],
    ['1 sur 3','ne le sait pas encore',C.gold,null],
    [null,'décès causés par le diabète en 2024 — près d’un sur quatre',C.blue,2709]];
  return (
    <div style={{position:'absolute',top:392,left:0,right:0,display:'flex',justifyContent:'center',gap:26}}>
      {cards.map((c,i)=>(
        <Card3D key={i} w={480} at={0.4+i*0.22} i={i} accent={c[2]} accentSide="top" minHeight={240} pad="34px 34px">
          {c[0]
            ? <div style={{fontFamily:FD,fontWeight:800,fontSize:84,lineHeight:0.95,letterSpacing:'-0.03em',color:c[2]}}>{c[0]}</div>
            : <Stat to={c[3]} size={84} color={c[2]} at={0.8} dur={1.6}/>}
          <div style={{fontFamily:FD,fontWeight:500,fontSize:24,color:C.txt,marginTop:20,lineHeight:1.35}}>{c[1]}</div>
        </Card3D>
      ))}
      <div style={{position:'absolute',top:296,left:0,right:0,textAlign:'center',fontFamily:FD,fontWeight:600,fontSize:23,color:C.coral,opacity:ev(localTime,1.4,0.7)}}>
        Et la facture atterrit sur les contrats que la <span style={{color:'#fff',fontWeight:800}}>MUA</span> porte.</div>
    </div>
  );
}

/* ============================ LE SCÉNARIO ============================ */
const SCENES = [

/* ---------- 1 · OUVERTURE ---------- */
{ dur:15, hue:'blue', node:(<React.Fragment>
  <Photo src={IMG('bach')} x={1080} y={0} w={840} h={1080} radius={0} objPos="50% 22%" from={1.04} to={1.14} pany={-3} ring={false}/>
  <div style={{position:'absolute',top:0,left:0,bottom:0,width:1300,background:'linear-gradient(90deg, #0A1A33 38%, rgba(10,26,51,0.2) 70%, transparent 88%)'}}/>
  <img src="assets/logos/dds.png" alt="Digital Data Solutions" style={{position:'absolute',left:122,top:92,height:88}}/>
  <div style={{position:'absolute',left:126,top:210,display:'flex',alignItems:'center',gap:14}}>
    <span style={{fontFamily:FD,fontWeight:600,fontSize:13.5,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(206,219,240,0.5)'}}>Présenté à la</span>
    <MUAmark h={26}/>
  </div>
  <div style={{position:'absolute',left:124,top:306,width:900}}>
    <div style={{fontFamily:FD,fontWeight:800,fontSize:62,lineHeight:1.04,letterSpacing:'-0.03em',color:'#fff'}}>
      L&rsquo;intelligence artificielle<br/><span style={{color:C.blue}}>souveraine</span>, construite<br/>à Maurice.</div>
  </div>
  <div style={{position:'absolute',left:130,top:558,fontFamily:FD,fontWeight:500,fontSize:29,letterSpacing:'-0.01em',color:'#D6E0F0'}}>
    TIBOK — la Medical Intelligence au service de la MUA</div>
  <div style={{position:'absolute',left:130,top:636,display:'flex',alignItems:'center',gap:14,flexWrap:'wrap',maxWidth:860}}>
    {['Télémédecine','Medical Intelligence','Prévention','Contrôle de pertinence'].map((c,i)=>(
      <Chip key={i} at={0.4+i*0.14} color={C.blue}>{c}</Chip>
    ))}
  </div>
  <div style={{position:'absolute',left:130,bottom:54,display:'flex',alignItems:'center',gap:16}}>
    <span style={{fontFamily:FD,fontWeight:600,fontSize:14,letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(206,219,240,0.55)'}}>Incubé chez</span>
    <img src="assets/logos/laturbine.svg" alt="La Turbine" style={{height:50}}/>
    <div style={{width:1,height:42,background:'rgba(255,255,255,0.18)',margin:'0 6px'}}/>
    <span style={{fontFamily:FD,fontWeight:600,fontSize:14,letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(206,219,240,0.55)'}}>Soutenu par</span>
    <img src="assets/logos/mric.avif" alt="MRIC" style={{height:56}}/>
  </div>
</React.Fragment>)},

/* ---------- 2 · LE FONDATEUR, EN DEUX MOTS ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Le fondateur" title="Dr Stéphane Bach"/>
  <TimelineViz/>
  <Narration lines={[
    'Je m’appelle Stéphane Bach. Je suis médecin —',
    'spécialiste en santé publique. Trente ans à voir comment',
    'fonctionnent vraiment les systèmes de santé.',
    'J’ai dirigé des cliniques, publié des algorithmes',
    'avec Aix-Marseille, réalisé deux exits.',
    'En 2019, j’ai choisi Maurice — pour y rester.',
    'Ma femme est mauricienne, mes enfants grandiront ici.',
    'Ce projet n’est pas une stratégie de sortie :',
    'c’est une vision de long terme, pour Maurice,',
    'pour l’Afrique et pour l’océan Indien.']}
    x={960} width={1500} align="center" y={812} size={38} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.6} tail={1.4}/>
</React.Fragment>)},

/* ---------- 3 · DDS, PRODUCTEUR DE LOGICIELS IA ---------- */
{ dur:35, hue:'blue', node:(<React.Fragment>
  <ActTag act="DDS" title="Producteur de logiciels IA"/>
  <Statement x={120} y={150} size={54} weight={700}
    lines={['DDS n’est pas une agence IA.','C’est un producteur de logiciels IA.']} accentIdx={[1]} accentColor={C.blue}/>
  <div style={{position:'absolute',top:316,left:0,right:0,display:'flex',justifyContent:'center',alignItems:'center',gap:44}}>
    {[['tibok',150],['lexora',210],['axon',170]].map((l,i)=>(
      <div key={i} style={{height:56,display:'flex',alignItems:'center'}}>
        <Logo name={l[0]} w={l[1]} intro={true} at={0.5+i*0.18} style={{position:'static'}}/>
      </div>
    ))}
    <span style={{fontFamily:FD,fontWeight:600,fontSize:20,color:C.dim}}>3 produits IA en production</span>
  </div>
  <Pillars/>
  <Narration lines={[
    'Trois produits en production — TIBOK, Lexora, Axon —',
    'construits par une équipe de sept Mauriciens, formés en douze mois,',
    'qui, augmentés par leurs agents IA, ont la force de soixante-dix.',
    'Zéro talent importé. Et sur chaque produit, la même règle :',
    'création de valeur. Aujourd’hui, je viens présenter à la MUA',
    'le produit phare : TIBOK.']}
    x={960} width={1560} align="center" y={905} size={29} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

/* ---------- 4 · L'ENJEU POUR LA MUA ---------- */
{ dur:30, hue:'coral', node:(<React.Fragment>
  <ActTag act="L'enjeu" title="Soigner après, toujours après" color={C.coral}/>
  <Statement x={120} y={160} size={56} weight={700}
    lines={['Pendant que le corps se tait,','la médecine arrive trop tard.']} accentIdx={[1]} accentColor={C.coral}/>
  <DiabetesStakes/>
  <Narration lines={[
    'À Maurice, un adulte sur cinq est diabétique.',
    'Et près d’un sur trois… ne le sait pas encore.',
    'En 2024, le diabète a causé deux mille sept cent neuf décès —',
    'près d’un sur quatre. Pendant que le corps se tait,',
    'la médecine arrive trop tard — et la facture, elle,',
    'atterrit sur les contrats que la MUA porte.',
    'Soigner après. Toujours après.',
    'C’est le modèle que TIBOK vient renverser.']}
    x={960} width={1540} align="center" y={905} size={30} italic={true}
    accent="#F6DED7" dim="rgba(230,200,192,0.24)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

];

window.SCENES_A = SCENES;
window.TimelineViz=TimelineViz; window.Pillars=Pillars; window.DiabetesStakes=DiabetesStakes;
})();
