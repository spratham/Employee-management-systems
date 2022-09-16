import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3003/users");
      console.log(response);
      setUser(response.data.reverse()); //using reverse to view new added user on top
    } catch {
      console.log("error");
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <div className="heading">
          <h1>Home Page</h1>
          <Link className="btn btn-primary" exact to="/users/add">
            Add User
          </Link>
        </div>
      </div>
      {/* {

         -----Card format view----

      
          users && users.map((user,index) => (               
            <div className="Profile">
              <p>{index+1}</p>                              
              <p>{user.name}</p>
              <p>{user.age}</p>             
              <p>{user.department}</p>
              <p>{user.blood}</p>
              <p>{user.address}</p>
              <p>{user.phone}</p>
              <br/>
            </div >
          ))} */}

      {/* -----for Table format view---- */}

      <table className="table table-success table-striped border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Department</th>
            <th scope="col">Blood Group</th>
            {/* <th scope="col">Address</th> */}
            {/* <th scope="col">Contact No</th> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.department}</td>
              <td>{user.blood}</td>
              {/* <td>
                {user.address.street +
                  ", " +
                  user.address.suite +
                  ", " +
                  user.address.city +
                  ", " +
                  user.address.zipcode}
              </td> */}
              {/* <td>{user.phone}</td> */}
              <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                {/* <Link
                  class="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
    </div>
  );
};

export default Home;