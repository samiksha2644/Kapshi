import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { BrandFilmHero } from './components/BrandFilmHero';
import { HomepageSections } from './components/HomepageSections';
import { CatalogView } from './components/CatalogView';
import { StoryView } from './components/StoryView';
import { CraftView } from './components/CraftView';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { IntroCinematic } from './components/IntroCinematic';
import { NavratriEditionModal } from './components/NavratriEditionModal';

function MainLayout() {
  // Navigation states: 'home', 'shop', 'collection', 'story', 'craft'
  const [currentView, setCurrentView] = useState('home');
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hasCompletedIntro, setHasCompletedIntro] = useState(false);

  const navigateTo = (view, collection = null) => {
    setCurrentView(view);
    if (collection) {
      setSelectedCollection(collection);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleIntroComplete = () => {
    setHasCompletedIntro(true);
  };

  return (
    <div className="kapshi-app">
      {/* Intro Experience: Plays before any page loads when website is clicked */}
      {!hasCompletedIntro && (
        <IntroCinematic onComplete={handleIntroComplete} />
      )}

      {/* Global Refined Navigation */}
      <Navbar
        currentView={currentView}
        setView={navigateTo}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
      />

      {/* Main View Router */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Section A: Cinematic Brand Film Hero */}
            <BrandFilmHero onExploreClick={() => navigateTo('shop')} />

            {/* Sections B to I: Manifesto, Collections, Featured Products, Craft, Lifestyle, Pillars, Closing */}
            <HomepageSections
              onSelectProduct={handleSelectProduct}
              onNavigateCollection={(colId) => navigateTo('collection', colId)}
              onViewStory={() => navigateTo('story')}
              onViewCraft={() => navigateTo('craft')}
              onShopAll={() => navigateTo('shop')}
            />

            {/* Navratri Festive Edition Update Modal Popup */}
            {hasCompletedIntro && (
              <NavratriEditionModal
                onExploreUtsava={() => navigateTo('collection', 'utsava')}
              />
            )}
          </>
        )}

        {currentView === 'shop' && (
          <CatalogView
            onSelectProduct={handleSelectProduct}
            initialCollection={null}
          />
        )}

        {currentView === 'collection' && (
          <CatalogView
            onSelectProduct={handleSelectProduct}
            initialCollection={selectedCollection}
          />
        )}

        {currentView === 'story' && (
          <StoryView
            onShopClick={() => navigateTo('shop')}
          />
        )}

        {currentView === 'craft' && (
          <CraftView
            onShopClick={() => navigateTo('shop')}
          />
        )}
      </main>

      {/* Product Detail Modal Showcase (3-Part Media Gallery) */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Sliding Cart Drawer */}
      <CartDrawer />

      {/* Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onReplayIntro={() => setHasCompletedIntro(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
