import "./AllBusList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline,Visibility} from '@mui/icons-material';
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function AllBusList() {

  const [data, setData] = useState([])
  var packagerid = sessionStorage.getItem("packagerId");
  
  const columns = [
    { field: 'bus_id', headerName: 'ID', width: 70 },
    { field: 'bus_name', headerName: 'Bus Name', width: 200},
    {field: 'bus_capacity', headerName: 'Bus Capacity', width: 120 },
    {field: 'busmodel_name', headerName: 'Bus Model', width: 120 },
    {field: 'bus_features', headerName: 'Bus Features', width: 150 },
    {field: 'bus_year', headerName: 'Bus Year', width: 130 },
    {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <>
        <Link to={"/Packager/busedit/"+params.row.bus_id}>
        <button className="busListEdit"><Visibility /></button>
        </Link>
        <DeleteOutline className="busListDelete" onClick={()=>busDelete(params.row.bus_id)}/>
        </>
      )
    }}
  ];
  
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagerbus/"+packagerid
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const busDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/packagerbus/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };

  return (
    <div className="allbusList">
      <div className="allbusTitleWrapper">
            <h2 className="allbusTitle">
                Bus List
            </h2>
            <Link to="/Packager/busregistration">
            <input type="button" value="Add New" className="packageListAddButton"/>
            </Link>
            </div>
      <div className="allbusListTable">
        <DataGrid
        getRowId={row => row.bus_id}
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
