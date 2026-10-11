import React from 'react';
import { BRAND_STORY, PILLARS } from '../data/products';
import { Award, ArrowRight, ShieldCheck, HeartHandshake, Feather } from 'lucide-react';

export const StoryView = ({ onShopClick }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-base)', paddingBottom: '7rem' }}>
      
      {/* Editorial Header */}
      <div
        style={{
          backgroundColor: 'var(--color-parchment-light)',
          borderBottom: '1px solid var(--color-tan-border)',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="eyebrow" style={{ marginBottom: '0.8rem' }}>THE KAPSHI STORY</div>
          <h1 style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
            Why did something so Indian become so easy to overlook?
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.65, color: 'var(--color-neutral)', opacity: 0.85 }}>
            {BRAND_STORY.quote}
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1040px', marginTop: '4.5rem' }}>
        
        {/* The Central Paradox */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>THE CENTRAL PARADOX</div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
              Ubiquity dulled our appreciation.
            </h2>
            <p style={{ lineHeight: 1.75, marginBottom: '1.25rem', opacity: 0.9 }}>
              Seen in roadside bazaars and dusty wedding trunks, a masterpiece of hand-braided leatherwork slipped into cultural wallpaper.
              Worn by millions, yet rarely celebrated as world-class artisan craft. Relegated to ethnic festivals or forgotten after a single family wedding.
            </p>
            <p style={{ lineHeight: 1.75, opacity: 0.9 }}>
              Yet when European luxury houses in Milan showcase Kolhapuri silhouettes on global runways at ₹1.2 lakh without crediting the eight GI districts of Maharashtra and Karnataka, the truth becomes undeniable: <strong>the craft was never the problem.</strong>
            </p>
          </div>

          <div
            style={{
              height: '420px',
              backgroundColor: 'var(--color-parchment-light)',
              border: '1px solid var(--color-tan-border)',
              overflow: 'hidden'
            }}
          >
            <img
              src="/assets/collections/mula/mula-editorial.jpg"
              alt="Kapshi Village Craft Heritage"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* The Strategic Diagnosis */}
        <div
          style={{
            backgroundColor: 'var(--color-parchment-light)',
            border: '1px solid var(--color-tan-border)',
            padding: '3.5rem 2.5rem',
            marginBottom: '6rem'
          }}
        >
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '0.8rem' }}>THE STRATEGIC OPPORTUNITY</div>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>
            The problem was never the product; it was perception, storytelling, and retail experience.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--color-base)', padding: '1.75rem', border: '1px solid var(--color-tan-border)' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--color-primary)' }}>Inherited Heritage</h3>
              <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                Revered as folklore and tradition, but rarely marketed with high-end editorial aspiration.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-base)', padding: '1.75rem', border: '1px solid var(--color-tan-border)' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--color-primary)' }}>Master Craftsmanship</h3>
              <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                Centuries of ergonomic intelligence hidden behind unbranded, commoditized street retail.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-base)', padding: '1.75rem', border: '1px solid var(--color-tan-border)' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--color-primary)' }}>The Missing Brand</h3>
              <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                Heritage, craft, and recognition need a contemporary Indian footwear brand rooted in authentic Indian identity.
              </p>
            </div>
          </div>
        </div>

        {/* Three Pillars Detailed */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '0.8rem' }}>THE THREE PILLARS</div>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>
            The Foundation of KAPSHI
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {PILLARS.map(p => (
              <div
                key={p.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                  backgroundColor: 'var(--color-parchment-light)',
                  border: '1px solid var(--color-tan-border)',
                  padding: '2rem'
                }}
              >
                <div style={{ height: '280px', overflow: 'hidden', border: '1px solid var(--color-tan-border)' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem' }}>
                    PILLAR {p.number} · {p.sanskrit}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '0.8rem' }}>
                    {p.name} — {p.subtitle}
                  </h3>
                  <p style={{ lineHeight: 1.7, opacity: 0.85, marginBottom: '1.25rem' }}>
                    {p.description}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', opacity: 0.9 }}>
                    {p.specs.map((s, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--color-parchment-surface)', border: '1px solid var(--color-tan-border)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience the Contemporary Kolhapuri</h3>
          <p style={{ maxWidth: '600px', margin: '0 auto 1.75rem', opacity: 0.85 }}>
            Four dedicated collections designed for the way we live, commute, travel, and celebrate today.
          </p>
          <button onClick={onShopClick} className="btn-primary">
            Explore All Collections
          </button>
        </div>

      </div>
    </div>
  );
};
