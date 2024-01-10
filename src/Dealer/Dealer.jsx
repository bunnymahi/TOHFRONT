import React, { useState, useEffect } from "react";

const Dealer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fbend-ir1f.onrender.com/getdb");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(data)) {
    return <p>Data is not an array.</p>;
  }
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
      <div>
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
export default Dealer;
