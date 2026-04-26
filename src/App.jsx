import React from 'react'


const POSTS = [
  {slug:"when-the-buyer-isnt-human-anymore",
   title:"When the buyer isn't human anymore",
   date:"2026-04-26",dateLabel:"April 26, 2026",
   description:"Two AI agents. One bike. A 70% price gap. What Anthropic's Project Deal reveals about the future of negotiation."},
  {slug:"buyer-thinks-its-chess",
   title:"The buyer thinks it's chess. It isn't.",
   date:"2026-04-25",dateLabel:"April 25, 2026",
   description:"When a buyer comes in playing chess, the worst thing you can do is play back."}
];

const POST_CONTENT = {
  "when-the-buyer-isnt-human-anymore": (
    <>
      <p>A bike listed on an open marketplace. One AI agent sells it for $38. Another sells the same bike for $65. Same item, same market, different model. That gap isn't a rounding error. It's 70%, and it's a preview of what's coming.</p>
      <p>On April 24th, 2026, Anthropic published research on something they called Project Deal. The setup was straightforward: AI agents on both sides of a transaction, buying and selling in a secondary marketplace, communicating through Slack. No human in the room. Just two models negotiating in real time.</p>
      <p>46% of participants said they would pay for an agentic service to handle their buying and selling process. That number is striking given how often people say they want to stay involved in decisions surrounding money. Apparently when it comes to the friction of negotiation, nearly half are willing to hand it off.</p>
      <h2>What the research actually found</h2>
      <p>Anthropic ran the experiment using two of their models, Opus 4.5 and Haiku 4.5. The performance gap was significant. Opus consistently closed at higher prices, hence the $38 vs $65 outcome on the bike. More sophisticated model, better negotiator, more revenue for the seller. Worth noting: the higher closing price didn't increase the likelihood of a sale. Opus got more per item, not more items sold.</p>
      <p>What's equally interesting is what didn't matter: prompting. Instructing the agent to be aggressive versus cooperative made no meaningful difference in outcomes. The key driver was the model's capacity for extended thinking, not the instructions it was given. For anyone who has spent time obsessing over prompt engineering, that's a telling finding. In the early days prompts had an outsized impact on outputs. That gap is closing as model capability matures.</p>
      <h2>What this means for marketplaces</h2>
      <p>If you participate in secondary marketplaces, whether buying, selling, or both, AI is coming to your corner of the market. The implications cut both ways.</p>
      <p>For sellers, sophisticated AI agents on the buying side could compress margins if those agents are optimized to extract value. Deploying a capable selling agent of your own could meaningfully increase revenue, as the bike example suggests. Model selection will matter more than most people expect.</p>
      <p>For buyers, delegating to an agent means setting parameters upfront and trusting the model to execute. The research suggests the model you choose will drive outcomes far more than how carefully you configure it.</p>
      <h2>The bigger question nobody is asking</h2>
      <p>If nearly half of buyers are willing to hand the negotiation to an AI, who are you actually selling to? The agent itself? The human who configured it? The organization that deployed it?</p>
      <p>This isn't a philosophical question. It's a practical one. An AI buying agent isn't moved by a polished deck or a well-timed follow up. It's optimizing for something specific based on parameters a human set, possibly weeks ago. Understanding what those parameters are becomes the new competitive advantage. The human who configured the agent is still your real buyer. Reach them before the agent does. That's where the relationship still matters and where the outcome is actually shaped.</p>
      <h2>Where this goes from here</h2>
      <p>Project Deal was a controlled study involving commodities, not complex enterprise software with long deal cycles. The findings don't map one to one onto every business context, and I'd argue that for large or complex purchases humans will want humans involved for the foreseeable future. The stakes are too high and the variables too many.</p>
      <p>But in secondary marketplaces and transactional buying contexts, the direction is clear. Nearly half of buyers are already open to removing themselves from the negotiation entirely. The businesses that understand what agents optimize for, and who to reach before the agent enters the room, will have a real edge over those still selling the old way.</p>
      <p>In small scale markets, the buyer might not be human anymore. The question is whether you've noticed yet.</p>
    </>
  ),
  "buyer-thinks-its-chess": (
    <>
      <blockquote>
        <p>"Chess looks like a zero-sum game; if one loses, the other wins — until a dog trots by and knocks over the table, spills the beer, and leaves you both worse off than before."</p>
        <cite>— Roger Fisher &amp; William Ury, <em>Getting to Yes</em></cite>
      </blockquote>
      <p>Most buyers walk into a vendor conversation playing chess. They're focused on controlling the narrative, extracting the best price, and walking away feeling like they won. As an AE, you've more than likely felt this. The guarded answers, the crossed arms energy, the sense that they've already decided you're the opponent. You can hear it in their tone. Our job isn't to win that game. It's to flip the board entirely.</p>
      <p>When a buyer comes in purely adversarial, you can still close the deal. But you won't get the relationship. In sales, the relationship is where everything actually happens: renewals, expansions, referrals, and the kind of implementation success that turns a client into a case study. A buyer who strong-armed their way to the lowest price and minimum commitment will find a vendor who delivers exactly that. Minimum commitment back. Here's how you change that.</p>
      <p>Maintain the framework that you are there to help them. Two things can be true at once: I want to close the deal AND I want them to succeed. Those aren't in conflict. On the contrary, they're the same thing. The faster a prospect understands that, the better the conversation gets.</p>
      <p>I saw this recently on a discovery call. The prospect came in guarded, like they had a lie detector sitting next to them that they felt they needed. Not because of anything I'd done, but because their last vendor had burned them. Poor data quality, a weak explanation, and the distinct feeling they'd been sold to rather than served. I could feel them waiting for me to do the same thing.</p>
      <p>So I stopped. Instead of pushing through standard discovery questions I already knew the answers to, I asked what they actually cared about. Not just in an outcome for our service, but in a vendor relationship. What did an A-tier vendor look like to them? What had gone wrong before and why? The conversation shifted completely. By the end of the call they weren't talking to a rep. They were talking to someone who had positioned themselves as a strategic business partner.</p>
      <p>That's the move. Not a tactic or a set of magic words. A genuine reframe. When a buyer comes in playing chess, the worst thing you can do is play back. The best thing you can do is ask the question that makes the chess board irrelevant.</p>
      <p>That question usually sounds like: "What would a successful partnership with a vendor look like for you?" It's disarming because it's unexpected. It signals that you're not there to extract. You're there to build. And it will give you infinitely more useful information than any pricing objection ever will.</p>
      <p>Your job isn't to win the negotiation. It's to dissolve it.</p>
    </>
  )
};

