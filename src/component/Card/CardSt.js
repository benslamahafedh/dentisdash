import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea, CardActions } from "@material-ui/core/";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Add from "../../images/Add.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(8),
    background: "rgba(244, 248, 250, 0.5);",
    /* Dark/dark_6 */
    border: "1px solid #E3EBF0;",
    borderRadius: "12px;",
  },
  Button: {
    color: "#00A998 !important",
    background: "#E6F9F5;",
    border: "0.5px solid #00A998;",
    borderRadius: "4px;",
    marginRight: "10px",
    textTransform: "none;",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  Content: {
    borderBottom: "1px solid #E3EBF0;",
    color: "#0A2E47;",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  Actions: {
    padding: "10px 20px 16px 20px",
  },
}));

function CardSt() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardContent className={classes.Content}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Poppins", fontWeight: 500 }}>
            Soins Standards
          </span>
          <img src={Add} style={{ cursor: "pointer" }} />
        </div>
      </CardContent>
      <CardActions className={classes.Actions}>
        <Grid item>
          <Grid container direction="row">
            <Button disabled className={classes.Button}>
              Examen
            </Button>
            <Button disabled className={classes.Button}>
              Consultation
            </Button>
            <Button disabled className={classes.Button}>
              Maintanance
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </div>
  );
}

export default CardSt;
