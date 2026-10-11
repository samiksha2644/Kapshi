import React, { useState } from 'react';
import { X, Play, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw, Sparkles, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CAMPAIGN_CONFIG } from '../data/products';

export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const [activeMedia, setActiveMedia] = useState('product'); // 'product', 'model', 'video'
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isSuccessFeedback, setIsSuccessFeedback] = useState(false);

  const { addToCart, getProductPricing } = useCart();
  const pricing = getProductPricing(product);

  const handleAdd = () => {
    const success = addToCart(product, selectedSize, selectedColor, quantity);
    if (success) {
      setIsSuccessFeedback(true);
      setTimeout(() => {
        setIsSuccessFeedback(false);
        onClose();
      }, 700);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(41, 35, 31, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-parchment-light)',
          maxWidth: '1040px',
          width: '100%',
          maxHeight: '92vh',
          borderRadius: 'var(--radius-sm)',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          border: '1px solid var(--color-tan-border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 30,
            backgroundColor: 'var(--color-parchment-surface)',
            border: '1px solid var(--color-tan-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)'
          }}
          aria-label="Close Product View"
        >
          <X size={18} />
        </button>

        {/* Left Column: 3-Part Media Gallery Showcase */}
        <div style={{ backgroundColor: 'var(--color-base)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          
          {/* Main Visual Display */}
          <div
            style={{
              width: '100%',
              height: '420px',
              backgroundColor: 'var(--color-parchment-light)',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '1rem',
              border: '1px solid var(--color-tan-border)',
              position: 'relative'
            }}
          >
            {activeMedia === 'product' && (
              <img
                src={product.images.product}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}

            {activeMedia === 'model' && (
              <img
                src={product.images.model}
                alt={`${product.name} on model`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}

            {activeMedia === 'video' && (
              <video
                src={product.videoUrl}
                autoPlay
                loop
                muted
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}

            {/* Media Type Indicator */}
            <div
              style={{
                position: 'absolute',
                top: '0.85rem',
                left: '0.85rem',
                backgroundColor: 'rgba(75, 38, 21, 0.85)',
                color: 'var(--color-base)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0.25rem 0.6rem',
                borderRadius: '2px'
              }}
            >
              {activeMedia === 'product' && 'Product Only Image'}
              {activeMedia === 'model' && 'Model Wearing Product'}
              {activeMedia === 'video' && 'Artisan Film in Motion'}
            </div>
          </div>

          {/* 3 Dedicated Media Switcher Thumbnails */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            <div
              onClick={() => setActiveMedia('product')}
              style={{
                cursor: 'pointer',
                border: '2px solid',
                borderColor: activeMedia === 'product' ? 'var(--color-primary)' : 'var(--color-tan-border)',
                height: '80px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-parchment-surface)',
                position: 'relative'
              }}
            >
              <img src={product.images.product} alt="Product view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, insetInline: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', textAlign: 'center', padding: '0.1rem' }}>
                1. Product
              </div>
            </div>

            <div
              onClick={() => setActiveMedia('model')}
              style={{
                cursor: 'pointer',
                border: '2px solid',
                borderColor: activeMedia === 'model' ? 'var(--color-primary)' : 'var(--color-tan-border)',
                height: '80px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-parchment-surface)',
                position: 'relative'
              }}
            >
              <img src={product.images.model} alt="Model view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, insetInline: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', textAlign: 'center', padding: '0.1rem' }}>
                2. On Model
              </div>
            </div>

            <div
              onClick={() => setActiveMedia('video')}
              style={{
                cursor: 'pointer',
                border: '2px solid',
                borderColor: activeMedia === 'video' ? 'var(--color-primary)' : 'var(--color-tan-border)',
                height: '80px',
                overflow: 'hidden',
                backgroundColor: '#2A1A12',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-light)',
                position: 'relative'
              }}
            >
              <Play size={20} />
              <div style={{ position: 'absolute', bottom: 0, insetInline: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: '0.6rem', textAlign: 'center', padding: '0.1rem' }}>
                3. Video
              </div>
            </div>
          </div>

          {/* GI Craft Authentication Bar */}
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.85rem',
              backgroundColor: 'var(--color-parchment-surface)',
              border: '1px solid var(--color-tan-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.75rem',
              color: 'var(--color-neutral)'
            }}
          >
            <Award size={20} color="var(--color-primary)" />
            <div>
              <strong>Protected Geographical Indication (GI)</strong>
              <div>Handmade in {product.artisanVillage}</div>
            </div>
          </div>

        </div>

        {/* Right Column: Specifications, Sizing, and Order Actions */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>{product.collectionName}</span>
            <span style={{ color: 'var(--color-tan-border)' }}>•</span>
            <span style={{ fontFamily: 'var(--font-devanagari)', color: 'var(--color-primary)', fontWeight: 600 }}>
              {product.sanskrit}
            </span>
          </div>

          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
            {product.name}
          </h2>

          {/* Pricing & Navratri Promo */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-primary)' }}>
              ₹{pricing.finalPrice.toLocaleString('en-IN')}
            </span>
            {pricing.discountPercent > 0 && (
              <>
                <span style={{ fontSize: '1.1rem', color: 'var(--color-neutral)', opacity: 0.5, textDecoration: 'line-through' }}>
                  ₹{pricing.originalPrice.toLocaleString('en-IN')}
                </span>
                <span
                  style={{
                    backgroundColor: 'var(--color-rust)',
                    color: '#fff',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}
                >
                  NAVRATRI 40% OFF
                </span>
              </>
            )}
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--color-neutral)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {product.description}
          </p>

          {/* Color Selection */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
              Leather Tone: <strong>{selectedColor.name}</strong>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {product.colors.map(col => (
                <button
                  key={col.id}
                  onClick={() => setSelectedColor(col)}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: col.hex,
                    border: '2px solid',
                    borderColor: selectedColor.id === col.id ? 'var(--color-primary)' : 'transparent',
                    boxShadow: selectedColor.id === col.id ? '0 0 0 2px var(--color-parchment-light)' : 'none',
                    cursor: 'pointer'
                  }}
                  title={col.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector with Size Guide Trigger */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)' }}>
                Footwear Size (IND / UK): <strong>Size {selectedSize}</strong>
              </div>
              <button
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                style={{ fontSize: '0.72rem', color: 'var(--color-accent)', textDecoration: 'underline', fontWeight: 600 }}
              >
                {showSizeGuide ? 'Hide Size Guide' : 'Size Guide & Fit Note'}
              </button>
            </div>

            {showSizeGuide && (
              <div
                style={{
                  backgroundColor: 'var(--color-base)',
                  border: '1px solid var(--color-tan-border)',
                  padding: '0.85rem',
                  fontSize: '0.76rem',
                  marginBottom: '0.75rem',
                  borderRadius: '2px',
                  lineHeight: 1.5
                }}
              >
                <strong>Authentic Handcrafted Leather Fit Note:</strong>
                <div>Natural vegetable-tanned leather gently stretches and custom-moulds to the contours of your feet over the first 2-3 wears. If you are between sizes, we recommend sizing up.</div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: '42px',
                    height: '42px',
                    fontSize: '0.85rem',
                    fontWeight: selectedSize === size ? 700 : 500,
                    backgroundColor: selectedSize === size ? 'var(--color-primary)' : 'var(--color-base)',
                    color: selectedSize === size ? 'var(--color-base)' : 'var(--color-neutral)',
                    border: '1px solid',
                    borderColor: selectedSize === size ? 'var(--color-primary)' : 'var(--color-tan-border)',
                    borderRadius: '2px'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Bag */}
          <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid var(--color-tan-border)',
                backgroundColor: 'var(--color-base)',
                borderRadius: '2px'
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '0.6rem 0.9rem', fontSize: '1rem', fontWeight: 600 }}
              >
                -
              </button>
              <span style={{ padding: '0.6rem 0.8rem', fontWeight: 700, fontSize: '0.9rem' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '0.6rem 0.9rem', fontSize: '1rem', fontWeight: 600 }}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="btn-primary"
              style={{ flex: 1, gap: '0.5rem' }}
            >
              {isSuccessFeedback ? (
                <>
                  <Check size={16} /> Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag size={16} /> Add to Bag · ₹{(pricing.finalPrice * quantity).toLocaleString('en-IN')}
                </>
              )}
            </button>
          </div>

          {/* Value Propositions */}
          <div style={{ borderTop: '1px solid var(--color-tan-border)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.78rem', color: 'var(--color-neutral)', opacity: 0.9 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Truck size={15} color="var(--color-primary)" />
              <span>Complimentary insured delivery across India in 3–5 business days.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <RefreshCw size={15} color="var(--color-primary)" />
              <span>Hassle-free 7-day size exchanges.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={15} color="var(--color-primary)" />
              <span>100% Plastic-free recycled kraft packaging & karigar signature card.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
