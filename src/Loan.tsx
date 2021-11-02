import { Grid, List } from "@material-ui/core";
import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import { loanRepository } from "./data";
import { useHistory, useParams } from "react-router-dom";
import StoreContext from "./store/StoreContex";
import AuthContex from "./store/AuthContext";

export const Loan = (): JSX.Element => {
  const history = useHistory();
  const ctx = useContext(StoreContext);
  const { id } = useParams<{ id: any }>();
  const auth = useContext(AuthContex);
  console.log(auth);
  const filterSOme = (x: any) => x.id === id;
  const newLoan = ctx.loans.filter(filterSOme)[0];

  return (
    <Grid container>
      <Grid item className="loan">
        <h2>Your Loans</h2>
        <List>{newLoan.id}</List>
        <List>{newLoan.amount}</List>
        <List>{newLoan.startDate.toLocaleDateString()}</List>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={() => auth.authChange()}>Auth</button>
        {!auth.auth && <p>Auth</p>}
      </Grid>
    </Grid>
  );
};
