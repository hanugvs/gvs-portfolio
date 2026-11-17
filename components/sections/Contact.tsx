'use client';

import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8 sm:py-10 lg:py-12">
      <div className="section-shell">
        <SectionHeading
          label="Let’s talk"
          title="Contact"
          description="Have a role, project, or collaboration in mind? Reach out directly or send a message below."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="space-y-3">
            <a
              href="tel:+917019723240"
              className="glass-panel flex min-w-0 items-center gap-3 rounded-2xl p-4 no-underline transition hover:border-cyan/30 sm:gap-4 sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Phone size={18} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-ink/60">Mobile</p>
                <p className="truncate text-ink">+91 7019723240</p>
              </div>
            </a>

            <a
              href="mailto:gvs1.dev@gmail.com"
              className="glass-panel flex min-w-0 items-center gap-3 rounded-2xl p-4 no-underline transition hover:border-cyan/30 sm:gap-4 sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Mail size={18} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-ink/60">Email</p>
                <p className="truncate text-ink">gvs1.dev@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/917019723240"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="glass-panel flex min-w-0 items-center gap-3 rounded-2xl p-4 no-underline transition hover:border-emerald-400/30 sm:gap-4 sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <MessageCircle size={18} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-ink/60">WhatsApp</p>
                <p className="text-ink">Chat on WhatsApp</p>
              </div>
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
