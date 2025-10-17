import LeadCapture from '../components/LeadCapture';

const highlightPoints = [
  'Complete a quick experience survey',
  'Finish a few partner offers of your choice',
  'Unlock a verified $100 Crumbl gift card'
];

const steps = [
  {
    title: '1. Tell us about your snacking habits',
    description:
      'Share your cravings, cookie faves, and how you discover new treats. Takes about 90 seconds.'
  },
  {
    title: '2. Choose simple partner offers',
    description:
      'Pick from streaming trials, shopping deals, and foodie subscriptions. Only complete the ones you like.'
  },
  {
    title: '3. Snag your $100 Crumbl card',
    description:
      'Once your survey and offers are confirmed, a digital gift card arrives in your inbox fast.'
  }
];

const socialProof = [
  {
    name: 'Jasmine T.',
    handle: '@jasminelovescrumbs',
    quote:
      'Did this after seeing it on TikTok and already used my card for a dozen new flavors. Easiest $100 ever!'
  },
  {
    name: 'Mason R.',
    handle: '@masontreats',
    quote:
      'The offers were legit — I grabbed a free streaming trial and boom, cookie money unlocked.'
  }
];

const bonuses = [
  {
    title: 'Exclusive Crumbl drops',
    description: 'Get first dibs on limited editions and seasonal drops before they sell out.'
  },
  {
    title: 'VIP giveaways',
    description: 'Monthly cookie box giveaways for verified participants and sharers.'
  },
  {
    title: 'Double reward weekends',
    description: 'Complete offers on select weekends for bonus entries worth up to $50 extra.'
  }
];

const faqs = [
  {
    question: 'Is this really free?',
    answer:
      'Yes! There is no purchase required. Simply complete the survey and any required partner offers to qualify for the digital gift card.'
  },
  {
    question: 'How long does it take to receive the gift card?',
    answer:
      'Most members receive their reward within 24 hours of completing the survey and verifying offer completion.'
  },
  {
    question: 'Can I do this on mobile?',
    answer:
      'Absolutely. The entire experience is designed for mobile first and works great on any device.'
  },
  {
    question: 'Why do I need to complete offers?',
    answer:
      'Partner offers help keep this reward free for you. Choose the ones that match your lifestyle — trials and low-effort deals qualify!'
  }
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="logo">Crumbl Rewards</div>
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="tag">Limited-time reward</span>
            <h1>
              Claim a <span>$100 Crumbl Gift Card</span> by sharing your sweet tooth secrets
            </h1>
            <p>
              Join thousands of cookie lovers and TikTok foodies cashing in on this exclusive
              offer. Tell us what flavors you crave, complete curated partner deals, and get $100
              to spend on fresh-baked Crumbl cookies.
            </p>
            <LeadCapture />
            <ul className="trust">
              {highlightPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-card">
            <div className="hero-card-content">
              <h2>What you&apos;ll unlock</h2>
              <ul>
                <li>Digital $100 Crumbl gift card</li>
                <li>Bonus entries for new flavor drops</li>
                <li>Invite-only cookie fan community</li>
              </ul>
              <div className="badge">
                <strong>95%</strong>
                <span>of members qualify on their first try</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="urgency">
        <div>
          <h3>60 spots released daily. Don&apos;t wait.</h3>
          <p>
            We cap new reward seekers each day to keep the offer legit. Secure your spot now and
            we&apos;ll guide you step-by-step.
          </p>
        </div>
        <div className="urgency-counter">
          <span className="label">Spots left today</span>
          <span className="count">14</span>
        </div>
      </section>

      <section className="steps">
        <h2>How the cookie crumbles</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bonuses">
        <h2>Sweet extras for go-getters</h2>
        <div className="bonus-grid">
          {bonuses.map((bonus) => (
            <article key={bonus.title}>
              <h3>{bonus.title}</h3>
              <p>{bonus.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="social-proof">
        <h2>Loved by the Crumbl community</h2>
        <div className="social-grid">
          {socialProof.map((proof) => (
            <figure key={proof.handle}>
              <blockquote>“{proof.quote}”</blockquote>
              <figcaption>
                <span className="name">{proof.name}</span>
                <span className="handle">{proof.handle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-grid">
          {faqs.map((item) => (
            <div key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-card">
          <h2>Ready to taste victory?</h2>
          <p>
            Secure your $100 Crumbl gift card before today&apos;s spots disappear. Complete the fast
            survey, knock out a few offers, and treat yourself.
          </p>
          <LeadCapture />
          <p className="cta-footnote">*Open to US residents 18+. Limited availability each day.</p>
        </div>
      </section>

      <footer className="footer">
        <div>Crumbl Rewards</div>
        <nav>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Partner with us</a>
        </nav>
      </footer>
    </main>
  );
}
