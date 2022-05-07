import { motion } from 'framer-motion';
import { FilterForm } from '../components/Homepage/FilterForm';
import { JobList } from '../components/Homepage/JobList';

export const HomePage = () => {
   return (
      <motion.div
         exit={{
            opacity: 0,
            x: -300,
            transition: {
               duration: 0.6,
               ease: 'easeInOut',
            },
         }}
         initial={{ opacity: 0, x: -300 }}
         animate={{
            opacity: 1,
            x: 0,
            transition: {
               duration: 0.6,
               ease: 'easeInOut',
            },
         }}
      >
         <FilterForm />
         <JobList />
      </motion.div>
   );
};
