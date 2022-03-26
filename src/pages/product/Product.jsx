import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">MODIFY ORDER</h1>
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://img.cuisineaz.com/610x610/2019/04/17/i146583-tacos-poulet-curry.jpeg" alt="" className="productInfoImg" />
                  <span className="productName">Tacos Poulet</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Customer ID:</span>
                      <span className="productInfoValue">81017</span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">Customer:</span>
                      <span className="productInfoValue">Hamza El Alaoui</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">22.06 MAD</span>
                  </div>
                  <div className="productInfoKey">
                      <span className="productInfoKey">Description:</span>
                      <span className="productInfoValue"> Avec sauce algerian</span>
                  </div>
                
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                   
                  <label>ORDER STATUS</label>
                  <select name="Order Status" id="active">
                     <option value="Pending">Pending</option>
                      <option value="In-Preparation">In-Preparation</option>
                      <option value="Ready">Ready</option>
                      <option value="Canceled">Canceled</option>
                  </select>
              </div>
        
          </form>
      </div>
    </div>
  );
}
