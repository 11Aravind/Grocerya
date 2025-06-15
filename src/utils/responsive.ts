import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (based on standard iPhone 11)
const baseWidth = 375;
const baseHeight = 812;

// Scaling factors
const widthScale = SCREEN_WIDTH / baseWidth;
const heightScale = SCREEN_HEIGHT / baseHeight;

const getStatusBarHeight = () => {
  return Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0;
};

export const responsive = {
  width: (w: number) => PixelRatio.roundToNearestPixel(w * widthScale),
  height: (h: number) => PixelRatio.roundToNearestPixel(h * heightScale),
  font: (f: number) => PixelRatio.roundToNearestPixel(f * widthScale),
  padding: (p: number) => PixelRatio.roundToNearestPixel(p * widthScale),
  margin: (m: number) => PixelRatio.roundToNearestPixel(m * widthScale),
  radius: (r: number) => PixelRatio.roundToNearestPixel(r * widthScale),
  
  // Screen dimensions
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  
  // Platform specific values
  statusBarHeight: getStatusBarHeight(),
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  
  // Scale factors
  scale: SCREEN_WIDTH / baseWidth,
  verticalScale: SCREEN_HEIGHT / baseHeight,
  
  // Moderate scale for better scaling of sizes
  moderateScale: (size: number, factor = 0.5) => {
    return size + (widthScale - 1) * factor * size;
  }
};