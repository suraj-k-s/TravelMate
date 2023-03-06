import "./Rating.css"
import { DataGrid } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import {Rating} from '@mui/material';
import axios from "axios";

export default function Ratings() {

  const [data, setData] = useState([]);

  const columns = [
    { field: 'rating_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'packager_name', headerName: 'Packager Name', width: 150, },
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
      "http://localhost:4000/rating"
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
    <div className="ratingView">
        <div className="ratingContainer">
          <div className="ratingTitleWrapper">
            <h2 className="ratingTitle">
                Ratings
            </h2>
            </div>
            <div className="ratingDetailsView">
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









