import * as react from 'react';
import "./widgetLg.css";
//import axios
import axios from "axios";








export default function WidgetLg() {
  const [data, setData] = react.useState([]);


axios.get('http://localhost:3001/getOrders').then(function(response){
    
    setData(response.data);
  }
  ).catch(function(error){
    console.log(error);
  }
  );
      

        
      

  
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle" >Latest Orders</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Product</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {data.map(function(data, index){
            return(
              <tr className="widgetLgTr">
              <td className="widgetLgUser">  
                <span className="widgetLgName">{data.NameClient}</span>  
              </td>
              <td className="widgetLgOrder">Tacos Poulet</td>
              <td className="widgetLgDate">26 March 2022</td>
              <td className="widgetLgAmount">24.06 MAD</td>
              <td className="widgetLgStatus">
                <Button type={data.Status} />
              </td>
            </tr>
             
            )
          })}
       
       
        

        </tbody>


      </table>
    </div>
  );
}
