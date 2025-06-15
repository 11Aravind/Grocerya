import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import { responsive } from '../utils/responsive';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  style?: any;
}

export const ResponsiveLayout = ({ children, style }: ResponsiveLayoutProps) => {
  const { isLandscape } = useResponsive();

  return (
    <View style={[
      styles.container,
      isLandscape && styles.landscapeContainer,
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsive.padding(20),
    paddingTop: responsive.statusBarHeight,
  },
  landscapeContainer: {
    paddingHorizontal: responsive.padding(40),
    flexDirection: 'row',
  }
});