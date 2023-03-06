import "./PackagerComplaintView.css"
import { DataGrid } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import {Visibility} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import axios from "axios";



export default function PackagerComplaintView() {

  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");

  const columns = [
    { field: 'complaint_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'package_name', headerName: 'Package Name', width: 150, },
    { field: 'complaint_date', headerName: 'Complaint Date', width: 150, },
    { field: 'complaint_replydate', headerName: 'Reply Date', width: 150, },
    { field: 'complaint_status', headerName: 'Complaint Status', width: 150, },
    { field: 'action', headerName: 'Action', width: 100, renderCell: (params) => {
        return(
          <>
          <Link to={"/Packager/packagercomplaintviewsingle/"+params.row.complaint_id}>
          <Visibility className="PackagerComplaintViewButton"/>
          </Link>
          </>
        )
      }},
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagernotificationcomplaint/"+packagerid
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
    <div className="PackagerComplaintViewlistView">
        <div className="PackagerComplaintViewlistContainer">
          <div className="PackagerComplaintViewlistTitleWrapper">
            <h2 className="PackagerComplaintViewlistTitle">
                Complaints
            </h2>
            </div>
            <div className="PackagerComplaintViewlistDetailsView">
                <DataGrid
                getRowId={row => row.complaint_id}
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









