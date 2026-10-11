import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CAMPAIGN_CONFIG } from '../data/products';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    rawSubtotal,
    totalSavings,
    hasPairOffer
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'checkout', 'confirmed'
  const [shippingAddress, setShippingAddress] = useState({
    name: 'Aaditya Deshmukh',
    phone: '+91 98234 56789',
    address: 'Flat 402, Prathamesh Heritage, Fergusson College Road',
    city: 'Pune',
    pincode: '411004'
  });

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep('confirmed');
  };

  const handleFinishDemo = () => {
    clearCart();
    setCheckoutStep('cart');
    setIsCartOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(41, 35, 31, 0.7)',
        backdropFilter: 'blur(5px)',
        zIndex: 1500,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: 'var(--color-parchment-light)',
          boxShadow: '-8px 0 32px rgba(75, 38, 21, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem',
            borderBottom: '1px solid var(--color-tan-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-parchment-surface)'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Your Shopping Bag
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {totalItems} {totalItems === 1 ? 'Pair' : 'Pairs'} Selected
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{ color: 'var(--color-primary)', padding: '0.4rem' }}
            aria-label="Close Bag"
          >
            <X size={22} />
          </button>
        </div>

        {/* Campaign Offer Notification Banner */}
        {hasPairOffer ? (
          <div
            style={{
              backgroundColor: 'rgba(198, 146, 59, 0.15)',
              borderBottom: '1px solid var(--color-gold)',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.75rem',
              color: 'var(--color-primary)'
            }}
          >
            <Sparkles size={16} color="var(--color-gold)" />
            <div>
              <strong>Pair Privilege Unlocked!</strong>
              <div>Complimentary artisan cotton travel dust bag included with your 2+ pairs.</div>
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: 'var(--color-base)',
              borderBottom: '1px solid var(--color-tan-border)',
              padding: '0.6rem 1.25rem',
              fontSize: '0.72rem',
              color: 'var(--color-neutral)',
              opacity: 0.9
            }}
          >
            Add 1 more pair to unlock the <strong>Festive Navratri Pair Privilege</strong>.
          </div>
        )}

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                Your bag is empty
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-neutral)', opacity: 0.8, marginBottom: '2rem' }}>
                Explore our handcrafted Kolhapuri collections rooted in centuries of artisan heritage.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Discover Collections
              </button>
            </div>
          ) : checkoutStep === 'cart' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cart.map(item => (
                <div
                  key={item.itemKey}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--color-tan-border)'
                  }}
                >
                  <div
                    style={{
                      width: '84px',
                      height: '96px',
                      backgroundColor: 'var(--color-base)',
                      border: '1px solid var(--color-tan-border)',
                      flexShrink: 0
                    }}
                  >
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.collectionName}
                    </div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                      {item.name}
                    </div>

                    <div style={{ fontSize: '0.76rem', color: 'var(--color-neutral)', opacity: 0.85, marginTop: '0.2rem' }}>
                      Size: <strong>{item.size} (IND/UK)</strong> {item.color?.name && `• ${item.color.name}`}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.4rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-primary)' }}>
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.discountPercent > 0 && (
                        <span style={{ fontSize: '0.76rem', textDecoration: 'line-through', opacity: 0.5 }}>
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    {/* Quantity & Delete */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.6rem' }}>
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
                          onClick={() => updateQuantity(item.itemKey, -1)}
                          style={{ padding: '0.25rem 0.6rem', fontSize: '0.85rem', fontWeight: 600 }}
                        >
                          -
                        </button>
                        <span style={{ padding: '0.25rem 0.5rem', fontSize: '0.82rem', fontWeight: 700 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, 1)}
                          style={{ padding: '0.25rem 0.6rem', fontSize: '0.85rem', fontWeight: 600 }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.itemKey)}
                        style={{ color: 'var(--color-accent)', padding: '0.3rem' }}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : checkoutStep === 'checkout' ? (
            /* Checkout Form Demo */
            <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Delivery Details (Demo Mode)
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', marginBottom: '0.3rem', color: 'var(--color-accent)', fontWeight: 600 }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.name}
                  onChange={e => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid var(--color-tan-border)', backgroundColor: 'var(--color-base)', fontFamily: 'inherit' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', marginBottom: '0.3rem', color: 'var(--color-accent)', fontWeight: 600 }}>Phone Number</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.phone}
                  onChange={e => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid var(--color-tan-border)', backgroundColor: 'var(--color-base)', fontFamily: 'inherit' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', marginBottom: '0.3rem', color: 'var(--color-accent)', fontWeight: 600 }}>Address</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.address}
                  onChange={e => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid var(--color-tan-border)', backgroundColor: 'var(--color-base)', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', marginBottom: '0.3rem', color: 'var(--color-accent)', fontWeight: 600 }}>City</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.city}
                    onChange={e => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', border: '1px solid var(--color-tan-border)', backgroundColor: 'var(--color-base)', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', marginBottom: '0.3rem', color: 'var(--color-accent)', fontWeight: 600 }}>PIN Code</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.pincode}
                    onChange={e => setShippingAddress({ ...shippingAddress, pincode: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', border: '1px solid var(--color-tan-border)', backgroundColor: 'var(--color-base)', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--color-base)', border: '1px solid var(--color-tan-border)', padding: '0.85rem', fontSize: '0.74rem' }}>
                <strong>Transparent Note:</strong> This is a client demonstration mode. In a live production environment, this is seamlessly wired to your Razorpay/Stripe Indian payment gateway and LIDCOM/karigar inventory backend.
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Confirm Demo Order · ₹{subtotal.toLocaleString('en-IN')}
              </button>

              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-accent)', textDecoration: 'underline' }}
              >
                Back to Bag
              </button>
            </form>
          ) : (
            /* Order Confirmed State */
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={54} color="var(--color-primary)" style={{ margin: '0 auto 1.25rem' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Dhanyawad! Order Placed.
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-neutral)', opacity: 0.85, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Your handcrafted Kolhapuris are being prepared by master karigars in Maharashtra. A personalized karigar certificate and care guide will accompany your delivery.
              </p>
              <div style={{ backgroundColor: 'var(--color-base)', border: '1px solid var(--color-tan-border)', padding: '1rem', fontSize: '0.76rem', textAlign: 'left', marginBottom: '2rem' }}>
                <div><strong>Order Reference:</strong> #KPS-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div><strong>Deliver To:</strong> {shippingAddress.name}, {shippingAddress.city} - {shippingAddress.pincode}</div>
                <div><strong>Total Paid (Demo):</strong> ₹{subtotal.toLocaleString('en-IN')}</div>
              </div>
              <button onClick={handleFinishDemo} className="btn-primary" style={{ width: '100%' }}>
                Continue Browsing
              </button>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Trigger */}
        {cart.length > 0 && checkoutStep === 'cart' && (
          <div
            style={{
              padding: '1.5rem',
              borderTop: '1px solid var(--color-tan-border)',
              backgroundColor: 'var(--color-parchment-surface)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--color-neutral)' }}>
              <span>Subtotal ({totalItems} pairs)</span>
              <span>₹{rawSubtotal.toLocaleString('en-IN')}</span>
            </div>

            {totalSavings > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--color-rust)', fontWeight: 600 }}>
                <span>Navratri Festive Privilege</span>
                <span>-₹{totalSavings.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--color-accent)' }}>
              <span>Insured Indian Shipping</span>
              <span style={{ fontWeight: 600 }}>COMPLIMENTARY</span>
            </div>

            <div className="parchment-divider" style={{ margin: '0.6rem 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              <span>Final Total</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={() => setCheckoutStep('checkout')}
              className="btn-primary"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
