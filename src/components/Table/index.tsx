import * as React from 'react';
import { DataGrid, GridRowModel } from '@material-ui/data-grid';

export default function DataTable({columns, rows}:any) {
  return (
    <div style={{ height: '75vh', width: '100%' }}>
      <DataGrid disableMultipleSelection={true} rows={rows.map((item:any)=>({...item,id:item._id})) as GridRowModel[]} columns={columns} pageSize={25} />
    </div>
  );
}