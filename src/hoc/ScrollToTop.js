import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  const yOffset = location?.state?.yOffset;

  const checkIfGallery = new RegExp(/.+\/\d+/g).test(location.pathname);

  useEffect(() => {
    if (yOffset && !checkIfGallery) {
      window.scrollTo(0, yOffset);
    } else {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return children;
};

export default ScrollToTop;
