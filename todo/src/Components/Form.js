import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Form = () => {
  let history = useHistory();
  let counter = Number(localStorage.getItem("Counter"));
  function addStorage(event) {
    event.preventDefault();
    localStorage.setItem(
      counter + 1,
      JSON.stringify({
        name: event.target[0].value,
        Deadline: event.target[1].value,
      })
    );
    localStorage.setItem("Counter", counter + 1); //Updating Counter

    history.replace("/"); //Homepage
  }
  return (
    <div>
      <form onSubmit={addStorage}>
        Task Name <input type="text" name="task" />
        <br /> <br />
        Deadline <input type="date" />
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