function Treeline(){
  return (
    <div className="treeline" role="presentation" aria-hidden="true">
      <span className="rule"></span>
      <svg width="72" height="22" viewBox="0 0 72 22">
        <path d="M0 22 L3 17 L6 19 L10 13 L14 16 L18 11 L22 14 L26 9 L31 15 L36 10 L41 14 L46 8 L51 13 L56 11 L61 15 L66 12 L72 22 Z" fill="var(--mountain-mid)" opacity="0.55"/>
        <path d="M0 22 L4 18 L8 14 L11 17 L15 10 L19 15 L23 6 L27 12 L31 4 L34 9 L37 7 L40 13 L44 8 L47 15 L51 11 L55 17 L59 13 L63 19 L68 15 L72 22 Z" fill="var(--tree-deep)"/>
        <path d="M29 12 L30.2 10 L31.4 12 Z" fill="var(--accent)" opacity="0.95"/>
        <path d="M43 13 L44 11.5 L45 13 Z" fill="var(--accent)" opacity="0.8"/>
      </svg>
      <span className="rule"></span>
    </div>
  );
}

function Pine({cx, top, h, sw=1.1, opacity=0.85, accent=false}){
  const stroke = accent ? "var(--accent)" : "var(--tree)";
  const rows = 6, step = h/rows, lines = [];
  lines.push(<line key="t" x1={cx} y1={top} x2={cx} y2={top+h}/>);
  for(let i=1;i<=rows;i++){
    const y = top + i*step;
    const reach = 10 + i*3.5;
    const drop = 2 + i*0.8;
    lines.push(<line key={"l"+i} x1={cx} y1={y-step*0.7} x2={cx-reach} y2={y-step*0.7+drop}/>);
    lines.push(<line key={"r"+i} x1={cx} y1={y-step*0.7} x2={cx+reach} y2={y-step*0.7+drop}/>);
  }
  return <g stroke={stroke} strokeLinecap="round" strokeWidth={sw} fill="none" opacity={opacity}>{lines}</g>;
}

