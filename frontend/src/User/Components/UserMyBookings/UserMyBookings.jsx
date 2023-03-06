import "./UserMyBookings.css"
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import {Visibility} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";

export default function UserMyBookings() {

  const [data, setData] = useState([])
  var userid = sessionStorage.getItem("userId");
  
  
  const columns = [
    { field: 'booking_id', headerName: 'ID', width: 70},
    { field: 'packager_name', headerName: 'Packager Name', width: 120},
    {field: 'package_name', headerName: 'Package Name', width: 120 },
    {field: 'booking_date', headerName: 'Booking Date', width: 100 },
    {field: 'booking_tripdate', headerName: 'Trip Date', width: 100 },
    {field: 'bookpayment_status', headerName: 'Payment Status', width: 150 },
    {field: 'trip_status', headerName: 'Trip Status', width: 150 },
    {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <>
        <Link to={"/User/userbookingview/"+params.row.booking_id}>
        <button className="userMyBookingListView"><Visibility /></button>
        </Link>
        </>
      )
    }}
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/usermybookings/"+userid
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
    <div className="userMyBookingsList">
      <div className="userMyBookingsTitleWrapper">
            <h2 className="userMyBookingsTitle">
                My Bookings
            </h2>
            </div>
      <div className="userMyBookingsListTable">
        <DataGrid
        getRowId={row => row.booking_id}
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
      />
      </div>
    </div>
  )
}
