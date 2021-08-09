import React from 'react';
import {AgGridColumn} from 'ag-grid-react';
import { StyledAgGrid } from './styles';
import ColorPicker from './ColorPicker';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AgGrid = () => {
  const rowData = [
    {ativo: ['Dólar', '#FFB86D'], rentabilidade:'R$238,62', volatilidade: '18,82%', sharp: '1.43', taxa: 'n/a', pl:'n/a'},
    {ativo: ['AAA ALLOCATION FIC MULTIMERCADO', '#5A5A5A'], rentabilidade:'R$238,62', volatilidade: '18,82%', sharp: '1.43', taxa: 'n/a', pl:'n/a'},
    {ativo: ['PETR4', '#FF5D75'], rentabilidade:'R$238,62', volatilidade: '18,82%', sharp: '1.43', taxa: 'n/a', pl:'n/a'},
    {ativo: ['NTN-B 760199 20350515', '#09B4FF'], rentabilidade:'R$238,62', volatilidade: '18,82%', sharp: '1.43', taxa: 'n/a', pl:'n/a'},
  ];

  return (
      <div className="ag-theme-alpine" style={{height: 400, width: 600, border: 'none'}}>
          <StyledAgGrid
              rowData={rowData}
              frameworkComponents={{
                colorPicker: ColorPicker,
              }}
              >
              <AgGridColumn 
                pinned="left"
                lockPinned={true}
                cellClass="lock-pinned" 
                cellStyle={{border: '1px solid rgba(51, 51, 51, 0.4)', borderLeft: 'none', borderTop: 'none'}}
                displayName="Ativo"
                field="ativo"
                cellRenderer="colorPicker"
              />
              <AgGridColumn 
                cellStyle={{border: '1px solid rgba(51, 51, 51, 0.4)', borderLeft: 'none', borderTop: 'none'}}
                displayName="Rentabilidade"
                field="rentabilidade" 
              />
              <AgGridColumn 
                cellStyle={{border: '1px solid rgba(51, 51, 51, 0.4)', borderLeft: 'none', borderTop: 'none'}}
                displayName='Volatilidade'
                field="volatilidade" />
              <AgGridColumn 
                cellStyle={{border: '1px solid rgba(51, 51, 51, 0.4)', borderLeft: 'none', borderTop: 'none'}}
                displayName='Sharp'
                field="sharp" />
              <AgGridColumn 
                cellStyle={{border: '1px solid rgba(51, 51, 51, 0.4)', borderLeft: 'none', borderTop: 'none'}}
                displayName='Taxa de admin'
                field="taxa" />
              <AgGridColumn 
                cellStyle={{border: '1px solid rgba(51, 51, 51, 0.4)', borderLeft: 'none', borderTop: 'none', borderRight: 'none'}}
                displayName='PL. Milhoes'
                field="pl"
                headerClass="last-header"
              />
          </StyledAgGrid>
      </div>
  );
}

export default AgGrid;