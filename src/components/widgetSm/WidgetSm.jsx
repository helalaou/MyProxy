import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Lastest Feedbacks</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.iconfinder.com/data/icons/messenger-and-society/16/user_person_avatar_unisex-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Salim Yaakoubi</span>
            <div className="ratingDiv">
            <img src="https://img.icons8.com/color/48/000000/star.png" alt="star" className="widgetSmIcon" />
            <span className="widgetSmUserRate">4.5/5.0</span>
            </div>
           </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://readdork.com/wp-content/uploads/2020/11/girlinred_2_mar19-28.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nada Moussaoui</span>
            <div className="ratingDiv">
            <img src="https://img.icons8.com/color/48/000000/star.png" alt="star" className="widgetSmIcon" />
            <span className="widgetSmUserRate">4.5/5.0</span>
            </div>
           </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.iconfinder.com/data/icons/messenger-and-society/16/user_person_avatar_unisex-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mohammed Nassiri</span>
            <div className="ratingDiv">
            <img src="https://img.icons8.com/color/48/000000/star.png" alt="star" className="widgetSmIcon" />
            <span className="widgetSmUserRate">4.5/5.0</span>
            </div>
           </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Keller</span>
            <div className="ratingDiv">
            <img src="https://img.icons8.com/color/48/000000/star.png" alt="star" className="widgetSmIcon" />
            <span className="widgetSmUserRate">4.5/5.0</span>
            </div>
           </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.iconfinder.com/data/icons/messenger-and-society/16/user_person_avatar_unisex-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Leila Benchakroun</span>
            <div className="ratingDiv">
            <img src="https://img.icons8.com/color/48/000000/star.png" alt="star" className="widgetSmIcon" />
            <span className="widgetSmUserRate">4.5/5.0</span>
            </div>
           </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
