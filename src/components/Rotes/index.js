import { Switch, Route } from "react-router-dom";
import Company from "../Company";
import Customer from "../Customer";
import Home from "../Home";
const Rotes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customer/:id">
          <Customer />
        </Route>
        <Route path="/company/:id">
          <Company />
        </Route>
      </Switch>
    </div>
  );
};
export default Rotes;
