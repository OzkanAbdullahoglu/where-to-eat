/* eslint-disable linebreak-style */
import styled from 'styled-components';

const backgroundURL =
  'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAQAAAAXDMSnAAAAi0lEQVR4AX3JQcqBURQG4O/' +
    '+9WNG30D3vOfSDTuQsgcZyBakZANSzMVMBme3zsBI5/VMn4ZKLP5ki1E4tYejWpilxVUtzOEUD68odYmXR5BJNp/' +
    '4zllXD2phllYvamHmirsayUkfJ5ruHzueTldC08kcT5YOY9xYujqQM03XKXuaLmEtNF1e1Nz89gbL+0do6OEwRwAAAABJRU5ErkJggg==)';

const PanelOnlyToggleButton = styled.button`
         width: 23px;
         height: 48px;
         cursor: pointer;
         background: rgba(255, 255, 255, 0.9) ${backgroundURL} 7px center/7px
           10px no-repeat;
         border-left: 1px solid #d4d4d4;
         box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
         -webkit-transform: scaleX(-1);
         transform: scaleX(-1);
         &:hover {
           background-color: #fffafb;
         }
         @media (min-width: 768px) {
           display: none;
         }
       `;
export default PanelOnlyToggleButton;
