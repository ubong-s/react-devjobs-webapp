import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

const ToggleSwitch = ({ id, toggled, onChange }) => {
   return (
      <>
         <SwitchInput
            className='switch-checkbox'
            id={id}
            type='checkbox'
            checked={toggled}
            onChange={onChange}
         />
         <SwitchLabel className='switch-label' htmlFor={id}>
            <SwitchButton className='switch-button' />
         </SwitchLabel>
      </>
   );
};

export default ToggleSwitch;

const SwitchInput = styled.input`
   height: 0;
   width: 0;
   visibility: hidden;
`;

const SwitchLabel = styled.label`
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   width: 50px;
   height: 25px;
   border-radius: 100px;
   border: 2px solid ${(props) => props.theme.white};
   position: relative;
   background-color: ${(props) => props.theme.white};
   transition: background-color 0.2s;
   margin: 0 1rem;

   @media screen and (min-width: ${breakpoints.tablet}px) {
      margin: 0 0.6rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      width: 40px;
      height: 20px;
      margin: 0 0.7rem;
   }
`;

const SwitchButton = styled.span`
   content: '';
   position: absolute;
   top: 2px;
   left: 2px;
   width: 17px;
   height: 17px;
   border-radius: 45px;
   transition: 0.2s;
   background: ${(props) => props.theme.primaryBlue};
   box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

   ${SwitchInput}:checked + ${SwitchLabel} & {
      left: calc(100% - 2px);
      transform: translateX(-100%);
   }

   ${SwitchLabel}:active & {
      width: 50px;
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      width: 13px;
      height: 13px;
   }
`;
