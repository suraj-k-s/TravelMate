import "./PackagerApproval.css"
import { DataGrid } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import { PersonAddAlt,PersonAddDisabled } from "@mui/icons-material";
import axios from "axios";


export default function PackagerApproval() {

  const [data, setData] = useState([]);
  
  const columns = [
    { field: 'packager_id', headerName: 'ID', width: 70 },
    { field: 'packager_name', headerName: 'Packager Name', width: 200, renderCell:(params) =>{
      return (
        <div className="packagerApprovalListPackager">
          <img className="packagerApprovalListImg" src={params.row.packager_logo} alt=""/>
          {params.row.packager_name}
        </div>
      )
    }},
    { field: 'location_name', headerName: 'Location', width: 120, },
    { field: 'packager_contact', headerName: 'Contact', width: 120, },
    { field: 'packager_email', headerName: 'Email', width: 170, },
    { field: 'packager_doj', headerName: 'Date of Request', width: 150, },
    {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <>
        <PersonAddAlt className="packagerapprovalAccept" onClick={()=>packagerAccept(params.row.packager_id)}/>
        <PersonAddDisabled className="packagerapprovalReject" onClick={()=>packagerDecline(params.row.packager_id)} />
        {/* <button className="buttonaccept">Accept</button>
        <br/>
        <button className="buttonreject">Reject</button> */}
        </>
      )
    }},
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/adminpackagerapprovallist"
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);

  const packagerDecline = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/adminpackagerapprovallist/${id}`
      )
      .then((response) => {
        alert("Packager Request Declined");
        fetchData();
      });
  };

  const packagerAccept = (id) => {
    
    axios
      .put(
        `http://localhost:4000/adminpackagerapprovallist/${id}`
      )
      .then((response) => {
        alert("Packager Request Accepted");
        fetchData();
      });
  };

  return (
    <div className="packagerApprovalView">
        <div className="packagerApprovalContainer">
          <div className="packagerApprovalTitleWrapper">
            <h2 className="packagerApprovalTitle">
            Packager Approvals
            </h2>
            </div>
            <div className="packagerApprovalDetailsView">
                <DataGrid
                getRowId={row => row.packager_id}
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









