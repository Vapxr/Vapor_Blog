import React from 'react'

export default function App(){
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem("att:theme") || "light"; } catch(e){ return "light"; }
  });

  React.useEffect(() => {
    try { localStorage.setItem("att:theme", theme); } catch(e){}
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="page">
      <button className="theme-toggle" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {theme === "dark" ? (
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

      <div className="shell">
        <header className="masthead">
          <h1 className="site-title">
            Above <span className="the">the</span> treeline
          </h1>
          <p className="byline">by Peter Boga</p>
        </header>

        <main className="coming-soon">
          <p className="coming-label">Coming soon</p>
          <p className="coming-sub">Field notes on go-to-market, data, and whatever else earns the attention.</p>
          <a href="mailto:peterboga@live.com" className="coming-contact">peterboga@live.com</a>
        </main>
      </div>
    </div>
  );
}
