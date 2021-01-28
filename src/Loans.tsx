import {
  Grid,
  List
} from "@material-ui/core";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { loanRepository } from "./data";


export const Loans = (): JSX.Element => {
  return <Grid container>
    <Grid item>
      <List>{loanRepository.map((loan) => (<ListItem button>{loan.id}</ListItem>))}</List>
    </Grid>
  </Grid>
}