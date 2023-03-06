import "./PackagerReportTransactions.css"
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { useState,useEffect } from "react";
import { packagerReportTransactionChartData } from "../../../../dummyData";
import PackagerReportTransactionsChart from "./PackagerReportTransactionsChart";
import axios from "axios";


export default function PackagerReportTransactions() {

  const [data, setData] = useState([]);
  var packagerid = sessionStorage.getItem("packagerId");


  const columns = [
    { field: 'bookpayment_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Username', width: 150, },
    { field: 'package_name', headerName: 'Package Name', width: 150, },
    { field: 'bookpayment_date', headerName: 'Date', width: 150, },
    { field: 'bookpayment_amount', headerName: 'Amount', width: 150, },
    { field: 'bookpayment_status', headerName: 'Status', width: 100, },
  ];

  const fetchData = () =>{
    axios
    .get(
      "http://localhost:4000/packagerreporttransaction/"+packagerid
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
    <div className="packagerReportTransactionsView">
        <div className="packagerReportTransactionsContainer">
          <div className="packagerReportTransactionsTitleWrapper">
            <h2 className="packagerReportTransactionsTitle">
                Transactions
            </h2>
            </div>
            <div className="packagerReportTransactionsDetailsView">
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
            <PackagerReportTransactionsChart data={packagerReportTransactionChartData} title="Monthly Transaction Analysis" grid dataKey="Transaction"/>
        </div>
    </div>
  )
}









