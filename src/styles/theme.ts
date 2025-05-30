export const lightTheme = {
  colors: {
    primary: '#2563EB',    // Azul mais vibrante
    secondary: '#10B981',  // Verde mais moderno
    background: '#F9FAFB', // Cinza muito claro
    surface: '#FFFFFF',    // Branco
    text: '#1F2937',      // Cinza escuro
    border: '#E5E7EB',    // Cinza claro
    white: '#FFFFFF',     
    accent: '#F59E0B',    // Laranja
    muted: '#6B7280',     // Cinza médio
  },
  typography: {
    h1: { size: 28, weight: '700', lineHeight: 34 },
    h2: { size: 22, weight: '600', lineHeight: 28 },
    body: { size: 16, weight: '400', lineHeight: 24 },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    sm: 6,
    md: 12,
    lg: 16,
    pill: 9999,
  },
};
export const darkTheme = {
  colors: {
    primary: '#3B82F6',    // Azul vibrante
    secondary: '#10B981',  // Verde neon
    background: '#000000', // Preto
    surface: '#1F2937',   // Cinza escuro
    text: '#F9FAFB',      // Branco suave
    border: '#374151',    // Cinza médio
    white: '#FFFFFF',     
    accent: '#F59E0B',    // Laranja
    muted: '#9CA3AF',     // Cinza claro
  },
  typography: {
    h1: { size: 28, weight: '700', lineHeight: 34 },
    h2: { size: 22, weight: '600', lineHeight: 28 },
    body: { size: 16, weight: '400', lineHeight: 24 },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    sm: 6,
    md: 12,
    lg: 16,
    pill: 9999,
  },
};

export type Theme = {
  typography: {
    h2: {
      size: number;
      weight: string;
      lineHeight: number;
    };
    // ... outros
  };
  colors: {
    text: string;
    border: string;
    background: string;
    surface: string;
    // ... outros
  };
  spacing: {
    sm: number;
    md: number;
    // ... outros
  };
  radii: {
    sm: number;
    // ... outros
  };
};
