/* film-content2-en.jsx — DDS × EDB film, ENGLISH version (part 2: the TIBOK
   platform as proof of sovereign AI — legal framework, ecosystem, Medical
   Intelligence, SilentCheck, second opinion, relevance control, Swan proof,
   proposal to the EDB, vision, closing). Loaded by en.html INSTEAD of
   film-content2.jsx. Exposes window.SCENES_B. */

(function(){
const { Scene, FX, ActTag, Narration, Statement, Photo, Stat, Chip, Bar, Panel, Card3D, Logo, Swan, EDBmark,
        C, FD, FS, Easing, ev, fr, clamp, useScene,
        Phone, FlowSvg, FlowLink, NodeChip, PhotoTile } = window;

const PIMG = (n)=>`assets/people/${n}.jpg`;
const IMG = (n)=>`assets/team/${n}.jpg`;

const SCENES_B = [

/* ---------- 5 · TIBOK, THE PLATFORM ---------- */
{ dur:40, hue:'blue', node:(<React.Fragment>
  <ActTag act="TIBOK" title="A clinical OS for the whole health system"/>
  <Statement x={120} y={168} size={50} weight={700}
    lines={['Not a consultation app.','A layer of medical intelligence.']} accentIdx={[1]} accentColor={C.blue}/>
  <TibokHub/>
  <div style={{position:'absolute',top:342,left:0,right:0,display:'flex',justifyContent:'center',gap:14}}>
    {['20+ physicians — Medical Council of Mauritius','FR · EN · Kreol','7 days a week'].map((c,i)=>(
      <Chip key={i} at={0.6+i*0.16} color={C.teal}>{c}</Chip>
    ))}
  </div>
  <Narration lines={[
    'Tibok is the first Mauritian telemedicine platform for the general public.',
    'More than twenty physicians registered with the Medical Council',
    'of Mauritius see patients by video — in French, in English,',
    'or in Kreol — seven days a week. But Tibok is not',
    'a consultation app: it is a layer of medical intelligence,',
    'a clinical operating system for the whole health system.',
    'Where the system only sees the paper trail of an act',
    'that has already happened, Tibok produces the act itself —',
    'native, structured, time-stamped, verifiable.',
    'All of it designed and operated from Mauritius.']}
    x={960} width={1560} align="center" y={918} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 6 · THE LEGAL FRAMEWORK ---------- */
{ dur:45, hue:'gold', node:(<React.Fragment>
  <ActTag act="Legal framework" title="An established fact for 30 years" color={C.gold}/>
  <Statement x={120} y={158} size={54} weight={700}
    lines={['What is not forbidden','is permitted.']} accentIdx={[1]} accentColor={C.gold}/>
  <LegalTimeline/>
  <div style={{position:'absolute',top:700,left:0,right:0,display:'flex',justifyContent:'center'}}>
    <Panel at={1.6} style={{maxWidth:1400}}>
      <div style={{fontFamily:FD,fontWeight:600,fontSize:27,color:'#fff',lineHeight:1.45,textAlign:'center'}}>
        A <span style={{color:C.gold,fontWeight:800}}>legal, enforceable, adjudicable</span> medical act — a clear framework Mauritius can claim, raise into a standard, and export.</div>
    </Panel>
  </div>
  <Narration lines={[
    'Teleconsultation is not a legal debate.',
    'It has been an established fact for nearly thirty years.',
    'Since 1997, the WHO has defined it as a medical act in its own right.',
    'France has reimbursed it since 2018. The United States,',
    'the United Kingdom, Germany, Australia, Canada and Switzerland',
    'have written it into their law. And in Mauritius?',
    'The Medical Council Act of 1999 imposes no requirement',
    'of physical presence. What is not forbidden is permitted.',
    'A Tibok teleconsultation is a legal, enforceable, adjudicable',
    'medical act — a standard Mauritius can claim and export.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 7 · THE TIBOK ECOSYSTEM ---------- */
{ dur:45, hue:'blue', node:(<React.Fragment>
  <ActTag act="The ecosystem" title="Ten tools, one central intelligence"/>
  <ToolsGrid/>
  <div style={{position:'absolute',top:620,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:16,letterSpacing:'0.12em',textTransform:'uppercase',color:C.gold,marginBottom:14}}>AI agents that never sleep</div>
    <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap'}}>
      <Chip at={1.4} color={C.gold}>Chronic-follow-up agent — WhatsApp reminders, alerts</Chip>
      <Chip at={1.55} color={C.gold}>Prevention agent — cohorts × guidelines</Chip>
      <Chip at={1.7} color={C.gold}>Control agent — every prescription analysed</Chip>
    </div>
  </div>
  <Narration lines={[
    'Ten tools — orbiting one central intelligence.',
    'Video consultation with no appointment. The signed digital prescription.',
    'A pharmacy network that delivers as far as Rodrigues. Lab tests',
    'and imaging. Chronic-disease follow-up. Family management.',
    'SilentCheck for prevention. The second opinion. Relevance control.',
    'And around it all, AI agents that never sleep: chronic follow-up,',
    'prevention, control. For Mauritius, this is no gadget:',
    'it is a sovereign digital-health infrastructure —',
    'steered, traced, locked — built here.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 8 · MEDICAL INTELLIGENCE & RAG ---------- */
{ dur:40, hue:'teal', node:(<React.Fragment>
  <ActTag act="Medical Intelligence" title="LLM + RAG — the scientific foundation" color={C.teal}/>
  <Statement x={120} y={158} size={50} weight={700}
    lines={['AI does not replace the doctor.','It augments them.']} accentIdx={[1]} accentColor={C.teal}/>
  <IntelCore/>
  <Narration lines={[
    'At the heart of Tibok is our signature: Medical Intelligence.',
    'The best large language models — Claude, GPT, Gemini, Mistral —',
    'combined with a RAG system anchored to more than sixty thousand',
    "references from the world's leading medical societies: the WHO,",
    'the European Society of Cardiology, the American Heart Association,',
    'NICE, INSERM, HAS, the FDA. Every consultation, every prescription',
    'is locked to this foundation. AI does not replace the doctor.',
    'It augments them. It checks, it suggests, it alerts —',
    'and the doctor always keeps the final decision.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#D8F2F4" dim="rgba(200,230,236,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 9 · SILENTCHECK ---------- */
{ dur:50, hue:'gold', node:(<React.Fragment>
  <ActTag act="Active prevention" title="SilentCheck · BSD Score" color={C.gold}/>
  <Statement x={120} y={150} size={50} weight={700}
    lines={['Detect 5 to 10 years in advance','what symptoms keep silent.']} accentIdx={[1]} accentColor={C.gold}/>
  <SilentCheckViz/>
  <Narration lines={[
    'Our flagship innovation is called SilentCheck —',
    'cardiovascular risk stratification, based on the BSD Score.',
    'Four million patients followed across fifty-two countries.',
    'Fifty-three references published in the New England Journal',
    'of Medicine, The Lancet, JACC, Circulation. Fifteen biomarkers.',
    'SilentCheck detects, five to ten years in advance, the anomalies',
    'that symptoms do not yet reveal. A traditional health system',
    'looks in the rear-view mirror. SilentCheck looks ahead:',
    'it is the building block that moves Mauritius from medicine endured',
    'to active prevention.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 10 · THE MEDICAL SECOND OPINION ---------- */
{ dur:35, hue:'blue', node:(<React.Fragment>
  <ActTag act="Second opinion" title="A second reading, fully sourced"/>
  <Statement x={120} y={158} size={50} weight={700}
    lines={['Automated quality control,','before every costly act.']} accentIdx={[1]} accentColor={C.blue}/>
  <SecondOpinionFlow/>
  <Narration lines={[
    'For complex conditions: the Medical Second Opinion.',
    "The patient's complete file — history, prescriptions, imaging,",
    'biology, antecedents — is re-verified by our AI and RAG system,',
    'then validated by a Tibok physician. A second reading, fully sourced.',
    'For the patient: a file reviewed with no blind spots. For the system:',
    'automated quality control before every costly act — the major',
    'procedure, the hospitalisation, the overseas referral.',
    'Exactly where healthcare money is at stake.']}
    x={960} width={1560} align="center" y={918} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 11 · RELEVANCE CONTROL ---------- */
{ dur:45, hue:'green', node:(<React.Fragment>
  <ActTag act="The key module" title="Relevance control" color={C.green}/>
  <Statement x={120} y={150} size={50} weight={700}
    lines={['From ex-post control on paper','to native, real-time control.']} accentIdx={[1]} accentColor={C.green}/>
  <div style={{position:'absolute',top:352,left:0,right:0,display:'flex',justifyContent:'center',gap:14}}>
    {['Time-stamping','Electronic signature','Video traceability','Relevance analysis'].map((c,i)=>(
      <Chip key={i} at={0.5+i*0.14} color={C.green}>{c}</Chip>
    ))}
  </div>
  <div style={{position:'absolute',top:470,left:0,right:0,display:'flex',justifyContent:'center',gap:22}}>
    {[['An end to over-prescription','Every test, every act is confronted with the guidelines before it enters the expense. Opportunistic prescribing becomes visible.',C.teal],
      ['A structured fight against fraud','The phantom act and up-coding have no blind spot left — the act is natively provable.',C.blue],
      ['Command of healthcare costs','Early detection, coordinated care paths, structured clinical data — for insurers, employers, the State.',C.gold]].map((p,i)=>(
      <DimCard key={i} p={p} i={i}/>
    ))}
  </div>
  <Narration lines={[
    'And here is the module that changes the economics of healthcare.',
    'Today, you verify a document reconstructed after the fact —',
    'nobody observed the act. Tibok reverses that model:',
    'every prescription, every test passes through the platform,',
    'natively provable — time-stamping, electronic signature,',
    'video traceability, relevance analysis. We move from ex-post',
    'control on paper to native, real-time control. Three levers:',
    'an end to over-prescription, a structured fight against fraud,',
    'command of costs. An export-ready product.']}
    x={960} width={1560} align="center" y={928} size={29} italic={true}
    accent="#DDF2E8" dim="rgba(200,230,216,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 12 · THE PROOF: SWAN ---------- */
{ dur:30, hue:'green', node:(<React.Fragment>
  <ActTag act="The proof" title="The principle is validated" color={C.green}/>
  <Statement x={120} y={150} size={54} weight={700}
    lines={['This model is not a promise.','It is already under way.']} accentIdx={[1]} accentColor={C.green}/>
  <Swan h={70} x={1360} y={150} at={0.5}/>
  <div style={{position:'absolute',top:380,left:0,right:0,display:'flex',justifyContent:'center'}}>
    <Panel at={0.5} style={{maxWidth:1360}}>
      <div style={{fontFamily:FD,fontWeight:600,fontSize:29,color:'#fff',lineHeight:1.4,textAlign:'center'}}>
        With Swan, signature is under way — the first major insurer to <span style={{color:C.green,fontWeight:800}}>commit</span> to reimbursing consultations and prescriptions made on TIBOK.</div>
    </Panel>
  </div>
  <div style={{position:'absolute',top:588,left:0,right:0,display:'flex',flexDirection:'column',alignItems:'center',gap:22}}>
    <div style={{fontFamily:FD,fontWeight:700,fontSize:30,color:'#fff'}}>
      The commercial proof exists. What is needed now is a <span style={{color:C.gold}}>country platform</span>.</div>
    <div style={{display:'flex',alignItems:'center',gap:18}}>
      <span style={{fontFamily:FD,fontWeight:600,fontSize:22,color:C.dim}}>And that is what I have come to the</span>
      <EDBmark h={30}/>
      <span style={{fontFamily:FD,fontWeight:600,fontSize:22,color:C.dim}}>for</span>
    </div>
  </div>
  <Narration lines={[
    'This model is not a promise. With Swan, signature is under way:',
    'the first major insurer to commit to reimbursing',
    'consultations and prescriptions made on Tibok.',
    'The principle is validated on the Mauritian market.',
    'The commercial proof exists. What is needed now',
    'is a country platform — and that is what I have come to the EDB for.']}
    x={960} width={1500} align="center" y={912} size={31} italic={true}
    accent="#DDF2E8" dim="rgba(200,230,216,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 13 · THE PROPOSAL: A NATIONAL AI CHAMPION ---------- */
{ dur:50, hue:'gold', node:(<React.Fragment>
  <ActTag act="The proposal" title="A national champion for the AI pillar" color={C.gold}/>
  <Statement x={120} y={128} size={40} weight={700}
    lines={['Mauritius made AI its first strategic pillar.','TIBOK is the proof that it works.']} accentIdx={[1]} accentColor={C.gold}/>
  <OfferCards/>
  <Narration lines={[
    'Here is what I propose to the EDB. Budget 2026-27 makes AI',
    "and digitisation the country's first strategic pillar.",
    'TIBOK is exactly what that strategy is meant to produce:',
    'sovereign AI, in production, one hundred percent Mauritian,',
    'already validated by the market. Three axes. One: the showcase —',
    'make TIBOK the flagship case of the Mauritius AI Hub.',
    'Two: acceleration — the Startup Act, the EDB accelerator,',
    "AI incentives, the Côte d'Or special economic zone: apply those",
    'levers to a product already in production. Three: export —',
    "take TIBOK aboard your African missions, and make",
    'Medical Intelligence a Mauritian services export.']}
    x={960} width={1560} align="center" y={935} size={28} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- 14 · REGIONAL VISION ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Regional vision" title="Mauritius, then Africa"/>
  <AfricaArc/>
  <div style={{position:'absolute',top:588,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:700,fontSize:52,letterSpacing:'-0.025em',color:'#fff'}}>The EDB is already where TIBOK wants to go.</div>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:28,color:C.blue,marginTop:12}}>Your country platform · our sovereign health infrastructure</div>
  </div>
  <Narration lines={[
    'Mauritius is the proof of concept. It works here — so it works',
    'everywhere the problem is the same: not enough doctors.',
    'And the EDB is already where Tibok wants to go: its missions,',
    'its network, its promotion mandate cover the continent.',
    'Your country platform, our sovereign health infrastructure.',
    'Together, the Mauritian standard can become the standard',
    'for a continent and its ocean.']}
    x={960} width={1560} align="center" y={912} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

/* ---------- 15 · CLOSING ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <FinalScene/>
  <Narration lines={[
    'Mauritius is at a turning point. The country has made',
    'artificial intelligence the first pillar of its economic strategy.',
    'What it needs now is proof — real products,',
    'in production, exportable. TIBOK is that proof.',
    'Your mandate: making Mauritius a high-income, innovative',
    'economy, open to Africa. Ours: building',
    'the sovereign software that carries it.',
    "Let us build tomorrow's standard together — for Mauritius,",
    'for Africa, and for the Indian Ocean.',
    'Doctor Stéphane Bach · Digital Data Solutions · tibok.mu']}
    x={960} width={1560} align="center" y={905} size={30} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.4} tail={1.6}/>
</React.Fragment>)},

];

/* ============================ COMPONENTS ============================ */

function TibokHub(){
  const {localTime}=useScene();
  const nodes=[['Consultation',C.blue],['Prescription',C.teal],['Pharmacy',C.gold],['Lab tests',C.teal],['Chronic care',C.gold],['Second opinion',C.blue],['Prevention',C.green],['Control',C.coral]];
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
        <div style={{fontFamily:FD,fontWeight:700,fontSize:15,color:C.teal}}>60,000 references</div>
      </div>
      {pts.map((pt,i)=>(<NodeChip key={i} label={pt.n} icon="◆" x={pt.x} y={pt.y} color={pt.c} at={0.9+i*0.11}/>))}
    </div>
  );
}

/* ===== legal timeline of teleconsultation ===== */
function LegalTimeline(){
  const {localTime}=useScene();
  const ph=[['1997','WHO','A medical act in its own right',C.blue],
    ['2018','France','Reimbursed by national insurance',C.blue],
    ['Medicare Act','United States','Extended to all fifty states',C.blue],
    ['Ordinary law','UK · DE · AU · CA · CH','Written into national law',C.teal],
    ['1999','Mauritius — Medical Council Act','No requirement of physical presence',C.gold]];
  const W=316,gap=24,total=ph.length*W+(ph.length-1)*gap,sx=(1920-total)/2,lineY=452;
  const lineP=ev(localTime,0.3,1.4,Easing.easeOutCubic);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:sx+10,top:lineY,height:3,width:(total-20)*lineP,background:'rgba(255,255,255,0.25)'}}/>
      {ph.map((p,i)=>{
        const op=ev(localTime,0.5+i*0.3,0.6,Easing.easeOutCubic);
        const x=sx+i*(W+gap);
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

/* ===== the 10-tool ecosystem grid ===== */
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
    ['Teleconsultation','Video, no appointment needed',C.blue,'video'],
    ['Digital prescription','Signed, sent to the pharmacy',C.teal,'rx'],
    ['Pharmacy network','Delivery as far as Rodrigues',C.gold,'pill'],
    ['Lab tests & imaging','Biology and radiology integrated',C.teal,'lab'],
    ['Chronic follow-up','Blood pressure · diabetes · weight, via WhatsApp',C.gold,'heart'],
    ['Family management','All your relatives, one account',C.blue,'family'],
    ['SilentCheck','Prevention & early detection',C.gold,'shield'],
    ['Second opinion','File reviewed by AI + physician',C.blue,'second'],
    ['Relevance control','Every act verified before the expense',C.green,'control'],
    ['Medical Intelligence','At the core — on every consultation, prescription, test',C.coral,'brain'],
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

/* ===== LLM + RAG: the scientific core ===== */
function IntelCore(){
  const {localTime}=useScene();
  const cx=960, cy=520;
  const pulse=0.5+0.5*Math.sin(localTime*1.6);
  const llms=[['Claude',392],['GPT',462],['Gemini',532],['Mistral',602]];
  const socs=['WHO','ESC — cardiology','American Heart Association','NICE','INSERM','HAS','FDA'];
  return (
    <div style={{position:'absolute',inset:0}}>
      <FlowSvg>
        {llms.map((l,i)=>(<FlowLink key={i} x1={430} y1={l[1]} x2={cx-130} y2={cy} color={C.teal} at={0.5+i*0.12}/>))}
        <FlowLink x1={cx+130} y1={cy} x2={1500} y2={cy} color={C.blue} at={1.1}/>
      </FlowSvg>
      <div style={{position:'absolute',left:250,top:352,fontFamily:FD,fontWeight:700,fontSize:16,letterSpacing:'0.14em',textTransform:'uppercase',color:C.teal,opacity:ev(localTime,0.4,0.6)}}>The best LLMs</div>
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
          <div style={{fontFamily:FD,fontWeight:800,fontSize:42,color:C.blue,lineHeight:1}}>60,000</div>
          <div style={{fontFamily:FD,fontWeight:600,fontSize:18,color:'#fff',marginTop:8}}>scientific references</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:15,color:C.dim,marginTop:4}}>RAG — Retrieval-Augmented Generation</div>
        </div>
      </div>
      <div style={{position:'absolute',top:712,left:0,right:0,display:'flex',justifyContent:'center',gap:12,flexWrap:'wrap',maxWidth:1500,margin:'0 auto'}}>
        {socs.map((s,i)=>(<Chip key={i} at={1.4+i*0.1} color={C.blue}>{s}</Chip>))}
      </div>
    </div>
  );
}

/* ===== SilentCheck: the science in numbers ===== */
function SilentCheckViz(){
  const {localTime}=useScene();
  const bars=[['of heart disease develops without symptoms for 10 years',80,C.coral],
    ['of complications are avoidable with early detection',85,C.green]];
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',top:380,left:0,right:0,display:'flex',justifyContent:'center',gap:70}}>
        <Stat to={4} suffix=" M" size={72} color={C.gold} label="patients · 52 countries" align="center" at={0.5}/>
        <Stat to={53} size={72} color={C.blue} label="references — NEJM · Lancet · JACC" align="center" at={0.7}/>
        <Stat to={69612} size={72} color={C.teal} label="validation cohort" align="center" at={0.9}/>
        <Stat to={11} size={72} color={C.green} label="ethnic profiles" align="center" at={1.1}/>
        <Stat to={15} size={72} color={C.coral} label="biomarkers" align="center" at={1.3}/>
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

/* ===== the second-opinion pipeline ===== */
function SecondOpinionFlow(){
  const {localTime}=useScene();
  const y=520;
  const steps=[['Complete file','◆',300,C.blue],['LLM — full analysis','◆',780,C.teal],['RAG — 60,000 references','◆',1230,C.blue],['TIBOK physician — validation','◆',1650,C.green]];
  const docs=['History','Prescriptions','Imaging','Biology','Antecedents'];
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
        A second reading, fully sourced — before the major procedure, the hospitalisation, the overseas referral.</div>
    </div>
  );
}

/* ===== the proposal: three axes aligned with the EDB strategy ===== */
function OfferCards(){
  const {localTime}=useScene();
  return (
    <div style={{position:'absolute',top:330,left:0,right:0}}>
      <div style={{display:'flex',justifyContent:'center',gap:24,alignItems:'stretch'}}>
        <Card3D w={470} at={0.4} i={0} accent={C.blue} accentSide="top" minHeight={300} pad="30px 32px">
          <div style={{fontFamily:FD,fontWeight:700,fontSize:15,letterSpacing:'0.14em',textTransform:'uppercase',color:C.blue}}>Axis 1 · Mauritius AI Hub</div>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:58,color:'#fff',marginTop:16,lineHeight:1}}>The showcase</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:C.dim,marginTop:8}}>the “Leveraging AI &amp; Digitisation” pillar</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:17,color:C.dim,marginTop:14,lineHeight:1.45}}>Sovereign AI in production, the flagship case of the country brand — <span style={{color:'#fff',fontWeight:600}}>Mauritius does not consume AI: it produces it</span>.</div>
        </Card3D>
        <Card3D w={470} at={0.6} i={1} accent={C.green} accentSide="top" minHeight={300} pad="30px 32px">
          <div style={{fontFamily:FD,fontWeight:700,fontSize:15,letterSpacing:'0.14em',textTransform:'uppercase',color:C.green}}>Axis 2 · Startup Act &amp; AI SEZ</div>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:58,color:'#fff',marginTop:16,lineHeight:1}}>Acceleration</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:C.dim,marginTop:8}}>the EDB levers, on a product already in production</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:17,color:C.txt,marginTop:14,lineHeight:1.6}}>✓ Startup Act &amp; EDB accelerator<br/>✓ AI incentives · innovation grants<br/>✓ Côte d’Or AI SEZ</div>
        </Card3D>
        <Card3D w={490} at={0.8} i={2} accent={C.gold} accentSide="top" minHeight={300} pad="30px 32px"
          style={{background:'rgba(224,169,59,0.08)',border:'1px solid rgba(224,169,59,0.35)'}}>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:15,letterSpacing:'0.14em',textTransform:'uppercase',color:C.gold}}>Axis 3 · African missions</div>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:58,color:C.gold,marginTop:16,lineHeight:1}}>Export</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:'#fff',marginTop:8}}>Medical Intelligence as a services export</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:17,color:C.dim,marginTop:14,lineHeight:1.45}}>Take TIBOK aboard the EDB&rsquo;s economic missions — the <span style={{color:'#fff',fontWeight:600}}>Mauritian standard</span> of digital health, sold to the continent.</div>
        </Card3D>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:26}}>
        <Panel at={1.3} style={{maxWidth:1420}}>
          <div style={{fontFamily:FD,fontWeight:600,fontSize:24,color:'#fff',lineHeight:1.45,textAlign:'center'}}>
            <span style={{color:C.gold,fontWeight:800}}>Win-win</span> — DDS brings the living proof; the EDB brings the country platform. Together: the <span style={{color:C.teal,fontWeight:700}}>Mauritian standard</span> of digital health, exported to Africa.</div>
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

/* ===== East-Africa / Indian-Ocean constellation ===== */
function AfricaArc(){
  const {localTime}=useScene();
  // gold = EDB missions & network in Africa · blue = TIBOK today · teal = natural expansion
  const nodes=[['Mauritius',0,C.blue],['Rodrigues',0.8,C.blue],['Madagascar',1.6,C.teal],['Mozambique',2.0,C.teal],['Tanzania',2.6,C.gold],['Kenya',3.0,C.gold],['Uganda',3.4,C.gold],['Rwanda',3.8,C.gold]];
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
        {[['TIBOK today',C.blue],['EDB missions & network — Africa',C.gold],['Natural expansion',C.teal]].map((l,i)=>(
          <span key={i} style={{display:'inline-flex',alignItems:'center',gap:10,fontFamily:FD,fontWeight:600,fontSize:18,color:C.dim}}>
            <i style={{width:12,height:12,borderRadius:6,background:l[1],boxShadow:`0 0 12px ${l[1]}`}}/>{l[0]}</span>
        ))}
      </div>
    </div>
  );
}

/* ===== DDS × EDB closing ===== */
function FinalScene(){
  const {localTime}=useScene();
  const w=ev(localTime,0.3,0.8,Easing.easeOutExpo);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:120,top:300}}>
        <div style={{display:'flex',alignItems:'center',gap:22,opacity:ev(localTime,0.2,0.7),transform:`translateY(${(1-ev(localTime,0.2,0.7))*20}px)`}}>
          <img src="assets/logos/dds.png" alt="Digital Data Solutions" style={{height:60}}/>
          <span style={{fontFamily:FD,fontWeight:300,fontSize:52,color:'rgba(206,219,240,0.55)'}}>×</span>
          <EDBmark h={48}/>
        </div>
        <div style={{width:260*w,height:8,borderRadius:3,background:`linear-gradient(90deg,${C.blue},${C.teal})`,margin:'30px 0'}}/>
        <div style={{fontFamily:FD,fontWeight:500,fontSize:34,color:'#D6E0F0',lineHeight:1.28,opacity:ev(localTime,0.7,0.7),maxWidth:'22ch'}}>
          Let us build<br/>tomorrow&rsquo;s standard —<br/>for Mauritius, Africa<br/>and the Indian Ocean.</div>
      </div>
      <div style={{position:'absolute',right:120,top:300,width:680,opacity:ev(localTime,1.0,0.7),transform:`translateY(${(1-ev(localTime,1.0,0.7))*18}px)`}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'flex-start'}}>
          {['Swan — signature under way','3 AI products in production','100% Mauritian team'].map((c,i)=>(
            <span key={i} style={{padding:'11px 20px',border:'1px solid rgba(255,255,255,0.16)',background:'rgba(255,255,255,0.05)',borderRadius:999,fontFamily:FD,fontWeight:500,fontSize:20,color:C.txt,display:'inline-flex',alignItems:'center',gap:10}}>
              <span style={{width:20,height:20,borderRadius:10,background:C.green,color:C.navy,display:'grid',placeItems:'center',fontSize:12,fontWeight:800}}>✓</span>{c}</span>
          ))}
        </div>
        <div style={{marginTop:34,paddingTop:26,borderTop:'1px solid rgba(255,255,255,0.14)'}}>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color:'#fff'}}>Dr Stéphane Bach</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:20,color:C.dim,marginTop:4}}>Founder & CEO, Digital Data Solutions Ltd</div>
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
