'use client';

export default function Register() {

  return (
    <section className="register" id="register">
      <div className="section-inner">
        <div className="section-tag">Register Now</div>
        <h2 className="section-heading">
          Secure your spot — <em>seats are limited!</em>
        </h2>
        <p className="section-sub">
          Fill in the form below or contact us directly. Walk-ins welcome during registration hours.
        </p>
        <div className="register-grid">
          {/* Info */}
          <div className="register-info fade-up">
            <div className="info-list">
              {[
                { icon: '📍', title: 'Location', text: 'No. 129/1B, High-Level Road, Colombo 05' },
                { icon: '📞', title: 'Contact', text: '075 258 2063 · 075 797 1821' },
                {
                  icon: '🌐',
                  title: 'Website',
                  text: 'cmbyouthlight.org',
                  link: 'https://cmbyouthlight.org',
                },
                { icon: '🕐', title: 'Class hours', text: 'Contact us for the current timetable' },
              ].map((row) => (
                <div className="info-row" key={row.title}>
                  <div className="info-icon">{row.icon}</div>
                  <div>
                    <h4>{row.title}</h4>
                    <p>
                      {row.link ? (
                        <a href={row.link} style={{ color: 'var(--blue)' }}>
                          {row.text}
                        </a>
                      ) : (
                        row.text
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="register-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0991103581987!2d79.87469717639716!3d6.8787284931201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a359dff3081%3A0x9ef20669cbf721a!2sYouth%20for%20Christ!5e0!3m2!1sen!2sus!4v1774462136690!5m2!1sen!2sus" width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Youth for Christ Sri Lanka Location"
              />
            </div>
          </div>
          {/* Form */}
          <div className="register-form-wrap fade-up fade-up-delay-1">
            <div className="form-title">Student Registration</div>
            <div className="form-sub">
              All fields are required. We&apos;ll confirm your spot within 24 hours.
            </div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdoVi3tljXVkf1WwWJDytgdpTizqDMJVMj6LCi_iWF5OFgLag/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ border: 'none', maxWidth: '100%' }}
              title="Student Registration Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
