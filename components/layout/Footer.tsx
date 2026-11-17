import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-ink/80">
          © {year} G. Vannur — Senior Frontend / Full Stack Engineer
        </p>
        <a
          href="mailto:gvs1.dev@gmail.com"
          className="font-mono-accent text-sm text-cyan no-underline hover:underline"
        >
          gvs1.dev@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
