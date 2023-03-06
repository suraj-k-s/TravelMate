import "./PackageList.css"
import { DataGrid } from '@mui/x-data-grid';
import {packageRows} from '../../../../dummyData';
import axios from "axios";
import { useEffect, useState } from "react";

export default function PackageList({id}) {
  const [data, setData] = useState([]);
  
  const columns = [
    { field: 'package_id', headerName: 'ID', width: 70 },
    { field: 'package_name', headerName: 'Package', width: 120},
    {field: 'package_noofdays', headerName: 'No of Days', width: 120 },
    {field: 'package_rate', headerName: 'Rate', width: 100 },
    {field: 'package_description', headerName: 'Description', width: 370 },
  ];

  const fetchData = () =>{
    axios
    .get(
      `http://localhost:4000/packagerpackagelist/${id}`
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
      console.log(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);



  
  return (
    <div className="packageList">
        <DataGrid
        getRowId={row => row.package_id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
