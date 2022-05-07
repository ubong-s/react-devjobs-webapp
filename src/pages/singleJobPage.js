import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContentBox } from '../components/SinglePage/ContentBox';
import { IntroBox } from '../components/SinglePage/IntroBox';
import { PageFooter } from '../components/SinglePage/PageFooter';
import { useGlobalContext } from '../context/GlobalContext';

export const SingleJobPage = () => {
   const { fetchSingleJob, singleJob } = useGlobalContext();
   const { id } = useParams();

   useEffect(() => {
      fetchSingleJob(id);
      window.scrollTo(0, 0);
   }, [id, singleJob]);

   return (
      <motion.div
         exit={{
            opacity: 0,
            x: 300,
            transition: {
               duration: 0.6,
               ease: 'easeInOut',
            },
         }}
         initial={{ opacity: 0, x: 300 }}
         animate={{
            opacity: 1,
            x: 0,
            transition: {
               duration: 0.6,
               ease: 'easeInOut',
            },
         }}
      >
         <IntroBox {...singleJob} />
         <ContentBox {...singleJob} />
         <PageFooter {...singleJob} />
      </motion.div>
   );
};
