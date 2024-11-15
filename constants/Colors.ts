export const Colors = {
  primary: '#9147FF',
  secondary: '#2D2D2D',
  background: '#0E0E10',
  card: '#18181B',
  text: '#FFFFFF',
  textSecondary: '#ADADB8',
  accent: '#772CE8',
  error: '#FF4444',
  success: '#00FF95',
  shadow: '#000000',
  border: '#2D2D2D',
} as const;

export type ColorScheme = typeof Colors;
