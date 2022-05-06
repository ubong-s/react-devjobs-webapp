import { createContext, useContext, useEffect, useReducer } from 'react';
import data from '../data.json';
import {
   LOAD_JOBS,
   TOGGLE_THEME,
   UPDATE_FILTERS,
   FILTER_JOBS,
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

   const toggleTheme = () => {
      dispatch({ type: TOGGLE_THEME });
   };

   useEffect(() => {
      dispatch({ type: LOAD_JOBS, payload: data });
   }, []);

   useEffect(() => {
      dispatch({ type: FILTER_JOBS });
   }, [state.filters]);

   return (
      <GlobalContext.Provider value={{ ...state, toggleTheme, updateFilters }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);
