/* eslint-disable linebreak-style */
import styled from 'styled-components';

const setPaneContract = (conractRange, useProps) => (
  useProps.closed === true ? `translateX(${conractRange}px)` : 'translateX(0px)'
);

export const LeftPane = styled.div`
         width: 408px;
         position: absolute;
         top: 0;
         z-index: 3;
         opacity: 1;
         height: ${(props) => (props.closed === true ? 0 : '100%')};
         left: 0;
         -webkit-transform: ${(props) => setPaneContract(-408, props)};
         transform: ${(props) => setPaneContract(-408, props)};
         transition-property: -webkit-transform, transform, opacity;
         transition-duration: 0.2s;
         transition-timing-function: linear;
         box-shadow: ${(props) =>
    props.closed === true ? 'none' : '0 0 20px rgba(0, 0, 0, 0.3)'};
         background: #fff;
         @media (max-width: 414px) {
           width: 414px;
           -webkit-transform: ${(props) => setPaneContract(-414, props)};
           transform: ${(props) => setPaneContract(-414, props)}};
         }
         @media (max-width: 411px) {
           width: 411px;
           -webkit-transform: ${(props) => setPaneContract(-411, props)};
           transform: ${(props) => setPaneContract(-411, props)};
         }
         @media (max-width: 375px) {
           width: 375px;
           -webkit-transform: ${(props) => setPaneContract(-375, props)};
           transform: ${(props) => setPaneContract(-375, props)};
         }
         @media (max-width: 360px) {
           width: 360px;
           -webkit-transform: ${(props) => setPaneContract(-360, props)};
           transform: ${(props) => setPaneContract(-360, props)};
         }
         @media (max-width: 320px) {
           width: 320px;
           -webkit-transform: ${(props) => setPaneContract(-320, props)};
           transform: ${(props) => setPaneContract(-320, props)};
         }
       `;
