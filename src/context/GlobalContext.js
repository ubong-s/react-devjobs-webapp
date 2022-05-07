import { createContext, useContext, useEffect, useReducer } from 'react';
import data from '../data.json';
import {
   LOAD_JOBS,
   TOGGLE_THEME,
   UPDATE_FILTERS,
   FILTER_JOBS,
   FETCH_SINGLE_JOB,
} from './GlobalActions';
import reducer from './globalReducer';

const initialState = {
   darkMode: false,
   jobs: [],
   filteredJobs: [],
   filters: {
      title: '',
      location: '',
      fullTime: false,
   },
   singleJob: {},
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const updateFilters = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      if (name === 'fullTime') {
         value = e.target.checked;
      }

      dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
   };

   const filterJobs = (e) => {
      e.preventDefault();
      dispatch({ type: FILTER_JOBS });
   };

   const toggleTheme = () => {
      dispatch({ type: TOGGLE_THEME });
   };

   useEffect(() => {
      dispatch({ type: LOAD_JOBS, payload: data });
   }, []);

   const fetchSingleJob = (id) => {
      dispatch({ type: FETCH_SINGLE_JOB, payload: id });
   };

   useEffect(() => {
      if (
         !state.filters.title &&
         !state.filters.location &&
         !state.filters.fullTime
      ) {
         dispatch({ type: LOAD_JOBS, payload: data });
      }
   }, [state.filters]);

   return (
      <GlobalContext.Provider
         value={{
            ...state,
            toggleTheme,
            updateFilters,
            filterJobs,
            fetchSingleJob,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);
