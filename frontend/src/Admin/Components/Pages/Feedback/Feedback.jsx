import "./Feedback.css"
import { DataGrid } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import {Visibility} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import axios from "axios";


export default function Feedback() {

  const [data, setData] = useState([]);

  const columns = [
    { field: 'feedback_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'packager_name', headerName: 'Packager Name', width: 150, },
    { field: 'feedback_date', headerName: 'Date', width: 150, },
    { field: 'feedback_content', headerName: 'Content', width: 150, },
    { field: 'action', headerName: 'Action', width: 100, renderCell: (params) => {
      return(
        <>
        <Link to={"/Admin/adminfeedbackinfo/"+params.row.feedback_id}>
        <Visibility className="feedbackListViewButton"/>
        </Link>
        </>
      )
    }},
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/adminfeedbacklist"
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
    <div className="feedbacksView">
        <div className="feedbacksContainer">
          <div className="feedbacksTitleWrapper">
            <h2 className="feedbacksTitle">
                Feedbacks
            </h2>
            </div>
            <div className="feedbacksDetailsView">
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









