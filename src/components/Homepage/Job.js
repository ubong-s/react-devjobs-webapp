import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Job = ({ job }) => {
   const {
      id,
      company,
      logo,
      logoBackground,
      contract,
      position,
      location,
      postedAt,
   } = job;
   return (
      <JobWrap to={'/'} logobg={logoBackground}>
         <article>
            <div className='logo' style={{ backgroundColor: logoBackground }}>
               <img src={logo} alt={company} />
            </div>
            <p className='contract'>
               {postedAt} <span>&#x2022;</span> {contract}
            </p>
            <h3 className='position'>{position}</h3>
            <p className='company'>{company}</p>
            <h4 className='location'>{location}</h4>
         </article>
      </JobWrap>
   );
};

const JobWrap = styled(Link)`
   position: relative;
   background-color: ${(props) => props.theme.innerBG};
   padding: 0 2rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   border-radius: 5px;
   height: 200px;

   .logo {
      position: absolute;
      top: 0;
      left: 2rem;
      padding: 0.5rem;
      margin-top: -25px;
      margin-bottom: 0;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 15px;
   }

   .contract {
      margin-bottom: 0.4em;
      color: ${(props) => props.theme.lightText};

      span {
         margin: 0 0.5rem;
      }
   }

   .position {
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.headingText};
   }

   .company {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.lightText};
   }

   .location {
      margin-bottom: 0;
      color: ${(props) => props.theme.primary};
      font-size: 0.8rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      height: 225px;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding: 0 1.8rem;

      .logo {
         left: 1.8rem;
         width: 45px;
         height: 45px;
         margin-top: -20px;
      }

      .position {
         font-size: 1rem;
      }
   }
`;
