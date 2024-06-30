// Analytics.js
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const Analytics = () => {
  useEffect(() => {
    const advancedMatching = {};
    const options = {
      autoConfig: true, 
      debug: false,   
    };
    ReactPixel.init('1140223920585834', advancedMatching, options);
    ReactPixel.init('2368406720090246', advancedMatching, options);
    ReactPixel.pageView();
  }, []);

  return null;
};

export default Analytics;
