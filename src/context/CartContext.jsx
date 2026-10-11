import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, CAMPAIGN_CONFIG } from '../data/products';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('kapshi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('kapshi_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not persist cart', e);
    }
  }, [cart]);

  // Campaign calculation
  const getProductPricing = (product) => {
    const isOccasion = product.collectionId === 'utsava';
    const isCampaignActive = CAMPAIGN_CONFIG.navratri.isActive;

    if (isOccasion && isCampaignActive) {
      const discount = Math.round(product.originalPrice * (CAMPAIGN_CONFIG.navratri.discountPercent / 100));
      const finalPrice = product.originalPrice - discount;
      return {
        originalPrice: product.originalPrice,
        finalPrice,
        discountPercent: CAMPAIGN_CONFIG.navratri.discountPercent,
        appliedPromo: 'Navratri 40% Festive Privilege'
      };
    }

    return {
      originalPrice: product.originalPrice,
      finalPrice: product.originalPrice,
      discountPercent: 0,
      appliedPromo: null
    };
  };

  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    if (!selectedSize) {
      alert('Please select your preferred shoe size.');
      return false;
    }

    const pricing = getProductPricing(product);
    const itemKey = `${product.id}-${selectedSize}-${selectedColor?.id || 'standard'}`;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            itemKey,
            productId: product.id,
            name: product.name,
            collectionName: product.collectionName,
            collectionId: product.collectionId,
            image: product.images.product,
            price: pricing.finalPrice,
            originalPrice: pricing.originalPrice,
            discountPercent: pricing.discountPercent,
            appliedPromo: pricing.appliedPromo,
            size: selectedSize,
            color: selectedColor,
            quantity
          }
        ];
      }
    });

    setIsCartOpen(true);
    return true;
  };

  const updateQuantity = (itemKey, delta) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.itemKey === itemKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (itemKey) => {
    setCart(prevCart => prevCart.filter(item => item.itemKey !== itemKey));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const rawSubtotal = cart.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
  const totalSavings = rawSubtotal - subtotal;

  // Pair offer eligibility: 2 or more pairs in cart
  const hasPairOffer = totalItems >= 2;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        rawSubtotal,
        totalSavings,
        hasPairOffer,
        getProductPricing
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
