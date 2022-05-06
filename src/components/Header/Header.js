import { useState } from 'react';
import { breakpoints } from '../../styles/styles';
import styled from 'styled-components';
import BGMobile from '../../assets/mobile/bg-pattern-header.svg';
import BGDesktop from '../../assets/desktop/bg-pattern-header.svg';
import { ReactComponent as MoonIcon } from '../../assets/desktop/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/desktop/icon-sun.svg';
import ToggleSwitch from './ToggleSwitch';
import { useGlobalContext } from '../../context/GlobalContext';

export const Header = () => {
   const { darkMode, toggleTheme } = useGlobalContext();

   return (
      <HeaderWrap>
         <TopSection className='container'>
            <h1>devjobs</h1>
            <ToggleBtn>
               <SunIcon />
               <ToggleSwitch
                  id='test-switch'
                  darkMode={darkMode}
                  onChange={toggleTheme}
               />
               <MoonIcon />
            </ToggleBtn>
         </TopSection>
      </HeaderWrap>
   );
};

const HeaderWrap = styled.section`
   height: 135px;
   background: url(${BGMobile});
   background-size: contain;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      background: url(${BGDesktop});
      background-position: top left;
      background-size: cover;
      height: 160px;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      background-position: top center;
      height: 140px;
   }
`;

const TopSection = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 1.75rem;

   h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.white};
      margin-bottom: 0;
      line-height: 1;
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      padding-top: 2.5rem;

      h1 {
         font-size: 1.8rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding-top: 2.25rem;

      h1 {
         font-size: 1.7rem;
      }
   }
`;

const ToggleBtn = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   height: 25px;
   padding-top: 12px;

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding-top: 0;
   }
`;