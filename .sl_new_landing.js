function renderLandingPage() {
  return `
    <div class="min-h-screen flex flex-col relative overflow-hidden">

      <!-- ============================ HERO ============================ -->
      <section class="sl-hero">
        <div class="sl-hero__grid">
          <div class="sl-reveal">

            <div class="sl-eyebrow">
              <div class="sl-eyebrow__row">
                <span>भारत सरकार</span>
                <i class="sl-eyebrow__dot"></i>
                <span>GOVERNMENT OF INDIA</span>
              </div>
              <p class="sl-eyebrow__ministry">Ministry of Consumer Affairs, Food &amp; Public Distribution</p>
            </div>

            <div class="sl-badge-id">
              <i class="sl-badge-id__pulse"></i>
              <span>SIH 2026 Problem ID SIH26034</span>
            </div>

            <h1 class="sl-display">
              <span>Every declaration,</span>
              <span>checked against</span>
              <span class="sl-display__accent">the law in seconds.</span>
            </h1>

            <p class="sl-sub">
              SatyaLabel scans packaged commodity labels and checks them against the
              Legal Metrology (Packaged Commodities) Rules, 2011 deterministically.
            </p>

            <div class="sl-cta-row">
              <a href="#/login" class="sl-btn sl-btn--primary">
                Start Scanning
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="#pipeline" class="sl-btn sl-btn--ghost">Explore Pipeline</a>
            </div>

            <div class="sl-trust">
              <span><i data-lucide="check-circle" class="w-4 h-4" style="color:var(--sl-green)"></i> Deterministic OCR</span>
              <span><i data-lucide="shield-check" class="w-4 h-4" style="color:var(--sl-blue)"></i> 100% Statutory Grounding</span>
              <span><i data-lucide="zap" class="w-4 h-4" style="color:var(--sl-saffron)"></i> &lt; 3s Processing</span>
            </div>
          </div>

          <div class="sl-emblem sl-reveal" style="--sl-delay:120ms">
            <img id="sl-emblem-img" src="assets/emblem-transparent.png"
                 alt="State Emblem of India" draggable="false" />
          </div>
        </div>
      </section>

      <!-- ======================== HOW IT WORKS ======================== -->
      <section class="sl-section">
        <div class="sl-shell">
          <div class="sl-head sl-reveal">
            <h2>How It Works</h2>
            <p>From pixels on a pack to a cited rule &mdash; four deterministic stages.</p>
          </div>

          <div class="sl-steps sl-reveal">

            <!-- 01 -->
            <div class="sl-step">
              <span class="sl-tag sl-step__tag">01_PIXELS</span>
              <div class="sl-chip-label">
                <div class="sl-chip-label__bar"></div>
                <div class="sl-chip-label__bar sl-chip-label__bar--sm"></div>
                <div class="sl-chip-label__bar sl-chip-label__bar--xs"></div>
                <div class="sl-chip-label__mrp">MRP ₹ 250</div>
                <div class="laser-scanner-line"></div>
              </div>
              <p class="sl-step__cap">Vision OCR identifies<br/>declarations on pack</p>
            </div>

            <!-- 02 -->
            <div class="sl-step">
              <span class="sl-tag sl-step__tag">02_EXTRACT</span>
              <pre class="sl-json" id="sl-json-block" aria-label='{ "mrp": "Rs. 250", "net_qty": "100g", "mfg_date": "08/2025" }'></pre>
              <p class="sl-step__cap">Unstructured text to<br/>structured JSON</p>
            </div>

            <!-- 03 -->
            <div class="sl-step">
              <span class="sl-tag sl-step__tag">03_VERIFY</span>
              <div class="relative" style="position:relative;padding:6px 0">
                <i data-lucide="scale" class="w-10 h-10" style="color:var(--color-text-secondary)"></i>
                <span class="sl-dot sl-dot--fail" style="position:absolute;top:-2px;right:-8px;width:11px;height:11px"></span>
              </div>
              <p class="sl-step__cap">Rule Engine compares<br/>against LMPC 2011</p>
            </div>

            <!-- 04 -->
            <div class="sl-step">
              <span class="sl-tag sl-step__tag">04_PENALTY</span>
              <div class="sl-penalty">
                <div class="sl-penalty__row">
                  <i data-lucide="triangle-alert" class="w-4 h-4" style="color:var(--sl-red)"></i>
                  <span class="sl-pill sl-pill--action">ACTION REQ</span>
                </div>
                <div class="sl-penalty__title">Non-Compliance</div>
                <div class="sl-penalty__rule">Rule 6(1)(f)</div>
                <div class="sl-penalty__note">Missing inclusive tax stmt</div>
              </div>
              <p class="sl-step__cap">Notice drafted with<br/>the exact rule cited</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================ AUTOMATED COMPLIANCE PIPELINE ================ -->
      <section class="sl-section sl-section--alt" id="pipeline" style="scroll-margin-top:72px">
        <div class="sl-shell">
          <div class="sl-head sl-reveal">
            <h2>Automated Compliance Pipeline</h2>
            <p>Experience the multi-stage architecture continuously at work in real-time.</p>
          </div>

          <div class="sl-pipe">

            <!-- 1. Capture -->
            <a href="#/login" class="sl-panel sl-panel--capture sl-reveal" style="text-decoration:none">
              <div class="sl-panel__head">
                <span class="sl-panel__icon" style="color:var(--sl-blue)">
                  <i data-lucide="upload" class="w-4 h-4"></i>
                </span>
                <h3>1. Capture</h3>
              </div>
              <div class="sl-panel__body sl-dropzone">
                <i data-lucide="image-plus" class="w-5 h-5" style="color:var(--sl-blue)"></i>
                <span>Drop label image here</span>
              </div>
            </a>

            <!-- 2. Extract -->
            <div class="sl-panel sl-panel--extract sl-reveal" style="--sl-delay:110ms">
              <div class="sl-panel__head">
                <span class="sl-panel__icon" style="color:#a98bff">
                  <i data-lucide="scan-line" class="w-4 h-4"></i>
                </span>
                <h3>2. Extract</h3>
              </div>
              <div class="sl-panel__body">
                <div class="sl-panel__status" id="sl-extract-status">Awaiting Image...</div>
              </div>
            </div>

            <!-- 3. Adjudicate -->
            <div class="sl-panel sl-panel--judge sl-reveal" style="--sl-delay:220ms">
              <div class="sl-panel__head">
                <span class="sl-panel__icon" style="color:var(--sl-green)">
                  <i data-lucide="scale" class="w-4 h-4"></i>
                </span>
                <h3>3. Adjudicate</h3>
              </div>
              <div class="sl-panel__body">
                <div class="sl-verdict">
                  <div class="sl-verdict__top">
                    <span class="sl-verdict__rule">Rule 6(1)(a)</span>
                    <span class="sl-dot sl-dot--pass"></span>
                  </div>
                  <div class="sl-verdict__name">Generic Name</div>
                  <div class="sl-verdict__foot"><span class="sl-pill sl-pill--pass">PASS</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ======================= WHY SATYALABEL ======================= -->
      <section class="sl-section">
        <div class="sl-shell sl-shell--narrow">
          <div class="sl-head sl-reveal">
            <h2>Why SatyaLabel</h2>
            <p>The difference in time is the difference in scale.</p>
          </div>

          <div class="sl-compare sl-reveal">
            <div class="sl-compare__tabs">
              <button type="button" class="sl-compare__tab" data-tab="manual">Manual Inspection</button>
              <button type="button" class="sl-compare__tab is-active" data-tab="ai">SatyaLabel AI</button>
            </div>

            <div class="sl-compare__body" data-panel="ai">
              <div class="sl-compare__list">
                <div class="sl-compare__item">
                  <i data-lucide="scan-line" class="w-5 h-5" style="color:var(--sl-blue)"></i>
                  <span>Instant deterministic OCR</span>
                </div>
                <div class="sl-compare__item">
                  <i data-lucide="cpu" class="w-5 h-5" style="color:var(--sl-blue)"></i>
                  <span>Automated Rule Engine</span>
                </div>
                <div class="sl-compare__item">
                  <i data-lucide="file-check" class="w-5 h-5" style="color:var(--sl-blue)"></i>
                  <span>One-click PDF Notice</span>
                </div>
              </div>
              <div class="sl-compare__rule"></div>
              <div class="sl-compare__stat sl-compare__stat--good">
                <b>&lt;10s</b>
                <span>Average per Label</span>
              </div>
            </div>

            <div class="sl-compare__body" data-panel="manual" hidden>
              <div class="sl-compare__list">
                <div class="sl-compare__item">
                  <i data-lucide="x" class="w-5 h-5" style="color:var(--sl-red)"></i>
                  <span>Manual physical ruler measuring &amp; PDP calculation</span>
                </div>
                <div class="sl-compare__item">
                  <i data-lucide="x" class="w-5 h-5" style="color:var(--sl-red)"></i>
                  <span>Human cross-referencing against 40+ statutory sub-clauses</span>
                </div>
                <div class="sl-compare__item">
                  <i data-lucide="x" class="w-5 h-5" style="color:var(--sl-red)"></i>
                  <span>Manual drafting of Form VI notices and penalty compounding</span>
                </div>
              </div>
              <div class="sl-compare__rule"></div>
              <div class="sl-compare__stat sl-compare__stat--bad">
                <b>15-20m</b>
                <span>Average per Label</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================== COMPLIANCE RECORD ====================== -->
      <section class="sl-section sl-section--alt">
        <div class="sl-shell sl-shell--narrow">
          <div class="sl-head sl-reveal">
            <h2>Compliance Record</h2>
            <p>Rooted directly in the Legal Metrology Rules, 2011.</p>
          </div>

          <div class="sl-rules">
            <div class="sl-rule sl-reveal">
              <div class="sl-rule__main">
                <span class="sl-dot sl-dot--pass"></span>
                <span>
                  <span class="sl-rule__no">Rule 6(1)(a)</span>
                  <span class="sl-rule__name">Name of Commodity</span>
                </span>
              </div>
              <span class="sl-pill sl-pill--pass">PASS</span>
            </div>

            <div class="sl-rule sl-reveal" style="--sl-delay:80ms">
              <div class="sl-rule__main">
                <span class="sl-dot sl-dot--pass"></span>
                <span>
                  <span class="sl-rule__no">Rule 6(1)(c)</span>
                  <span class="sl-rule__name">Net Quantity</span>
                </span>
              </div>
              <span class="sl-pill sl-pill--pass">PASS</span>
            </div>

            <div class="sl-rule sl-reveal" style="--sl-delay:160ms">
              <div class="sl-rule__main">
                <span class="sl-dot sl-dot--fail"></span>
                <span>
                  <span class="sl-rule__no">Rule 6(1)(e)</span>
                  <span class="sl-rule__name">MRP Details</span>
                </span>
              </div>
              <span class="sl-pill sl-pill--fail">FAIL</span>
            </div>

            <div class="sl-rule sl-reveal" style="--sl-delay:240ms">
              <div class="sl-rule__main">
                <span class="sl-dot sl-dot--pass"></span>
                <span>
                  <span class="sl-rule__no">Rule 9(3)</span>
                  <span class="sl-rule__name">Legibility &amp; Font</span>
                </span>
              </div>
              <span class="sl-pill sl-pill--pass">PASS</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ====================== SYSTEM ARCHITECTURE ==================== -->
      <section class="sl-section">
        <div class="sl-shell">
          <div class="sl-head sl-reveal">
            <h2>System Architecture</h2>
            <p>10+ interconnected technologies parallelized for sub-3-second field audits.
               This is the exact journey of a single scan.</p>
          </div>

          <div class="sl-arch" id="sl-arch">

            <!-- Stage 1 -->
            <div class="sl-stage is-active sl-reveal" data-stage="0">
              <span class="sl-stage__node"></span>
              <div class="sl-stage__meta">
                <span class="sl-stage__label">1. Edge Capture</span>
              </div>
              <div>
                <div class="sl-stage__cards">
                  <div class="sl-tech">
                    <span class="sl-tech__icon">
                      <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor" aria-hidden="true"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>
                    </span>
                    <div>
                      <h3>Next.js &amp; React</h3>
                      <p>Edge-rendered UI routing</p>
                    </div>
                  </div>
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="monitor-smartphone" class="w-5 h-5"></i></span>
                    <div>
                      <h3>PWA Services</h3>
                      <p>Offline queuing in warehouses</p>
                    </div>
                  </div>
                </div>
                <div class="sl-log" data-log="Sending payload..."></div>
              </div>
            </div>

            <!-- Stage 2 -->
            <div class="sl-stage sl-reveal" data-stage="1">
              <span class="sl-stage__node"></span>
              <div class="sl-stage__meta">
                <span class="sl-stage__label">2. Gateway</span>
              </div>
              <div>
                <div class="sl-stage__cards">
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="server" class="w-5 h-5"></i></span>
                    <div>
                      <h3>Node.js API</h3>
                      <p>Backend orchestration</p>
                    </div>
                  </div>
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="file-stack" class="w-5 h-5"></i></span>
                    <div>
                      <h3>Multer Engine</h3>
                      <p>Multi-part image processing</p>
                    </div>
                  </div>
                </div>
                <div class="sl-log" data-log="Images in buffer..."></div>
              </div>
            </div>

            <!-- Stage 3 -->
            <div class="sl-stage sl-reveal" data-stage="2">
              <span class="sl-stage__node"></span>
              <div class="sl-stage__meta">
                <span class="sl-stage__label">3. AI Extraction</span>
              </div>
              <div>
                <div class="sl-stage__cards">
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="cpu" class="w-5 h-5"></i></span>
                    <div>
                      <h3>Gemini 1.5 Flash Vision</h3>
                      <p>Multimodal JSON parsing</p>
                    </div>
                  </div>
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="scan" class="w-5 h-5"></i></span>
                    <div>
                      <h3>Tesseract.js</h3>
                      <p>Deterministic spatial mapping</p>
                    </div>
                  </div>
                </div>
                <div class="sl-log" data-log="Parsing structure..."></div>
              </div>
            </div>

            <!-- Stage 4 -->
            <div class="sl-stage sl-reveal" data-stage="3">
              <span class="sl-stage__node"></span>
              <div class="sl-stage__meta">
                <span class="sl-stage__label">4. Logic &amp; Ledger</span>
              </div>
              <div>
                <div class="sl-stage__cards">
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="code" class="w-5 h-5"></i></span>
                    <div>
                      <h3>Regex Rules Engine</h3>
                      <p>2011 Act compliance logic</p>
                    </div>
                  </div>
                  <div class="sl-tech">
                    <span class="sl-tech__icon"><i data-lucide="database" class="w-5 h-5"></i></span>
                    <div>
                      <h3>PostgreSQL</h3>
                      <p>Immutable penalty ledger</p>
                    </div>
                  </div>
                </div>
                <div class="sl-log" data-log="Generating PDF..."></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================= CLOSING CTA ========================= -->
      <section class="sl-section sl-section--alt">
        <div class="sl-cta sl-reveal">
          <h2>Your label. The law. One scan.</h2>
          <p>No manual cross-referencing. No ambiguity. A deterministic answer with the rule cited.</p>
          <a href="#/login" class="sl-btn sl-btn--primary">
            Launch App
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </section>

      <!-- =========================== FOOTER =========================== -->
      <footer class="sl-footer">
        <div style="display:flex;align-items:center;gap:14px">
          <span class="sl-footer__brand">SatyaLabel</span>
          <span class="sl-footer__tri"><i></i><i></i><i></i></span>
        </div>
        <div>
          <div>Smart India Hackathon 2026 &middot; Problem ID SIH26034</div>
          <div style="margin-top:4px">made by Daksh</div>
        </div>
      </footer>
    </div>
  `;
}

