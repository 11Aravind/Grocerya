import { Platform, StyleSheet } from 'react-native';
import { responsive } from '../utils/responsive';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsive.padding(20),
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    paddingTop: responsive.statusBarHeight,
  },
  heading: {
    fontSize: responsive.font(24),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  subheading: {
    fontSize: responsive.font(16),
    fontFamily: 'Poppins-Regular',
    color: '#777777',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});