function Bird({x,y,s=1,accent=false}){
  const stroke = accent ? "var(--accent)" : "var(--tree)";
  return (
    <g stroke={stroke} strokeLinecap="round" strokeWidth={1.2} fill="none" opacity="0.9"
       transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -8 4 Q -4 -2 0 2 Q 4 -2 8 4"/>
    </g>
  );
}

function Sun({x,y,r=22}){
  const rays = [];
  for(let i=0;i<12;i++){
    const a = (i/12)*Math.PI*2;
    const r1 = r+6, r2 = r+14;
    rays.push(<line key={i} x1={x+Math.cos(a)*r1} y1={y+Math.sin(a)*r1}
              x2={x+Math.cos(a)*r2} y2={y+Math.sin(a)*r2}/>);
  }
  return (
    <g stroke="var(--accent)" strokeLinecap="round" strokeWidth={1.2} fill="none" opacity="0.8">
      <circle cx={x} cy={y} r={r}/>
      {rays}
    </g>
  );
}

function Cloud({x,y,s=1,accent=false}){
  const stroke = accent ? "var(--accent)" : "var(--tree)";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={stroke}
       strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.55">
      <path d="M 0 0 q 6 -10 16 -6 q 6 -10 20 -4 q 10 -2 14 6 q 6 0 8 6 l -58 0 q -6 -4 0 -8 z"/>
    </g>
  );
}

function Cabin({x,y,s=1}){
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke="var(--tree-deep)" strokeWidth="1.2"
       strokeLinecap="round" fill="none" opacity="0.85">
      <rect x="0" y="20" width="44" height="26"/>
      <path d="M -4 20 L 22 2 L 48 20 Z"/>
      <rect x="18" y="32" width="10" height="14"/>
      <rect x="32" y="26" width="6" height="6"/>
      <path d="M 36 6 q 4 -6 0 -12 q -4 -6 0 -12" stroke="var(--tree)" opacity="0.5"/>
    </g>
  );
}

function Mountain({points, fill, opacity=0.5}){
  return <path d={points} fill={fill} opacity={opacity}/>;
}

function Branch({x,y,rot=0,scale=1,accent=false}){
  const stroke = accent ? "var(--accent)" : "var(--tree)";
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}
       stroke={stroke} strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.8">
      <path d="M 0 0 Q 30 -8 70 -4"/>
      <path d="M 20 -6 Q 26 -14 30 -4"/>
      <path d="M 35 -8 Q 42 -16 46 -6"/>
      <path d="M 50 -6 Q 56 -14 62 -4"/>
    </g>
  );
}

function Deer({x,y,s=1}){
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke="var(--tree-deep)"
       strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.75">
      <ellipse cx="10" cy="6" rx="8" ry="4"/>
      <line x1="18" y1="4" x2="22" y2="-2"/>
      <circle cx="22" cy="-3" r="2"/>
      <path d="M 22 -5 l -2 -4 M 22 -5 l 1 -5 M 23 -5 l 3 -4"/>
      <line x1="4" y1="10" x2="4" y2="16"/>
      <line x1="8" y1="10" x2="8" y2="16"/>
      <line x1="13" y1="10" x2="13" y2="16"/>
      <line x1="17" y1="10" x2="17" y2="16"/>
    </g>
  );
}

function Rock({x,y,s=1}){
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke="var(--tree-deep)"
       strokeWidth="1" strokeLinecap="round" fill="var(--rock-fill)" opacity="0.7">
      <path d="M 0 12 Q 4 4 12 2 Q 22 0 28 6 Q 34 12 32 14 L 0 14 Z"/>
    </g>
  );
}

