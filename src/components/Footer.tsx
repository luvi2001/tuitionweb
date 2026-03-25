export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-ring">YL</div>
              <div className="footer-logo-text">
                <span>Youth Light Learning Zone</span>
                <span>CMB Youth Light</span>
              </div>
            </div>
            <p>
              A collaborative tuition initiative under Youth for Christ Sri Lanka and CMB Youth
              Light — empowering Tamil-medium students in Colombo through affordable, quality
              education.
            </p>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            {[
              ['#about', 'About'],
              ['#why', 'Why Choose Us'],
              ['#program', 'Program Details'],
              ['#team', 'Our Team'],
              ['#gallery', 'Gallery'],
              ['#register', 'Register'],
            ].map(([href, label]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="#">No. 129/1B, High-Level Road, Colombo 05</a>
            <a href="tel:0752582063">075 258 2063</a>
            <a href="tel:0757971821">075 797 1821</a>
            <a href="https://cmbyouthlight.org">cmbyouthlight.org</a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2025 Youth Light Learning Zone · All Rights Reserved</p>
          <p>
            A <a href="#">Youth for Christ Sri Lanka</a> ×{' '}
            <a href="https://cmbyouthlight.org">CMB Youth Light</a> Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
