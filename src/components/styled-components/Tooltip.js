/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { PanelToggleButton } from './PanelToggleButton';

export const Tooltip = styled.span`
         display: none;
         ${PanelToggleButton}:hover & {
           display: block;
           z-index: 100;
           padding: 2px 8px;
           border-radius: 6px;
           white-space: nowrap;
           background-color: #2b6aff;
           color: #eff0f3;
           font-family: Arial, Helvetica, sans-serif;
           font-size: 1rem;
           font-weight: 400;
           line-height: 1.25rem;
           box-shadow: 0 4px 10px rgba(170, 170, 170, 0.75);
           position: absolute;
           left: 100%;
           top: 50%;
           -webkit-transform: translateY(-50%);
           transform: translateY(-50%);
           margin-left: 8px;
           line-height: 22px;
           white-space: nowrap;
           transition-duration: 0.3s;
           transition-timing-function: linear;
         }
       `;
