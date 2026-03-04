import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="mx-auto relative py-5 flex items-center justify-start">
        <a
          href="/images/gvs_fs.pdf"
          download
          className="text-sm text-blue-300 hover:underline md:absolute md:right-6 md:top-3"
        >
          Download
        </a>

        <nav className="flex justify-center">
          <a href="" className="mx-3 text-sm text-gray-200 hover:text-blue-300">Home</a>
          <a href="#about" className="mx-3 text-sm text-gray-200 hover:text-blue-300">About</a>
          <a href="#skills" className="mx-3 text-sm text-gray-200 hover:text-blue-300">Skills</a>
          <a href="#experience" className="mx-3 text-sm text-gray-200 hover:text-blue-300">Experience</a>
          <a href="#projects" className="mx-3 text-sm text-gray-200 hover:text-blue-300">Projects</a>
          <a href="#contact" className="mx-3 text-sm text-gray-200 hover:text-blue-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}
