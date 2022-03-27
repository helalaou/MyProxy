import "./fakeForm.css";
import { useState } from "react";
import axios from "axios";
// create a form component where we input the data we want to send to the server
// and then post the data to the localhost:3000/api/fakeForm


export default function FakeForm() {
    const [data, setData] = useState({
        id: "",
        name: "",
        client:"",
        details:"",
        date:"",
        time:""}
    );

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/addOrder", data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            }
            );
    }


       console.log(data);
    

    //Get Date  {Day, Month, Year}
    const GetDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }


    //Get Time {Hour, Minute, Second}
    const GetTime = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${hour}:${minute}:${second}`;
    }

    return (
      
        <div className="fakeForm">
              <h2>Fake Request Maker</h2>
            <form onSubmit={handleSubmit}>
                <div className="fakeForm__input">
                    <label>ID</label>
                    <input
                        type="text"
                        name="id"
                        value={data.id}
                        onChange={handleChange}
                    />
                </div>
                <div className="fakeForm__input">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="fakeForm__input">
                    <label>Client</label>
                    <input
                        type="text"
                        name="client"
                        value={data.client}
                        onChange={handleChange}
                    />
                </div>
                <div className="fakeForm__input">
                    <label>Details</label>
                    <input
                        type="text"
                        name="details"
                        value={data.details}
                        onChange={handleChange}
                    />
                </div>
                <div className="fakeForm__input">
                    <label>Date</label>
                     <label>{GetDate()} </label>                      
                </div>
                <div className="fakeForm__input">
                    <label>Time</label>
                    <label>{GetTime()} </label> 
                </div>
                <div className="fakeForm__input">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}



 
