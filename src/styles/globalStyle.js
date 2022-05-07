import { createGlobalStyle, css } from 'styled-components';
import { breakpoints, typography } from './styles';

const fontUrl = `https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap`;

export const bodyStyles = css`
   font-family: ${typography.type.primary};
   background: ${(props) => props.theme.bodyBG};
   color: ${(props) => props.theme.themeDark};
   line-height: 1.6;
   max-width: 1600px;
   font-weight: 400;
   margin: auto;

   *,
   ::after,
   ::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${typography.type.primary};
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.bold};
      letter-spacing: 0.5px;
      line-height: 1.5;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.mainText};
   }

   p {
      font-family: ${(props) => props.theme.secondaryFont};
      margin-bottom: 1rem;
   }

   img {
      max-width: 100%;
   }

   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      letter-spacing: 0.5px;
   }

   button,
   .btn {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      border: none;
      border-radius: 5px;
      padding: 1rem;
      cursor: pointer;
      font-weight: ${typography.weight.bold};
   }

   .container {
      width: 88%;
      margin: auto;
      height: 100%;

      @media screen and (min-width: ${breakpoints.desktop}px) {
         width: 77.5%;
      }
   }
`;

export const GlobalStyle = createGlobalStyle`
   html {
      scroll-behavior: smooth;
   }

   body {
      ${bodyStyles}
   }
`;
