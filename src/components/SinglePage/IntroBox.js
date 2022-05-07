import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const IntroBox = ({
   logo,
   logoBackground,
   company,
   location,
   website,
}) => {
   return (
      <IntroBoxWrap>
         <IntroBoxInner className='container' logobg={logoBackground}>
            <div className='img'>
               <img src={`.${logo}`} alt={company} />
            </div>
            <div className='info'>
               <div>
                  <h2>{company}</h2>
                  <p>{website}</p>
               </div>
               <a
                  href={website}
                  className='btn'
                  targe='_blank'
                  rel='noreferrer'
               >
                  Company site
               </a>
            </div>
         </IntroBoxInner>
      </IntroBoxWrap>
   );
};

const IntroBoxWrap = styled.section`
   margin-top: -1rem;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      margin-top: -2.5rem;
   }
`;
const IntroBoxInner = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   background: ${(props) => props.theme.innerBG};
   padding: 3rem;
   border-radius: 5px;

   .img {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${(props) => props.logobg && props.logobg};
      padding: 0.7rem;
      height: 50px;
      width: 50px;
      border-radius: 15px;
      z-index: 3;
   }

   .info {
      h2 {
         color: ${(props) => props.theme.mainText};
         margin-bottom: 0.5rem;
      }

      p {
         color: ${(props) => props.theme.lightText};
      }

      a {
         display: inline-block;
         background-color: ${(props) => props.theme.linkButtonBG};
         color: ${(props) => props.theme.linkButtonText};
         text-transform: capitalize;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      display: grid;
      grid-template-columns: auto 1fr;
      padding: unset;
      text-align: left;
      overflow: hidden;
      margin-top: -2rem;

      .img {
         position: relative;
         top: unset;
         left: unset;
         transform: unset;
         padding: 1.5rem;
         height: 175px;
         width: 175px;
         border-radius: unset;
         display: grid;
         place-items: center;

         img {
            height: 50%;
            object-fit: contain;
         }
      }

      .info {
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding: 2.5rem;

         p {
            margin-bottom: 0;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      max-width: 750px;
   }
`;
