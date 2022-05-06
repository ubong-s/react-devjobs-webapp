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
   }

   p {
      font-family: ${(props) => props.theme.secondaryFont};
      margin-bottom: 1rem;
   }

   button {
      font-family: ${(props) => props.theme.secondaryFont};
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

   button {
      background: ${(props) => props.theme.primary};
      border: none;
      border-radius: 5px;
      padding: 1rem;
      cursor: pointer;
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

export const checkBoxStyles = css`
    display: flex;
    gap:2rem;
    cursor: pointer;
    position: relative;
    background: red;

   /* span {
      color: #34495E;
      padding: 0.5rem 0.25rem;
   }

   input {
      height: 25px;
      width: 25px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 1px solid #34495E;
      border-radius: 4px;
      outline: none;
      transition-duration: 0.3s;
      background-color: #41B883;
      cursor: pointer;
   }

   input:checked {
      border: 1px solid #41B883;
      background-color: #34495E;
   }

   input:checked + span::before {
      content: '\2713';
      display: block;
      text-align: center;
      color: #41B883;
      position: absolute;
      left: 0.7rem;
      top: 0.2rem;
   }

   input:active {
      border: 2px solid #34495E;
   } */
`;

export const GlobalStyle = createGlobalStyle`
   body {
      ${bodyStyles}
   }
`;
