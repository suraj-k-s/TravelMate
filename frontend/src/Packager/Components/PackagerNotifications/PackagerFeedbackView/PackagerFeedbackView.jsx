import "./PackagerFeedbackView.css"
import { DataGrid } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import {Visibility} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import axios from "axios";



export default function PackagerFeedbackView() {

  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");

  const columns = [
    { field: 'feedback_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'package_name', headerName: 'Package Name', width: 150, },
    { field: 'feedback_date', headerName: 'Feedback Date', width: 150, },
    { field: 'feedback_content', headerName: 'Feedback Content', width: 250, },
    { field: 'action', headerName: 'Action', width: 100, renderCell: (params) => {
        return(
          <>
          <Link to={"/Packager/packagerfeedbackviewsingle/"+params.row.feedback_id}>
          <Visibility className="PackagerFeedbackViewButton"/>
          </Link>
          </>
        )
      }},
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagernotificationfeedback/"+packagerid
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
    <div className="PackagerFeedbackViewlistView">
        <div className="PackagerFeedbackViewlistContainer">
          <div className="PackagerFeedbackViewlistTitleWrapper">
            <h2 className="PackagerFeedbackViewlistTitle">
                Feedbacks
            </h2>
            </div>
            <div className="PackagerFeedbackViewlistDetailsView">
                <DataGrid
                getRowId={row => row.feedback_id}
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









