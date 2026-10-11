import React, { useState, useRef } from 'react';
import { Play, Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product, onSelect }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0); // 0: product, 1: model, 2: video
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const { addToCart, getProductPricing } = useCart();
  const pricing = getProductPricing(product);

  const handleMediaSwitch = (index, e) => {
    e.stopPropagation();
    setActiveMediaIndex(index);
    if (index === 2 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
  };

  return (
    <div
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--color-parchment-light)',
        border: '1px solid var(--color-tan-border)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease'
      }}
      className="product-card"
    >
      {/* Promotional / Festive Tag */}
      {pricing.discountPercent > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            zIndex: 15,
            backgroundColor: 'var(--color-rust)',
            color: '#fff',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '0.28rem 0.65rem',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            boxShadow: '0 2px 8px rgba(140, 45, 25, 0.3)'
          }}
        >
          <Sparkles size={11} />
          <span>Navratri -{pricing.discountPercent}%</span>
        </div>
      )}

      {/* Visual Media Canvas (3 Media types: Product, Model, Video) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '380px',
          backgroundColor: 'var(--color-base)',
          overflow: 'hidden'
        }}
      >
        {/* Media 0: Clean Product Photograph */}
        {activeMediaIndex === 0 && (
          <img
            src={product.images.product}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: isHovered ? 'scale(1.04)' : 'scale(1)'
            }}
          />
        )}

        {/* Media 1: Model Wearing Product */}
        {activeMediaIndex === 1 && (
          <img
            src={product.images.model}
            alt={`${product.name} on model`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        )}

        {/* Media 2: Cinematic Video in motion */}
        {activeMediaIndex === 2 && (
          <video
            ref={videoRef}
            src={product.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        )}

        {/* Media Switcher Badges (Product, Model, Film) */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(41, 35, 31, 0.72)',
            backdropFilter: 'blur(4px)',
            padding: '0.3rem 0.65rem',
            borderRadius: '20px',
            zIndex: 10
          }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={(e) => handleMediaSwitch(0, e)}
            style={{
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: activeMediaIndex === 0 ? 'var(--color-gold-light)' : '#E4D5BC',
              padding: '0.15rem 0.4rem',
              borderRadius: '10px',
              backgroundColor: activeMediaIndex === 0 ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            Product
          </button>
          <button
            onClick={(e) => handleMediaSwitch(1, e)}
            style={{
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: activeMediaIndex === 1 ? 'var(--color-gold-light)' : '#E4D5BC',
              padding: '0.15rem 0.4rem',
              borderRadius: '10px',
              backgroundColor: activeMediaIndex === 1 ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            On Model
          </button>
          <button
            onClick={(e) => handleMediaSwitch(2, e)}
            style={{
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: activeMediaIndex === 2 ? 'var(--color-gold-light)' : '#E4D5BC',
              padding: '0.15rem 0.4rem',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              backgroundColor: activeMediaIndex === 2 ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            <Play size={9} /> Video
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Sanskrit & Collection Subtitle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 600 }}>
            {product.collectionName}
          </span>
          <span style={{ fontFamily: 'var(--font-devanagari)', fontSize: '0.85rem', color: 'var(--color-primary)', opacity: 0.8 }}>
            {product.sanskrit}
          </span>
        </div>

        {/* Product Name */}
        <h3
          style={{
            fontSize: '1.28rem',
            color: 'var(--color-primary)',
            fontWeight: 600,
            marginBottom: '0.6rem',
            lineHeight: 1.25
          }}
        >
          {product.name}
        </h3>

        {/* Pricing Layout */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            ₹{pricing.finalPrice.toLocaleString('en-IN')}
          </span>
          {pricing.discountPercent > 0 && (
            <>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-neutral)', opacity: 0.55, textDecoration: 'line-through' }}>
                ₹{pricing.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-rust)' }}>
                (Save ₹{(pricing.originalPrice - pricing.finalPrice).toLocaleString('en-IN')})
              </span>
            </>
          )}
        </div>

        {/* Size Selection Pills */}
        <div style={{ marginBottom: '1.2rem' }} onClick={e => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-neutral)', opacity: 0.8, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <span>Select Size (IND/UK)</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Size {selectedSize}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                style={{
                  width: '32px',
                  height: '32px',
                  fontSize: '0.75rem',
                  fontWeight: selectedSize === size ? 700 : 500,
                  backgroundColor: selectedSize === size ? 'var(--color-primary)' : 'var(--color-base)',
                  color: selectedSize === size ? 'var(--color-base)' : 'var(--color-neutral)',
                  border: '1px solid',
                  borderColor: selectedSize === size ? 'var(--color-primary)' : 'var(--color-tan-border)',
                  borderRadius: '2px',
                  transition: 'all 0.2s ease'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Karigar Origin Proof */}
        <div
          style={{
            fontSize: '0.74rem',
            color: 'var(--color-neutral)',
            opacity: 0.85,
            borderTop: '1px solid var(--color-tan-border)',
            paddingTop: '0.75rem',
            marginBottom: '1.25rem',
            lineHeight: 1.4
          }}
        >
          <strong>Karigar Origin:</strong> {product.artisanVillage}
        </div>

        {/* Action Buttons: Quick Add to Bag & View Details */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }} onClick={e => e.stopPropagation()}>
          <button
            onClick={handleQuickAdd}
            className="btn-primary"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              fontSize: '0.78rem',
              letterSpacing: '0.12em'
            }}
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
          
          <button
            onClick={() => onSelect(product)}
            style={{
              padding: '0.75rem',
              backgroundColor: 'var(--color-base)',
              border: '1px solid var(--color-tan-border)',
              borderRadius: '2px',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Inspect Details"
          >
            <Eye size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
