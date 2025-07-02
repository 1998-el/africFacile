import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Vérification que window est disponible (pour le rendu côté serveur)
    if (typeof window === 'undefined') {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    
    // Nettoyage de l'event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage et démontage

  return windowSize;
}

export default useWindowSize;