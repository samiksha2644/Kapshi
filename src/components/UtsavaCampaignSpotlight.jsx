import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CAMPAIGN_CONFIG, PRODUCTS } from '../data/products';

export const UtsavaCampaignSpotlight = ({ 
  onExploreUtsava, 
  onSelectProduct,
  compact = false 
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const utsavaProduct = PRODUCTS.find(p => p.collectionId === 'utsava') || PRODUCTS[2];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section 
      id="utsava-spotlight" 
      className={`utsava-spotlight ${compact ? 'compact-mode' : 'section-pad'}`}
      style={{
        backgroundColor: compact ? 'transparent' : 'var(--color-parchment-surface)',
        borderTop: compact ? 'none' : '1px solid var(--color-tan-border)',
        borderBottom: compact ? 'none' : '1px solid var(--color-tan-border)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Section Header (Full Mode only) */}
        {!compact && (
          <div className="section-intro" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                backgroundColor: 'rgba(140, 45, 25, 0.08)',
                color: 'var(--color-rust)',
                padding: '0.35rem 0.9rem',
                borderRadius: '2px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.8rem'
              }}
            >
              <Sparkles size={13} />
              <span>Official Advertisement · The Navratri Edit</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-primary)' }}>
              Woven for Ceremony.<br />
              <em style={{ fontStyle: 'italic' }}>Celebrated in Motion.</em>
            </h2>
            <p style={{ maxWidth: '640px', margin: '0.8rem auto 0', opacity: 0.85, fontSize: '1.05rem' }}>
              Experience the rhythmic grace and artisanal grandeur of our Utsava collection. Hand-burnished babul bark leather sculpted for sacred ceremonies and vibrant festivities.
            </p>
          </div>
        )}

        {/* Two-Column Showcase Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Video Player Container */}
          <div 
            style={{
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: '#1E120D',
              boxShadow: '0 16px 36px rgba(75, 38, 21, 0.18)',
              border: '1px solid var(--color-tan-border)',
              aspectRatio: '16 / 9'
            }}
          >
            <video
              ref={videoRef}
              src="/assets/video/navratri-video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              onClick={togglePlay}
            />

            {/* Top Badges Overlay */}
            <div 
              style={{
                position: 'absolute',
                top: '0.9rem',
                left: '0.9rem',
                right: '0.9rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pointerEvents: 'none'
              }}
            >
              <span 
                style={{
                  backgroundColor: 'rgba(75, 38, 21, 0.88)',
                  backdropFilter: 'blur(6px)',
                  color: 'var(--color-gold-light)',
                  padding: '0.3rem 0.65rem',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  border: '1px solid rgba(223, 178, 98, 0.3)'
                }}
              >
                UTSAVA CAMPAIGN FILM
              </span>

              {CAMPAIGN_CONFIG.navratri.isActive && (
                <span 
                  style={{
                    backgroundColor: 'var(--color-rust)',
                    color: '#FFF',
                    padding: '0.3rem 0.65rem',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '2px'
                  }}
                >
                  40% OFF ACTIVE
                </span>
              )}
            </div>

            {/* Play/Pause Center Indicator on Hover / Pause */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(75, 38, 21, 0.85)',
                  border: '2px solid var(--color-gold-light)',
                  color: 'var(--color-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.2s ease'
                }}
                aria-label="Play advertisement"
              >
                <Play size={26} fill="var(--color-gold-light)" style={{ marginLeft: '3px' }} />
              </button>
            )}

            {/* Bottom Controls Bar */}
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(140, 45, 25, 0.92) 0%, rgba(14, 8, 5, 0) 100%)',
                padding: '1.25rem 0.9rem 0.65rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}
            >
              {/* Scrub line */}
              <div 
                onClick={handleSeek}
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  position: 'relative',
                  borderRadius: '2px'
                }}
              >
                <div 
                  style={{
                    width: `${progress}%`,
                    height: '100%',
                    backgroundColor: 'var(--color-gold-light)',
                    borderRadius: '2px',
                    transition: 'width 0.1s linear'
                  }}
                />
              </div>

              {/* Action buttons row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <button 
                    onClick={togglePlay}
                    style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                  </button>

                  <button 
                    onClick={toggleMute}
                    style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                    <span style={{ fontSize: '0.7rem', opacity: 0.85 }}>{isMuted ? 'Muted' : 'Sound On'}</span>
                  </button>

                  <span style={{ fontSize: '0.68rem', opacity: 0.75, fontFamily: 'monospace' }}>
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <button 
                  onClick={handleFullscreen}
                  style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  aria-label="Fullscreen video"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Context & Campaign Perks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div style={{ borderLeft: '3px solid var(--color-gold)', paddingLeft: '1rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-rust)', marginBottom: '0.3rem', display: 'block' }}>
                Occasion Footwear · Kolhapur Craft
              </span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.4rem', color: 'var(--color-primary)' }}>
                Utsava Gilded Royal Kolhapuri
              </h3>
              <p style={{ fontSize: '0.92rem', opacity: 0.85, lineHeight: 1.55 }}>
                Featured in our official campaign advertisement. Hand-plaited dual metallic braids, antique-gold threading, and a cushioned vegetable-tanned sole engineered for festive durability.
              </p>
            </div>

            {/* Campaign Privilege Card */}
            <div 
              style={{
                backgroundColor: 'var(--color-parchment-light)',
                border: '1px solid var(--color-tan-border)',
                borderRadius: '3px',
                padding: '1.1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-rust)' }}>
                  <Tag size={14} /> The Festive Navratri Edit
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', backgroundColor: 'rgba(198, 146, 59, 0.18)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                  CODE: {CAMPAIGN_CONFIG.navratri?.pairOffer?.code || 'UTSAVAPAIR'}
                </span>
              </div>

              <p style={{ fontSize: '0.84rem', margin: 0, opacity: 0.85 }}>
                {CAMPAIGN_CONFIG.navratri.terms}
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-primary)', opacity: 0.85 }}>
                  <ShieldCheck size={13} color="var(--color-gold)" /> Zero Chemical Chrome
                </span>
                <span style={{ fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-primary)', opacity: 0.85 }}>
                  <ShieldCheck size={13} color="var(--color-gold)" /> Hand-Burnished Walnut
                </span>
                <span style={{ fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-primary)', opacity: 0.85 }}>
                  <ShieldCheck size={13} color="var(--color-gold)" /> Authentic Kolhapur Cluster
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {onExploreUtsava && (
                <button 
                  className="btn-primary" 
                  onClick={onExploreUtsava}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Explore Utsava Collection <ArrowRight size={15} />
                </button>
              )}

              {onSelectProduct && utsavaProduct && (
                <button 
                  className="btn-secondary" 
                  onClick={() => onSelectProduct(utsavaProduct)}
                >
                  View Featured Silhouette
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
