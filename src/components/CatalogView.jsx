import React, { useState } from 'react';
import { PRODUCTS, COLLECTIONS, CAMPAIGN_CONFIG } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, Filter, RotateCcw } from 'lucide-react';

export const CatalogView = ({ onSelectProduct, initialCollection = null }) => {
  const [selectedCollection, setSelectedCollection] = useState(initialCollection || 'all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter products
  const filteredProducts = PRODUCTS.filter(prod => {
    if (selectedCollection !== 'all' && prod.collectionId !== selectedCollection) return false;
    if (selectedSize !== 'all' && !prod.sizes.includes(Number(selectedSize))) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.originalPrice - b.originalPrice;
    if (sortBy === 'price-high') return b.originalPrice - a.originalPrice;
    return 0;
  });

  const activeCollectionObj = COLLECTIONS.find(c => c.id === selectedCollection);

  const resetFilters = () => {
    setSelectedCollection('all');
    setSelectedSize('all');
    setSortBy('featured');
  };

  return (
    <div style={{ backgroundColor: 'var(--color-base)', minHeight: '80vh', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <div
        style={{
          backgroundColor: 'var(--color-parchment-light)',
          borderBottom: '1px solid var(--color-tan-border)',
          padding: '4rem 1.5rem 3rem'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="eyebrow">The Complete Footwear Atelier</span>
            {activeCollectionObj?.sanskrit && (
              <>
                <span style={{ color: 'var(--color-tan-border)' }}>•</span>
                <span style={{ fontFamily: 'var(--font-devanagari)', color: 'var(--color-primary)' }}>
                  {activeCollectionObj.sanskrit}
                </span>
              </>
            )}
          </div>

          <h1 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
            {activeCollectionObj ? `${activeCollectionObj.name} — ${activeCollectionObj.subtitle}` : 'Handcrafted Kolhapuris for Today'}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-neutral)', opacity: 0.85, lineHeight: 1.6 }}>
            {activeCollectionObj
              ? activeCollectionObj.description
              : 'Every pair is sculpted slowly by hand in the historic villages of Maharashtra using bag-tanned babul bark leather, braided cords, and zero chrome chemicals.'}
          </p>

          {/* Navratri Occasion Notice if applicable */}
          {selectedCollection === 'utsava' && CAMPAIGN_CONFIG.navratri.isActive && (
            <div
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(140, 45, 25, 0.12)',
                border: '1px solid var(--color-rust)',
                color: 'var(--color-rust)',
                padding: '0.55rem 1.25rem',
                borderRadius: '2px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <Sparkles size={15} />
              <span>Navratri Special: 40% privilege automatically calculated on all pairs below.</span>
            </div>
          )}

        </div>
      </div>

      {/* Filter and Control Bar */}
      <div
        style={{
          position: 'sticky',
          top: '68px',
          zIndex: 100,
          backgroundColor: 'rgba(241, 230, 208, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--color-tan-border)',
          padding: '1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Collection Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
            <button
              onClick={() => setSelectedCollection('all')}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                border: '1px solid',
                borderColor: selectedCollection === 'all' ? 'var(--color-primary)' : 'var(--color-tan-border)',
                backgroundColor: selectedCollection === 'all' ? 'var(--color-primary)' : 'var(--color-parchment-light)',
                color: selectedCollection === 'all' ? 'var(--color-base)' : 'var(--color-neutral)'
              }}
            >
              All (4)
            </button>

            {COLLECTIONS.map(col => (
              <button
                key={col.id}
                onClick={() => setSelectedCollection(col.id)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  border: '1px solid',
                  borderColor: selectedCollection === col.id ? 'var(--color-primary)' : 'var(--color-tan-border)',
                  backgroundColor: selectedCollection === col.id ? 'var(--color-primary)' : 'var(--color-parchment-light)',
                  color: selectedCollection === col.id ? 'var(--color-base)' : 'var(--color-neutral)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>{col.name}</span>
                {col.id === 'utsava' && <span style={{ color: 'var(--color-gold-light)', fontSize: '0.7rem' }}>★</span>}
              </button>
            ))}
          </div>

          {/* Size Filter & Sorting */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', fontWeight: 600 }}>
                Size:
              </span>
              <select
                value={selectedSize}
                onChange={e => setSelectedSize(e.target.value)}
                style={{
                  padding: '0.45rem 0.8rem',
                  backgroundColor: 'var(--color-parchment-light)',
                  border: '1px solid var(--color-tan-border)',
                  color: 'var(--color-primary)',
                  fontSize: '0.78rem',
                  fontFamily: 'inherit',
                  borderRadius: '2px'
                }}
              >
                <option value="all">All Sizes</option>
                <option value="6">Size 6 (IND)</option>
                <option value="7">Size 7 (IND)</option>
                <option value="8">Size 8 (IND)</option>
                <option value="9">Size 9 (IND)</option>
                <option value="10">Size 10 (IND)</option>
                <option value="11">Size 11 (IND)</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', fontWeight: 600 }}>
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  padding: '0.45rem 0.8rem',
                  backgroundColor: 'var(--color-parchment-light)',
                  border: '1px solid var(--color-tan-border)',
                  color: 'var(--color-primary)',
                  fontSize: '0.78rem',
                  fontFamily: 'inherit',
                  borderRadius: '2px'
                }}
              >
                <option value="featured">Editorial Selection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {(selectedCollection !== 'all' || selectedSize !== 'all' || sortBy !== 'featured') && (
              <button
                onClick={resetFilters}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.74rem',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                <RotateCcw size={12} /> Reset
              </button>
            )}

          </div>

        </div>
      </div>

      {/* Product Grid */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-neutral)', opacity: 0.8 }}>
            Showing <strong>{filteredProducts.length}</strong> handcrafted silhouette{filteredProducts.length === 1 ? '' : 's'}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>No silhouettes matching criteria</h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>Try clearing filters to view available handcrafted sizes.</p>
            <button onClick={resetFilters} className="btn-secondary">Reset Filters</button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.5rem 1.75rem'
            }}
          >
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
