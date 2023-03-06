import "./PackagerRatingView.css"
import { DataGrid } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import {Rating} from '@mui/material';
import axios from "axios";


export default function PackagerRatingView() {

  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");

  const columns = [
    { field: 'rating_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'package_name', headerName: 'Package Name', width: 150, },
    { field: 'rating_date', headerName: 'Date', width: 150, },
    {field: 'action', headerName: 'Rating', width: 130, renderCell: (params)=>{
      return (
        <Rating name="half-rating-read" defaultValue={params.row.rating} precision={0.5} readOnly />
      );
    }},
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagernotificationrating/"+packagerid
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="PackagerRatingViewView">
        <div className="PackagerRatingViewContainer">
          <div className="PackagerRatingViewTitleWrapper">
            <h2 className="PackagerRatingViewTitle">
                Ratings
            </h2>
            </div>
            <div className="PackagerRatingViewDetailsView">
                <DataGrid
                getRowId={row => row.rating_id}
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={6}
            />    
            </div>
        </div>
    </div>
  )
}










