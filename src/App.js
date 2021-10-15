// Library Imports
import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
// Component Imports
import HomePage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";
// App Component
const App = () => {
  return (
    <>
      <Switch>
        <Route path={"/pizza/"}>
          <PizzaForm />
        </Route>
        <Route path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
