import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react'

export const StyledAgGrid = styled(AgGridReact)`
  .ag-root-wrapper{
    border: none;
  }

  .last-header{
    border-right: none !important;
  }

  .ag-header-row-column{
    .ag-header-cell{
      border-right: 1px solid rgba(51, 51, 51, 0.4);
    }
  }

  .ag-react-container{
    display: flex;
    align-items: center;
  }
`;

export const Span = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ColorPicker = styled.input.attrs(props => ({
  value: props.value,
  type: 'color'
}))`
  border: none;
  width: 4px;
  height: 16px;
  cursor: pointer;
  margin-right: 8px;
  //-webkit-appearance: none;
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch {
    border: none;
  }
`;