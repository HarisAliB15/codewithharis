'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSent(true);
        setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', budget: '', message: '' });
        setTimeout(() => setSent(false), 3500);
      } else {
        const errorData = await response.json();
        console.error('Failed to send message:', errorData);
        alert(`Failed to send email: ${errorData.error?.message || errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.contactInfo}>
              <h2>Let&apos;s build something great together</h2>
              <p>Whether you need a website, mobile app, or full-stack solution, our team is ready to bring your vision to life.</p>

              {[
                { icon: '📧', text: 'hello@harisdev.online' },
                { icon: '🌍', text: 'Remote Worldwide' },
                { icon: '⏱️', text: 'Response within 24 hours' },
                { icon: '💼', text: 'Available for new projects' },
              ].map((item) => (
                <div key={item.text} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <span className={styles.contactItemText}>{item.text}</span>
                </div>
              ))}

              <div className={styles.socialButtons}>
                <p className={styles.socialLabel}>Follow us</p>
                <div className={styles.socialGrid}>
                  {[
                    { label: 'Twitter', href: 'https://x.com/HarisAli60237' },
                    { label: 'Instagram', href: 'https://www.instagram.com/harisali526/' },
                    { label: 'GitHub', href: 'https://github.com/HarisAliB15' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haris-ali-asghar-software-engineer/' },
                  ].map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">{s.label}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.contactFormCard}>
              {sent && (
                <div className={styles.successBanner}>
                  ✅ Message sent! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" className={styles.formInput} placeholder="John" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" className={styles.formInput} placeholder="Doe" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" className={styles.formInput} placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" className={styles.formInput} placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="service">Service Needed</label>
                  <select id="service" name="service" className={styles.formSelect} value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="webapp">Web Application Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" className={styles.formSelect} value={form.budget} onChange={handleChange}>
                    <option value="">Select budget range...</option>
                    <option value="1k-5k">$1,000 — $5,000</option>
                    <option value="5k-15k">$5,000 — $15,000</option>
                    <option value="15k-50k">$15,000 — $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="message">Message</label>
                  <textarea id="message" name="message" className={styles.formTextarea} placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923116571110"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waFloatingBtn}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
