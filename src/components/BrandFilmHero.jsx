import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowDown, ChevronRight } from 'lucide-react';
import { BRAND_STORY } from '../data/products';

export const BrandFilmHero = ({ onExploreClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn('Autoplay prevented or video loading:', error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const continueToSite = () => {
    const manifesto = document.getElementById('brand-manifesto');
    if (manifesto) manifesto.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '92vh',
        backgroundColor: '#2A1A12',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F1E6D0'
      }}
    >
      {/* Background Brand Film Video */}
      <video
        ref={videoRef}
        src="/assets/video/brand-film.mp4"
        poster="/assets/video/brand-film-poster.jpg"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          opacity: 0.58,
          zIndex: 1,
          transition: 'opacity 1.2s ease'
        }}
      />

      {/* Editorial Parchment & Leather Gradient Mask */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(42, 26, 18, 0.45) 0%, rgba(42, 26, 18, 0.85) 100%)',
          zIndex: 2
        }}
      />

      {/* Subtle Grain / Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 120px rgba(0,0,0,0.65)',
          zIndex: 3
        }}
      />

      {/* Centered Editorial Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '960px',
          padding: '4rem 1.5rem'
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-devanagari)',
            fontSize: '1.25rem',
            color: 'var(--color-gold-light)',
            marginBottom: '0.75rem',
            letterSpacing: '0.08em'
          }}
        >
          कापशी · पारंपारिक पादत्राणे
        </div>

        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/assets/brand/kapshi-logo.png"
            alt="KAPSHI Brandmark"
            style={{
              height: '62px',
              width: 'auto',
              filter: 'brightness(0) invert(0.95)',
              opacity: 0.95
            }}
          />
        </div>

        <div
          className="eyebrow"
          style={{
            color: 'var(--color-tan-light)',
            marginBottom: '1rem',
            letterSpacing: '0.3em'
          }}
        >
          HERITAGE FOOTWEAR · INDIA 2026
        </div>

        <h1
          style={{
            color: '#FAF3E7',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)'
          }}
        >
          “Made from where we came.<br />Designed for where we’re going.”
        </h1>

        <p
          style={{
            color: '#E4D5BC',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            maxWidth: '680px',
            margin: '0 auto 2.5rem',
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          The Kolhapuri, for today. Authentic. Comfortable. Contemporary.
          Four centuries of GI-protected hand-braided craft reimagined for modern wardrobes.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={onExploreClick}
            className="btn-primary"
            style={{
              backgroundColor: 'var(--color-base)',
              color: 'var(--color-primary)',
              borderColor: 'var(--color-base)'
            }}
          >
            Explore Collections <ChevronRight size={16} />
          </button>

          <button
            onClick={() => {
              const manifesto = document.getElementById('brand-manifesto');
              if (manifesto) manifesto.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
            style={{
              borderColor: 'rgba(241, 230, 208, 0.45)',
              color: '#F1E6D0'
            }}
          >
            Read Our Story
          </button>
        </div>
      </div>

      {/* Bottom Floating Controls: Skip Film & Audio/Play Toggles */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          right: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 20
        }}
      >
        {/* Play & Mute Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={togglePlay}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#E4D5BC',
              fontSize: '0.74rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              backgroundColor: 'rgba(42, 26, 18, 0.65)',
              padding: '0.45rem 0.9rem',
              borderRadius: '2px',
              border: '1px solid rgba(228, 213, 188, 0.25)'
            }}
            aria-label={isPlaying ? 'Pause brand film' : 'Play brand film'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? 'Pause Film' : 'Play Film'}</span>
          </button>

          <button
            onClick={toggleMute}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#E4D5BC',
              backgroundColor: 'rgba(42, 26, 18, 0.65)',
              padding: '0.45rem',
              borderRadius: '2px',
              border: '1px solid rgba(228, 213, 188, 0.25)'
            }}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* Continue to homepage anchor */}
        <button
          onClick={() => {
            const manifesto = document.getElementById('brand-manifesto');
            if (manifesto) manifesto.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--color-tan-light)',
            fontSize: '0.74rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          <span>Scroll to Discover</span>
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
};
