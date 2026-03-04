'use client';

import React from 'react';

const Contact = () => {
  // contact form handlers removed because the component currently renders
  // static contact details; re-add form logic if you want a contact form.

  return (
    <section id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center text-3xl font-bold mb-6">
          Contact
        </h2>

        <div>
          <div className="glass p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg">
                Mobile:{' '}
                <a href="tel:+917019723240" className="text-blue-300">
                  +91 7019723240
                </a>
              </p>
              <p className="mt-2">
                Email:{' '}
                <a href="mailto:gvs1.dev@gmail.com" className="text-blue-300">
                  gvs1.dev@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/917019723240"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center gap-3 bg-green-600 hover:brightness-105 text-white px-4 py-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .01 5.373.01 12.001c0 2.106.55 4.167 1.594 5.993L0 24l6.247-1.603A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-11.999 0-3.206-1.25-6.219-3.48-8.52z"
                    fill="#25D366"
                  />
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.62-.92-2.219-.242-.586-.487-.506-.672-.516l-.573-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 2.982 1.288 2.982.858 3.522.806.54-.05 1.758-.717 2.006-1.408.248-.69.248-1.282.173-1.408-.074-.124-.273-.198-.57-.347z"
                    fill="#fff"
                  />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
