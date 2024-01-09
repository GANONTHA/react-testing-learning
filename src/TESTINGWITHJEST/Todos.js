import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    //get data from api with axios using async - await
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (result && result.data) {
          setTodo(result.data);
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Todos Component</h1>
      {todo ? (
        <ul>
          {todo.map((item) => (
            <li data-testid="todo" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default Todos;
