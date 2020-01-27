/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
         position: absolute;
         left: 0px;
         margin: 8px 0 8px 8px;
         top: 0px;
         z-index: 15;
         transition: left 0.5s;
         -webkit-transform: ${(props) =>
    props.closed === true ? 'translateX(-408px)' : 'translateX(0px)'};
         transform: ${(props) =>
    props.closed === true ? 'translateX(-408px)' : 'translateX(0px)'};
         transition-property: -webkit-transform, transform, visibility, opacity;
         transition-duration: 200ms;
         transition-timing-function: cubic-bezier(0.0,0.0,0.2,1);
         visibility: ${(props) => (props.closed === true ? 'hidden' : 'visible')};
       `;

