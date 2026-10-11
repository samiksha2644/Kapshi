import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { COLLECTIONS, CAMPAIGN_CONFIG } from '../data/products';
import { useCart } from '../context/CartContext';

export const Navbar = ({ currentView, setView, selectedCollection, setSelectedCollection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view, collection = null) => {
    setView(view);
    if (collection) setSelectedCollection(collection);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 900,
          backgroundColor: isScrolled ? 'rgba(241, 230, 208, 0.96)' : 'var(--color-base)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-tan-border)' : '1px solid transparent',
          transition: 'all 0.35s ease',
          boxShadow: isScrolled ? '0 4px 20px rgba(75, 38, 21, 0.05)' : 'none'
        }}
      >
        {/* Subtle Announcement Bar for Navratri */}
        {CAMPAIGN_CONFIG.navratri.isActive && (
          <div
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-base)',
              padding: '0.45rem 1rem',
              fontSize: '0.74rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              fontWeight: 500
            }}
          >
            <Sparkles size={13} color="var(--color-gold-light)" />
            <span>
              The Navratri Edit: <strong>40% Off Utsava Collection</strong> & Festive Pair Privilege Active
            </span>
          </div>
        )}

        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
          
          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none', color: 'var(--color-primary)' }}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Left Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Mega Menu Parent */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                onClick={() => handleNavClick('shop')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.84rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--color-primary)'
                }}
              >
                Collections <ChevronDown size={14} style={{ transform: isMegaMenuOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {/* Mega-menu dropdown */}
              {isMegaMenuOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-1rem',
                    width: '680px',
                    backgroundColor: 'var(--color-parchment-light)',
                    border: '1px solid var(--color-tan-border)',
                    boxShadow: '0 16px 36px rgba(75, 38, 21, 0.12)',
                    padding: '1.75rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.25rem',
                    zIndex: 1000
                  }}
                >
                  {COLLECTIONS.map(col => (
                    <div
                      key={col.id}
                      onClick={() => handleNavClick('collection', col.id)}
                      style={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '110px',
                          overflow: 'hidden',
                          backgroundColor: 'var(--color-base)',
                          border: '1px solid var(--color-tan-border)',
                          marginBottom: '0.75rem'
                        }}
                      >
                        <img
                          src={col.photo}
                          alt={col.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>
                      <div style={{ fontFamily: 'var(--font-devanagari)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>
                        {col.sanskrit}
                      </div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                        {col.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-neutral)', opacity: 0.8 }}>
                        {col.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('shop')}
              style={{
                fontSize: '0.84rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--color-primary)'
              }}
            >
              Shop All
            </button>

            <button
              onClick={() => handleNavClick('craft')}
              style={{
                fontSize: '0.84rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--color-primary)'
              }}
            >
              The Craft
            </button>

            <button
              onClick={() => handleNavClick('story')}
              style={{
                fontSize: '0.84rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--color-primary)'
              }}
            >
              Our Story
            </button>

            <button
              onClick={() => handleNavClick('collection', 'utsava')}
              style={{
                fontSize: '0.84rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--color-rust)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>Navratri Edit</span>
              <span
                style={{
                  fontSize: '0.65rem',
                  backgroundColor: 'var(--color-rust)',
                  color: '#fff',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '2px'
                }}
              >
                40% OFF
              </span>
            </button>
          </nav>

          {/* Central Logo */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <img
              src="/assets/brand/kapshi-logo.png"
              alt="KAPSHI Logo"
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginTop: '0.2rem',
                fontWeight: 600
              }}
            >
              Kolhapur · 2026
            </span>
          </div>

          {/* Right Navigation & Bag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <button
              onClick={() => handleNavClick('shop')}
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-neutral)',
                fontWeight: 500,
                display: 'none'
              }}
              className="desktop-secondary"
            >
              Search
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-parchment-surface)',
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-tan-border)',
                transition: 'all 0.25s'
              }}
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={18} />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em' }}>BAG</span>
              {totalItems > 0 && (
                <span
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-base)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '0.2rem'
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            style={{
              backgroundColor: 'var(--color-parchment-light)',
              borderBottom: '1px solid var(--color-tan-border)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-accent)' }}>
              COLLECTIONS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {COLLECTIONS.map(col => (
                <button
                  key={col.id}
                  onClick={() => handleNavClick('collection', col.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.5rem',
                    border: '1px solid var(--color-tan-border)',
                    backgroundColor: 'var(--color-base)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-primary)' }}>
                    {col.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-accent)' }}>{col.subtitle}</div>
                </button>
              ))}
            </div>

            <div className="parchment-divider" style={{ margin: '0.5rem 0' }} />

            <button onClick={() => handleNavClick('shop')} style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600 }}>
              Shop All Styles
            </button>
            <button onClick={() => handleNavClick('craft')} style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600 }}>
              The Craft & GI Heritage
            </button>
            <button onClick={() => handleNavClick('story')} style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600 }}>
              Our Story & Karigars
            </button>
            <button
              onClick={() => handleNavClick('collection', 'utsava')}
              style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-rust)' }}
            >
              The Navratri Edit (40% OFF)
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
