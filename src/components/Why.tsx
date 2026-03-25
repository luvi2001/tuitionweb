const features = [
  {
    num: '01',
    icon: '👥',
    title: 'Limited class size',
    desc: 'Each class is capped at just 8 students, ensuring every student gets the personal attention they need. No one gets lost in the crowd.',
    delay: '',
  },
  {
    num: '02',
    icon: '📊',
    title: 'Monthly progress reports',
    desc: "Monthly unit tests track each student's learning progress, keeping parents and students informed and motivated throughout the term.",
    delay: 'fade-up-delay-1',
  },
  {
    num: '03',
    icon: '🤸',
    title: 'Physical & mental engagement',
    desc: 'Beyond academics — monthly workshops and physical activities foster holistic development, building confident, well-rounded young people.',
    delay: 'fade-up-delay-2',
  },
  {
    num: '04',
    icon: '🛡️',
    title: 'Full campus security',
    desc: 'Dedicated staff presence ensures complete safety and discipline throughout campus, so parents can trust their children are in safe hands.',
    delay: 'fade-up-delay-3',
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="section-inner">
        <div className="section-tag">Why Choose Us</div>
        <h2 className="section-heading">
          Why should you <em>choose</em> these classes?
        </h2>
        <p className="section-sub">
          Four key commitments that set Youth Light Learning Zone apart from ordinary tuition
          classes.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div className={`feature-card fade-up ${f.delay}`} key={f.num}>
              <div className="feature-num">{f.num}</div>
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
