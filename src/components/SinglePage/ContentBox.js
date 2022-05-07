import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const ContentBox = ({
   postedAt,
   contract,
   position,
   location,
   apply,
   description,
   requirements,
   role,
}) => {
   return (
      <ContentBoxWrap>
         <ContentBoxInner className='container'>
            {/* Top Section */}
            <div className='top-section'>
               <div className='info'>
                  <p className='contract'>
                     {postedAt} <span>&#x2022;</span> {contract}
                  </p>
                  <h3 className='position'>{position}</h3>

                  <h4 className='location'>{location}</h4>
               </div>
               <a href={apply} className='btn' target='_blank' rel='noreferrer'>
                  Apply Now
               </a>
            </div>

            {/* Bottom Section */}
            <div className='bottom-section'>
               <p>{description}</p>

               {/* Requirements */}
               <div className='requirements'>
                  <h3>Requirements</h3>
                  <p>{requirements?.content}</p>

                  <ul>
                     {requirements?.items.map((item, index) => (
                        <li key={index}>
                           <span>&#x2022;</span>
                           <p>{item}</p>
                        </li>
                     ))}
                  </ul>
               </div>
               {/* What you will do */}
               <div className='role'>
                  <h3>What you will do</h3>
                  <p>{role?.content}</p>

                  <ul>
                     {role?.items.map((item, index) => (
                        <li key={index}>
                           <span>{index + 1}</span>
                           <p>{item}</p>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </ContentBoxInner>
      </ContentBoxWrap>
   );
};

const ContentBoxWrap = styled.section`
   margin: 2rem 0 3rem;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      margin-bottom: 5rem;
   }
`;
const ContentBoxInner = styled.div`
   background: ${(props) => props.theme.innerBG};
   padding: 2.5rem 2rem;
   border-radius: 5px;

   p,
   li {
      color: ${(props) => props.theme.lightText};
   }

   .top-section {
      margin-bottom: 2rem;

      .info {
         .contract {
            margin-bottom: 0.4em;
            color: ${(props) => props.theme.lightText};

            span {
               margin: 0 0.5rem;
            }
         }

         .position {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: ${(props) => props.theme.headingText};
         }

         .location {
            color: ${(props) => props.theme.primary};
            font-size: 0.8rem;
            margin-bottom: 2rem;
         }
      }

      a {
         display: block;
         text-align: center;
      }
   }

   .bottom-section {
      h3 {
         text-transform: capitalize;
      }

      ul {
         padding-top: 1rem;

         li {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;

            span {
               color: ${(props) => props.theme.primary};
               font-weight: 700;
            }
         }
      }

      .requirements {
         padding-top: 1rem;

         span {
            transform: scale(2);
         }
      }

      .role {
         padding-top: 1rem;

         span {
            padding-top: 0.1rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      .top-section {
         display: flex;
         align-items: center;
         justify-content: space-between;

         .info {
            .location {
               margin-bottom: 0;
            }
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      max-width: 750px;
   }
`;
