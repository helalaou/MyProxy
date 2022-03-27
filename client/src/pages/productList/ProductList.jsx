import * as React from 'react';
import axios from 'axios';
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { OrderRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(OrderRows);
  const  [columns,setColumns]=useState([])

  const handleData=()=>{
    console.log("data handled")

  const columnsdata = [
    {
      field: "Product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        console.log(params.row)
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.Foods[0].FoodImage} alt="" />
            {params.row.Foods[0].FoodItem}
          </div>
        );
      },
    },
    { field: "NameClient", headerName: "Client", width: 200 }
    ,
    {
      field: "id",
      headerName: "Id Client",
      width: 120,
    },
    {
      field: "FoodPrice",
      headerName: "Price",
      width: 200,
      renderCell: (params) => {
        console.log(params.row)
        return (
          <div className="productListItem">
           
            {params.row.Foods[0].FoodPrice} MAD
          </div>
        );
      },
    },
    {
      field: "Time",
      headerName: "Estimated Time",
      width: 200,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 115,
      
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },

    
  ];
  setColumns(columnsdata)
  
  };
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  React.useEffect(() => {

    axios.get('http://localhost:3001/getOrders').then(function (response) {
      setData(response.data);
      handleData();
      console.log(response.data);
      
    }).catch(function (error) {
      console.log(error);
    });


   
  }, []);
  



  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
