import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Loans } from './Loans';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Grid container>
      <Switch>
        <Route path="/">
          <Loans />
        </Route>
      </Switch>
      </Grid>
    </div>
    </BrowserRouter>
  );
}

export default App;