// Teardown handles so repeated navigation to the landing page does not stack
// observers / intervals on top of each other.
let landingCleanups = [];

function teardownLandingInteractions() {
  landingCleanups.forEach((fn) => {
    try { fn(); } catch (e) { /* no-op */ }
  });
  landingCleanups = [];
}

function initLandingInteractions() {
  teardownLandingInteractions();

  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Scroll-triggered reveals ---------- */
  const revealEls = document.querySelectorAll('.sl-reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    revealEls.forEach((el) => revealObserver.observe(el));
    landingCleanups.push(() => revealObserver.disconnect());
  }

  /* ---------- 2. JSON typewriter (02_EXTRACT) ---------- */
  const jsonEl = document.getElementById('sl-json-block');
  if (jsonEl) {
    const tokens = [
      { t: '{\n  ' },
      { t: '"mrp"', c: 'k' }, { t: ': ' }, { t: '"Rs. 250"', c: 'v' }, { t: ',\n  ' },
      { t: '"net_qty"', c: 'k' }, { t: ': ' }, { t: '"100g"', c: 'v' }, { t: ',\n  ' },
      { t: '"mfg_date"', c: 'k' }, { t: ': ' }, { t: '"08/2025"', c: 'v' },
      { t: '\n}' }
    ];
    const total = tokens.reduce((n, tok) => n + tok.t.length, 0);

    const paint = (count) => {
      let left = count;
      let html = '';
      for (const tok of tokens) {
        if (left <= 0) break;
        const slice = tok.t.slice(0, left);
        left -= slice.length;
        html += tok.c
          ? '<span class="' + tok.c + '">' + escapeHtml(slice) + '</span>'
          : escapeHtml(slice);
      }
      if (count < total) html += '<span class="sl-caret">▍</span>';
      jsonEl.innerHTML = html;
    };

    if (reduceMotion) {
      paint(total);
    } else {
      paint(0);
      const startTyping = () => {
        let i = 0;
        const timer = setInterval(() => {
          i += 1;
          paint(i);
          if (i >= total) clearInterval(timer);
        }, 26);
        landingCleanups.push(() => clearInterval(timer));
      };

      if ('IntersectionObserver' in window) {
        const jsonObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startTyping();
              jsonObserver.disconnect();
            }
          });
        }, { threshold: 0.4 });
        jsonObserver.observe(jsonEl);
        landingCleanups.push(() => jsonObserver.disconnect());
      } else {
        startTyping();
      }
    }
  }

  /* ---------- 3. "Extract" panel status cycling ---------- */
  const extractStatus = document.getElementById('sl-extract-status');
  if (extractStatus && !reduceMotion) {
    const phases = [
      'Awaiting Image...',
      'Reading pixels...',
      'Mapping declarations...',
      'Structuring JSON...'
    ];
    let pi = 0;
    const statusTimer = setInterval(() => {
      pi = (pi + 1) % phases.length;
      extractStatus.textContent = phases[pi];
    }, 1900);
    landingCleanups.push(() => clearInterval(statusTimer));
  }

  /* ---------- 4. Why SatyaLabel comparison tabs ---------- */
  const tabs = document.querySelectorAll('.sl-compare__tab');
  const panels = document.querySelectorAll('.sl-compare__body');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      panels.forEach((p) => {
        p.hidden = p.getAttribute('data-panel') !== target;
      });
      if (window.lucide) window.lucide.createIcons();
    });
  });

  /* ---------- 5. System Architecture stages + log typewriter ---------- */
  const stages = Array.from(document.querySelectorAll('.sl-stage'));

  const typeLog = (stage) => {
    const logEl = stage.querySelector('.sl-log');
    if (!logEl) return;
    const text = logEl.getAttribute('data-log') || '';
    if (logEl._timer) clearInterval(logEl._timer);

    if (reduceMotion) {
      logEl.textContent = text;
      return;
    }
    let i = 0;
    logEl.textContent = '';
    logEl._timer = setInterval(() => {
      i += 1;
      logEl.textContent = text.slice(0, i);
      if (i >= text.length) {
        clearInterval(logEl._timer);
        logEl._timer = null;
      }
    }, 34);
  };

  const setActiveStage = (idx) => {
    stages.forEach((stage, i) => {
      const active = i === idx;
      stage.classList.toggle('is-active', active);
      const logEl = stage.querySelector('.sl-log');
      if (active) {
        typeLog(stage);
      } else if (logEl) {
        if (logEl._timer) { clearInterval(logEl._timer); logEl._timer = null; }
        logEl.textContent = logEl.getAttribute('data-log') || '';
      }
    });
  };

  if (stages.length) {
    setActiveStage(0);

    stages.forEach((stage, idx) => {
      stage.addEventListener('click', () => {
        activeArchIndex = idx;
        setActiveStage(idx);
      });
    });

    let activeArchIndex = 0;
    if (!reduceMotion) {
      const archTimer = setInterval(() => {
        activeArchIndex = (activeArchIndex + 1) % stages.length;
        setActiveStage(activeArchIndex);
      }, 3600);
      landingCleanups.push(() => clearInterval(archTimer));
    }
    landingCleanups.push(() => {
      stages.forEach((s) => {
        const l = s.querySelector('.sl-log');
        if (l && l._timer) { clearInterval(l._timer); l._timer = null; }
      });
    });
  }

  /* ---------- 6. Emblem: pointer tilt + scroll parallax ---------- */
  const emblem = document.getElementById('sl-emblem-img');
  if (emblem && !reduceMotion) {
    let tiltX = 0, tiltY = 0, scrollY = 0;

    const applyTransform = () => {
      emblem.style.transform =
        'perspective(900px) translateY(' + scrollY.toFixed(1) + 'px) ' +
        'rotateY(' + tiltX.toFixed(2) + 'deg) rotateX(' + tiltY.toFixed(2) + 'deg)';
    };

    const wrap = emblem.parentElement;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      tiltX = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 16;
      tiltY = -((e.clientY - rect.top - rect.height / 2) / rect.height) * 16;
      applyTransform();
    };
    const onLeave = () => { tiltX = 0; tiltY = 0; applyTransform(); };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        scrollY = Math.min(window.scrollY, 900) * 0.075;
        applyTransform();
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    landingCleanups.push(() => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('scroll', onScroll);
    });
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}
