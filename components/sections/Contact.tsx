'use client';

import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          label="Let’s talk"
          title="Contact"
          description="Have a role, project, or collaboration in mind? Reach out directly or send a message below."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href="tel:+917019723240"
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 no-underline transition hover:border-cyan/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Phone size={18} aria-hidden />
              </span>
              <div>
                <p className="text-sm text-ink/60">Mobile</p>
                <p className="text-ink">+91 7019723240</p>
              </div>
            </a>

            <a
              href="mailto:gvs1.dev@gmail.com"
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 no-underline transition hover:border-cyan/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Mail size={18} aria-hidden />
              </span>
              <div>
                <p className="text-sm text-ink/60">Email</p>
                <p className="text-ink">gvs1.dev@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/917019723240"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 no-underline transition hover:border-emerald-400/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <MessageCircle size={18} aria-hidden />
              </span>
              <div>
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
