import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Tag } from 'lucide-react';

export const NavratriEditionModal = ({ onExploreUtsava }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after entering home
    const hasSeenPopup = sessionStorage.getItem('kapshi_navratri_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('kapshi_navratri_popup_seen', 'true');
  };

  const handleClaim = () => {
    handleClose();
    if (onExploreUtsava) {
      onExploreUtsava();
    }
  };

  return (
    <>
      {/* Subtle Floating Reminder Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 990,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-rust)',
            color: '#FFFFFF',
            border: '1px solid var(--color-gold-light)',
            padding: '0.55rem 1rem',
            borderRadius: '30px',
            boxShadow: '0 8px 24px rgba(140, 45, 25, 0.4)',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          aria-label="View Navratri Festive Offer"
        >
          <Sparkles size={14} color="var(--color-gold-light)" />
          <span>Navratri Offer: 40% OFF</span>
        </button>
      )}

      {/* Main Festive Modal Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(25, 14, 9, 0.78)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={handleClose}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '520px',
              width: '100%',
              backgroundColor: 'var(--color-parchment-light)',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--color-gold-light)',
              animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '0.85rem',
                right: '0.85rem',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(75, 38, 21, 0.85)',
                color: 'var(--color-base)',
                border: '1px solid var(--color-gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {/* Navratri Edition Poster Graphic */}
            <div style={{ position: 'relative', width: '100%', maxHeight: '480px', overflow: 'hidden' }}>
              <img
                src="/assets/campaigns/navratri-2026/navratri-popup-edition.png"
                alt="KAPSHI Navratri Festive Offer — 40% Off Utsava Collection & 20% Off Couple Combo"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Bottom Actions Bar */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--color-parchment-surface)',
                borderTop: '1px solid var(--color-tan-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-rust)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Tag size={13} /> The Navratri Edit Active
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-neutral)', opacity: 0.75 }}>
                  Valid across festival duration
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={handleClaim}
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.2rem',
                    backgroundColor: 'var(--color-rust)',
                    borderColor: 'var(--color-rust)',
                    color: '#FFFFFF'
                  }}
                >
                  <span>Explore Utsava (40% OFF)</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  className="btn-ghost"
                  onClick={handleClose}
                  style={{
                    padding: '0.8rem 1rem',
                    color: 'var(--color-neutral)',
                    fontSize: '0.85rem'
                  }}
                >
                  Continue to Site
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
