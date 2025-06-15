import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useResponsive = () => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = ({ window }: { window: typeof screenDimensions }) => {
      setScreenDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription.remove();
  }, []);

  const isPortrait = () => {
    return screenDimensions.height > screenDimensions.width;
  };

  return {
    ...screenDimensions,
    isPortrait: isPortrait(),
    isLandscape: !isPortrait(),
  };
};