function SceneHome({op}){
  const trees = [
    {cx:60,top:200,h:140,sw:1.1,opacity:0.7,accent:false},
    {cx:210,top:440,h:170,sw:1.2,opacity:0.85,accent:true},
    {cx:90,top:840,h:190,sw:1.2,opacity:0.9,accent:false},
    {cx:250,top:1200,h:150,sw:1.1,opacity:0.8,accent:false},
    {cx:70,top:1500,h:160,sw:1.1,opacity:0.8,accent:true},
    {cx:1310,top:240,h:180,sw:1.2,opacity:0.9,accent:true},
    {cx:1180,top:520,h:160,sw:1.1,opacity:0.8,accent:false},
    {cx:1330,top:900,h:200,sw:1.3,opacity:0.95,accent:false},
    {cx:1220,top:1260,h:150,sw:1.1,opacity:0.8,accent:true},
    {cx:1340,top:1560,h:170,sw:1.2,opacity:0.85,accent:false}
  ];
  return (
    <div className="scene" style={{opacity:op}}>
      <svg viewBox="0 0 1400 1800" preserveAspectRatio="xMidYMid slice">
        <Mountain points="M 0 320 L 120 220 L 260 300 L 420 180 L 600 280 L 780 200 L 960 290 L 1150 190 L 1320 270 L 1400 240 L 1400 1800 L 0 1800 Z" fill="var(--mountain-far)" opacity={0.35}/>
        <Mountain points="M 0 400 L 160 320 L 340 380 L 520 300 L 720 380 L 900 310 L 1100 380 L 1300 320 L 1400 360 L 1400 1800 L 0 1800 Z" fill="var(--mountain-mid)" opacity={0.3}/>
        <Sun x={1260} y={120} r={24}/>
        <Cloud x={240} y={120} s={1.2}/>
        <Cloud x={560} y={80} s={1}/>
        <Cloud x={900} y={140} s={1.4}/>
        <Bird x={400} y={110} s={1}/>
        <Bird x={480} y={150} s={0.8}/>
        <Bird x={560} y={90} s={1.1} accent/>
        <Bird x={820} y={120} s={0.9}/>
        <Bird x={970} y={170} s={1} accent/>
        <path fill="none" stroke="var(--tree)" strokeWidth="1.1" strokeLinecap="round" opacity="0.55"
              d="M 120 60 C 160 180, 40 260, 90 380 C 140 500, 260 540, 220 660 C 180 780, 60 840, 110 960 C 160 1080, 300 1120, 260 1240 C 220 1360, 90 1420, 150 1560 C 200 1680, 340 1700, 420 1780"/>
        <path fill="none" stroke="var(--tree)" strokeWidth="1.1" strokeLinecap="round" opacity="0.55"
              d="M 150 60 C 190 180, 70 260, 120 380 C 170 500, 290 540, 250 660 C 210 780, 90 840, 140 960 C 190 1080, 330 1120, 290 1240 C 250 1360, 120 1420, 180 1560 C 230 1680, 370 1700, 450 1780"/>
        {trees.map((t,i) => <Pine key={i} {...t}/>)}
        <Cabin x={240} y={1540} s={1.1}/>
        <Deer x={310} y={1590} s={1}/>
        <Deer x={1240} y={1620} s={0.9}/>
        <Rock x={180} y={980} s={1.2}/>
        <Rock x={1260} y={1400} s={1.4}/>
        <Branch x={40} y={720} rot={10} scale={1.4} accent/>
        <Branch x={1360} y={1100} rot={190} scale={1.3}/>
        <path fill="none" stroke="var(--tree)" strokeWidth="0.7" opacity="0.3"
              d="M 0 1720 Q 200 1680 380 1710 T 760 1700 T 1140 1715 T 1400 1695"/>
      </svg>
    </div>
  );
}

