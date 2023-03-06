import "./UserList.css"
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  
  const [data, setData] = useState([]);
  
  const columns = [
    { field: 'user_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'User', width: 150, },
    { field: 'user_email', headerName: 'Email', width: 200 },
    { field: 'user_contact', headerName: 'Contact', width: 130 },
    { field: 'user_profession', headerName: 'Profession', width: 130 },
    { field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <>
        <DeleteOutline className="userListDelete" onClick={()=>userDelete(params.row.user_id)}/>
        </>
      )
    }},
  ];
  
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/adminuserlist"
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const userDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/adminuserlist/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };

  return (
    <div className="userView">
        <div className="userContainer">
          <div className="userTitleWrapper">
            <h2 className="userTitle">
                Users
            </h2>
            </div>
    <div className="userList">
        <DataGrid
        getRowId={row => row.user_id}
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
        checkboxSelection
      />
        </div>
        </div>
        </div>
  )
}
