import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

// Create context for sharing mouse coordinates between CardsContainer and Card components
const CardsContext = createContext();

export const useCardsContext = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error('useCardsContext must be used within a CardsContainer');
  }
  return context;
};

function CardsContainer({ className, children, enableBorders = true }) {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [isHoverCards, setIsHoverCards] = useState(false);
  const containerRef = useRef(null);
  const isMobileRef = useRef(false);

  // Check if mobile on mount
  useEffect(() => {
    isMobileRef.current = window.matchMedia('(max-width: 640px)').matches;
  }, []);

  // Throttled mouse tracking function
  const trackMouse = useCallback((event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isMobileRef.current) return;
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', trackMouse);
      setIsHoverCards(true);
    }
  }, [trackMouse]);

  const handleMouseLeave = useCallback(() => {
    if (isMobileRef.current) return;
    
    const container = containerRef.current;
    if (container) {
      container.removeEventListener('mousemove', trackMouse);
      setIsHoverCards(false);
    }
  }, [trackMouse]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const container = containerRef.current;
      if (container) {
        container.removeEventListener('mousemove', trackMouse);
      }
    };
  }, [trackMouse]);

  const contextValue = {
    mouseCoordinates,
    isHoverCards,
    enableBorders
  };

  return (
    <CardsContext.Provider value={contextValue}>
      <div
        className={`cards-container ${className || ''}`}
        ref={containerRef}
        role="contentinfo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </CardsContext.Provider>
  );
}

export default CardsContainer;