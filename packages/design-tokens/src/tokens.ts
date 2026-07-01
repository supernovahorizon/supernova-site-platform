export type DesignTokens = {
  color: {
    background: string;
    surface: string;
    text: string;
    accent: string;
    accentContrast: string;
    border: string;
  };
  font: {
    body: string;
    heading: string;
  };
  space: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
};

export const defaultTokens: DesignTokens = {
  color: {
    background: '#f8faf8',
    surface: '#ffffff',
    text: '#1f2933',
    accent: '#2f6f4e',
    accentContrast: '#ffffff',
    border: '#d9e2ec',
  },
  font: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  space: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
};
