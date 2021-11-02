import React, { useContext } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loan } from "./Loan";
import { Grid } from "@material-ui/core";
import { Loans } from "./Loans";
import Add from "./Modal";
import StoreContext from "./store/StoreContex";

function App() {
  const ctx = useContext(StoreContext);
  //const [add, setAdd] = React.useState<boolean>(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container>
          <Switch>
            <Route path="/loans/:id">
              <Loan />
            </Route>
            <Route exact path="/">
              <Loans />
            </Route>
          </Switch>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
