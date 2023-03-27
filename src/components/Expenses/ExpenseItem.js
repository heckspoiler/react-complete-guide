import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //array destructuring => [title, setTitle]. useState returns an array with two values, the first being the title and the second being a function that will update the title.

  const clickHandler = () => {
    setTitle("Updated!"); //setTitle is a function that will update the title and it's created by the useState-function. By calling this function the whole component function is called again, we tell React that we want to assign a new value to the title, therefore everything will be reevaluated.
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