function SceneWriting({op}){
  const flakes = [];
  const rng = (seed) => { let s = seed; return () => (s = (s*9301+49297)%233280, s/233280); };
  const r = rng(7);
  for(let i=0;i<80;i++){
    flakes.push(<circle key={i} cx={r()*1400} cy={r()*1800} r={0.8+r()*1.6} fill="var(--tree)" opacity="0.35"/>);
  }
  const densePines = [];
  for(let i=0;i<14;i++){
    densePines.push({cx: 30 + i*14 + (i%2?8:0), top: 1500 + (i%3)*30, h: 120+((i*37)%60), sw:1, opacity:0.6 + (i%3)*0.1});
  }
  return (
    <div className="scene" style={{opacity:op}}>
      <svg viewBox="0 0 1400 1800" preserveAspectRatio="xMidYMid slice">
        <g>{flakes}</g>
        <circle cx="1280" cy="120" r="24" fill="#FFF6EE" stroke="var(--tree)" strokeWidth="1" opacity="0.9"/>
        <circle cx="1290" cy="110" r="4" fill="var(--rock-fill)" opacity="0.7"/>
        <circle cx="1272" cy="124" r="2" fill="var(--rock-fill)" opacity="0.7"/>
        <Mountain points="M 0 420 L 150 340 L 330 400 L 520 320 L 720 400 L 900 330 L 1100 400 L 1300 340 L 1400 380 L 1400 460 L 0 460 Z" fill="var(--mountain-mid)" opacity={0.3}/>
        <Pine cx={80} top={240} h={200} sw={1.2} opacity={0.85} accent={true}/>
        <Pine cx={160} top={480} h={160} sw={1.1} opacity={0.8}/>
        <Pine cx={50} top={720} h={220} sw={1.3} opacity={0.9}/>
        <Pine cx={200} top={1000} h={170} sw={1.2} opacity={0.85} accent/>
        <Pine cx={100} top={1260} h={180} sw={1.2} opacity={0.8}/>
        <Pine cx={1300} top={260} h={220} sw={1.3} opacity={0.9}/>
        <Pine cx={1200} top={520} h={160} sw={1.1} opacity={0.8} accent/>
        <Pine cx={1340} top={800} h={200} sw={1.2} opacity={0.85}/>
        <Pine cx={1220} top={1080} h={180} sw={1.2} opacity={0.8}/>
        <Pine cx={1320} top={1340} h={170} sw={1.2} opacity={0.85} accent/>
        {densePines.map((t,i) => <Pine key={i} {...t}/>)}
        <g transform="translate(680 1100)" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.9">
          <path d="M 0 6 Q 8 0 20 4 Q 30 6 34 12"/>
          <path d="M 0 6 Q -6 2 -10 8 Q -14 4 -18 10"/>
          <path d="M 20 4 L 26 -2 L 30 -2 L 28 4"/>
          <path d="M 24 -2 L 25 -6 L 27 -2"/>
          <line x1="6" y1="10" x2="6" y2="16"/>
          <line x1="10" y1="10" x2="10" y2="16"/>
          <line x1="22" y1="10" x2="22" y2="16"/>
          <line x1="26" y1="10" x2="26" y2="16"/>
        </g>
        <g fill="var(--tree)" opacity="0.5">
          {[0,1,2,3,4,5,6].map(i => (
            <g key={i} transform={`translate(${720 + i*50} ${1140 + (i%2)*6})`}>
              <circle cx="0" cy="0" r="1.2"/><circle cx="4" cy="-1" r="1.2"/>
            </g>
          ))}
        </g>
        <Branch x={0} y={80} rot={-5} scale={1.6}/>
        <Branch x={1400} y={200} rot={185} scale={1.4} accent/>
      </svg>
    </div>
  );
}

function SceneAbout({op}){
  return (
    <div className="scene" style={{opacity:op}}>
      <svg viewBox="0 0 1400 1800" preserveAspectRatio="xMidYMid slice">
        <Sun x={180} y={100} r={28}/>
        <Bird x={320} y={140} s={1.2} accent/>
        <Bird x={420} y={100} s={1.4}/>
        <Bird x={560} y={180} s={1} accent/>
        <Bird x={1000} y={120} s={1.3}/>
        <Bird x={1120} y={170} s={1.1} accent/>
        <Cloud x={700} y={90} s={1.5}/>
        <Cloud x={960} y={60} s={1.2}/>
        <Cloud x={260} y={240} s={1}/>
        <Mountain points="M 0 1400 L 200 1100 L 360 1250 L 540 960 L 760 1200 L 940 1020 L 1140 1220 L 1320 1080 L 1400 1180 L 1400 1500 L 0 1500 Z" fill="var(--mountain-far)" opacity={0.45}/>
        <Mountain points="M 0 1500 L 180 1300 L 360 1400 L 560 1180 L 760 1380 L 960 1250 L 1160 1420 L 1340 1300 L 1400 1360 L 1400 1600 L 0 1600 Z" fill="var(--mountain-mid)" opacity={0.55}/>
        <Mountain points="M 0 1640 L 220 1480 L 440 1600 L 660 1440 L 880 1600 L 1100 1480 L 1320 1620 L 1400 1580 L 1400 1720 L 0 1720 Z" fill="var(--tree)" opacity={0.7}/>
        <g>
          {Array.from({length: 5}, (_, i) => (
            <Pine key={`l${i}`} cx={-40 + i*46} top={1710} h={50+(i%3)*10} sw={0.9} opacity={0.6} accent={i===1}/>
          ))}
          {Array.from({length: 5}, (_, i) => (
            <Pine key={`r${i}`} cx={1220 + i*46} top={1710} h={50+(i%3)*10} sw={0.9} opacity={0.6} accent={i===3}/>
          ))}
        </g>
        <Pine cx={-20} top={1700} h={280} sw={1.4} opacity={0.9}/>
        <Pine cx={70} top={1750} h={220} sw={1.3} opacity={0.85} accent/>
        <Pine cx={1420} top={1700} h={280} sw={1.4} opacity={0.9} accent/>
        <Pine cx={1330} top={1750} h={220} sw={1.3} opacity={0.85}/>
        <g stroke="var(--tree-deep)" strokeWidth="1.2" strokeLinecap="round" fill="none">
          <line x1="560" y1="1180" x2="560" y2="1120"/>
          <path d="M 560 1120 L 580 1128 L 560 1136 Z" fill="var(--accent)" stroke="var(--accent)"/>
        </g>
        <Rock x={240} y={1670} s={1.8}/>
        <Rock x={1060} y={1660} s={1.6}/>
        <Rock x={1200} y={1685} s={2}/>
      </svg>
    </div>
  );
}

