import React, { createContext, useContext, ReactNode } from 'react';

export interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  presentColor: string;
  absentColor: string;
  leaveColor: string;
  holidayColor: string;
  dayOffColor: string;
  inactiveColor: string;
  headerBgColor: string;
  borderRadius: string;
  headerTextColor: string;
}

const defaultTheme: ThemeContextType = {
  primaryColor: '#0070bf',
  secondaryColor: '#00DAA7',
  textColor: '#000000',
  presentColor: '#00DAA7',
  absentColor: '#FF6969',
  leaveColor: '#FF9F68',
  holidayColor: '#9B59B6',
  dayOffColor: '#667797',
  inactiveColor: '#f8f8f8',
  headerBgColor: '#0070bf',
  borderRadius: '16px',
  headerTextColor: '#FFFFFF',
};

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<ThemeContextType>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme = {}
}) => {
  const mergedTheme = { ...defaultTheme, ...theme };
  
  // Apply CSS variables to :root for global access
  React.useEffect(() => {
    const root = document.documentElement;
    
    // Apply each theme color as a CSS variable
    Object.entries(mergedTheme).forEach(([key, value]) => {
      root.style.setProperty(`--calendar-${key}`, value);
    });
    
    // Clean up on unmount
    return () => {
      Object.keys(mergedTheme).forEach((key) => {
        root.style.removeProperty(`--calendar-${key}`);
      });
    };
  }, [mergedTheme]);
  
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
