import Image from 'next/image';

const heroImage = require('../assets/image1.JPG');

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-circles">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            A CMB Youth Light × YFC Sri Lanka Initiative
          </div>
          <h1>
            The Best Choice
            <br />
            for Your <em>Success</em>
          </h1>
          <p className="hero-sub">
            Affordable, quality tuition for <strong>Grades 7–11</strong> — specially designed for
            students who struggle with basics and those who can&apos;t afford private tuition.
            Taught by a panel of dedicated undergraduates.
          </p>
          <div className="hero-actions">
            <a href="#register" className="btn-primary">
              Register Now — Limited Seats!
            </a>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>
          <div className="hero-pills">
            <span className="hero-pill">📐 Mathematics</span>
            <span className="hero-pill">🧪 Science</span>
            <span className="hero-pill accent">✨ High-Quality Learning</span>
          </div>
        </div>

        <div className="hero-right">
          <div style={{ position: 'relative', padding: '20px 24px 32px 0' }}>
            <div className="hero-img-tag">📍 Colombo 05</div>
            <div className="hero-img-main">
              <Image
                src={heroImage}
                alt="Youth Light Learning Zone - Classroom"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hero-img-badge">
              <div>
                <div className="badge-num">⭐</div>
              </div>
              <div className="badge-lbl">
                Expert
                <br />
                Instructors
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">
            7<span>–</span>11
          </div>
          <div className="hero-stat-lbl">Grade levels</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            2<span></span>
          </div>
          <div className="hero-stat-lbl">Core subjects</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">
            ∞<span></span>
          </div>
          <div className="hero-stat-lbl">Support & growth</div>
        </div>
      </div>
    </section>
  );
}
