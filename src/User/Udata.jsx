import React, { useState } from "react";
import axios from "axios";

function Udata() {
  const [data, setData] = useState([]); // Initialize with an empty array
  const [registrationNumber, setRegistrationNumber] = useState("");
  const handleSearch = () => {
    if (!registrationNumber) {
      console.error("Registration number is required");
      return;
    }

    // Fetch data from the server for the specific registration number
    axios
      .get("http://localhost:8000/search", {
        params: {
          registrationNumber: registrationNumber,
        },
      })
      .then((response) => {
        const result = response.data;
        console.log("Data from the server:", result);
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Other code...

  return (
    <>
      {/* <div className="App mt-5"> */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          padding: "20px",
        }}
        className="mt-5"
      >
        <label>
          <b>Registration Number:{"   "}</b>
          <input
            type="text"
            placeholder="Enter here!!"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      <div>
        <br />
        {/* Table Maping*/}
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">reg.no</th>
                <th scope="col">phone.no</th>
                <th scope="col">reports</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.registration_number}</td>
                  <td>{item.Phone_number}</td>
                  <td>{item.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default Udata;
