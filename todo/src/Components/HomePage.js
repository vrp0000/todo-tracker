import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const datafetch = () => {
    if (localStorage.getItem("1")) {
    }
    localStorage.getItem("data").map((_data) => {
      return (
        <tr key={_data.id}>
          <td>_data.name</td>
          <td>_data.status</td>
        </tr>
      );
    });
  };
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div className="hdr">
        <h2>Tasks</h2>
      </div>
      <div className="Addtsk">
        <Link to="/form">Add Task</Link>
      </div>

      <div className="alltsk">
        <table>
          <tbody>{datafetch}</tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
