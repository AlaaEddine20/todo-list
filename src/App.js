import React from "react";
import TasksList from "./components/TasksList/TasksList";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center flex-col">
      <Header />
      <TasksList />
    </div>
  );
};

export default App;
