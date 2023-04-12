import axios from "axios";
import Button from "../Button/button";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { Alert } from "bootstrap";


function Forms(){
    const url = BASE_URL+"users/"
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Hello ${FirstName} ${LastName}!`);
        setFirstName('');
        setLastName('');
        const payload = {
            "first_name": FirstName,
            "last_name":LastName,
        }
        axios.post(url,payload).then((response)=>{
            
        }).catch(()=>{})

    };
    return (
        <form onSubmit={handleSubmit}>
             <input
        type="text"
        id="FirstName"
        name="FirstName"
        value={FirstName}
        placeholder="First Name"
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />

      <br />
      <br />

      <input type="text" id="LastName" name="LastName" value={LastName} placeholder="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br/>
      <br/>
      <Button/>
      <br/>
      <br/>
      <h2>{message}</h2>
        </form>
    )
}

export default Forms
