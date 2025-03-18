import React, { useEffect, useState } from "react";
import axios from "axios";
export default function NctReactApiLocal() {
  const [NctListUser, setNctListUser] = useState([]);
  // API URL
  const apiUrl = "http://localhost:3001/users"; // Make sure to include 'http://'

  // Fetch user list
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((nctResponse) => {
        setNctListUser(nctResponse.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <h2>Du Lieu API Local</h2>
      <div className="table table-bordered">
        <thead>
          <tr>
            <th>fullname</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {NctListUser.map((nctItem, index) => (
            <tr key={index}>
              <td>{nctItem.fullname}</td>
              <td>{nctItem.age}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
