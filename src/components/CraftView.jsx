import React from 'react';
import { BRAND_STORY } from '../data/products';
import { Award, Shield, Check, Scissors, Sun, Sparkles } from 'lucide-react';

export const CraftView = ({ onShopClick }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-base)', paddingBottom: '7rem' }}>
      
      {/* Header */}
      <div
        style={{
          backgroundColor: 'var(--color-parchment-light)',
          borderBottom: '1px solid var(--color-tan-border)',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="eyebrow" style={{ marginBottom: '0.8rem' }}>शिल्प · THE UNHURRIED CRAFT</div>
          <h1 style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
            Twelfth-century roots. Made slowly by hand.
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.65, color: 'var(--color-neutral)', opacity: 0.85 }}>
            A protected Geographic Indication across Maharashtra and Karnataka, powered by four centuries of unhurried hand craftsmanship.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1080px', marginTop: '4.5rem' }}>
        
        {/* Four Authenticated Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          
          <div style={{ backgroundColor: 'var(--color-parchment-light)', border: '1px solid var(--color-tan-border)', padding: '2rem' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-base)', border: '1px solid var(--color-tan-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              <Sun size={20} />
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem' }}>01</div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Bag-Tanned Leather</h3>
            <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
              Vegetable tanning using babul bark and myrobalan nuts; zero chrome chemicals. Breathable, hypoallergenic, and naturally durable.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-parchment-light)', border: '1px solid var(--color-tan-border)', padding: '2rem' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-base)', border: '1px solid var(--color-tan-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              <Scissors size={20} />
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem' }}>02</div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Precision Skiving</h3>
            <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
              Sole and upper skived and bevelled by hand using traditional curved Rampi blades passed down through generations.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-parchment-light)', border: '1px solid var(--color-tan-border)', padding: '2rem' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-base)', border: '1px solid var(--color-tan-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              <Sparkles size={20} />
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem' }}>03</div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Cord Stitching</h3>
            <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
              Sewn exclusively with hand-twisted leather cord; no synthetic glues, no staples, no metal nails. Pure ergonomic leather welt.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-parchment-light)', border: '1px solid var(--color-tan-border)', padding: '2rem' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-base)', border: '1px solid var(--color-tan-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              <Award size={20} />
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem' }}>04</div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Natural Burnish</h3>
            <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
              Stone-hammered and rubbed with pure cold-pressed castor oil for natural muscle suppleness and lasting rich patina.
            </p>
          </div>

        </div>

        {/* GI Authentication & Packaging Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            backgroundColor: 'var(--color-parchment-surface)',
            border: '1px solid var(--color-tan-border)',
            padding: '3.5rem 2.5rem',
            marginBottom: '6rem'
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>आवरण · RESPONSIBLE PACKAGING</div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>
              Packaging that carries the artisan’s name.
            </h2>
            <p style={{ lineHeight: 1.7, opacity: 0.85, marginBottom: '1.5rem' }}>
              Every pair of KAPSHI footwear arrives in 100% plastic-free packaging, honoring both the craft and our community footprint.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem' }}>
                <Check size={18} color="var(--color-primary)" />
                <span><strong>Recycled kraft box:</strong> High-density unbleached board with woven cotton-cord closure.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem' }}>
                <Check size={18} color="var(--color-primary)" />
                <span><strong>Cotton dust bag:</strong> Cream handloom cotton with the KAPSHI mark, reusable for travel.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem' }}>
                <Check size={18} color="var(--color-primary)" />
                <span><strong>The karigar card:</strong> Names the individual artisan and village with care instructions.</span>
              </li>
            </ul>
          </div>

          <div style={{ height: '380px', overflow: 'hidden', border: '1px solid var(--color-tan-border)', backgroundColor: '#fff' }}>
            <img src="/assets/craft/packaging-and-karigar-card.png" alt="Kapshi Packaging and Karigar Card" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onShopClick} className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Shop The Handcrafted Collections
          </button>
        </div>

      </div>
    </div>
  );
};
