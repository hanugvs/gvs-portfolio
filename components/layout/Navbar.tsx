'use client';

import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Home', id: 'hero' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(link => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#070b14]/75 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-wide text-ink no-underline hover:text-cyan sm:text-base"
        >
          G. Vannur
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm no-underline transition ${
                active === link.id
                  ? 'bg-cyan/10 text-cyan'
                  : 'text-ink/70 hover:bg-white/5 hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/images/gvs_fs.pdf"
            download
            className="btn-secondary ml-2 !px-3 !py-2 text-xs no-underline"
          >
            <Download size={14} aria-hidden />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <div className="border-t border-white/10 bg-[#070b14]/95 px-4 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base no-underline ${
                  active === link.id
                    ? 'bg-cyan/10 text-cyan'
                    : 'text-ink/80 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/images/gvs_fs.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-cyan/30 px-3 py-3 text-sm text-cyan no-underline"
            >
              <Download size={16} aria-hidden />
              Download Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
