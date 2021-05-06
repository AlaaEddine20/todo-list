import React from "react";
import TasksList from "./components/TasksList/TasksList";
import TaskItem from "./components/TaskItem/TaskItem";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <TasksList />
    </div>
  );
};

export default App;
