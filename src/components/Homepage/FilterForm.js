import styled, { css } from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg';
import { ReactComponent as FilterIcon } from '../../assets/mobile/icon-filter.svg';
import { breakpoints } from '../../styles/styles';
import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

export const FilterForm = () => {
   const [toggleFilter, setToggleFilter] = useState(false);
   const {
      filters: { title, location, fullTime },
      updateFilters,
   } = useGlobalContext();

   return (
      <FilterWrap>
         <div className='container'>
            {/* Mobile Form start */}
            <MobileForm>
               <div className='form-group'>
                  <SearchIcon className='icon' />
                  <input
                     name='title'
                     type='text'
                     placeholder='Filter by title...'
                     value={title}
                     onChange={updateFilters}
                  />
                  <FilterIcon
                     className='filter-icon'
                     onClick={() => {
                        console.log('clicked');
                        setToggleFilter(!toggleFilter);
                     }}
                  />
               </div>
               <button type='submit' className='search'>
                  <SearchIcon />
               </button>
               <div
                  className={
                     toggleFilter ? 'filter-content active' : 'filter-content'
                  }
               >
                  <div className='form-group'>
                     <LocationIcon className='icon' />
                     <input
                        type='text'
                        placeholder='Filter by location'
                        name='location'
                        value={location}
                        onChange={updateFilters}
                     />
                  </div>

                  <label className='checkbox'>
                     <input
                        type='checkbox'
                        name='fullTime'
                        checked={fullTime}
                        onChange={updateFilters}
                     />
                     <span>Full Time</span>
                  </label>
               </div>
            </MobileForm>
            {/* Mobile Form End */}

            {/* Desktop form */}
            <DesktopForm>
               <div className='form-group'>
                  <SearchIcon className='icon' />
                  <input
                     name='title'
                     type='text'
                     placeholder='Filter by title...'
                     value={title}
                     onChange={updateFilters}
                  />
               </div>

               <div className='form-group'>
                  <LocationIcon className='icon' />
                  <input
                     name='location'
                     type='text'
                     placeholder='Filter by location'
                     onChange={updateFilters}
                  />
               </div>

               <label className='checkbox'>
                  <input
                     type='checkbox'
                     name='fullTime'
                     checked={fullTime}
                     onChange={updateFilters}
                  />
                  <span>Full Time</span>
               </label>
               <div>
                  <button type='submit'>Search</button>
               </div>
            </DesktopForm>
         </div>
      </FilterWrap>
   );
};

export const checkBoxStyles = css`
   display: flex;
   align-items: center;

   span {
      margin-left: 0.8rem;
      color: ${(props) => props.theme.mainText};

      @media screen and (min-width: ${breakpoints.tablet}px) {
         margin-left: 0.75rem;
      }
   }

   input {
      position: relative;
      height: 25px;
      width: 25px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 1px solid ${(props) => props.theme.lightText};
      border-radius: 4px;
      outline: none;
      transition-duration: 0.3s;
      background-color: ${(props) => props.theme.bodyBG};
      cursor: pointer;

      &:checked {
         border: 1px solid ${(props) => props.theme.primary};
         background-color: ${(props) => props.theme.primary};

         &:before {
            position: absolute;
            content: '\\2713';
            display: block;
            text-align: center;
            color: ${(props) => props.theme.white};
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
         }
      }
   }
`;

const FilterWrap = styled.div`
   transform: translateY(-50%);
   margin-bottom: 1rem;

   .mobile {
   }

   .desktop {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      margin-bottom: 0;

      .mobile {
         display: none;
      }

      .desktop {
         display: block;
      }
   }
`;

const MobileForm = styled.form`
   display: grid;
   grid-template-columns: 1fr auto;
   gap: 1rem;
   background: ${(props) => props.theme.innerBG};
   padding: 1rem;
   border-radius: 5px;
   position: relative;

   .form-group {
      display: grid;
      align-items: center;
      gap: 1rem;
      grid-template-columns: auto 1fr auto;

      input[type='text'] {
         height: 2.5rem;
         font-size: 1rem;
         width: 100%;
         border: none;
         outline: none;
         background: ${(props) => props.theme.innerBG};
         color: ${(props) => props.theme.mainText};

         &::placeholder {
            color: ${(props) => props.theme.lightText};
         }
      }
   }

   .filter-icon {
      path {
         &:hover {
            fill: ${(props) => props.theme.mainText};
         }
      }
   }

   .filter-content {
      position: absolute;
      top: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 0.5fr;
      gap: 1rem;
      background: ${(props) => props.theme.innerBG};
      border-radius: 5px;
      margin-top: 0.25rem;
      padding: 0.5rem 1rem;
      opacity: 0;
      transition: all 0.3s ease-in-out;

      .form-group {
         &:first-of-type {
            border-right: solid 1px ${(props) => props.theme.lightText};
         }
      }

      .checkbox {
         ${checkBoxStyles}
      }

      &.active {
         opacity: 1;
      }
   }

   button {
      background: ${(props) => props.theme.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem;

      svg {
         transform: scale(0.9);

         path {
            fill: ${(props) => props.theme.white};
         }
      }

      svg {
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}px) {
      display: none;
   }
`;

const DesktopForm = styled.form`
   display: none;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      display: grid;
      grid-template-columns: 0.5fr 1fr 1fr 1fr;
      align-items: center;
      gap: 1.5rem;
      background: ${(props) => props.theme.innerBG};
      padding: 0 1rem;
      border-radius: 5px;
      width: 100%;

      button {
         display: block;
         background: ${(props) => props.theme.primary};
         color: ${(props) => props.theme.white};
         padding: 0.5rem;
         font-size: 1rem;
         width: 100%;
      }

      .form-group {
         display: grid;
         grid-template-columns: auto 1fr;
         align-items: center;
         gap: 1rem;
         padding: 1.75rem 0;

         input {
            height: 100%;
            background-color: ${(props) => props.theme.innerBG};
            color: ${(props) => props.theme.mainText};
            border: none;
            outline: none;
            font-size: 1rem;

            &::placeholder {
               color: ${(props) => props.theme.lightText};
            }
         }

         &:nth-of-type(1) {
            border-right: 1px solid ${(props) => props.theme.lightText};
         }

         &:nth-of-type(2) {
            border-right: 1px solid ${(props) => props.theme.lightText};
         }
      }

      .checkbox {
         ${checkBoxStyles}
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      grid-template-columns: 1.5fr 1fr 0.5fr 0.5fr;
      padding: 0 1.25rem;

      button {
         padding: 1rem;
         font-size: 1.15rem;
         width: 100%;
      }
   }
`;
