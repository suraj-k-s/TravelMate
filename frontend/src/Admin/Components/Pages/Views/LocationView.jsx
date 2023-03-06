import "./LocationView.css"
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LocationView() {

    const [data, setData] = useState([]);
    
  const columns = [
    { field: 'location_id', headerName: 'ID', width: 70 },
    { field: 'location_name', headerName: 'Location Name', width: 250, },
    { field: 'district_name', headerName: 'District Name', width: 230, },
    { field: 'location_pincode', headerName: 'Pincode', width: 230, },
    { field: "action", headerName:"Action", width: 100, renderCell: (params) => {
      return(
        <>
          <DeleteOutline className="locationListDelete" onClick={()=>locationDelete(params.row.location_id)}/>
        </>
      )
    }},
  ];
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/location"
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const locationDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/location/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };
  return (
    <div className="locationView">
        <div className="locationContainer">
          <div className="locationTitleWrapper">
            <h2 className="locationTitle">
                Locations
            </h2>
            <span className="locationButtonWrapper">
            <Link to="/Admin/addlocation" className="link">
                <input type="button" className="locationButton" value="Add New"/>
                </Link>
            </span>
            </div>
            <div className="locationDetailsView">
                <DataGrid
                getRowId={row => row.location_id}
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









