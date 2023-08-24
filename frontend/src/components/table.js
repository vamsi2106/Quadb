import React, { useState, useEffect } from "react";
import Axios from "axios";

function Tables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/get-data").then((data) => {
      setData(data.data);
    });
  }, []);

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.last}</td>
          <td>
            $ {item.buy} / $ {item.sell}
          </td>
          <td>{Math.round(item.buy - item.sell * 1000) / 1000}</td>
          <td>{item.volume}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Tables;
