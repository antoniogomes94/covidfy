import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/Index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Covidfy" component={Index} exact />
      </Switch>
    </BrowserRouter>
  );
}
