import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const PageFooter = ({ apply, position, company }) => {
   return (
      <PageFooterWrap>
         <PageFooterInner className='container'>
            <div className='info desktop'>
               <h4 className='position'>{position}</h4>
               <p className='company'>{company}</p>
            </div>
            <a href={apply} className='btn' target='_blank' rel='noreferrer'>
               Apply Now
            </a>
         </PageFooterInner>
      </PageFooterWrap>
   );
};

const PageFooterWrap = styled.footer`
   background-color: ${(props) => props.theme.innerBG};
   padding: 1.5rem 0;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      padding: 1.25rem 0;
   }
`;

const PageFooterInner = styled.div`
   background-color: ${(props) => props.theme.innerBG};

   a {
      display: block;
      text-align: center;
   }

   .desktop {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .desktop {
         display: block;
      }

      .position {
         font-size: 1.25rem;
         margin-bottom: 0.5rem;
      }

      .company {
         color: ${(props) => props.theme.lightText};
         font-size: 1rem;
         margin-bottom: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      max-width: 750px;
   }
`;
