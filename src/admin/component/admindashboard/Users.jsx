import React, { useEffect, useState } from "react";
import Spinner from "../../../user/utils/Spinner";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);


  useEffect(()=>{
    
    if (users.length > 0) return;

    const getUsers = async () => {  
      setLoading(true);
      // make an call to register our user
      await axios.get("http://localhost:3010/users")
        .then((response) => {
          console.log(response);
          setUsers(response.data.records)
          if (response.data.msg === "success" ) {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getUsers();
  },[users]);



  return (
    <>
      <div className="mt-5 justify-center">
        
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">users</th>
              <th scope="col">email</th>
              <th scope="col">phone Number</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length > 0 ? (
                users.map( (u, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{u.fullName}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.status.toString()}</td>
                    <td>{u.createdAt}</td>
                  </tr>
                ))
              ) : <Spinner/>
            }
            
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
