import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../constants";
import './index.css';

function Home(){
    const url = BASE_URL + "users/";
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        axios.get(url).then((response)=>{
            setUsers(response.data)
        });
    },[])

//     const handleClick = (e) =>{
//         e.preventDefault();
//         axios.post(url,{"first_name": "Test","last_name":"Users"}.then((response)))
//     }
// }

    return(
        <>
        <div>
            <h1>Users List</h1>
            <table className="table-api">
                <tr className="tr">
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {users.map((user)=>{ 
                return(
                    
                    <tr className="tr">
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                    </tr>
                )
            })}
            </table>
                  
                    
                    {/* /*<li key={user.id}>{user.first_name} {user.last_name}</li>*/}
                
            {/* <button onClick={handleClick}>Click Me!</button> */}
        </div>
        </>
    )
}

export default Home;