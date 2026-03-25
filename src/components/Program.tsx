export default function Program() {
  return (
    <section className="program" id="program">
      <div className="section-inner">
        <div className="section-tag">Program Details</div>
        <h2 className="section-heading">
          Everything you need to <em>know</em>
        </h2>
        <p className="section-sub">
          Structured learning designed to bring out the best in every student — at a price
          that&apos;s truly affordable.
        </p>
        <div className="program-grid">
          <div className="program-cards fade-up">
            <div className="program-card">
              <div className="program-card-icon">🏫</div>
              <div>
                <h4>Grade levels</h4>
                <p>
                  Open to all students from{' '}
                  <strong style={{ color: 'white' }}>Grade 7 to Grade 11</strong> in Tamil medium
                  and English medium.
                </p>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-icon">📚</div>
              <div>
                <h4>Subjects offered</h4>
                <div className="subject-tags">
                  {['Mathematics', 'Science'].map((s) => (
                    <span className="subject-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-card-icon">✅</div>
              <div>
                <h4>Enrollment status</h4>
                <p style={{ color: '#3d9be9' }}>
                  <strong style={{ color: '#3d9be9' }}>Open for registration!</strong> Join our small-group
                  learning batches and get personalized attention.
                </p>
              </div>
            </div>
            <div className="address-bar">
              <div className="address-item">
                📍{' '}
                <span>
                  <strong>No. 129/1B, High-Level Road, Colombo 05</strong>
                </span>
              </div>
              <div className="address-item">📞 <span>075 258 2063 · 075 797 1821</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
