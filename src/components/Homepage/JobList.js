import { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/GlobalContext';
import { breakpoints } from '../../styles/styles';
import { Job } from './Job';

export const JobList = () => {
   const { filteredJobs: jobs } = useGlobalContext();
   const [index, setIndex] = useState(1);

   let jobsPerLoad = 12;
   let factor = jobsPerLoad * index;

   return (
      <JobListWrap>
         {jobs.length < 1 ? (
            <JobsEmpty className='container'>
               <p>No job matches your Search</p>
            </JobsEmpty>
         ) : (
            <JobListGrid className='container'>
               {jobs.slice(0, factor).map((job) => {
                  return <Job key={job.id} job={job} />;
               })}
            </JobListGrid>
         )}

         {factor < jobs.length && (
            <BtnWrap className='container'>
               <button
                  className='btn'
                  onClick={() => setIndex((prevState) => prevState + 1)}
               >
                  Load More
               </button>
            </BtnWrap>
         )}
      </JobListWrap>
   );
};

const JobListWrap = styled.div`
   padding: 3rem 0;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      padding-bottom: 5rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      padding-bottom: 6rem;
   }
`;

const JobsEmpty = styled.div`
   height: 400px;
   display: flex;
   justify-content: center;
   align-items: center;

   p {
      font-weight: 700;
      color: ${(props) => props.theme.primary};
      text-transform: capitalize;
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      p {
         font-size: 1.25rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      p {
         font-size: 1.5rem;
      }
   }
`;

const JobListGrid = styled.div`
   display: grid;
   gap: 3rem;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 3.75rem 0.75rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 3.5rem 2rem;
   }
`;

const BtnWrap = styled.div`
   padding-top: 2.5rem;
   text-align: center;

   .btn {
      &:disabled {
         opacity: 0.5;
      }
   }
`;
