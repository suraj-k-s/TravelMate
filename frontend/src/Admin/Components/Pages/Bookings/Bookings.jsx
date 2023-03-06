import "./Bookings.css"
import { DataGrid ,GridToolbar} from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import axios from "axios";


export default function Bookings() {

  const [data, setData] = useState([]);

  const columns = [
    { field: 'booking_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'packager_name', headerName: 'Packager Name', width: 150, },
    { field: 'bus_name', headerName: 'Bus Name', width: 150, },
    { field: 'package_name', headerName: 'Package Name', width: 150, },
    { field: 'booking_date', headerName: 'Booking Date', width: 125, },
    { field: 'booking_tripdate', headerName: 'Trip Date', width: 125, },
    { field: 'booking_status', headerName: 'Status', width: 100, },
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/adminbookinglist"
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
    <div className="bookingsView">
        <div className="bookingsContainer">
          <div className="bookingsTitleWrapper">
            <h2 className="bookingsTitle">
                Bookings
            </h2>
            </div>
            <div className="bookingsDetailsView">
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
        </div>
    </div>
  )
}









