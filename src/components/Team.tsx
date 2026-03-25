import Image from 'next/image';
import aneshImage from '../assets/anesh.jpeg';
import luviImage from '../assets/luvi.jpg';

const tutors = [
  { name: 'Anesh Shiran', subject: 'Mathematics', delay: '', uni: 'Colombo Open University', image: aneshImage },
  { name: 'Luvinson I', subject: 'Science', delay: 'fade-up-delay-1', uni: 'SLIIT', image: luviImage },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="section-inner">
        <div className="section-tag">Our Teaching Team</div>
        <h2 className="section-heading">
          Taught by passionate <em>undergraduates</em>
        </h2>
        <p className="section-sub">
          Our tutors are university students who believe in giving back — close enough in age to
          truly connect with the students they teach.
        </p>
        <div className="team-grid">
          {tutors.map((t) => (
            <div className={`team-card fade-up ${t.delay}`} key={t.subject}>
              <div className="team-card-photo">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="img-placeholder-team">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1255a4" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    <span>
                      Tutor photo
                      <br />({t.subject})
                    </span>
                  </div>
                )}
              </div>
              <div className="team-card-body">
                <h4>{t.name}</h4>
                <p>Undergraduate · {t.uni}</p>
                <span className="team-card-subject">{t.subject}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
