import React from "react";
import { Grid } from "@material-ui/core";
import Dashboard from "../component/dashboard/dashboard";
import Sidebar from "../utils/sidebar";
import Header from "../utils/header";
export default function Dasboard() {
  return (
    <Grid container>
      {/*<Grid item>
        <Sidebar />
      </Grid>*/}
      <Grid item style={{ flex: 1 }}>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <Dashboard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
