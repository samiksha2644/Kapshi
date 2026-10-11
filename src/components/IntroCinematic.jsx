import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronRight, Sparkles } from 'lucide-react';

export const IntroCinematic = ({ onComplete }) => {
  // States: 'prompt' (click to enter) -> 'playing' (video playing) -> 'exiting' (fade out)
  const [phase, setPhase] = useState('prompt');
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(10);
  const videoRef = useRef(null);

  const startExperience = () => {
    setPhase('playing');
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch((err) => {
            console.warn('Autoplay with audio blocked, falling back to muted playback:', err);
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play();
              setIsPlaying(true);
            }
          });
      }
    }
  };

  const handleSkipOrEnd = () => {
    if (phase === 'exiting') return;
    setPhase('exiting');
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Smooth cross-fade to home
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 12;
      setProgress((cur / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#1E120B',
        color: '#F1E6D0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: phase === 'exiting' ? 0 : 1,
        pointerEvents: phase === 'exiting' ? 'none' : 'auto',
        fontFamily: 'var(--font-sans, sans-serif)'
      }}
      onClick={phase === 'prompt' ? startExperience : undefined}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/assets/video/kapshi-intro.mp4"
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSkipOrEnd}
        onError={handleSkipOrEnd}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          opacity: phase === 'playing' ? 1 : 0.08,
          transition: 'opacity 0.8s ease'
        }}
      />

      {/* Subtle Cinematic Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            phase === 'prompt'
              ? 'radial-gradient(circle at center, rgba(30, 18, 11, 0.7) 0%, rgba(20, 11, 7, 0.95) 100%)'
              : 'radial-gradient(circle at center, transparent 40%, rgba(15, 8, 5, 0.6) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
          transition: 'background 0.8s ease'
        }}
      />

      {/* PHASE 1: CLICK TO ENTER PROMPT */}
      {phase === 'prompt' && (
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '680px',
            padding: '2rem 1.5rem',
            animation: 'fadeInUp 0.8s ease'
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <img
              src="/assets/brand/kapshi-logo.png"
              alt="KAPSHI"
              style={{
                height: '74px',
                width: 'auto',
                filter: 'brightness(0) invert(0.95)',
                margin: '0 auto 1.5rem',
                display: 'block'
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-devanagari, serif)',
                fontSize: '1.05rem',
                color: 'var(--color-gold-light, #DFB262)',
                letterSpacing: '0.15em',
                marginBottom: '0.75rem'
              }}
            >
              कापशी · पारंपारिक पादत्राणे
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif, serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                color: '#EDE1C7',
                lineHeight: 1.3
              }}
            >
              “Made from where we came. Designed for where we're going.”
            </div>
          </div>

          {/* Interactive Enter CTA Button */}
          <div style={{ marginTop: '2.5rem' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                startExperience();
              }}
              style={{
                background: 'var(--color-gold, #C6923B)',
                color: '#1E120B',
                border: 'none',
                padding: '1.1rem 2.8rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(198, 146, 59, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(198, 146, 59, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(198, 146, 59, 0.35)';
              }}
            >
              <Play size={16} fill="#1E120B" />
              <span>Enter Experience</span>
            </button>
            <div
              style={{
                fontSize: '0.75rem',
                color: '#BCA88F',
                marginTop: '1rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              Sound recommended · Click to play intro
            </div>
          </div>

          {/* Quick Direct Access */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkipOrEnd();
            }}
            style={{
              marginTop: '2rem',
              background: 'transparent',
              border: 'none',
              color: '#8E7B67',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '0.5rem 1rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F1E6D0')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8E7B67')}
          >
            Skip directly to website →
          </button>
        </div>
      )}

      {/* PHASE 2: PLAYING CONTROLS OVERLAY */}
      {phase === 'playing' && (
        <>
          {/* Top Bar: Brand Watermark & Sound Toggle */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              padding: '1.75rem 2.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(20,11,7,0.75) 0%, transparent 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <img
                src="/assets/brand/kapshi-mark.png"
                alt="KAPSHI"
                style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(0.95)' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif, serif)',
                  fontSize: '1rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#F1E6D0'
                }}
              >
                KAPSHI
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={togglePlay}
                style={{
                  background: 'rgba(30, 18, 11, 0.65)',
                  border: '1px solid rgba(241, 230, 208, 0.25)',
                  color: '#F1E6D0',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(8px)',
                  transition: 'background 0.2s'
                }}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={toggleMute}
                style={{
                  background: 'rgba(30, 18, 11, 0.65)',
                  border: '1px solid rgba(241, 230, 208, 0.25)',
                  color: '#F1E6D0',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(8px)',
                  transition: 'background 0.2s'
                }}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{isMuted ? 'Unmute' : 'Sound On'}</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Timeline & Skip CTA */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              padding: '2rem 2.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(0deg, rgba(20,11,7,0.85) 0%, transparent 100%)'
            }}
          >
            <div style={{ color: '#D4C4AA', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              The Kolhapuri, For Today
            </div>

            <button
              onClick={handleSkipOrEnd}
              style={{
                background: 'rgba(241, 230, 208, 0.12)',
                border: '1px solid rgba(241, 230, 208, 0.4)',
                color: '#F1E6D0',
                padding: '0.65rem 1.4rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(241, 230, 208, 0.25)';
                e.currentTarget.style.borderColor = '#F1E6D0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(241, 230, 208, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(241, 230, 208, 0.4)';
              }}
            >
              <span>Enter Website</span>
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Sleek Bottom Edge Progress Line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              backgroundColor: 'rgba(241, 230, 208, 0.15)',
              zIndex: 15
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: 'var(--color-gold, #C6923B)',
                transition: 'width 0.2s linear'
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
