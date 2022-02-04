import React from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import Popup from "./components/Popup/Popup";
import ToDoList from "./components/ToDo/ToDoList";

import TaskProvider from "./tasks/TaskProvider";

function App() {
  return (
    <React.Fragment>
      <Popup />
      <TaskProvider>
        <Container>
          <Form />

          <ToDoList />
        </Container>
      </TaskProvider>
    </React.Fragment>
  );
}

export default App;
