'use client';

import React, { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import Button from './Button';
import type { ContactFormPayload } from '../../types';

const initialState: ContactFormPayload = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormPayload>(initialState);
  const [errors, setErrors] = useState<Partial<ContactFormPayload>>({});
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [feedback, setFeedback] = useState('');

  const validate = () => {
    const next: Partial<ContactFormPayload> = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!emailPattern.test(form.email)) next.email = 'Enter a valid email';
    if (!form.subject.trim()) next.subject = 'Subject is required';
    if (!form.message.trim()) next.message = 'Message is required';
    else if (form.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setFeedback(
          data?.message ||
            'Unable to send message right now. Please email me directly.',
        );
        return;
      }

      setStatus('success');
      setFeedback(data?.message || 'Message sent successfully.');
      setForm(initialState);
    } catch {
      setStatus('error');
      setFeedback('Network error. Please try again or email me directly.');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="glass-panel space-y-4 rounded-2xl p-6 shadow-panel"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-sm">
          <span className="text-ink/90">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="input-field"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <span id="name-error" className="text-xs text-red-400">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="block space-y-1.5 text-sm">
          <span className="text-ink/90">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="input-field"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <span id="email-error" className="text-xs text-red-400">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <label className="block space-y-1.5 text-sm">
        <span className="text-ink/90">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={onChange}
          className="input-field"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject ? (
          <span id="subject-error" className="text-xs text-red-400">
            {errors.subject}
          </span>
        ) : null}
      </label>

      <label className="block space-y-1.5 text-sm">
        <span className="text-ink/90">Message</span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={onChange}
          className="input-field resize-y"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="text-xs text-red-400">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin" size={16} aria-hidden />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} aria-hidden />
              Send Message
            </>
          )}
        </Button>
        {feedback ? (
          <p
            role="status"
            className={`text-sm ${
              status === 'success' ? 'text-cyan' : 'text-red-400'
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
