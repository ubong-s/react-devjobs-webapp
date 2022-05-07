import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';

export const theme = {
   light: {
      bodyBG: '#F5F7F8',
      innerBG: '#ffffff',
      white: '#ffffff',
      headingText: '#19202d',
      lightText: '#8c8f96',
      primary: '#5964e0',
      primaryBlue: '#5767E2',
      primaryAccent: '#939bf4',
      mainText: '#19202d',
      linkButtonBG: '#F0F1FE',
      linkButtonText: '#5964e0',
      fadedText: '#6e8098',
      accentText: '#5964e0',
      darkBG: '#f4f6f8',
      lightBG: '#ffffff',
      buttonBG: '#5964e0',
      buttonHover: '#939bf4',
      lightButtonText: '#ffffff',
      secondaryButtonBG: '#eef0fc',
      secondaryButtonHover: '#c5c9f4',
      checkmarkBG: '#e7e8e9',
      checkmarkBGHover: '#d5d8f7',
      tertiary: '#9daec2',
      tertiaryAccent: '#6e8098',
      danger: '#ff293b',
      dangerHover: '#ff6976',
      success: '#258c53',
      successHover: '#7cba98',
   },
   dark: {
      bodyBG: '#131722',
      innerBG: '#18202D',
      white: '#ffffff',
      headingText: '#ffffff',
      lightText: '#8c8f96',
      primary: '#5964e0',
      primaryBlue: '#5767E2',
      primaryAccent: '#939bf4',
      mainText: '#ffffff',
      linkButtonBG: '#272D3B',
      linkButtonText: '#ffffff',
      fadedText: '#6e8098',
      accentText: '#5964e0',
      darkBG: '#121721',
      lightBG: '#19202d',
      buttonBG: '#5964e0',
      buttonHover: '#939bf4',
      lightButtonText: '#ffffff',
      secondaryButtonBG: '#303642',
      secondaryButtonHover: '#696e76',
      checkmarkBG: '#313743',
      checkmarkBGHover: '#3d4453',
      tertiary: '#9daec2',
      tertiaryAccent: '#6e8098',
      danger: '#ff293b',
      dangerHover: '#ff6976',
      success: '#258c53',
      successHover: '#7cba98',
   },
};

export const typography = {
   type: {
      primary: `"Kumbh Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
   },
   weight: {
      regular: '400',
      bold: '700',
   },
   size: {
      s1: '12',
      s2: '14',
      s3: '16',
      m1: '20',
      m2: '24',
      m3: '28',
      l1: '32',
      l2: '40',
      l3: '48',
   },
};

export const breakpoints = {
   mobile: 375,
   tablet: 768,
   desktop: 1024,
};

export const Theme = ({ children }) => {
   const { darkMode } = useGlobalContext();

   return (
      <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
         {children}
      </ThemeProvider>
   );
};
