import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {OrderRows} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

//get the data with the id


export default function Product() {

    const { productId } = useParams();
    //string to int 

    const [order, setOrder] = useState([]);

    useEffect(() => {
     let orderArr = OrderRows.filter((item) => item.id === parseInt(productId));
    setOrder(orderArr[0]);

    }, [productId]);
    
// handle click on the button, to edit the order Status
    const handleClick = (e, status) => {
        e.preventDefault();
        setOrder({ ...order, Status: status });
        console.log(order);
        //handlePost(order);
    }

/*post the data to the server using axios  """""""""" MEHDI EDIT THIS"""""""""""

    const handlePost = (order) => {
        axios.post("http://localhost:5000/api/orders", order)
        .then(res => {
            console.log(res.data);
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }*/



  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">MODIFY ORDER</h1>
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://img.cuisineaz.com/610x610/2019/04/17/i146583-tacos-poulet-curry.jpeg" alt="" className="productInfoImg" />
                  <span className="productName">{order.name}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Customer ID: </span>
                      <span className="productInfoValue">{order.IdClient}</span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">Customer: </span>
                      <span className="productInfoValue">{order.Client}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price: </span>
                      <span className="productInfoValue">{order.price}</span>
                  </div>
                  <div className="productInfoKey">
                      <span className="productInfoKey">Description: </span>
                      <span className="productInfoValue">{order.Details}</span>
                  </div>
                  <div className="productInfoKey">
                      <span className="productInfoKey">Order Status: </span>
                      <span className="productInfoValue">{order.Status}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                   
                  <label>ORDER STATUS</label>
                  <div className="buttonsclass">
                  <button class="button" id="Pending" onClick={(e) => handleClick(e, "Pending")}>Pending</button> 
                  <button class="button" id="Canceled" onClick={(e) => handleClick(e,"Canceled")} >Canceled</button>
                  <button class="button" id="InPreparation" onClick={(e) => handleClick(e, "InPreparation")}>In Preparation</button>
                  <button class="button" id="Ready" onClick={(e) => handleClick(e,"Ready")}>Ready</button>
                  </div>
              </div>
        
          </form>
      </div>
    </div>
  );
}




