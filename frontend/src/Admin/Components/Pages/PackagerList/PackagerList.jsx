import "./PackagerList.css"
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import {DeleteOutline,Visibility} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";

export default function PackagerList() {

  const [data, setData] = useState([]);
  
  const columns = [
    { field: 'packager_id', headerName: 'ID', width: 70 },
    { field: 'packager_name', headerName: 'Packager Name', width: 180, renderCell:(params) =>{
      return (
        <div className="packagerListPackager">
          <img className="packagerListImg" src={params.row.packager_logo} alt=""/>
          {params.row.packager_name}
        </div>
      )
    }},
    {field: 'location_name', headerName: 'Location', width: 130 },
    { field: 'packager_email', headerName: 'Email', width: 200 },
    {field: 'packager_contact', headerName: 'Contact', width: 120 },
    {field: 'packager_status', headerName: 'Status', width: 90 },
    {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <>
        <Link to={"/Admin/packagerinfo/"+params.row.packager_id}>
        <button className="packagerListEdit"><Visibility /></button>
        </Link>
        <DeleteOutline className="packagerListDelete" onClick={()=>packagerDelete(params.row.packager_id)}/>
        </>
      )
    }},
  ];
  
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/adminpackagerlist"
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const packagerDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/adminpackagerlist/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };

  return (
    <div className="packagerView">
        <div className="packagerListContainer">
          <div className="packagerTitleWrapper">
            <h2 className="packagerListTitle">
                Packagers
            </h2>
            </div>
    <div className="packagerList">
        <DataGrid
        getRowId={row => row.packager_id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        components={{Toolbar: GridToolbar}}
                sx={{
                  borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "red",
              },
                }}
        checkboxSelection
      />
        </div>
        </div>
    </div>
  )
}
