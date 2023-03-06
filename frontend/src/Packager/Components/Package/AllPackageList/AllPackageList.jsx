import "./AllPackageList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline,Visibility} from '@mui/icons-material';
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function AllPackageList() {
  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");
  
  const columns = [
    { field: 'package_id', headerName: 'ID', width: 70 },
    { field: 'package_name', headerName: 'Package', width: 120},
    {field: 'package_noofdays', headerName: 'No of Days', width: 120 },
    {field: 'package_rate', headerName: 'Rate', width: 100 },
    {field: 'package_description', headerName: 'Package Description', width: 350 },
    {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <>
        <Link to={"/Packager/packageedit/"+params.row.package_id}>
        <button className="packageListEdit"><Visibility /></button>
        </Link>
        <DeleteOutline className="packageListDelete" onClick={()=>packageDelete(params.row.package_id)}/>
        </>
      )
    }}
  ];
  
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagerpackage/"+packagerid
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const packageDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/packagerpackage/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };

  return (
    <div className="allpackageList">
      <div className="allpackageTitleWrapper">
            <h2 className="allpackageTitle">
                Package List
            </h2>
            <Link to="/Packager/packageregistration">
            <input type="button" value="Add New" className="packageListAddButton"/>
            </Link>
            </div>
      <div className="allpackageListTable">
        <DataGrid
        getRowId={row => row.package_id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
      />
      </div>
    </div>
  )
}
