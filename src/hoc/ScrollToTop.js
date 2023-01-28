import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  const yOffset = location?.state?.yOffset;

  useEffect(() => {
    yOffset ? window.scrollTo(0, yOffset) : window.scrollTo(0, 0);
  }, [location, yOffset]);

  return children;
};

export default ScrollToTop;
