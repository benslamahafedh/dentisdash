import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea, CardActions } from "@material-ui/core/";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {


  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  TextField,
  Menu,
  MenuItem,

} from "@material-ui/core";

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
const teethGroup1 = [
  18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
];
let soinSample = [
  {
    label: "hémostatique local après extraction",
    value: "hémostatique local après extraction",
  },
  {
    label: "surfaçage",
    value: "surfaçage",
  },
];
const teethGroup2 = [
  48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
];

const categoriesSample = [
  { label: "EXTRACTION", value: "EXTRACTION" },
  { label: "ENDO", value: "ENDO" },
  { label: "OBTURATION", value: "OBTURATION" },
  { label: "PIVOT", value: "PIVOT" },
  { label: "PROTHESE FIXE", value: "PROTHESE FIXE" },
  { label: "IMPLANT", value: "IMPLANT" },
  { label: "PARO", value: "PARO" },
];


function CardSt() {
  const [soinDialogInput, setSoinDialogInput] = useState({
    region: "",
    category: "",
    soin: "",
    subcategory: "",
  });
  const [soinsStandard, setSoinsStandard] = useState([]);
  const [soinsStandardDialog, setSoinsStandardDialog] = useState(false);
  const classes = useStyles();
  const handleSoinDialogClose = () => {
    setSoinsStandardDialog(false);
    setSoinsComplementriesDialog(false);
    setSoinDialogInput({
      region: "",
      category: "",
      soin: "",
      subcategory: "",
    });
  };
  const [soinsComplementriesDialog, setSoinsComplementriesDialog] =
    useState(false);
  const addSoinStandardDialog = (
    <Dialog
      open={soinsStandardDialog}
      onClose={handleSoinDialogClose}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      <DialogTitle  style={{fontFamily:'Lato, sans-serif',}} id="form-dialog-title">Add Entry</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="Region"
          style={{fontFamily:'Lato, sans-serif',}}
          fullWidth
          SelectProps={{
            native: true,
          }}
          value={soinDialogInput.region}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              region: e.target.value,
            })
          }
        >
          {[...teethGroup1, ...teethGroup2].map((t) => (
            <option  style={{fontFamily:'Lato, sans-serif',}} key={t} value={t}>
              {t}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Category"
          fullWidth
          SelectProps={{
            native: true,
          }}
          
          value={soinDialogInput.category}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              category: e.target.value,
            })
          }
          style={{ fontFamily:'Lato, sans-serif', marginTop: "1em" }}
        >
          {categoriesSample.map((t) => (
            <option  style={{fontFamily:'Lato, sans-serif',}}key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Soin"
          fullWidth
          SelectProps={{
            native: true,
          }}
          value={soinDialogInput.soin}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              soin: e.target.value,
            })
          }
          style={{ marginTop: "1em" ,fontFamily:'Lato, sans-serif',}}
        >
          {soinSample.map((t) => (
            <option  style={{fontFamily:'Lato, sans-serif',}} key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button  style={{fontFamily:'Lato, sans-serif',}} onClick={handleSoinDialogClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setSoinsStandard((en) => [...en, soinDialogInput]);
            setSoinsStandardDialog(false);
            console.log(soinsStandard)
            handleSoinDialogSubmit();
          }}
          color="primary"
          style={{fontFamily:'Lato, sans-serif',}}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
  const handleSoinDialogSubmit = () => {
    setSoinDialogInput({
      region: "",
      category: "",
      soin: "",
      subcategory: "",
    });
  };
  return (
    <div className={classes.root}>
      {addSoinStandardDialog}
      <CardContent className={classes.Content}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily:'Lato, sans-serif', fontWeight: 500 }}>
            Soins Standards
          </span>
          <Button
            endIcon={<AddCircleIcon />}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSoinDialogInput({
                region: teethGroup1[0],
                category: categoriesSample[0].value,
                soin: soinSample[0].value,
                subcategory: '',
              });
              setSoinsStandardDialog(true);
            }} >
          </Button>
        </div>
      </CardContent>
      <CardActions className={classes.Actions}>
        <Grid item style={{ margin: '0em', width: '100%' }}>
          <TableContainer style={{ background: '#f4f8fa', }}>
            <Table>
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="50%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontFamily:'Lato, sans-serif',
                      padding: 0,
                      borderRight: '1px solid #000',
                      textAlign:"center",
                      borderBottom: '1px solid #000',
                    }}
                    className={classes.teethFamily}
                  >
                    dents / region
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily:'Lato, sans-serif',
                      padding: 0,
                      borderRight: '1px solid #000',
                      textAlign:"center",
                      borderBottom: '1px solid #000',
                    }}
                    className={classes.teethFamily}
                  >
                    categorie
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily:'Lato, sans-serif',
                      padding: 0,
                      borderBottom: '1px solid #000',
                      textAlign:"center"
                    }}
                    className={classes.teethFamily}
                  >
                    soin
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {soinsStandard.map((s, i) => (
                  <TableRow key={i}>
                    <TableCell
                      style={{
                        fontFamily:'Lato, sans-serif',
                        padding:'6px',
                        borderBottom: '1px solid #000',
                      }}
                      className={classes.teethFamily}
                    >
                      <p style={{
                        fontFamily:'Lato, sans-serif',
                        background:'#E6F9F5',
                        color:'#00A998',
                        textAlign:'center',
                        border:'solid 2px #00A998',
                        borderRadius:'4px',
                        padding:'2px',
                      }}>{s.region}</p>
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily:'Lato, sans-serif',
                        padding:'6px',
                        border: '1px solid #000',
                      }}
                      className={classes.teethFamily}
                    >
                      <p style={{
                        fontFamily:'Lato, sans-serif',
                        background:'#E6F9F5',
                        color:'#00A998',
                        textAlign:'center',
                        border:'solid 2px #00A998',
                        borderRadius:'4px',
                        padding:'2px',
                      }}>{s.category}</p>
                      
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily:'Lato, sans-serif',
                        padding:'6px',
                        borderBottom: '1px solid #000',
                      }}
                      className={classes.teethFamily}
                    >
                      <p style={{
                        fontFamily:'Lato, sans-serif',
                        background:'#E6F9F5',
                        color:'#00A998',
                        textAlign:'center',
                        padding:'2px',
                        border:'solid 2px #00A998',
                        borderRadius:'4px'
                      }}>{s.soin}</p>
                      
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell
                    style={{
                      fontFamily:'Lato, sans-serif',
                      padding: '10px 0px',
                      borderBottom: '1px solid #000',
                    }}
                    className={classes.teethFamily}
                  ></TableCell>
                  <TableCell
                    style={{
                      padding: '10px 0px',
                      border: '1px solid #000',
                    }}
                    className={classes.teethFamily}
                  ></TableCell>
                  <TableCell
                    style={{
                      padding: '10px 0px',
                      borderBottom: '1px solid #000',
                    }}
                    className={classes.teethFamily}
                  ></TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

      </CardActions>
    </div>
  );
}

export default CardSt;
