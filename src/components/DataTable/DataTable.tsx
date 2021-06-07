import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
import { useGetData } from '../../custom-hooks'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'name', headerName: 'Car name', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'price', headerName: 'Price', type: 'string', width: 90 },
];
  
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


export const DataTable = () => {
    let {carData, getData } = useGetData();
    console.log(carData)
    return(
        <div style={{ height: 400, width: '100%' }}>
        <h2> Cars In Inventory</h2>
        <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}