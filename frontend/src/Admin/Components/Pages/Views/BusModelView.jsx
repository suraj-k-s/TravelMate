import "./BusModelView.css"
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BusModelView() {

  const [data, setData] = useState([]);
  
  const columns = [
    { field: 'busmodel_id', headerName: 'ID', width: 70 },
    { field: 'busmodel_name', headerName: 'Bus Model Name', width: 250, },
    { field: "action", headerName:"Action", width: 100, renderCell: (params) => {
      return(
        <>
          <DeleteOutline className="BusModelListDelete" onClick={()=>busmodelDelete(params.row.busmodel_id)}/>
        </>
      )
    }},
  ];
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/busmodel"
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const busmodelDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/busmodel/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };
  return (
    <div className="BusModelView">
        <div className="BusModelContainer">
          <div className="BusModelTitleWrapper">
            <h2 className="BusModelTitle">
                Bus Models
            </h2>
            <span className="BusModelButtonWrapper">
            <Link to="/Admin/addBusModel" className="link">
                <input type="button" className="BusModelButton" value="Add New"/>
                </Link>
            </span>
            </div>
            <div className="BusModelDetailsView">
                <DataGrid
                getRowId={row => row.busmodel_id}
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />    
            </div>
        </div>
    </div>
  )
}