function Scene({page, mode}){
  if(mode === "off") return null;
  const op = mode === "visible" ? 0.9 : 0.5;
  const route = page.startsWith("post:") ? "post" : page;
  if(route === "post") return null;
  if(route === "home") return <SceneHome op={op}/>;
  if(route === "writing") return <SceneWriting op={op}/>;
  if(route === "about") return <SceneAbout op={op}/>;
  return null;
}


function ThemeToggle({theme, onToggle}){
  const isDark = theme === "dark";
  return (
    <button className="theme-toggle" onClick={onToggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor"
           strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {isDark ? (
          <g>
            <circle cx="10" cy="10" r="3.5"/>
            <line x1="10" y1="2" x2="10" y2="4"/>
            <line x1="10" y1="16" x2="10" y2="18"/>
            <line x1="2" y1="10" x2="4" y2="10"/>
            <line x1="16" y1="10" x2="18" y2="10"/>
            <line x1="4.3" y1="4.3" x2="5.7" y2="5.7"/>
            <line x1="14.3" y1="14.3" x2="15.7" y2="15.7"/>
            <line x1="4.3" y1="15.7" x2="5.7" y2="14.3"/>
            <line x1="14.3" y1="5.7" x2="15.7" y2="4.3"/>
          </g>
        ) : (
          <path d="M17 11.5A7 7 0 1 1 8.5 3a5.5 5.5 0 0 0 8.5 8.5z"/>
        )}
      </svg>
    </button>
  );
}

function Nav({page, go}){
  const items = [{key:"home",label:"Home"},{key:"writing",label:"Writing"},{key:"about",label:"About"}];
  const active = page.startsWith("post:") ? "writing" : page;
  return (
    <nav className="nav" aria-label="Primary">
      {items.map(it => (
        <button key={it.key} onClick={() => go(it.key)} aria-current={active === it.key ? "page" : undefined}>
          {it.label}
        </button>
      ))}
    </nav>
  );
}

function Masthead({go}){
  return (
    <header className="masthead">
      <h1 className="site-title" onClick={() => go("home")} style={{cursor:"pointer"}}>
        Above <span className="the">the</span> treeline
      </h1>
      <p className="byline">by Peter Boga</p>
      <Treeline/>
    </header>
  );
}

function PostCard({post, go}){
  return (
    <li className="post-card" onClick={() => go("post:"+post.slug)}>
      <p className="post-date">{post.dateLabel}</p>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-desc">{post.description}</p>
    </li>
  );
}

function Footer(){
  return (
    <footer className="footer">
      <Treeline/>
      <div><a href="mailto:peterboga@live.com">peterboga@live.com</a><span className="dot">&middot;</span>Los Angeles, California</div>
    </footer>
  );
}

function HomePage({go}){
  return (
    <div className="view">
      <Masthead go={go}/><Nav page="home" go={go}/>
      <p className="tagline">
        Field notes on go-to-market, data, and whatever else earns the attention.
      </p>
      <p className="section-label">Latest writing</p>
      <ul className="posts">{POSTS.slice(0,3).map(p => <PostCard key={p.slug} post={p} go={go}/>)}</ul>
      <Footer/>
    </div>
  );
}

function WritingPage({go}){
  return (
    <div className="view">
      <Masthead go={go}/><Nav page="writing" go={go}/>
      <div className="archive-head">
        <h1>Writing</h1>
        <p>Essays, field notes, and working theories.</p>
      </div>
      <ul className="posts">{POSTS.map(p => <PostCard key={p.slug} post={p} go={go}/>)}</ul>
      <Footer/>
    </div>
  );
}

function AboutPage({go}){
  return (
    <div className="view">
      <Masthead go={go}/><Nav page="about" go={go}/>
      <div className="about-head"><h1>About</h1></div>
      <article className="prose">
        <p>Most writing online stops short of the treeline. This is my attempt to get past it.</p>
        <p>I&apos;m Peter Boga. I sell data and insights infrastructure for a living, came up through biotech and environmental science, and ski more than is probably defensible. Reach me at <a href="mailto:peterboga@live.com">peterboga@live.com</a>.</p>
      </article>
      <Footer/>
    </div>
  );
}

function ShareBar({post}){
  const [copied, setCopied] = React.useState(false);
  const url = `https://peterboga.com/#${post.slug}`;
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`;

  function copyLink(){
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="share-bar">
      <span className="share-label">Share</span>
      <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="share-link">LinkedIn</a>
      <a href={twitter} target="_blank" rel="noopener noreferrer" className="share-link">X / Twitter</a>
      <button className="share-link share-copy" onClick={copyLink}>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}

function PostPage({slug, go}){
  const post = POSTS.find(p => p.slug === slug);
  if(!post) return (<div className="view"><Masthead go={go}/><Nav page="writing" go={go}/><p style={{textAlign:"center",marginTop:60,color:"var(--muted)"}}>Post not found.</p><Footer/></div>);
  return (
    <div className="view">
      <Masthead go={go}/><Nav page="writing" go={go}/>
      <div className="post-head">
        <p className="post-date">{post.dateLabel}</p>
        <h1>{post.title}</h1>
      </div>
      <article className="post-body">{POST_CONTENT[slug] ?? <p className="placeholder">Post coming soon.</p>}</article>
      <ShareBar post={post}/>
      <div style={{textAlign:"center"}}>
        <a className="back-link" onClick={() => go("writing")}>&#8592; All writing</a>
      </div>
      <Footer/>
    </div>
  );
}

export default function App(){
  const [page, setPage] = React.useState(() => { try { return localStorage.getItem("att:page") || "home"; } catch(e){ return "home"; } });
  const [theme, setTheme] = React.useState(() => { try { return localStorage.getItem("att:theme") || "light"; } catch(e){ return "light"; } });
  React.useEffect(() => {
    try { localStorage.setItem("att:page", page); } catch(e){}
    window.scrollTo({top:0, behavior:"instant"});
  }, [page]);

  React.useEffect(() => {
    const setMeta = (prop, val) => {
      const el = document.querySelector(`meta[property="${prop}"]`);
      if(el) el.setAttribute("content", val);
    };
    if(page.startsWith("post:")) {
      const post = POSTS.find(p => p.slug === page.slice(5));
      if(post) {
        document.title = `${post.title} — Above the treeline`;
        setMeta("og:title", post.title);
        setMeta("og:description", post.description);
        setMeta("og:url", `https://peterboga.com/#${post.slug}`);
      }
    } else {
      document.title = "Above the treeline — by Peter Boga";
      setMeta("og:title", "Above the treeline");
      setMeta("og:description", "Field notes on go-to-market, data, and whatever else earns the attention.");
      setMeta("og:url", "https://peterboga.com");
    }
  }, [page]);

  React.useEffect(() => {
    try { localStorage.setItem("att:theme", theme); } catch(e){}
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const go = (p) => setPage(p);

  const shellClass = page.startsWith("post:") ? "shell shell--post" : "shell";
  let view;
  if(page === "home") view = <HomePage go={go}/>;
  else if(page === "writing") view = <WritingPage go={go}/>;
  else if(page === "about") view = <AboutPage go={go}/>;
  else if(page.startsWith("post:")) view = <PostPage slug={page.slice(5)} go={go}/>;
  else view = <HomePage go={go}/>;

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  return (
    <div className="page" data-screen-label={page}>
      <Scene page={page} mode="visible"/>
      <ThemeToggle theme={theme} onToggle={toggleTheme}/>
      <div className={shellClass} key={page}>{view}</div>
    </div>
  );
}
