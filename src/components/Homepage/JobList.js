import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useGlobalContext } from '../../context/GlobalContext';
import { breakpoints } from '../../styles/styles';
import { Job } from './Job';

export const JobList = () => {
   const { filteredJobs: jobs } = useGlobalContext();

   return (
      <JobListWrap>
         <JobListGrid className='container'>
            {jobs.map((job) => {
               return <Job key={job.id} job={job} />;
            })}
         </JobListGrid>
      </JobListWrap>
   );
};

const JobListWrap = styled.div`
   padding: 3rem 0;
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
