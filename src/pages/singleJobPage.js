import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContentBox } from '../components/SinglePage/ContentBox';
import { IntroBox } from '../components/SinglePage/IntroBox';
import { PageFooter } from '../components/SinglePage/PageFooter';
import { useGlobalContext } from '../context/GlobalContext';

export const SingleJobPage = () => {
   const { fetchSingleJob, singleJob } = useGlobalContext();
   const { id } = useParams();

   console.log(singleJob);
   console.log(window);

   useEffect(() => {
      fetchSingleJob(id);
      window.scrollTo(0, 0);
   }, [id, singleJob]);

   return (
      <div>
         <IntroBox {...singleJob} />
         <ContentBox {...singleJob} />
         <PageFooter {...singleJob} />
      </div>
   );
};
