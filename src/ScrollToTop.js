import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // تمرير الصفحة إلى الأعلى عند تغيير الصفحة
  }, [pathname]);

  return null;
}

export default ScrollToTop;
