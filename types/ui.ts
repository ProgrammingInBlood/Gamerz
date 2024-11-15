import { TextStyle, ViewStyle } from 'react-native';

export interface Theme {
  colors: ColorScheme;
  spacing: SpacingScheme;
  typography: TypographyScheme;
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  accent: string;
  error: string;
  success: string;
}

export interface SpacingScheme {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface TypographyScheme {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body: TextStyle;
  caption: TextStyle;
}

export interface IconButtonProps {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
} 