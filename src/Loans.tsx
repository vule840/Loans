import { Grid, List } from "@material-ui/core";
import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import { loanRepository } from "./data";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import StoreContext from "./store/StoreContex";
import Add from "./Modal";

export const Loans = (): JSX.Element => {
  const ctx = useContext(StoreContext);

  return (
    <Grid container>
      <Grid item>
        <h2>Your Loans</h2>
        <List className="list">
          {ctx.loans.map((loan: any) => (
            <div key={loan.id}>
              <span onClick={() => ctx.removeItem(loan)}>X </span>
              <Link to={`/loans/${loan.id}`}>
                <ListItem button>{loan.id}</ListItem>
              </Link>
            </div>
          ))}
        </List>
        <span onClick={() => ctx.toggleHandler()}>+</span>
        {ctx.toggle && <Add />}
        {/* <p> {JSON.stringify(ctx.loans)}</p> */}
      </Grid>
    </Grid>
  );
};
