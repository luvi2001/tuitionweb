'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Us' },
  { href: '#program', label: 'Program' },
  { href: '#team', label: 'Team' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#register', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll<HTMLElement>('section[id], footer[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <a href="#home" className="nav-brand">
        <div className="nav-logo-ring">YL</div>
        <div className="nav-brand-text">
          <span>Youth Light</span>
          <span>Learning Zone</span>
        </div>
      </a>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a href="#register" className="nav-cta">
        Register Now →
      </a>
    </nav>
  );
}
