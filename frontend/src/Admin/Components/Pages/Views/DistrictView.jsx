import "./DistrictView.css"
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function DistrictView() {
  
    const [data, setData] = useState([]);
    
  const columns = [
    { field: 'district_id', headerName: 'ID', width: 70 },
    { field: 'district_name', headerName: 'District Name', width: 250, },
    { field: "action", headerName:"Action", width: 150, renderCell: (params) => {
      return(
        <>

          <DeleteOutline className="districtListDelete" onClick={()=>districtDelete(params.row.district_id)}/>
        </>
      )
    }},
  ];
  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/district"
    )
    .then((response) => {
      var data = response.data.data;
      setData(data);
    });
  }
  useEffect(() => {
    fetchData();
  },[]);
  const districtDelete = (id) => {
    
    axios
      .delete(
        `http://localhost:4000/district/${id}`
      )
      .then((response) => {
        alert(response.data.message)
        fetchData();
      });
  };
  return (
    <div className="districtView">
        <div className="districtContainer">
          <div className="districtTitleWrapper">
            <h2 className="districtTitle">
                Districts
            </h2>
            <span className="districtButtonWrapper">
            <Link to="/Admin/adddistrict" className="link">
                <input type="button" className="districtButton" value="Add New"/>
                </Link>
            </span>
            </div>
            <div className="districtDetailsView">
                <DataGrid
                getRowId={row => row.district_id}
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />    
            </div>
        </div>
    </div>
  )
}









