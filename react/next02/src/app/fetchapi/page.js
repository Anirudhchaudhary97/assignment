"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState(null);

  //method1. to fetch api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
      console.log(data)
  }, []);
  return (
    <div>
      <h1>user Deatail</h1>
      <div>
        {data ? (
          <div>
            <ul>
              <li>Name:{data.email}</li>
            </ul>
          </div>
        ) : (
          <p>"loading</p>
        )}
      </div>
    </div>
  );
};

export default page;
