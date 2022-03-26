import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> 19056.4 MAD</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

       
      <div className="featuredItem">
        <span className="featuredTitle">Best Seller</span>
        <div className="featuredProductContainer">
        <span className="featuredMoney">Tacos Poulet</span>
        <img src="https://modiashop.com/wp-content/uploads/2021/04/WCTYwxZSyg1599226703.png" alt="tacos" className="featuredProductImg" />
        <span className="featuredTitleDetail">Nb. of orders per week</span>
        <span className="featuredMoneyRate">
            +29.4 Orders <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
         
      </div>
     

      <div className="featuredItem">
        <span className="featuredTitle">Average Rating this Week</span>
        <div className="featuredMoneyContainer">
        <img src="https://img.icons8.com/color/48/000000/star.png" alt="star" className="featuredIcon" />
          <span className="featuredMoney" id="Rating">3.9/5.0</span>
          <span className="featuredMoneyRate">
            +0.9 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
    </div>
  );
}
