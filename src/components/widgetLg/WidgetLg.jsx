import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Orders</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Product</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
             
            <span className="widgetLgName">Hamza El Alaoui {"< 81017 >"}</span>  
          </td>
          <td className="widgetLgOrder">Tacos Poulet</td>
          <td className="widgetLgDate">26 March 2022</td>
          <td className="widgetLgAmount">24.06 MAD</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName">Anas Temouden {"< 102929 >"}</span>
          </td>
          <td className="widgetLgOrder">Pizza Fruit de Mer, Tac...</td>
          <td className="widgetLgDate"> 26 March 2022</td>
          <td className="widgetLgAmount">42.22 MAD</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
         
            <span className="widgetLgName">Mehdi Alami Idrissi {"< 82626 >"}</span>
          </td>
          <td className="widgetLgOrder">Panini Mixte, Tacos Mi...</td>
          <td className="widgetLgDate">26 March 2022</td>
          <td className="widgetLgAmount">84.50 MAD</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Yassine Cheracher {"< 87451 >"}</span>
          </td>
          <td className="widgetLgOrder">Jus d'orange</td>
          <td className="widgetLgDate">26 March 2022</td>
          <td className="widgetLgAmount">9.00 MAD</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
         
            <span className="widgetLgName">Achraf Ajrhourh {"< 115234 >"}</span>
          </td>
          <td className="widgetLgOrder">Sandwich viande hac...</td>
          <td className="widgetLgDate">26 March 2022</td>
          <td className="widgetLgAmount">20.00 MAD</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>


      </table>
    </div>
  );
}
