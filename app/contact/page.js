'use client';
import { useState, useRef, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import styles from './page.module.css';

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const countryList = [
  { iso: 'PK', code: '+92', flag: '🇵🇰' },
  { iso: 'US', code: '+1', flag: '🇺🇸' },
  { iso: 'GB', code: '+44', flag: '🇬🇧' },
  { iso: 'AE', code: '+971', flag: '🇦🇪' },
  { iso: 'SA', code: '+966', flag: '🇸🇦' },
  { iso: 'IN', code: '+91', flag: '🇮🇳' },
  { iso: 'CA', code: '+1', flag: '🇨🇦' },
  { iso: 'AU', code: '+61', flag: '🇦🇺' },
  { iso: 'RU', code: '+7', flag: '🇷🇺' }, { iso: 'KZ', code: '+7', flag: '🇰🇿' }, { iso: 'EG', code: '+20', flag: '🇪🇬' }, { iso: 'ZA', code: '+27', flag: '🇿🇦' }, { iso: 'GR', code: '+30', flag: '🇬🇷' }, { iso: 'NL', code: '+31', flag: '🇳🇱' }, { iso: 'BE', code: '+32', flag: '🇧🇪' }, { iso: 'FR', code: '+33', flag: '🇫🇷' }, { iso: 'ES', code: '+34', flag: '🇪🇸' }, { iso: 'HU', code: '+36', flag: '🇭🇺' }, { iso: 'IT', code: '+39', flag: '🇮🇹' }, { iso: 'RO', code: '+40', flag: '🇷🇴' }, { iso: 'CH', code: '+41', flag: '🇨🇭' }, { iso: 'AT', code: '+43', flag: '🇦🇹' }, { iso: 'DK', code: '+45', flag: '🇩🇰' }, { iso: 'SE', code: '+46', flag: '🇸🇪' }, { iso: 'NO', code: '+47', flag: '🇳🇴' }, { iso: 'PL', code: '+48', flag: '🇵🇱' }, { iso: 'DE', code: '+49', flag: '🇩🇪' }, { iso: 'PE', code: '+51', flag: '🇵🇪' }, { iso: 'MX', code: '+52', flag: '🇲🇽' }, { iso: 'CU', code: '+53', flag: '🇨🇺' }, { iso: 'AR', code: '+54', flag: '🇦🇷' }, { iso: 'BR', code: '+55', flag: '🇧🇷' }, { iso: 'CL', code: '+56', flag: '🇨🇱' }, { iso: 'CO', code: '+57', flag: '🇨🇴' }, { iso: 'VE', code: '+58', flag: '🇻🇪' }, { iso: 'MY', code: '+60', flag: '🇲🇾' }, { iso: 'ID', code: '+62', flag: '🇮🇩' }, { iso: 'PH', code: '+63', flag: '🇵🇭' }, { iso: 'NZ', code: '+64', flag: '🇳🇿' }, { iso: 'SG', code: '+65', flag: '🇸🇬' }, { iso: 'TH', code: '+66', flag: '🇹🇭' }, { iso: 'JP', code: '+81', flag: '🇯🇵' }, { iso: 'KR', code: '+82', flag: '🇰🇷' }, { iso: 'VN', code: '+84', flag: '🇻🇳' }, { iso: 'CN', code: '+86', flag: '🇨🇳' }, { iso: 'TR', code: '+90', flag: '🇹🇷' }, { iso: 'AF', code: '+93', flag: '🇦🇫' }, { iso: 'LK', code: '+94', flag: '🇱🇰' }, { iso: 'MM', code: '+95', flag: '🇲🇲' }, { iso: 'IR', code: '+98', flag: '🇮🇷' }, { iso: 'MA', code: '+212', flag: '🇲🇦' }, { iso: 'DZ', code: '+213', flag: '🇩🇿' }, { iso: 'TN', code: '+216', flag: '🇹🇳' }, { iso: 'LY', code: '+218', flag: '🇱🇾' }, { iso: 'GM', code: '+220', flag: '🇬🇲' }, { iso: 'SN', code: '+221', flag: '🇸🇳' }, { iso: 'MR', code: '+222', flag: '🇲🇷' }, { iso: 'ML', code: '+223', flag: '🇲🇱' }, { iso: 'GN', code: '+224', flag: '🇬🇳' }, { iso: 'CI', code: '+225', flag: '🇨🇮' }, { iso: 'BF', code: '+226', flag: '🇧🇫' }, { iso: 'NE', code: '+227', flag: '🇳🇪' }, { iso: 'TG', code: '+228', flag: '🇹🇬' }, { iso: 'BJ', code: '+229', flag: '🇧🇯' }, { iso: 'MU', code: '+230', flag: '🇲🇺' }, { iso: 'LR', code: '+231', flag: '🇱🇷' }, { iso: 'SL', code: '+232', flag: '🇸🇱' }, { iso: 'GH', code: '+233', flag: '🇬🇭' }, { iso: 'NG', code: '+234', flag: '🇳🇬' }, { iso: 'TD', code: '+235', flag: '🇹🇩' }, { iso: 'CF', code: '+236', flag: '🇨🇫' }, { iso: 'CM', code: '+237', flag: '🇨🇲' }, { iso: 'CV', code: '+238', flag: '🇨🇻' }, { iso: 'ST', code: '+239', flag: '🇸🇹' }, { iso: 'GQ', code: '+240', flag: '🇬🇶' }, { iso: 'GA', code: '+241', flag: '🇬🇦' }, { iso: 'CG', code: '+242', flag: '🇨🇬' }, { iso: 'CD', code: '+243', flag: '🇨🇩' }, { iso: 'AO', code: '+244', flag: '🇦🇴' }, { iso: 'GW', code: '+245', flag: '🇬🇼' }, { iso: 'SC', code: '+248', flag: '🇸🇨' }, { iso: 'SD', code: '+249', flag: '🇸🇩' }, { iso: 'RW', code: '+250', flag: '🇷🇼' }, { iso: 'ET', code: '+251', flag: '🇪🇹' }, { iso: 'SO', code: '+252', flag: '🇸🇴' }, { iso: 'DJ', code: '+253', flag: '🇩🇯' }, { iso: 'KE', code: '+254', flag: '🇰🇪' }, { iso: 'TZ', code: '+255', flag: '🇹🇿' }, { iso: 'UG', code: '+256', flag: '🇺🇬' }, { iso: 'BI', code: '+257', flag: '🇧🇮' }, { iso: 'MZ', code: '+258', flag: '🇲🇿' }, { iso: 'ZM', code: '+260', flag: '🇿🇲' }, { iso: 'MG', code: '+261', flag: '🇲🇬' }, { iso: 'ZW', code: '+263', flag: '🇿🇼' }, { iso: 'NA', code: '+264', flag: '🇳🇦' }, { iso: 'MW', code: '+265', flag: '🇲🇼' }, { iso: 'LS', code: '+266', flag: '🇱🇸' }, { iso: 'BW', code: '+267', flag: '🇧🇼' }, { iso: 'SZ', code: '+268', flag: '🇸🇿' }, { iso: 'KM', code: '+269', flag: '🇰🇲' }, { iso: 'ER', code: '+291', flag: '🇪🇷' }, { iso: 'PT', code: '+351', flag: '🇵🇹' }, { iso: 'LU', code: '+352', flag: '🇱🇺' }, { iso: 'IE', code: '+353', flag: '🇮🇪' }, { iso: 'IS', code: '+354', flag: '🇮🇸' }, { iso: 'AL', code: '+355', flag: '🇦🇱' }, { iso: 'MT', code: '+356', flag: '🇲🇹' }, { iso: 'CY', code: '+357', flag: '🇨🇾' }, { iso: 'FI', code: '+358', flag: '🇫🇮' }, { iso: 'BG', code: '+359', flag: '🇧🇬' }, { iso: 'LT', code: '+370', flag: '🇱🇹' }, { iso: 'LV', code: '+371', flag: '🇱🇻' }, { iso: 'EE', code: '+372', flag: '🇪🇪' }, { iso: 'MD', code: '+373', flag: '🇲🇩' }, { iso: 'AM', code: '+374', flag: '🇦🇲' }, { iso: 'BY', code: '+375', flag: '🇧🇾' }, { iso: 'AD', code: '+376', flag: '🇦🇩' }, { iso: 'MC', code: '+377', flag: '🇲🇨' }, { iso: 'SM', code: '+378', flag: '🇸🇲' }, { iso: 'UA', code: '+380', flag: '🇺🇦' }, { iso: 'RS', code: '+381', flag: '🇷🇸' }, { iso: 'ME', code: '+382', flag: '🇲🇪' }, { iso: 'HR', code: '+385', flag: '🇭🇷' }, { iso: 'SI', code: '+386', flag: '🇸🇮' }, { iso: 'BA', code: '+387', flag: '🇧🇦' }, { iso: 'MK', code: '+389', flag: '🇲🇰' }, { iso: 'CZ', code: '+420', flag: '🇨🇿' }, { iso: 'SK', code: '+421', flag: '🇸🇰' }, { iso: 'LI', code: '+423', flag: '🇱🇮' }, { iso: 'BZ', code: '+501', flag: '🇧🇿' }, { iso: 'GT', code: '+502', flag: '🇬🇹' }, { iso: 'SV', code: '+503', flag: '🇸🇻' }, { iso: 'HN', code: '+504', flag: '🇭🇳' }, { iso: 'NI', code: '+505', flag: '🇳🇮' }, { iso: 'CR', code: '+506', flag: '🇨🇷' }, { iso: 'PA', code: '+507', flag: '🇵🇦' }, { iso: 'HT', code: '+509', flag: '🇭🇹' }, { iso: 'BO', code: '+591', flag: '🇧🇴' }, { iso: 'GY', code: '+592', flag: '🇬🇾' }, { iso: 'EC', code: '+593', flag: '🇪🇨' }, { iso: 'PY', code: '+595', flag: '🇵🇾' }, { iso: 'SR', code: '+597', flag: '🇸🇷' }, { iso: 'UY', code: '+598', flag: '🇺🇾' }, { iso: 'BN', code: '+673', flag: '🇧🇳' }, { iso: 'NR', code: '+674', flag: '🇳🇷' }, { iso: 'PG', code: '+675', flag: '🇵🇬' }, { iso: 'TO', code: '+676', flag: '🇹🇴' }, { iso: 'SB', code: '+677', flag: '🇸🇧' }, { iso: 'VU', code: '+678', flag: '🇻🇺' }, { iso: 'FJ', code: '+679', flag: '🇫🇯' }, { iso: 'PW', code: '+680', flag: '🇵🇼' }, { iso: 'WS', code: '+685', flag: '🇼🇸' }, { iso: 'KI', code: '+686', flag: '🇰🇮' }, { iso: 'TV', code: '+688', flag: '🇹🇻' }, { iso: 'FM', code: '+691', flag: '🇫🇲' }, { iso: 'MH', code: '+692', flag: '🇲🇭' }, { iso: 'KP', code: '+850', flag: '🇰🇵' }, { iso: 'KH', code: '+855', flag: '🇰🇭' }, { iso: 'LA', code: '+856', flag: '🇱🇦' }, { iso: 'BD', code: '+880', flag: '🇧🇩' }, { iso: 'TW', code: '+886', flag: '🇹🇼' }, { iso: 'MV', code: '+960', flag: '🇲🇻' }, { iso: 'LB', code: '+961', flag: '🇱🇧' }, { iso: 'JO', code: '+962', flag: '🇯🇴' }, { iso: 'SY', code: '+963', flag: '🇸🇾' }, { iso: 'IQ', code: '+964', flag: '🇮🇶' }, { iso: 'KW', code: '+965', flag: '🇰🇼' }, { iso: 'YE', code: '+967', flag: '🇾🇪' }, { iso: 'OM', code: '+968', flag: '🇴🇲' }, { iso: 'PS', code: '+970', flag: '🇵🇸' }, { iso: 'IL', code: '+972', flag: '🇮🇱' }, { iso: 'BH', code: '+973', flag: '🇧🇭' }, { iso: 'QA', code: '+974', flag: '🇶🇦' }, { iso: 'BT', code: '+975', flag: '🇧🇹' }, { iso: 'MN', code: '+976', flag: '🇲🇳' }, { iso: 'NP', code: '+977', flag: '🇳🇵' }, { iso: 'TJ', code: '+992', flag: '🇹🇯' }, { iso: 'TM', code: '+993', flag: '🇹🇲' }, { iso: 'AZ', code: '+994', flag: '🇦🇿' }, { iso: 'GE', code: '+995', flag: '🇬🇪' }, { iso: 'KG', code: '+996', flag: '🇰🇬' }, { iso: 'UZ', code: '+998', flag: '🇺🇿' }
];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setForm({ ...form, phone: value });
    if (value.length > 0) setPhoneTouched(true);
  };

  const isPhoneValid = /^\d{7,15}$/.test(form.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPhoneValid) {
      setPhoneTouched(true);
      return;
    }
    try {
      const payloadForm = { ...form, phone: `${selectedCountry.code} ${form.phone}` };
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadForm)
      });

      if (response.ok) {
        setSent(true);
        setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', budget: '', message: '' });
        setPhoneTouched(false);
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
                { icon: '📧', text: 'haris.asghar.developer@gmail.com' },
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
                  <label className={styles.formLabel} htmlFor="phone">Phone Number *</label>
                  <div className={styles.phoneInputWrapper}>
                    <div className={styles.customSelectContainer} ref={dropdownRef}>
                      <button
                        type="button"
                        className={styles.customSelectTrigger}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <ReactCountryFlag countryCode={selectedCountry.iso} svg style={{ width: '1.4em', height: '1.4em', borderRadius: '2px' }} />
                        <span>{selectedCountry.code}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '1px', transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><path d="m6 9 6 6 6-6" /></svg>
                      </button>

                      {dropdownOpen && dropdownRef.current && (
                        <div className={styles.customSelectDropdown}>
                          {countryList.map((c, i) => {
                            let displayName = '';
                            try { displayName = regionNames.of(c.iso); } catch (e) { displayName = c.iso; }
                            return (
                              <div
                                key={i}
                                className={styles.customSelectOption}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setDropdownOpen(false);
                                }}
                              >
                                <ReactCountryFlag countryCode={c.iso} svg style={{ width: '1.5em', height: '1.5em', flexShrink: 0, borderRadius: '2px' }} />
                                <span style={{ fontWeight: 500 }}>{displayName}</span>
                                <span style={{ color: '#6b7280', marginLeft: 'auto' }}>{c.code}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.phoneInputBody}
                      placeholder="5550000000"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      onBlur={() => setPhoneTouched(true)}
                    />
                  </div>
                  {(!isPhoneValid && phoneTouched) && (
                    <span className={styles.phoneError}>Please enter a valid phone number</span>
                  )}
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
                    <option value="under-200">Under $200</option>
                    <option value="200-400">$200 — $400</option>
                    <option value="400-700">$400 — $700</option>
                    <option value="700-1k">$700 — $1,000</option>
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
                <button
                  type="submit"
                  disabled={!isPhoneValid}
                  className={`btn btn-primary ${styles.submitBtn}`}
                  style={{ opacity: !isPhoneValid ? 0.7 : 1, cursor: !isPhoneValid ? 'not-allowed' : 'pointer' }}
                  onClick={() => setPhoneTouched(true)}
                >
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
