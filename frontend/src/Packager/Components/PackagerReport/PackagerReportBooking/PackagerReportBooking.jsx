import "./PackagerReportBooking.css"
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import PackagerReportBookingPie from "./PackagerReportBookingPie";
import {packageData} from "../../../../dummyData";
import PackagerReportBookingBar from "./PackagerReportBookingBar";
import { useState,useEffect } from "react";
import axios from "axios";



export default function PackagerReportBooking() {

  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");


  const columns = [
    { field: 'booking_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'package_name', headerName: 'Package Name', width: 150, },
    { field: 'booking_date', headerName: 'Booking Date', width: 150, },
    { field: 'booking_tripdate', headerName: 'Trip Date', width: 150, },
    { field: 'booking_startpoint', headerName: 'Trip Place', width: 150, },
    { field: 'booking_noofpeople', headerName: 'No of Person', width: 100, },
    { field: 'bus_name', headerName: 'Bus', width: 100, },
    { field: 'booking_status', headerName: 'Status', width: 100, },
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagerreportbooking/"+packagerid
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
    <div className="packagerReportBookingView">
        <div className="packagerReportBookingContainer">
          <div className="packagerReportBookingTitleWrapper">
            <h2 className="packagerReportBookingTitle">
                Bookings
            </h2>
            </div>
            <div className="packagerReportBookingDetailsView">
                <DataGrid
                getRowId={row => row.booking_id}
                disableSelectionOnClick
                rows={data}
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
            <PackagerReportBookingPie/>
            <PackagerReportBookingBar data={packageData} title="Package Analysis" grid dataKey="Bookings"/>
        </div>
    </div>
  )
}









