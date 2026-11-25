(function () {
  'use strict';

  const EMAIL = 'thauan.matheus40@gmail.com';
  const I18N = window.PORTFOLIO_I18N;
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTOPLAY_MS = 5500;

  let currentLang = localStorage.getItem('tm_lang') || 'pt';
  if (!I18N[currentLang]) currentLang = 'pt';

  let currentFilter = 'all';
  let currentSlide = 0;
  let currentTab = 'profile';
  let typingTimer = null;
  let lastFocusedEl = null;
  let revealObserver = null;

  let autoplayEnabled = !reducedMotion;
  let autoplayPaused = false;
  let autoplayElapsed = 0;
  let lastAutoTick = 0;
  let cmdSelectedIdx = 0;

  const TERMINAL_SNIPPETS = {
    profile: {
      raw: `{
  "name": "Thauan Matheus Martins Dutra",
  "role": "Backend Developer | Integrations & Open Finance",
  "location": "Florianopolis, SC, Brazil",
  "experience_tech_years": "5+",
  "domain": ["Accounting SaaS", "Open Finance", "Applied AI"],
  "education": "ADS (UniCesumar, Nov/2026) + CS50P (HarvardX)",
  "english": "C1 Advanced (EF SET)"
}`,
      html: `<span class="tok-kw">{</span>
  <span class="tok-key">"name"</span>: <span class="tok-str">"Thauan Matheus Martins Dutra"</span>,
  <span class="tok-key">"role"</span>: <span class="tok-str">"Backend Developer | Integrations &amp; Open Finance"</span>,
  <span class="tok-key">"location"</span>: <span class="tok-str">"Florianopolis, SC, Brazil"</span>,
  <span class="tok-key">"experience_tech_years"</span>: <span class="tok-str">"5+"</span>,
  <span class="tok-key">"domain"</span>: [<span class="tok-str">"Accounting SaaS"</span>, <span class="tok-str">"Open Finance"</span>, <span class="tok-str">"Applied AI"</span>],
  <span class="tok-key">"education"</span>: <span class="tok-str">"ADS (UniCesumar, Nov/2026) + CS50P (HarvardX)"</span>,
  <span class="tok-key">"english"</span>: <span class="tok-str">"C1 Advanced (EF SET)"</span>
<span class="tok-kw">}</span>`,
      runResponse: '✓ 200 OK (38ms) · Profile verified: Python · Node.js · PostgreSQL · Open Finance',
    },
    stack: {
      raw: `export const coreStack = {
  languages: ["Python", "Node.js", "JavaScript", "SQL"],
  integrations: ["REST", "Open Finance (Pluggy)", "SOAP/XML"],
  databases: ["PostgreSQL", "Apache Superset"],
  infraAndQa: ["Docker", "Azure DevOps", "Vercel", "pytest"],
  appliedAI: ["@google/genai", "Receipt Vision", "MCP"]
} as const;`,
      html: `<span class="tok-kw">export const</span> coreStack = <span class="tok-kw">{</span>
  <span class="tok-key">languages</span>: [<span class="tok-str">"Python"</span>, <span class="tok-str">"Node.js"</span>, <span class="tok-str">"JavaScript"</span>, <span class="tok-str">"SQL"</span>],
  <span class="tok-key">integrations</span>: [<span class="tok-str">"REST"</span>, <span class="tok-str">"Open Finance (Pluggy)"</span>, <span class="tok-str">"SOAP/XML"</span>],
  <span class="tok-key">databases</span>: [<span class="tok-str">"PostgreSQL"</span>, <span class="tok-str">"Apache Superset"</span>],
  <span class="tok-key">infraAndQa</span>: [<span class="tok-str">"Docker"</span>, <span class="tok-str">"Azure DevOps"</span>, <span class="tok-str">"Vercel"</span>, <span class="tok-str">"pytest"</span>],
  <span class="tok-key">appliedAI</span>: [<span class="tok-str">"@google/genai"</span>, <span class="tok-str">"Receipt Vision"</span>, <span class="tok-str">"MCP"</span>]
<span class="tok-kw">} as const</span>;`,
      runResponse: '✓ Typecheck passed · 0 errors · Ready for API & Data Engineering workflows',
    },
    http: {
      raw: `# Open Finance Accounting MVP (Pluggy API)
GET /api/transactions?accountId=acc_pj_01&from=2026-10-01
Authorization: Bearer <server-side-token>
X-Tenant-Scope: accounting-firm-partner

# 200 OK -> Normalized PJ / PF / Brokerage Entries
{ "status": "synced", "validatedWith": "Real Partner Data", "readyFor": "Bookkeeping" }`,
      html: `<span class="tok-com"># Open Finance Accounting MVP (Pluggy API)</span>
<span class="tok-kw">GET</span> /api/transactions?accountId=<span class="tok-str">acc_pj_01</span>&amp;from=<span class="tok-num">2026-10-01</span>
<span class="tok-key">Authorization</span>: Bearer &lt;server-side-token&gt;
<span class="tok-key">X-Tenant-Scope</span>: accounting-firm-partner

<span class="tok-com"># 200 OK -&gt; Normalized PJ / PF / Brokerage Entries</span>
{ <span class="tok-key">"status"</span>: <span class="tok-str">"synced"</span>, <span class="tok-key">"validatedWith"</span>: <span class="tok-str">"Real Partner Data"</span>, <span class="tok-key">"readyFor"</span>: <span class="tok-str">"Bookkeeping"</span> }`,
      runResponse: '✓ HTTP/1.1 200 OK (42ms) · Pluggy payload normalized for PJ/PF/CAEPF bookkeeping',
    },
  };

  const PROJECT_SVGS = {
    'anas-bakery': `<svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="94" height="84" rx="10" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.45"/>
      <path d="M32 42H98M32 58H82M32 74H68" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M112 60H152" stroke="#2DD4BF" stroke-width="2" stroke-dasharray="4 4"/>
      <rect x="152" y="24" width="66" height="72" rx="10" fill="#10253E" stroke="#2DD4BF" stroke-opacity="0.6"/>
      <circle cx="185" cy="52" r="14" stroke="#2DD4BF" stroke-width="2.2"/>
      <path d="M185 45V59M178 52H192" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
      <path d="M218 60H248" stroke="#38BDF8" stroke-width="2"/>
      <rect x="248" y="34" width="54" height="52" rx="10" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.45"/>
      <path d="M262 66L271 54L279 61L289 48" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'open-finance-mvp': `<svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="16" y="26" width="68" height="68" rx="12" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.5"/>
      <path d="M35 55H65M35 67H56" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M84 60H126" stroke="#2DD4BF" stroke-width="2.2"/>
      <circle cx="160" cy="60" r="28" fill="#10253E" stroke="#2DD4BF" stroke-width="2"/>
      <path d="M148 60L156 68L173 51" stroke="#2DD4BF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M188 60H230" stroke="#38BDF8" stroke-width="2.2" stroke-dasharray="5 4"/>
      <rect x="230" y="22" width="74" height="22" rx="6" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.4"/>
      <rect x="230" y="49" width="74" height="22" rx="6" fill="#0B192C" stroke="#2DD4BF" stroke-opacity="0.45"/>
      <rect x="230" y="76" width="74" height="22" rx="6" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.4"/>
    </svg>`,
    'validador-pdf': `<svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="34" y="16" width="76" height="88" rx="10" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.5"/>
      <path d="M50 38H94M50 52H90M50 66H78M50 80H86" stroke="#94A3B8" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M110 60H148" stroke="#38BDF8" stroke-width="2.2"/>
      <polygon points="168,26 204,46 204,74 168,94 132,74 132,46" fill="#10253E" stroke="#2DD4BF" stroke-width="2" transform="translate(14,0)"/>
      <path d="M172 60L180 68L194 52" stroke="#2DD4BF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M218 60H252" stroke="#2DD4BF" stroke-width="2.2"/>
      <rect x="252" y="34" width="44" height="52" rx="8" fill="#0B192C" stroke="#2DD4BF" stroke-opacity="0.6"/>
      <path d="M264 52H284M264 64H284" stroke="#2DD4BF" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`,
    'transactions-pluggy': `<svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="22" y="28" width="72" height="64" rx="10" fill="#0B192C" stroke="#94A3B8" stroke-opacity="0.4"/>
      <circle cx="58" cy="54" r="10" stroke="#38BDF8" stroke-width="2"/>
      <path d="M44 76C47 68 69 68 72 76" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
      <path d="M94 60H132" stroke="#38BDF8" stroke-width="2"/>
      <rect x="132" y="22" width="64" height="76" rx="10" fill="#10253E" stroke="#2DD4BF" stroke-width="2"/>
      <path d="M152 54V47C152 40 176 40 176 47V54" stroke="#2DD4BF" stroke-width="2.2"/>
      <rect x="148" y="54" width="32" height="24" rx="5" fill="#0B192C" stroke="#2DD4BF" stroke-width="2"/>
      <path d="M196 60H234" stroke="#2DD4BF" stroke-width="2"/>
      <rect x="234" y="28" width="64" height="64" rx="10" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.5"/>
      <path d="M248 48H284M248 60H278M248 72H284" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`,
    'ofx-analysis': `<svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="30" y="20" width="260" height="80" rx="12" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.45"/>
      <path d="M52 44H180" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
      <path d="M52 62H145" stroke="#2DD4BF" stroke-width="3" stroke-linecap="round"/>
      <path d="M52 80H165" stroke="#F87171" stroke-width="3" stroke-linecap="round"/>
      <rect x="206" y="38" width="64" height="44" rx="8" fill="#10253E" stroke="#2DD4BF" stroke-opacity="0.5"/>
      <path d="M220 68L231 56L242 62L256 48" stroke="#2DD4BF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    'lol-analysis': `<svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="24" y="20" width="272" height="80" rx="12" fill="#0B192C" stroke="#38BDF8" stroke-opacity="0.45"/>
      <rect x="52" y="64" width="18" height="22" rx="4" fill="#38BDF8" fill-opacity="0.65"/>
      <rect x="82" y="48" width="18" height="38" rx="4" fill="#2DD4BF" fill-opacity="0.75"/>
      <rect x="112" y="36" width="18" height="50" rx="4" fill="#38BDF8" fill-opacity="0.9"/>
      <circle cx="222" cy="60" r="24" stroke="#2DD4BF" stroke-width="3" stroke-dasharray="110 40"/>
      <text x="222" y="65" text-anchor="middle" fill="#E2E8F0" font-size="13" font-family="monospace" font-weight="700">ML</text>
    </svg>`,
  };

  function el(id) { return document.getElementById(id); }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Theme
  function initTheme() {
    const saved = localStorage.getItem('tm_theme') || 'dark';
    applyTheme(saved);
    const btn = el('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const label = el('theme-label');
    if (label) label.textContent = theme === 'light' ? 'Light' : 'Dark';
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('tm_theme', next);
  }

  // Scroll Progress, Parallax, Navbar Spy & Back to Top
  function initScrollHandlers() {
    const progress = el('scroll-progress');
    const backBtn = el('back-to-top');
    const ambA = document.querySelector('.hero-ambient-a');
    const ambB = document.querySelector('.hero-ambient-b');
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link[data-section]'));

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      if (progress) progress.style.width = `${pct}%`;

      if (backBtn) backBtn.classList.toggle('visible', scrollTop > 460);

      if (!reducedMotion && scrollTop < 980) {
        if (ambA) ambA.style.transform = `translate3d(0, ${scrollTop * 0.14}px, 0)`;
        if (ambB) ambB.style.transform = `translate3d(0, ${scrollTop * -0.09}px, 0)`;
      }

      let activeId = '';
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          activeId = sec.id;
          break;
        }
      }
      navLinks.forEach((lnk) => lnk.classList.toggle('active', lnk.dataset.section === activeId));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      });
    }
  }

  // Mobile Menu
  function initMobileMenu() {
    const btn = el('menu-toggle');
    const drawer = el('mobile-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Hero Canvas Network
  function initHeroCanvas() {
    const canvas = el('hero-canvas');
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let mouse = { x: -9999, y: -9999 };
    const nodes = [];
    const COUNT = 46;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function seed() {
      nodes.length = 0;
      for (let i = 0; i < COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: 1.6 + Math.random() * 1.8,
        });
      }
    }

    window.addEventListener('resize', () => { resize(); seed(); });
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    resize();
    seed();

    function frame() {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const lineRgb = isLight ? '3, 105, 161' : '56, 189, 248';
      const dotRgb = isLight ? '15, 118, 110' : '45, 212, 191';

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        const dxm = mouse.x - a.x;
        const dym = mouse.y - a.y;
        const distM = Math.hypot(dxm, dym);
        if (distM < 150 && distM > 1) {
          a.x -= (dxm / distM) * 0.35;
          a.y -= (dym / distM) * 0.35;
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRgb}, 0.55)`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 135) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${lineRgb}, ${(1 - d / 135) * 0.24})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  // Typing Effect
  function startTyping(phrases) {
    if (typingTimer) clearTimeout(typingTimer);
    const target = el('typing-text');
    if (!target || !phrases.length) return;

    if (reducedMotion) {
      target.textContent = phrases[0];
      return;
    }

    let pIdx = 0;
    let cIdx = 0;
    let deleting = false;

    function tick() {
      const phrase = phrases[pIdx];
      if (!deleting) {
        cIdx++;
        target.textContent = phrase.slice(0, cIdx);
        if (cIdx === phrase.length) {
          deleting = true;
          typingTimer = setTimeout(tick, 1800);
          return;
        }
        typingTimer = setTimeout(tick, 46);
      } else {
        cIdx--;
        target.textContent = phrase.slice(0, cIdx);
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          typingTimer = setTimeout(tick, 300);
          return;
        }
        typingTimer = setTimeout(tick, 22);
      }
    }

    tick();
  }

  // Interactive Terminal
  function runTerminalSnippet() {
    const out = el('terminal-output');
    const badge = el('terminal-status-badge');
    const txt = el('terminal-status-text');
    const snippet = TERMINAL_SNIPPETS[currentTab];
    if (!out || !snippet) return;

    if (badge && txt) {
      badge.classList.remove('ok');
      txt.textContent = 'RUNNING...';
    }
    out.classList.remove('visible');

    setTimeout(() => {
      out.textContent = snippet.runResponse;
      out.classList.add('visible');
      if (badge && txt) {
        badge.classList.add('ok');
        txt.textContent = '200 OK · 42ms';
      }
    }, 180);
  }

  function initTerminal() {
    const tabs = Array.from(document.querySelectorAll('.terminal-tab'));
    const codeBox = el('terminal-code');
    const copyBtn = el('copy-code-btn');
    const runBtn = el('run-code-btn');
    const out = el('terminal-output');
    const badge = el('terminal-status-badge');
    const statusTxt = el('terminal-status-text');

    function renderTab(name) {
      currentTab = name;
      tabs.forEach((t) => t.classList.toggle('active', t.dataset.tab === name));
      if (codeBox && TERMINAL_SNIPPETS[name]) {
        codeBox.innerHTML = TERMINAL_SNIPPETS[name].html;
      }
      if (out) out.classList.remove('visible');
      if (badge && statusTxt) {
        badge.classList.remove('ok');
        statusTxt.textContent = 'READY · idle';
      }
    }

    tabs.forEach((tab) => tab.addEventListener('click', () => renderTab(tab.dataset.tab)));

    if (runBtn) runBtn.addEventListener('click', runTerminalSnippet);

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const txt = TERMINAL_SNIPPETS[currentTab]?.raw || '';
        navigator.clipboard?.writeText(txt).catch(() => {});
        copyBtn.textContent = I18N[currentLang].hero.copiedBtn;
        setTimeout(() => {
          copyBtn.textContent = I18N[currentLang].hero.copyBtn;
        }, 1600);
      });
    }

    renderTab('profile');
  }

  // Counters & Scroll Reveal Observer
  function observeReveals() {
    const revealEls = Array.from(document.querySelectorAll('.reveal:not(.is-visible)'));
    const counters = Array.from(document.querySelectorAll('[data-count]:not([data-done])'));

    function animateCounter(node) {
      if (node.dataset.done) return;
      node.dataset.done = '1';
      const target = Number(node.dataset.count || 0);
      const prefix = node.dataset.prefix || '';
      const suffix = node.dataset.suffix || '';
      const formatDot = node.dataset.format === 'pt-dot';

      if (reducedMotion) {
        const val = formatDot ? target.toLocaleString('pt-BR') : String(target);
        node.textContent = `${prefix}${val}${suffix}`;
        return;
      }

      const start = performance.now();
      const duration = 1000;
      function step(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        const formatted = formatDot ? current.toLocaleString('pt-BR') : String(current);
        node.textContent = `${prefix}${formatted}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window) || reducedMotion) {
      revealEls.forEach((n) => n.classList.add('is-visible'));
      counters.forEach(animateCounter);
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              if (entry.target.hasAttribute('data-count')) animateCounter(entry.target);
              entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
      );
    }

    revealEls.forEach((n) => {
      const rect = n.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        n.classList.add('is-visible');
      } else {
        revealObserver.observe(n);
      }
    });
    counters.forEach((c) => revealObserver.observe(c));
  }

  // Spotlight, 3D Tilt & Magnetic Buttons
  function bindInteractiveEffects(container = document) {
    container.querySelectorAll('.spotlight-card').forEach((card) => {
      if (card.dataset.spotBound) return;
      card.dataset.spotBound = '1';
      const isTilt = card.classList.contains('tilt-card') && !reducedMotion;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        if (isTilt && window.innerWidth > 900) {
          const rx = ((y / rect.height) - 0.5) * -5;
          const ry = ((x / rect.width) - 0.5) * 5;
          card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
        }
      }, { passive: true });

      if (isTilt) {
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      }
    });

    if (!reducedMotion) {
      container.querySelectorAll('.magnetic-btn').forEach((btn) => {
        if (btn.dataset.magBound) return;
        btn.dataset.magBound = '1';
        btn.addEventListener('mousemove', (e) => {
          if (btn.disabled || window.innerWidth <= 900) return;
          const rect = btn.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.16;
          const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.16;
          btn.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = '';
        });
      });
    }
  }

  // Projects Carousel + Autoplay
  function getFilteredProjects() {
    const items = I18N[currentLang].projects.items;
    if (currentFilter === 'all') return items;
    return items.filter((p) => p.category === currentFilter);
  }

  function getVisibleCount() {
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 1080) return 2;
    return 3;
  }

  function getMaxSlide() {
    const track = el('carousel-track');
    if (!track) return 0;
    return Math.max(0, track.children.length - getVisibleCount());
  }

  function updateCarouselTransform(animate = true) {
    const track = el('carousel-track');
    const prevBtn = el('carousel-prev');
    const nextBtn = el('carousel-next');
    const dotsWrap = el('carousel-dots');
    const counter = el('carousel-counter');
    if (!track) return;

    const cards = Array.from(track.children);
    const maxIndex = getMaxSlide();
    if (currentSlide > maxIndex) currentSlide = maxIndex;
    if (currentSlide < 0) currentSlide = 0;

    track.classList.toggle('no-transition', !animate);

    if (cards.length > 0) {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 22;
      track.style.transform = `translateX(-${currentSlide * (cardWidth + gap)}px)`;
    } else {
      track.style.transform = 'translateX(0)';
    }

    if (counter) {
      const total = String(cards.length).padStart(2, '0');
      const cur = String(Math.min(cards.length, currentSlide + 1)).padStart(2, '0');
      counter.textContent = `${cur} / ${total}`;
    }

    if (prevBtn) prevBtn.disabled = currentSlide <= 0;
    if (nextBtn) nextBtn.disabled = currentSlide >= maxIndex;

    if (dotsWrap) {
      const pages = maxIndex + 1;
      dotsWrap.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `carousel-dot${i === currentSlide ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => {
          currentSlide = i;
          autoplayElapsed = 0;
          updateCarouselTransform(true);
        });
        dotsWrap.appendChild(dot);
      }
    }
  }

  function renderProjectsCarousel() {
    const track = el('carousel-track');
    if (!track) return;
    const dict = I18N[currentLang].projects;
    const items = getFilteredProjects();

    track.innerHTML = items
      .map(
        (proj) => `
      <article class="spotlight-card tilt-card project-card" data-project-id="${proj.id}">
        <div class="project-visual" data-open-modal="${proj.id}" role="button" tabindex="0" aria-label="${escapeHtml(proj.title)}">
          <span class="project-badge">${escapeHtml(proj.categoryLabel)}</span>
          ${proj.highlight ? `<span class="project-highlight-badge">${escapeHtml(proj.highlight)}</span>` : ''}
          ${PROJECT_SVGS[proj.id] || ''}
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          <p class="project-summary">${escapeHtml(proj.summary)}</p>
          <div class="tag-row">
            ${proj.tags.map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="project-footer">
            <button type="button" class="arch-btn" data-open-modal="${proj.id}">
              <span>${escapeHtml(dict.archBtn)}</span>
              <span aria-hidden="true">→</span>
            </button>
            <div class="project-links">
              <a class="icon-link" href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub ${escapeHtml(proj.title)}" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
              </a>
              ${
                proj.liveUrl
                  ? `<a class="icon-link" href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live ${escapeHtml(proj.title)}" title="Demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>`
                  : ''
              }
            </div>
          </div>
        </div>
      </article>`
      )
      .join('');

    bindInteractiveEffects(track);
    track.querySelectorAll('[data-open-modal]').forEach((node) => {
      node.addEventListener('click', () => openProjectModal(node.dataset.openModal));
      if (node.classList.contains('project-visual')) {
        node.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(node.dataset.openModal);
          }
        });
      }
    });

    autoplayElapsed = 0;
    requestAnimationFrame(() => updateCarouselTransform(false));
  }

  function updateAutoplayIcons() {
    const pauseIcon = el('autoplay-icon-pause');
    const playIcon = el('autoplay-icon-play');
    if (pauseIcon) pauseIcon.style.display = autoplayEnabled ? 'block' : 'none';
    if (playIcon) playIcon.style.display = autoplayEnabled ? 'none' : 'block';
  }

  function initCarouselEvents() {
    const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
    const prevBtn = el('carousel-prev');
    const nextBtn = el('carousel-next');
    const playBtn = el('carousel-autoplay');
    const viewport = el('carousel-viewport');
    const progressFill = el('carousel-progress-fill');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        currentSlide = 0;
        autoplayElapsed = 0;
        filterBtns.forEach((b) => b.classList.toggle('active', b === btn));
        renderProjectsCarousel();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide--;
        autoplayElapsed = 0;
        updateCarouselTransform(true);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide++;
        autoplayElapsed = 0;
        updateCarouselTransform(true);
      });
    }

    if (playBtn) {
      updateAutoplayIcons();
      playBtn.addEventListener('click', () => {
        autoplayEnabled = !autoplayEnabled;
        autoplayElapsed = 0;
        updateAutoplayIcons();
        if (!autoplayEnabled && progressFill) progressFill.style.width = '0%';
      });
    }

    if (viewport) {
      viewport.addEventListener('mouseenter', () => { autoplayPaused = true; });
      viewport.addEventListener('mouseleave', () => { autoplayPaused = false; });
      viewport.addEventListener('focusin', () => { autoplayPaused = true; });
      viewport.addEventListener('focusout', () => { autoplayPaused = false; });

      viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          currentSlide--;
          autoplayElapsed = 0;
          updateCarouselTransform(true);
        } else if (e.key === 'ArrowRight') {
          currentSlide++;
          autoplayElapsed = 0;
          updateCarouselTransform(true);
        }
      });

      let startX = 0;
      let dragging = false;
      viewport.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button, a')) return;
        dragging = true;
        autoplayPaused = true;
        startX = e.clientX;
        viewport.classList.add('dragging');
      });

      window.addEventListener('pointerup', (e) => {
        if (!dragging) return;
        dragging = false;
        autoplayPaused = false;
        viewport.classList.remove('dragging');
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 48) {
          if (diff < 0) currentSlide++;
          else currentSlide--;
          autoplayElapsed = 0;
          updateCarouselTransform(true);
        }
      });
    }

    // Autoplay loop
    lastAutoTick = performance.now();
    function autoLoop(now) {
      const dt = now - lastAutoTick;
      lastAutoTick = now;

      const modalOpen = el('project-modal')?.classList.contains('open') || el('cmd-palette')?.classList.contains('open');
      const maxIdx = getMaxSlide();

      if (autoplayEnabled && !autoplayPaused && !modalOpen && maxIdx > 0) {
        autoplayElapsed += dt;
        if (progressFill) {
          progressFill.style.width = `${Math.min(100, (autoplayElapsed / AUTOPLAY_MS) * 100)}%`;
        }
        if (autoplayElapsed >= AUTOPLAY_MS) {
          autoplayElapsed = 0;
          currentSlide = currentSlide >= maxIdx ? 0 : currentSlide + 1;
          updateCarouselTransform(true);
        }
      } else if (progressFill && !autoplayEnabled) {
        progressFill.style.width = '0%';
      }

      requestAnimationFrame(autoLoop);
    }
    requestAnimationFrame(autoLoop);

    window.addEventListener('resize', () => updateCarouselTransform(false));
  }

  // Modal
  function openProjectModal(id) {
    const dict = I18N[currentLang].projects;
    const proj = dict.items.find((p) => p.id === id);
    const backdrop = el('project-modal');
    if (!proj || !backdrop) return;

    lastFocusedEl = document.activeElement;
    el('modal-category').textContent = proj.categoryLabel;
    el('modal-title').textContent = proj.title;
    el('modal-problem-title').textContent = dict.modalLabels.problem;
    el('modal-problem').textContent = proj.problem;
    el('modal-solution-title').textContent = dict.modalLabels.solution;
    el('modal-solution').textContent = proj.solution;
    el('modal-arch-title').textContent = dict.modalLabels.arch;
    el('modal-arch').textContent = proj.arch;
    el('modal-impact-title').textContent = dict.modalLabels.impact;
    el('modal-impact').textContent = proj.impact;
    el('modal-tags').innerHTML = proj.tags.map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

    const linksBox = el('modal-links');
    linksBox.innerHTML = `<a class="btn btn-primary" href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(dict.modalLabels.repo)}</a>`;
    if (proj.liveUrl) {
      linksBox.innerHTML += `<a class="btn btn-secondary" href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(dict.modalLabels.live)}</a>`;
    }

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    el('modal-close').focus();
  }

  function closeProjectModal() {
    const backdrop = el('project-modal');
    if (!backdrop || !backdrop.classList.contains('open')) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  function initModal() {
    const backdrop = el('project-modal');
    const closeBtn = el('modal-close');
    if (!backdrop || !closeBtn) return;

    closeBtn.addEventListener('click', closeProjectModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeProjectModal();
    });
  }

  // Command Palette (Ctrl+K)
  function getCmdActions() {
    const d = I18N[currentLang];
    const actions = [
      { label: d.nav.about, group: d.cmd.navGroup, run: () => { location.hash = '#sobre'; } },
      { label: d.nav.projects, group: d.cmd.navGroup, run: () => { location.hash = '#projetos'; } },
      { label: d.nav.stack, group: d.cmd.navGroup, run: () => { location.hash = '#stack'; } },
      { label: d.nav.journey, group: d.cmd.navGroup, run: () => { location.hash = '#trajetoria'; } },
      { label: d.nav.contact, group: d.cmd.navGroup, run: () => { location.hash = '#contato'; } },
      ...d.projects.items.map((p) => ({
        label: p.title,
        group: d.cmd.projGroup,
        run: () => openProjectModal(p.id),
      })),
      { label: d.cmd.runTerminal, group: d.cmd.actGroup, run: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); runTerminalSnippet(); } },
      { label: d.cmd.toggleLang, group: d.cmd.actGroup, run: () => applyLanguage(currentLang === 'pt' ? 'en' : 'pt') },
      { label: d.cmd.toggleTheme, group: d.cmd.actGroup, run: () => toggleTheme() },
      { label: d.cmd.copyEmail, group: d.cmd.actGroup, run: () => copyEmail() },
      { label: d.cmd.openWhatsapp, group: d.cmd.actGroup, run: () => window.open(getWhatsappUrl(), '_blank', 'noopener') },
      { label: d.cmd.openGithub, group: d.cmd.actGroup, run: () => window.open('https://github.com/TawanMd', '_blank', 'noopener') },
      { label: d.cmd.openLinkedin, group: d.cmd.actGroup, run: () => window.open('https://www.linkedin.com/in/thauan-matheus-martins-dutra-433a02213/', '_blank', 'noopener') },
    ];
    return actions;
  }

  function renderCmdList() {
    const input = el('cmd-input');
    const list = el('cmd-list');
    if (!list || !input) return;
    const q = input.value.trim().toLowerCase();
    const items = getCmdActions().filter((a) => !q || a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q));
    if (cmdSelectedIdx >= items.length) cmdSelectedIdx = Math.max(0, items.length - 1);

    list.innerHTML = items
      .map(
        (item, idx) => `
      <li class="cmd-item${idx === cmdSelectedIdx ? ' selected' : ''}" role="option" data-cmd-idx="${idx}">
        <span>${escapeHtml(item.label)}</span>
        <span class="cmd-item-group">${escapeHtml(item.group)}</span>
      </li>`
      )
      .join('');

    list.querySelectorAll('.cmd-item').forEach((li) => {
      li.addEventListener('click', () => {
        const idx = Number(li.dataset.cmdIdx);
        closeCmdPalette();
        items[idx]?.run();
      });
    });

    list._filtered = items;
  }

  function openCmdPalette() {
    const backdrop = el('cmd-palette');
    const input = el('cmd-input');
    if (!backdrop || !input) return;
    lastFocusedEl = document.activeElement;
    cmdSelectedIdx = 0;
    input.value = '';
    input.placeholder = I18N[currentLang].cmd.placeholder;
    el('cmd-help').textContent = I18N[currentLang].cmd.help;
    renderCmdList();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 10);
  }

  function closeCmdPalette() {
    const backdrop = el('cmd-palette');
    if (!backdrop || !backdrop.classList.contains('open')) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  function initCmdPalette() {
    const trigger = el('cmd-trigger');
    const backdrop = el('cmd-palette');
    const closeBtn = el('cmd-close');
    const input = el('cmd-input');
    const list = el('cmd-list');
    if (!backdrop || !input || !list) return;

    if (trigger) trigger.addEventListener('click', openCmdPalette);
    if (closeBtn) closeBtn.addEventListener('click', closeCmdPalette);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCmdPalette();
    });

    input.addEventListener('input', () => {
      cmdSelectedIdx = 0;
      renderCmdList();
    });

    input.addEventListener('keydown', (e) => {
      const items = list._filtered || [];
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        cmdSelectedIdx = Math.min(items.length - 1, cmdSelectedIdx + 1);
        renderCmdList();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        cmdSelectedIdx = Math.max(0, cmdSelectedIdx - 1);
        renderCmdList();
      } else if (e.key === 'Enter' && items[cmdSelectedIdx]) {
        e.preventDefault();
        const chosen = items[cmdSelectedIdx];
        closeCmdPalette();
        chosen.run();
      }
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('open')) closeCmdPalette();
        else openCmdPalette();
      } else if (e.key === 'Escape') {
        closeCmdPalette();
        closeProjectModal();
      }
    });
  }

  // Toast & Copy Email
  function showToast(msg) {
    const toast = el('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function copyEmail() {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    showToast(I18N[currentLang].contact.emailToast);
  }

  function getWhatsappUrl() {
    const msg = I18N[currentLang]?.contact?.whatsappMsg || '';
    return `https://wa.me/5548988015140?text=${encodeURIComponent(msg)}`;
  }

  function initContact() {
    const btn = el('copy-email-btn');
    if (btn) btn.addEventListener('click', copyEmail);
  }

  // Render Language Across Page
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tm_lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    const d = I18N[lang];
    const langLabel = el('lang-label');
    if (langLabel) langLabel.textContent = lang === 'pt' ? 'PT' : 'EN';

    const waUrl = getWhatsappUrl();
    const waContactBtn = el('whatsapp-contact-btn');
    const waFloatBtn = el('whatsapp-float');
    if (waContactBtn) waContactBtn.href = waUrl;
    if (waFloatBtn) {
      waFloatBtn.href = waUrl;
      waFloatBtn.setAttribute('aria-label', d.contact.whatsappAria);
      waFloatBtn.setAttribute('data-tooltip', d.contact.whatsappAria);
    }

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const path = node.dataset.i18n.split('.');
      let val = d;
      for (const k of path) val = val?.[k];
      if (typeof val === 'string') node.textContent = val;
    });

    const copyBtn = el('copy-code-btn');
    if (copyBtn) copyBtn.textContent = d.hero.copyBtn;
    const runBtn = el('run-code-btn');
    if (runBtn) runBtn.textContent = d.hero.runBtn;

    startTyping(d.hero.typingPhrases);

    // Pillars (individual staggered reveals)
    const pillarsBox = el('pillars-grid');
    if (pillarsBox) {
      const icons = [
        `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>`,
        `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
        `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      ];
      pillarsBox.innerHTML = d.about.pillars
        .map(
          (p, idx) => `
        <article class="spotlight-card tilt-card pillar-card reveal reveal-up" style="--delay: ${idx * 90}ms;">
          <div class="pillar-icon">${icons[idx] || icons[0]}</div>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.desc)}</p>
        </article>`
        )
        .join('');
    }

    // Other projects with clickable links
    const otherGrid = el('other-projects-grid');
    if (otherGrid) {
      otherGrid.innerHTML = d.projects.otherItems
        .map(
          (o) => `
        <div class="other-item">
          <strong>${escapeHtml(o.title)}</strong>
          <p>${escapeHtml(o.desc)}</p>
          ${
            o.links && o.links.length
              ? `<div class="other-links">${o.links
                  .map((l) => `<a class="inline-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} ↗</a>`)
                  .join('')}</div>`
              : ''
          }
        </div>`
        )
        .join('');
    }

    // Stack grid (individual staggered reveals)
    const stackGrid = el('stack-grid');
    if (stackGrid) {
      stackGrid.innerHTML = d.stack.groups
        .map(
          (g, idx) => `
        <article class="spotlight-card stack-card reveal reveal-up" style="--delay: ${idx * 80}ms;">
          <h3><span class="stack-dot"></span>${escapeHtml(g.title)}</h3>
          <div class="stack-badges">
            ${g.items.map((item) => `<span class="stack-badge">${escapeHtml(item)}</span>`).join('')}
          </div>
        </article>`
        )
        .join('');
    }

    // Timeline (individual staggered reveals)
    const timeline = el('timeline-list');
    if (timeline) {
      timeline.innerHTML = d.journey.timeline
        .map(
          (item, idx) => `
        <article class="spotlight-card timeline-item reveal reveal-up" style="--delay: ${idx * 85}ms;">
          <span class="timeline-node" aria-hidden="true"></span>
          <div class="timeline-top">
            <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
            <span class="timeline-date">${escapeHtml(item.date)}</span>
          </div>
          <div class="timeline-company">${escapeHtml(item.company)}</div>
          <ul class="timeline-bullets">
            ${item.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
          </ul>
        </article>`
        )
        .join('');
    }

    // Credentials
    const credEdu = el('cred-edu');
    const credCert = el('cred-cert');
    const credLang = el('cred-lang');
    if (credEdu) credEdu.innerHTML = d.journey.eduItems.map((c) => `<li><strong>${escapeHtml(c.title)}</strong><span>${escapeHtml(c.sub)}</span></li>`).join('');
    if (credCert) credCert.innerHTML = d.journey.certItems.map((c) => `<li><strong>${escapeHtml(c.title)}</strong><span>${escapeHtml(c.sub)}</span></li>`).join('');
    if (credLang) credLang.innerHTML = d.journey.langItems.map((c) => `<li><strong>${escapeHtml(c.title)}</strong><span>${escapeHtml(c.sub)}</span></li>`).join('');

    currentSlide = 0;
    renderProjectsCarousel();
    bindInteractiveEffects(document);
    observeReveals();
  }

  function initLangToggle() {
    const btn = el('lang-toggle');
    if (btn) btn.addEventListener('click', () => applyLanguage(currentLang === 'pt' ? 'en' : 'pt'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollHandlers();
    initMobileMenu();
    initHeroCanvas();
    initTerminal();
    initCarouselEvents();
    initModal();
    initCmdPalette();
    initContact();
    initLangToggle();
    applyLanguage(currentLang);
  });
})();
