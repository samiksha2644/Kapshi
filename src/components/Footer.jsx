import React from 'react';
import { COLLECTIONS, BRAND_STORY } from '../data/products';
import { ArrowUpRight, Instagram, Mail, ShieldCheck, MapPin } from 'lucide-react';

export const Footer = ({ onNavigate, onReplayIntro }) => {
  return (
    <footer
      style={{
        backgroundColor: '#2A1A12',
        color: '#F1E6D0',
        padding: '5.5rem 0 3rem',
        borderTop: '1px solid rgba(167, 122, 83, 0.25)'
      }}
    >
      <div className="container">
        
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem'
          }}
        >
          
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <img
              src="/assets/brand/kapshi-logo.png"
              alt="KAPSHI Footwear"
              style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(0.95)', marginBottom: '1.25rem' }}
            />
            <div style={{ fontFamily: 'var(--font-devanagari)', fontSize: '0.9rem', color: 'var(--color-gold-light)', marginBottom: '0.4rem' }}>
              कापशी · कोल्हापूर
            </div>
            <p style={{ color: '#D4C4AA', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {BRAND_STORY.quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-tan-light)', fontSize: '0.78rem' }}>
              <MapPin size={14} />
              <span>Kapshi Village, Kolhapur District, Maharashtra</span>
            </div>
          </div>

          {/* Collections Links */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-tan-light)', marginBottom: '1.25rem' }}>
              Collections
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              {COLLECTIONS.map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => onNavigate('collection', c.id)}
                    style={{ color: '#D4C4AA', transition: 'color 0.2s', textAlign: 'left' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFF'}
                    onMouseLeave={e => e.currentTarget.style.color = '#D4C4AA'}
                  >
                    {c.name} — {c.subtitle}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('collection', 'utsava')}
                  style={{ color: 'var(--color-gold-light)', fontWeight: 600, textAlign: 'left' }}
                >
                  The Navratri Edit (40% OFF)
                </button>
              </li>
            </ul>
          </div>

          {/* Heritage & Brand */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-tan-light)', marginBottom: '1.25rem' }}>
              Artisan Heritage
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => onNavigate('story')} style={{ color: '#D4C4AA', textAlign: 'left' }}>
                  Our Story & The Paradox
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('craft')} style={{ color: '#D4C4AA', textAlign: 'left' }}>
                  The GI Babul Bark Craft
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} style={{ color: '#D4C4AA', textAlign: 'left' }}>
                  The Three Strategic Pillars
                </button>
              </li>
              <li>
                <span style={{ color: '#8F7A6A', fontSize: '0.8rem' }}>
                  GI Registration: 2018 (Maharashtra & Karnataka)
                </span>
              </li>
              {onReplayIntro && (
                <li>
                  <button
                    onClick={onReplayIntro}
                    style={{
                      color: 'var(--color-gold-light)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    ▶ Replay Opening Film
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter / Journal */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-tan-light)', marginBottom: '1.25rem' }}>
              Artisan Journal
            </div>
            <p style={{ color: '#D4C4AA', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '1rem' }}>
              Receive quiet dispatches on slow craft, seasonal festive capsules, and karigar stories.
            </p>
            <form onSubmit={e => { e.preventDefault(); alert('Subscribed to the KAPSHI Atelier Journal.'); }} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                type="email"
                required
                placeholder="Enter email address"
                style={{
                  padding: '0.65rem 0.85rem',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(167, 122, 83, 0.4)',
                  color: '#FAF3E7',
                  fontSize: '0.82rem',
                  fontFamily: 'inherit',
                  flex: 1
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#2A1A12',
                  padding: '0.65rem 1rem',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(167, 122, 83, 0.25)', marginBottom: '2.5rem' }} />

        {/* Bottom Metadata & Legal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.78rem',
            color: '#A08E7C'
          }}
        >
          <div>
            © 2026 KAPSHI Footwear Private Limited. All rights reserved. Made in Maharashtra, India.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>GI Protected Craft</span>
            <span>Plastic-Free Packaging</span>
            <span>Complimentary Domestic Shipping</span>
            <span>7-Day Size Exchanges</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
