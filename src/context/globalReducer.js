import {
   FILTER_JOBS,
   LOAD_JOBS,
   TOGGLE_THEME,
   UPDATE_FILTERS,
} from './GlobalActions';

export default function globalReducer(state, action) {
   switch (action.type) {
      case TOGGLE_THEME:
         return {
            ...state,
            darkMode: !state.darkMode,
         };
      case LOAD_JOBS:
         return {
            ...state,
            jobs: action.payload,
            filteredJobs: action.payload,
         };
      case UPDATE_FILTERS:
         const { name, value } = action.payload;
         return {
            ...state,
            filters: {
               ...state.filters,
               [name]: value,
            },
         };

      case FILTER_JOBS:
         const {
            jobs,
            filters: { title, location, fullTime },
         } = state;
         let tempJobs = [...jobs];

         if (title) {
            tempJobs = tempJobs.filter((job) =>
               job.position.toLowerCase().includes(title.toLowerCase())
            );
         }

         if (location) {
            tempJobs = tempJobs.filter((job) =>
               job.location.toLowerCase().includes(location.toLowerCase())
            );
         }

         if (fullTime) {
            tempJobs = tempJobs.filter((job) => job.contract === 'Full Time');
         }

         return {
            ...state,
            filteredJobs: tempJobs,
         };

      default:
         break;
   }

   throw new Error(`No matching ${action.type} action type`);
}
