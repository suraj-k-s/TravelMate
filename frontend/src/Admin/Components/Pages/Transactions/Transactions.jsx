import "./Transactions.css"
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import axios from "axios";


export default function Transactions() {

  const [data, setData] = useState([]);

  const columns = [
    { field: 'bookpayment_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'packager_name', headerName: 'Packager Name', width: 150, },
    { field: 'bookpayment_date', headerName: 'Date', width: 150, },
    { field: 'bookpayment_amount', headerName: 'Amount', width: 150, },
    { field: 'bookpayment_status', headerName: 'Status', width: 100, },
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/admintransactionlist"
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
    <div className="transactionsView">
        <div className="transactionsContainer">
          <div className="transactionsTitleWrapper">
            <h2 className="transactionsTitle">
                Transactions
            </h2>
            </div>
            <div className="transactionsDetailsView">
                <DataGrid
                getRowId={row => row.bookpayment_id}
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









