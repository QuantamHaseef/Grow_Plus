import { useState, type FormEvent } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzihPrdS3wRBJ5FZEH0NuMKGxxILSCSYxgS8hmGa9oBRwAdVfqM-1g1h559IeJ-xl0P/exec';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<{ type: 'ok' | 'err' | ''; message: string }>({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setStatus({ type: 'err', message: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const url =
      SCRIPT_URL +
      '?' +
      new URLSearchParams({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
      }).toString();

    try {
      await fetch(url, { method: 'GET', mode: 'no-cors' });
      setStatus({
        type: 'ok',
        message: "Thanks! We'll be in touch with your growth plan shortly.",
      });
      setName('');
      setEmail('');
      setPhone('');
    } catch {
      setStatus({
        type: 'err',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============ HEADER ============ */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand">
            <span className="logo-mark">G</span>
            <span className="brand-name">GrowPulse</span>
          </a>
          <nav className="nav">
            <a href="#why-us">Why Us</a>
            <a href="#results">Results</a>
            <a href="#audit">Rs. 1 Audit</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
          <a
            href="https://payments.cashfree.com/forms/getaudit"
            target="_blank"
            rel="noopener"
            className="header-cta"
          >
            Claim Rs. 1 Audit
          </a>
        </div>
      </header>

      <main id="top">
        {/* ============ SECTION 1: HERO ============ */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">⚡ Proven 0 to Hero Growth System</span>

              <h1>
                Turn Your<br />
                LinkedIn<br />
                From<br />
                <span className="u">Invisible</span> to<br />
                <span className="amber">Influential</span>
              </h1>

              <p className="hero-sub">
                We don't just "optimize profiles." We build your personal brand from scratch — with strategy, content, and consistency that actually gets you seen.
              </p>

              <div className="supporting-line">
                <span className="quote-mark">“</span>
                <span>From 0 to hero on LinkedIn — without confusion, guesswork, or wasting months figuring it out alone.</span>
              </div>

              <div className="hero-actions">
                <a
                  href="https://payments.cashfree.com/forms/getaudit"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-amber"
                >
                  Get Your Profile Audit <span className="tag-pill">Rs. 1 Special Offer</span>
                </a>
                <a href="#start" className="btn btn-blue">Start Growing Today →</a>
              </div>

              <div className="trust-row">
                <span className="trust-item">
                  <span className="stars">★★★★★</span>
                  4.9/5 from 100+ Founders &amp; Executives
                </span>
                <span className="dot-sep"></span>
                <span className="trust-item">Featured in top business newsletters</span>
              </div>
            </div>

            {/* Terminal mockup */}
            <div className="hero-visual">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="profile">
                    <div className="avatar online">DV</div>
                    <div>
                      <div className="profile-name">Devin Vance ✔</div>
                      <div className="profile-role">SaaS Founder &amp; Angel Investor</div>
                    </div>
                  </div>
                  <span className="live-badge">Live Engine</span>
                </div>

                <div className="metrics">
                  <div className="metric">
                    <span className="metric-label">Impressions (90D)</span>
                    <div className="metric-value">842.6K <span className="metric-delta">+840%</span></div>
                    <div className="bar"><span style={{ width: '84%' }}></span></div>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Organic Reach</span>
                    <div className="metric-value">114.2K <span className="metric-delta amber">Viral</span></div>
                    <div className="bar"><span className="amber" style={{ width: '92%' }}></span></div>
                  </div>
                </div>

                <div className="spark">
                  <div className="spark-head">
                    <span className="l">Growth Acceleration Curve</span>
                    <span className="r">Exponential</span>
                  </div>
                  <svg viewBox="0 0 400 96" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#a9c7ff" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#a9c7ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 86 C 60 84, 110 80, 150 72 S 230 50, 270 36 S 350 14, 400 4 L400 96 L0 96 Z" fill="url(#sparkFill)" />
                    <path d="M0 86 C 60 84, 110 80, 150 72 S 230 50, 270 36 S 350 14, 400 4" fill="none" stroke="#a9c7ff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="notif">
                  <div className="notif-left">
                    <div className="notif-icon">✉</div>
                    <div>
                      <div className="notif-title">Enterprise Inbound Request</div>
                      <div className="notif-body">"Saw your post on Series B capital alloc..."</div>
                    </div>
                  </div>
                  <span className="notif-time">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION 2: PROVEN TRACTION & PILLARS ============ */}
        <section className="section section-dark" id="why-us">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Proven Traction</span>
              <h2 id="results">Real Growth. Real Results.</h2>
              <p>Built on deterministic engineering rather than algorithm mysticism. Here is what we deliver.</p>
            </div>

            <div className="pillars">
              <article className="pillar">
                <div>
                  <div className="icon-box">♙</div>
                  <div className="kicker">Authority Engine</div>
                  <h3>Helped 100+ professionals build authority on LinkedIn</h3>
                </div>
                <div className="point">✓ Zero vanity metrics</div>
              </article>

              <article className="pillar">
                <div>
                  <div className="icon-box">⇢</div>
                  <div className="kicker blue">Monetization Pipeline</div>
                  <h3>Generated consistent inbound leads through content</h3>
                </div>
                <div className="point">✓ Direct pipeline acquisition</div>
              </article>

              <article className="pillar">
                <div>
                  <div className="icon-box">◈</div>
                  <div className="kicker">Zero-to-Hero Architecture</div>
                  <h3>Built personal brands from absolute zero</h3>
                </div>
                <div className="point">✓ No prior audience needed</div>
              </article>

              <article className="pillar wide">
                <div>
                  <div className="icon-box blue">◎</div>
                  <div className="kicker blue">Algorithmic Distribution</div>
                  <h3>Content that reaches thousands organically</h3>
                  <div className="point">✓ High-retention hooks</div>
                </div>
              </article>

              <article className="pillar">
                <div>
                  <div className="icon-box">⌘</div>
                  <div className="kicker">Conversion Engine</div>
                  <h3>Profiles that convert views into opportunities</h3>
                  <p className="desc">Turn casual passive scrollers into high-ticket enterprise consultations, podcast invitations, and investor direct messages.</p>
                </div>
                <div className="point amber">✓ Engineered profile funnels</div>
              </article>
            </div>

            <div className="callout-banner">
              <div className="callout-left">
                <span className="bolt">⚡</span>
                <h4>This isn't luck. <span>It's a system that works.</span></h4>
              </div>
              <a href="#audit" className="btn-link-blue">Claim System Audit</a>
            </div>
          </div>
        </section>

        {/* ============ SECTION 3: Rs. 1 AUDIT ============ */}
        <section className="audit-section" id="audit">
          <div className="audit-card">
            <div className="price-row">
              <span className="price-anchor">✦ Special 1-on-1 Opportunity • Just Rs. 1</span>
              <div className="price">
                <span className="old">Rs. 4,999</span>
                <span className="new">Rs. 1</span>
                <span className="tag">LKR only</span>
              </div>
            </div>

            <div>
              <h2>Get a Complete LinkedIn Audit<br />for Just Rupee 1</h2>
              <p className="lede">Not a sales call. A real breakdown of what's working, what's not, and what to fix.</p>
            </div>

            <div className="checklist">
              <div className="label">What you'll get in your audit:</div>
              <div className="checklist-grid">
                <div className="check-item">
                  <span className="tick">✓</span>
                  <div>
                    <h5>Profile review</h5>
                    <p>Headline, banner, positioning &amp; conversion architecture</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="tick">✓</span>
                  <div>
                    <h5>Content gap analysis</h5>
                    <p>Why your current posts get low engagement &amp; reach</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="tick">✓</span>
                  <div>
                    <h5>Personal brand direction</h5>
                    <p>Pinpoint your sovereign executive monopoly angle</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="tick">✓</span>
                  <div>
                    <h5>Clear action steps to improve visibility</h5>
                    <p>Actionable, step-by-step checklist to deploy today</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-box">
              <span className="spark-ic">✦</span>
              <p><strong>Why Rupee 1?</strong> Because once you see the value, you'll know what to do next.</p>
            </div>

            <div className="cta-row">
              <a
                href="https://payments.cashfree.com/forms/getaudit"
                target="_blank"
                rel="noopener"
                className="btn btn-amber big"
              >
                Book My Audit Now
              </a>
              <p className="fine">⚡ 100% Guaranteed Actionable Advice • 30-Min Live Review</p>
            </div>
          </div>
        </section>

        {/* ============ SECTION 4: TESTIMONIALS ============ */}
        <section className="section section-dark" id="testimonials">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow" style={{ color: 'var(--amber)' }}>Validated Proof</span>
              <h2>What Our Clients Say</h2>
              <p>Real feedback from executives and founders who transformed their reach.</p>
            </div>

            <div className="testimonial-grid">
              <div className="testimonial">
                <div>
                  <div className="stars">★★★★★</div>
                  <blockquote style={{ marginTop: '16px' }}>"I had zero presence before this. Within weeks, I started getting inbound messages and profile views."</blockquote>
                </div>
                <div className="testimonial-foot">
                  <div className="avatar sm">RN</div>
                  <div>
                    <div className="name">Rajesh Narang</div>
                    <div className="role">Founder &amp; Consultant</div>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div>
                  <div className="stars">★★★★★</div>
                  <blockquote style={{ marginTop: '16px' }}>"From 200 views to 45,000 views per post in 60 days. The positioning strategy completely flipped how prospects perceive my agency."</blockquote>
                </div>
                <div className="testimonial-foot">
                  <div className="avatar sm">Meera Sen</div>
                  <div>
                    <div className="name">Meera Sen</div>
                    <div className="role">CEO, FinTech Velocity</div>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div>
                  <div className="stars">★★★★★</div>
                  <blockquote style={{ marginTop: '16px' }}>"Booked 8 enterprise discovery calls in month one with zero outbound cold messaging. GrowPulse is an indispensable executive engine."</blockquote>
                </div>
                <div className="testimonial-foot">
                  <div className="avatar sm">AV</div>
                  <div>
                    <div className="name">Anand Varma</div>
                    <div className="role">Co-Founder, StackScale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION 5: LEAD CAPTURE ============ */}
        <section className="lead-section" id="start">
          <div className="lead-card">
            <div className="lead-head">
              <span className="eyebrow">Next Step Architecture</span>
              <h2>Let's Build Your<br />LinkedIn Presence Together</h2>
              <p>Tell us a bit about you — and we'll show you exactly how to grow.</p>
            </div>

            <form className="lead-form" id="leadForm" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <div className="input-wrap">
                  <span className="icon">👤</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Work Email</label>
                <div className="input-wrap">
                  <span className="icon">✉</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="work@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-wrap">
                  <span className="icon">☏</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 / phone number"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-amber" id="submitBtn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get My Growth Plan →'}
              </button>

              <div className={`form-status ${status.type}`} id="formStatus" role="status" aria-live="polite">
                {status.message}
              </div>

              <div className="trust-line">
                <span>🛡</span>
                <span>No spam. No fluff. Just actionable clarity.</span>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="brand-name">GrowPulse</span>
              <span className="footer-badge">Executive Personal Monopoly Engine</span>
            </div>
            <nav className="footer-links">
              <a href="#why-us">Why Us</a>
              <a href="#results">Results</a>
              <a
                href="https://payments.cashfree.com/forms/getaudit"
                target="_blank"
                rel="noopener"
              >
                Rs. 1 Audit
              </a>
              <a href="#testimonials">Testimonials</a>
              <a href="#top">Privacy</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2025 GrowPulse Network Technologies. All rights reserved.</span>
            <span>High-Velocity LinkedIn Architecture for Founders &amp; Operators.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
