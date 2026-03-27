export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner">
        <div className="section-tag">About the Initiative</div>
        <h2 className="section-heading">
          Bridging the gap in <em>education</em>
        </h2>
        <p className="section-sub">
          Youth Light Learning Zone was born out of a passion to ensure no student is left behind —
          whether due to weak foundations or financial barriers.
        </p>
        <div className="about-grid">
          <div className="fade-up">
            <div className="collab-banner">
              <div className="collab-chip">Youth for Christ Sri Lanka</div>
              <span className="collab-x">×</span>
              <div className="collab-chip">CMB Youth Light</div>
              <span className="collab-x">=</span>
              <div className="collab-chip" style={{ background: 'var(--blue-pale)', color: 'var(--blue)' }}>
                Learning Zone
              </div>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.75, marginBottom: '10px' }}>
              This is a collaborative tuition initiative under{' '}
              <strong style={{ color: 'var(--navy)' }}>Youth for Christ Sri Lanka</strong> and{' '}
              <strong style={{ color: 'var(--navy)' }}>CMB Youth Light</strong> — a community outreach
              program focused on Tamil-medium students in Colombo who need academic support and
              affordability.
            </p>
            <div className="about-bullets">
              {[
                {
                  icon: '🎯',
                  title: 'For students who lack basics',
                  desc: 'Personalized small-group learning to rebuild strong academic foundations from the ground up.',
                },
                {
                  icon: '💡',
                  title: "For students who can't afford tuition",
                  desc: "We believe quality education shouldn't depend on what you can pay. This initiative makes it accessible.",
                },
                {
                  icon: '🎓',
                  title: 'Taught by undergraduates',
                  desc: 'A passionate panel of undergraduates who are close in age to students — relatable, energetic, and committed.',
                },
              ].map((b) => (
                <div className="about-bullet" key={b.title}>
                  <div className="bullet-icon">{b.icon}</div>
                  <div className="bullet-text">
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
