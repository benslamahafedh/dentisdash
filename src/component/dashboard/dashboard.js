import React, { useState } from "react";
import {
  Grid,
  Button,
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
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import "./dashboard.css";
import ExtractImage from "../../images/cross.png";
import MuiTableCell from "@material-ui/core/TableCell";

import CardComp from "../Card/CardComp";
import CardSt from "../Card/CardSt";

const useStyles = makeStyles((theme) => ({
  teethFamily: {
    fontSize: "11px",
    textAlign: "center",
    border: 0,
  },
}));

const teethFamilySample = [
  { label: "extraction simple", value: "extraction simple" },
  { label: "extraction racines", value: "extraction racines" },
  { label: "hémisection", value: "hémisection" },
  { label: "extraction chir", value: "extraction chir" },
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

let subCategorySample = [
  { label: "PAP", value: "PAP" },
  { label: "PAT", value: "PAT" },
  { label: "REPARATION", value: "REPARATION" },

  { label: "PAT sur IMPLANTS", value: "PAT sur IMPLANTS" },
];
export default function Dashboard() {
  const classes = useStyles();
  ///this will save all grid cross icon
  const [selectedFamily, setSelectedFamily] = useState([]);
  //this will save blue buttn functionality
  const [teethFamilyInProgress, setTeethFamilyInProgress] = useState([]);
  //this will save green buttn functionality
  const [teethFamilyDone, setTeethFamilyInDone] = useState([]);
  //this will save all removed tooth
  const [removedTooth, setRemovedTooth] = useState([]);

  const [selectFamilyPopup, setSelectFamilyPopup] = useState({
    active: null,
    family: "",
    cell: "",
  });
  const [removeToothAlert, setRemoveToothAlert] = useState({
    active: null,
    color: "white",
    number:''
  });

  const [soinsStandardDialog, setSoinsStandardDialog] = useState(false);
  const [soinsStandard, setSoinsStandard] = useState([]);
  const [soinsComplementriesDialog, setSoinsComplementriesDialog] =
    useState(false);
  const [soinsComplementries, setSoinsComplementries] = useState([]);
  const [soinDialogInput, setSoinDialogInput] = useState({
    region: "",
    category: "",
    soin: "",
    subcategory: "",
  });
  const teethFamily = ["IMPLANT", "PROTHESE FIXE", "PROVISOIRE"];
  const teethFamily1 = ["OBTURATION", "ENDO", "EXTRACTION"];
  const teethGroup1 = [
    18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
  ];
  const teethGroup2 = [
    48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

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
  const handleSoinDialogSubmit = () => {
    setSoinDialogInput({
      region: "",
      category: "",
      soin: "",
      subcategory: "",
    });
  };

  const popupClickHandler = (popupValue) => {
    setSelectedFamily((f) => [
      ...f,
      selectFamilyPopup.family + "-" + selectFamilyPopup.cell,
    ]);
    setSelectFamilyPopup({
      active: null,
      family: "",
      cell: "",
    });
  };
  const progressButtonClickHandler = () => {
    setTeethFamilyInProgress((f) => [
      ...f,
      selectFamilyPopup.family + "-" + selectFamilyPopup.cell,
    ]);
    setSelectFamilyPopup({
      active: null,
      family: "",
      cell: "",
    });
  };
  const doneButtonClickHandler = () => {
    setTeethFamilyInDone((f) => [
      ...f,
      selectFamilyPopup.family + "-" + selectFamilyPopup.cell,
    ]);
    setSelectFamilyPopup({
      active: null,
      family: "",
      cell: "",
    });
  };
  const removeToothHandler = () => {
    setRemovedTooth((d) => [...d, removeToothAlert.number]);
    setRemoveToothAlert({
      active: null,
      color: "gray",
      number:''
    });
  };
  const addSoinStandardDialog = (
    <Dialog
      open={soinsStandardDialog}
      onClose={handleSoinDialogClose}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">Add Entry</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="Region"
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
            <option key={t} value={t}>
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
          style={{ marginTop: "1em" }}
        >
          {categoriesSample.map((t) => (
            <option key={t.value} value={t.value}>
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
          style={{ marginTop: "1em" }}
        >
          {soinSample.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSoinDialogClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setSoinsStandard((en) => [...en, soinDialogInput]);
            setSoinsStandardDialog(false);
            handleSoinDialogSubmit();
          }}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
  const addSoinComplementriesDialog = (
    <Dialog
      open={soinsComplementriesDialog}
      onClose={handleSoinDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Entry</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="Region"
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
            <option key={t} value={t}>
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
          style={{ marginTop: "1em" }}
        >
          {categoriesSample.map((t) => (
            <option key={t.value} value={t.value}>
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
          style={{ marginTop: "1em" }}
        >
          {soinSample.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </TextField>

        <TextField
          select
          label="Sub category"
          fullWidth
          SelectProps={{
            native: true,
          }}
          value={soinDialogInput.subcategory}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              subcategory: e.target.value,
            })
          }
          style={{ marginTop: "1em" }}
        >
          {subCategorySample.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSoinDialogClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setSoinsComplementries((en) => [...en, soinDialogInput]);
            setSoinsComplementriesDialog(false);
            handleSoinDialogSubmit();
          }}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );

  const renderRemovedToothAlert = (
    <Dialog
      open={removeToothAlert.active}
      onClose={() =>
        setRemoveToothAlert({
          active: null,
          number: "",
        })
      }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are You sure you want to remove teeth
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This will permanently delete teeth {removeToothAlert.number}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            setRemoveToothAlert({
              active: null,
              color: 'gray',
              number:''
            })
          }
          color="primary"
        >
          Cancel
        </Button>
        <Button onClick={removeToothHandler} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
  const renderMenu = (menuID) => {
    return (
      <Menu
        anchorEl={selectFamilyPopup.active}
        id={menuID}
        keepMounted
        MenuListProps={{
          onMouseLeave: () => {
            setSelectFamilyPopup({
              active: null,
              family: "",
              cell: "",
            });
          },
        }}
        open={Boolean(selectFamilyPopup.active)}
        onClose={() => {
          setSelectFamilyPopup({
            active: null,
            family: "",
            cell: "",
          });
        }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        disableScrollLock
      >
        {teethFamilySample.map((item, i) => (
          <MenuItem
            style={{ background: "transparent" }}
            divider
            onClick={() => popupClickHandler(item.value)}
            key={i}
          >
            <Typography className={classes.listItem}>{item.value}</Typography>
          </MenuItem>
        ))}
        <MenuItem
          style={{ background: "transparent" }}
          divider
          onClick={progressButtonClickHandler}
        >
          <Button
            variant="contained"
            style={{ background: "#9CCCEF", color: "#000" }}
            startIcon={<LibraryAddCheckIcon />}
            fullWidth
          >
            Existants
          </Button>
        </MenuItem>
        <MenuItem
          style={{ background: "transparent" }}
          divider
          onClick={doneButtonClickHandler}
        >
          <Button
            variant="contained"
            style={{ background: "#8FCC6B", color: "#000" }}
            startIcon={<LibraryAddCheckIcon />}
            fullWidth
          >
            Realises
          </Button>
        </MenuItem>
      </Menu>
    );
  };
  return (
    <Grid
      container
      direction="column"
      style={{
        boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.04)",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        margin: "20px",
        width: "98%",
        marginTop: "0",
      }}
    >
      {renderMenu(selectFamilyPopup?.family + "-" + selectFamilyPopup?.cell)}
      {addSoinStandardDialog}
      {addSoinComplementriesDialog}
      {renderRemovedToothAlert}
      {/* Grid container */}
      <Grid item style={{ marginTop: "40px" }}>
        <Grid container>
          <Grid item xs style={{ flex: 1 }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="body1"
                style={{
                  fontWeight: "500",
                  display: "flex",
                  fontSize: "16px",
                  marginRight: "15px",
                  lineHeight: "26px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  style={{ marginLeft: "70px" }}
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.625C13.4975 1.76 14.75 2.7125 14.75 6.2375V10.8725C14.75 13.9625 14 15.5075 10.25 15.5075H5.75C2 15.5075 1.25 13.9625 1.25 10.8725V6.2375C1.25 2.7125 2.5025 1.7675 5 1.625H11Z"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a href="#" className="navlink">
                    Fiche patient
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item xs style={{ flex: 1, marginLeft: "20px" }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="body1"
                style={{
                  fontWeight: "500",
                  display: "flex",
                  fontSize: "16px",
                  display: "flex",
                  marginRight: "15px",
                  lineHeight: "26px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  width="20"
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  height="20"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1546 11.4576C11.1735 11.4576 11.9996 10.6315 11.9996 9.61258C11.9996 8.59361 11.1735 7.76758 10.1546 7.76758C9.1356 7.76758 8.30957 8.59361 8.30957 9.61258C8.30957 10.6315 9.1356 11.4576 10.1546 11.4576Z"
                    stroke="#00A998"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.84499 4.69C10.864 4.69 11.69 3.86397 11.69 2.845C11.69 1.82603 10.864 1 9.84499 1C8.82603 1 8 1.82603 8 2.845C8 3.86397 8.82603 4.69 9.84499 4.69Z"
                    stroke="#00A998"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.84499 11.69C3.86396 11.69 4.69 10.864 4.69 9.845C4.69 8.82603 3.86396 8 2.84499 8C1.82603 8 1 8.82603 1 9.845C1 10.864 1.82603 11.69 2.84499 11.69Z"
                    stroke="#00A998"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.84499 4.69C3.86396 4.69 4.69 3.86397 4.69 2.845C4.69 1.82603 3.86396 1 2.84499 1C1.82603 1 1 1.82603 1 2.845C1 3.86397 1.82603 4.69 2.84499 4.69Z"
                    stroke="#00A998"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    Dashboard
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item xs style={{ flex: 1, marginLeft: "20px" }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "500",
                  display: "flex",
                  fontSize: "16px",
                  display: "flex",
                  marginRight: "15px",
                  lineHeight: "26px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.735C1.3825 3.9475 4.5775 1 8.4625 1C12.3475 1 15.5425 3.955 15.925 7.735"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 11C1.8025 13.58 3.9625 15.5675 6.6475 16.115"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16.085C12.6775 15.5375 14.83 13.5725 15.6475 11"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    RX
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item xs style={{ flex: 1, marginLeft: "20px" }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  display: "flex",
                  marginRight: "15px",
                  lineHeight: "26px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 5.5C5.49264 5.5 6.5 4.49264 6.5 3.25C6.5 2.00736 5.49264 1 4.25 1C3.00736 1 2 2.00736 2 3.25C2 4.49264 3.00736 5.5 4.25 5.5Z"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7753 11.9277L13.4278 6.44524C12.6328 4.58524 11.1703 4.51024 10.1878 6.28024L8.77033 8.83774C8.05033 10.1352 6.70783 10.2477 5.77783 9.08524L5.61283 8.87524C4.64533 7.66024 3.28033 7.81024 2.58283 9.19774L1.29283 11.7852C0.385325 13.5852 1.69783 15.7077 3.70783 15.7077H13.2778C15.2278 15.7077 16.5403 13.7202 15.7753 11.9277Z"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    Imagerie
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: "20px" }}>
            <div
              id="border-div"
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  display: "flex",
                  fontFamily: "Poppins",
                  marginRight: "15px",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.65779 2.25L4.835 1.751C4.85754 1.68754 4.88422 1.62592 4.91477 1.56651C4.80746 1.77615 4.75 2.01011 4.75 2.25H4.65779ZM9.165 1.751L9.34221 2.25H9.25C9.25 2.01011 9.19254 1.77615 9.08523 1.56651C9.11578 1.62592 9.14246 1.68754 9.165 1.751Z"
                    fill="#6A7D89"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    Plans traitement
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: "20px" }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  display: "flex",
                  fontFamily: "Poppins",
                  marginRight: "15px",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0003 9.00578L8.00021 9.0057L8 9.00538V5.25092L8.00021 5.2506C8.00049 5.25032 8.00106 5.25 8.00185 5.25C8.00264 5.25 8.0032 5.25032 8.00348 5.2506L8.0037 5.25092V8.69465V9.00559L8.22369 9.22531L10.25 11.2491L10.2498 11.2494C10.2495 11.2497 10.249 11.25 10.2482 11.25C10.2477 11.25 10.2473 11.2499 10.247 11.2498L8.0003 9.00578Z"
                    fill="#6A7D89"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                  />
                  <mask id="path-2-inside-1_2_13" fill="white">
                    <path d="M8.25 0C6.21878 0.00144813 4.25984 0.753927 2.75 2.11269V0.6875C2.75 0.505164 2.67757 0.330295 2.54864 0.201364C2.4197 0.0724328 2.24484 0 2.0625 0C1.88016 0 1.7053 0.0724328 1.57636 0.201364C1.44743 0.330295 1.375 0.505164 1.375 0.6875V2.75C1.375 3.29701 1.5923 3.82161 1.97909 4.20841C2.36589 4.5952 2.89049 4.8125 3.4375 4.8125H5.5C5.68234 4.8125 5.8572 4.74007 5.98613 4.61113C6.11507 4.4822 6.1875 4.30734 6.1875 4.125C6.1875 3.94266 6.11507 3.76779 5.98613 3.63886C5.8572 3.50993 5.68234 3.4375 5.5 3.4375H3.4375C3.41432 3.43406 3.39136 3.42924 3.36875 3.42306C4.48905 2.29476 5.96621 1.59024 7.54811 1.42977C9.13 1.2693 10.7186 1.66282 12.0426 2.54317C13.3667 3.42352 14.3441 4.73611 14.8082 6.2569C15.2722 7.77769 15.1941 9.41239 14.5871 10.882C13.9801 12.3516 12.8818 13.5649 11.4798 14.3149C10.0778 15.065 8.45899 15.3052 6.89962 14.9945C5.34025 14.6839 3.93703 13.8417 2.92948 12.6116C1.92192 11.3816 1.3725 9.84001 1.375 8.25C1.375 8.06766 1.30257 7.89279 1.17364 7.76386C1.0447 7.63493 0.869836 7.5625 0.6875 7.5625C0.505164 7.5625 0.330295 7.63493 0.201364 7.76386C0.0724328 7.89279 0 8.06766 0 8.25C0 9.88169 0.483854 11.4767 1.39038 12.8335C2.2969 14.1902 3.58537 15.2476 5.09286 15.872C6.60035 16.4964 8.25915 16.6598 9.85949 16.3415C11.4598 16.0231 12.9298 15.2374 14.0836 14.0836C15.2374 12.9298 16.0231 11.4598 16.3415 9.85949C16.6598 8.25915 16.4964 6.60035 15.872 5.09286C15.2476 3.58537 14.1902 2.2969 12.8335 1.39038C11.4767 0.483854 9.88169 0 8.25 0V0Z" />
                  </mask>
                  <path
                    d="M8.25 0C6.21878 0.00144813 4.25984 0.753927 2.75 2.11269V0.6875C2.75 0.505164 2.67757 0.330295 2.54864 0.201364C2.4197 0.0724328 2.24484 0 2.0625 0C1.88016 0 1.7053 0.0724328 1.57636 0.201364C1.44743 0.330295 1.375 0.505164 1.375 0.6875V2.75C1.375 3.29701 1.5923 3.82161 1.97909 4.20841C2.36589 4.5952 2.89049 4.8125 3.4375 4.8125H5.5C5.68234 4.8125 5.8572 4.74007 5.98613 4.61113C6.11507 4.4822 6.1875 4.30734 6.1875 4.125C6.1875 3.94266 6.11507 3.76779 5.98613 3.63886C5.8572 3.50993 5.68234 3.4375 5.5 3.4375H3.4375C3.41432 3.43406 3.39136 3.42924 3.36875 3.42306C4.48905 2.29476 5.96621 1.59024 7.54811 1.42977C9.13 1.2693 10.7186 1.66282 12.0426 2.54317C13.3667 3.42352 14.3441 4.73611 14.8082 6.2569C15.2722 7.77769 15.1941 9.41239 14.5871 10.882C13.9801 12.3516 12.8818 13.5649 11.4798 14.3149C10.0778 15.065 8.45899 15.3052 6.89962 14.9945C5.34025 14.6839 3.93703 13.8417 2.92948 12.6116C1.92192 11.3816 1.3725 9.84001 1.375 8.25C1.375 8.06766 1.30257 7.89279 1.17364 7.76386C1.0447 7.63493 0.869836 7.5625 0.6875 7.5625C0.505164 7.5625 0.330295 7.63493 0.201364 7.76386C0.0724328 7.89279 0 8.06766 0 8.25C0 9.88169 0.483854 11.4767 1.39038 12.8335C2.2969 14.1902 3.58537 15.2476 5.09286 15.872C6.60035 16.4964 8.25915 16.6598 9.85949 16.3415C11.4598 16.0231 12.9298 15.2374 14.0836 14.0836C15.2374 12.9298 16.0231 11.4598 16.3415 9.85949C16.6598 8.25915 16.4964 6.60035 15.872 5.09286C15.2476 3.58537 14.1902 2.2969 12.8335 1.39038C11.4767 0.483854 9.88169 0 8.25 0V0Z"
                    fill="#6A7D89"
                  />
                  <path
                    d="M8.25 0H9.75V-1.50107L8.24893 -1.5L8.25 0ZM2.75 2.11269H1.25V5.48057L3.75341 3.22766L2.75 2.11269ZM2.75 0.6875L4.25 0.6875L2.75 0.6875ZM2.0625 0L2.0625 -1.5L2.0625 0ZM1.375 0.6875H-0.125H1.375ZM1.375 2.75L-0.125 2.75L1.375 2.75ZM3.4375 4.8125V6.3125V4.8125ZM3.4375 3.4375L3.2176 4.92129L3.32695 4.9375H3.4375V3.4375ZM3.36875 3.42306L2.30432 2.36619L0.491834 4.19163L2.9732 4.86997L3.36875 3.42306ZM1.375 8.25L2.875 8.25235V8.25L1.375 8.25ZM0 8.25H-1.5H0ZM8.25 0H6.75V1.5L8.25 1.5L8.25 0ZM8.24893 -1.5C5.84754 -1.49829 3.53159 -0.608674 1.74659 0.997711L3.75341 3.22766C4.98809 2.11653 6.59003 1.50118 8.25107 1.5L8.24893 -1.5ZM4.25 2.11269V0.6875H1.25V2.11269H4.25ZM4.25 0.6875C4.25 0.107339 4.01953 -0.44906 3.6093 -0.859296L1.48798 1.26202C1.3356 1.10965 1.25 0.902988 1.25 0.6875L4.25 0.6875ZM3.6093 -0.859296C3.19906 -1.26953 2.64266 -1.5 2.0625 -1.5L2.0625 1.5C1.84701 1.5 1.64035 1.4144 1.48798 1.26202L3.6093 -0.859296ZM2.0625 -1.5C1.48234 -1.5 0.925939 -1.26953 0.515704 -0.859296L2.63702 1.26202C2.48465 1.4144 2.27799 1.5 2.0625 1.5L2.0625 -1.5ZM0.515704 -0.859296C0.105468 -0.44906 -0.125 0.107339 -0.125 0.6875L2.875 0.6875C2.875 0.902988 2.7894 1.10965 2.63702 1.26202L0.515704 -0.859296ZM-0.125 0.6875V2.75H2.875V0.6875H-0.125ZM-0.125 2.75C-0.125 3.69483 0.250334 4.60097 0.918432 5.26907L3.03975 3.14775C2.93426 3.04226 2.875 2.89918 2.875 2.75L-0.125 2.75ZM0.918432 5.26907C1.58653 5.93717 2.49267 6.3125 3.4375 6.3125L3.4375 3.3125C3.28832 3.3125 3.14524 3.25324 3.03975 3.14775L0.918432 5.26907ZM3.4375 6.3125H5.5V3.3125H3.4375V6.3125ZM5.5 6.3125C6.08016 6.3125 6.63656 6.08203 7.04679 5.6718L4.92547 3.55047C5.07785 3.3981 5.28451 3.3125 5.5 3.3125V6.3125ZM7.04679 5.6718C7.45703 5.26156 7.6875 4.70516 7.6875 4.125H4.6875C4.6875 3.90951 4.7731 3.70285 4.92547 3.55047L7.04679 5.6718ZM7.6875 4.125C7.6875 3.54484 7.45703 2.98844 7.04679 2.5782L4.92547 4.69952C4.7731 4.54715 4.6875 4.34049 4.6875 4.125H7.6875ZM7.04679 2.5782C6.63656 2.16797 6.08016 1.9375 5.5 1.9375V4.9375C5.28451 4.9375 5.07785 4.8519 4.92547 4.69952L7.04679 2.5782ZM5.5 1.9375H3.4375V4.9375H5.5V1.9375ZM3.6574 1.95371C3.69345 1.95905 3.72914 1.96654 3.7643 1.97615L2.9732 4.86997C3.05357 4.89194 3.13518 4.90908 3.2176 4.92129L3.6574 1.95371ZM4.43318 4.47994C5.30873 3.59813 6.46319 3.04752 7.69949 2.92211L7.39672 -0.0625715C5.46924 0.132955 3.66936 0.991384 2.30432 2.36619L4.43318 4.47994ZM7.69949 2.92211C8.93579 2.7967 10.1773 3.10425 11.2121 3.79227L12.8731 1.29407C11.2598 0.221398 9.3242 -0.258098 7.39672 -0.0625715L7.69949 2.92211ZM11.2121 3.79227C12.2469 4.48029 13.0108 5.50613 13.3735 6.69468L16.2429 5.81912C15.6775 3.9661 14.4864 2.36674 12.8731 1.29407L11.2121 3.79227ZM13.3735 6.69468C13.7362 7.88323 13.6751 9.1608 13.2007 10.3093L15.9735 11.4546C16.7131 9.66398 16.8083 7.67215 16.2429 5.81912L13.3735 6.69468ZM13.2007 10.3093C12.7263 11.4579 11.868 12.4061 10.7723 12.9923L12.1874 15.6376C13.8957 14.7237 15.2339 13.2453 15.9735 11.4546L13.2007 10.3093ZM10.7723 12.9923C9.67657 13.5785 8.41138 13.7662 7.19268 13.5234L6.60656 16.4656C8.50661 16.8441 10.4791 16.5515 12.1874 15.6376L10.7723 12.9923ZM7.19268 13.5234C5.97398 13.2806 4.87731 12.6224 4.08987 11.6611L1.76908 13.5621C2.99675 15.0609 4.70652 16.0871 6.60656 16.4656L7.19268 13.5234ZM4.08987 11.6611C3.30244 10.6998 2.87305 9.495 2.875 8.25235L-0.124998 8.24764C-0.128039 10.185 0.54141 12.0634 1.76908 13.5621L4.08987 11.6611ZM2.875 8.25C2.875 7.66984 2.64453 7.11344 2.2343 6.7032L0.112976 8.82452C-0.0393977 8.67215 -0.125 8.46549 -0.125 8.25L2.875 8.25ZM2.2343 6.7032C1.82406 6.29297 1.26766 6.0625 0.6875 6.0625V9.0625C0.472011 9.0625 0.265348 8.9769 0.112976 8.82452L2.2343 6.7032ZM0.6875 6.0625C0.107338 6.0625 -0.449061 6.29297 -0.859296 6.7032L1.26202 8.82452C1.10965 8.9769 0.902989 9.0625 0.6875 9.0625V6.0625ZM-0.859296 6.7032C-1.26953 7.11344 -1.5 7.66984 -1.5 8.25L1.5 8.25C1.5 8.46549 1.4144 8.67215 1.26202 8.82452L-0.859296 6.7032ZM-1.5 8.25C-1.5 10.1784 -0.928173 12.0634 0.143171 13.6668L2.63758 12.0001C1.89588 10.8901 1.5 9.58502 1.5 8.25H-1.5ZM0.143171 13.6668C1.21451 15.2702 2.73726 16.5199 4.51884 17.2578L5.66689 14.4862C4.43348 13.9753 3.37928 13.1101 2.63758 12.0001L0.143171 13.6668ZM4.51884 17.2578C6.30041 17.9958 8.26081 18.1889 10.1521 17.8127L9.56686 14.8703C8.25749 15.1307 6.90029 14.9971 5.66689 14.4862L4.51884 17.2578ZM10.1521 17.8127C12.0434 17.4364 13.7807 16.5079 15.1443 15.1443L13.023 13.023C12.079 13.967 10.8762 14.6098 9.56686 14.8703L10.1521 17.8127ZM15.1443 15.1443C16.5079 13.7807 17.4364 12.0434 17.8127 10.1521L14.8703 9.56686C14.6098 10.8762 13.967 12.079 13.023 13.023L15.1443 15.1443ZM17.8127 10.1521C18.1889 8.26081 17.9958 6.30041 17.2578 4.51884L14.4862 5.66689C14.9971 6.90029 15.1307 8.25749 14.8703 9.56686L17.8127 10.1521ZM17.2578 4.51884C16.5199 2.73726 15.2702 1.21451 13.6668 0.143171L12.0001 2.63758C13.1101 3.37928 13.9753 4.43348 14.4862 5.66689L17.2578 4.51884ZM13.6668 0.143171C12.0634 -0.928173 10.1784 -1.5 8.25 -1.5L8.25 1.5C9.58502 1.5 10.8901 1.89588 12.0001 2.63758L13.6668 0.143171ZM9.75 0V0H6.75V0H9.75Z"
                    fill="#6A7D89"
                    mask="url(#path-2-inside-1_2_13)"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    Historique
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: "20px" }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  display: "flex",
                  fontFamily: "Poppins",
                  marginRight: "15px",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8.66007V7.34007C1.5 6.56007 2.1375 5.91507 2.925 5.91507C4.2825 5.91507 4.8375 4.95507 4.155 3.77757C3.765 3.10257 3.9975 2.22507 4.68 1.83507L5.9775 1.09257C6.57 0.740074 7.335 0.950074 7.6875 1.54257L7.77 1.68507C8.445 2.86257 9.555 2.86257 10.2375 1.68507L10.32 1.54257C10.6725 0.950074 11.4375 0.740074 12.03 1.09257L13.3275 1.83507C14.01 2.22507 14.2425 3.10257 13.8525 3.77757C13.17 4.95507 13.725 5.91507 15.0825 5.91507C15.8625 5.91507 16.5075 6.55257 16.5075 7.34007V8.66007C16.5075 9.44007 15.87 10.0851 15.0825 10.0851C13.725 10.0851 13.17 11.0451 13.8525 12.2226C14.2425 12.9051 14.01 13.7751 13.3275 14.1651L12.03 14.9076C11.4375 15.2601 10.6725 15.0501 10.32 14.4576L10.2375 14.3151C9.5625 13.1376 8.4525 13.1376 7.77 14.3151L7.6875 14.4576C7.335 15.0501 6.57 15.2601 5.9775 14.9076L4.68 14.1651C3.9975 13.7751 3.765 12.8976 4.155 12.2226C4.8375 11.0451 4.2825 10.0851 2.925 10.0851C2.1375 10.0851 1.5 9.44007 1.5 8.66007Z"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.25 10.5C10.4926 10.5 11.5 9.49264 11.5 8.25C11.5 7.00736 10.4926 6 9.25 6C8.00736 6 7 7.00736 7 8.25C7 9.49264 8.00736 10.5 9.25 10.5Z"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    Devis
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: "20px" }}>
            <div
              style={{
                width: "100%",
                padding: "10px 0px",
                textAlign: "center",
              }}
              className="underline"
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "26px",
                  display: "flex",
                  fontStyle: "normal",
                  color: "#000",
                }}
              >
                <svg
                  style={{ marginRight: "11px", marginLeft: "11px" }}
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.65779 2.25L4.835 1.751C4.85754 1.68754 4.88422 1.62592 4.91477 1.56651C4.80746 1.77615 4.75 2.01011 4.75 2.25H4.65779ZM9.165 1.751L9.34221 2.25H9.25C9.25 2.01011 9.19254 1.77615 9.08523 1.56651C9.11578 1.62592 9.14246 1.68754 9.165 1.751Z"
                    fill="#6A7D89"
                    stroke="#6A7D89"
                    stroke-width="1.5"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "0",
                    textAlign: "center",
                    transform: "translateY(-7px)",
                    color: "#6A7D89",
                  }}
                >
                  <a className="navlink" href="#">
                    Ordonnances
                  </a>
                </p>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          height: "4px",
          width: "95%",
          marginLeft: "20px",
          backgroundColor: "#ECF4F9",
          borderRadius: "20px",
        }}
      ></div>
      <Grid item>
        <Grid container>
          {/* for grid */}
          <Grid item md={8}>
            <Grid container direction="column">
              {/* SOINS */}
              <Grid item container style={{ marginLeft: "20px" }}>
                <p
                  style={{
                    borderRadius: 0,
                    color: "#2d2d2d",
                    marginTop: "40px",
                    marginLeft: "40px",
                    marginBottom: "40px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#0A2E47",
                  }}
                >
                  SOINS COURANTS
                </p>
              </Grid>
              {/* grid */}
              <Grid
                item
                style={{
                  border: "1px solid #E3EBF0",
                  borderRadius: "12px",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  paddingRight: "20px",
                  backgroundColor: "rgba(244, 248, 250, 0.5)",
                  marginLeft: "20px",
                  width: "1300px",
                }}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      {teethFamily.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell
                            className={classes.teethFamily}
                            component="th"
                            scope="row"
                          >
                            {row}
                          </TableCell>
                          {teethGroup1.map((n, i) => (
                            <TableCell
                              aria-owns={row + "-" + n}
                              aria-haspopup={true}
                              id={row + "-" + n}
                              style={{
                                backgroundColor: "rgba(244, 248, 250, 0.5)",
                                border: "1px solid #A5B3BC",
                                borderLeft: i === 0 ? 0 : "1px solid #2d2d2d",
                                borderRight:
                                  i === teethGroup1.length - 1
                                    ? 0
                                    : "1px solid #2d2d2d",
                                cursor: "pointer",
                                padding: 0,
                                background: teethFamilyDone.includes(
                                  row + "-" + n
                                )
                                  ? "#8FCC6B"
                                  : teethFamilyInProgress.includes(
                                    row + "-" + n
                                  )
                                    ? "#9CCCEF"
                                    : "#fff",
                              }}
                              onClick={(e) => {
                                if (selectedFamily.includes(row + "-" + n)) {
                                  // setSelectedFamily((f) =>
                                  //   f.filter((el) => el !== row + '-' + n)
                                  // );
                                  setSelectFamilyPopup({
                                    active: e.currentTarget,
                                    family: row,
                                    cell: n,
                                  });
                                } else {
                                  // setSelectedFamily((f) => [
                                  //   ...f,
                                  //   row + '-' + n,
                                  // ]);
                                  setSelectFamilyPopup({
                                    active: e.currentTarget,
                                    family: row,
                                    cell: n,
                                  });
                                }
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                {selectedFamily.includes(row + "-" + n) ? (
                                  <img
                                    src={ExtractImage}
                                    style={{ width: "40px", height: "100%" }}
                                  />
                                ) : (
                                  <div
                                    style={{ width: "40px", height: "40px" }}
                                  ></div>
                                )}
                              </div>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell style={{ border: 0 }}></TableCell>
                        {teethGroup1.map((n) => (
                          <TableCell
                            className={classes.teethFamily}
                          >
                            {n}
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                      <TableCell style={{ border: 0 }}></TableCell>
                        {teethGroup1.map((chrome) => (
                          <TableCell
                            style={{
                              borderBottom: "0px",
                              marginBottom: "10px",
                            }}
                          >
                            <a 
                            onClick={() => {
                              if (!removedTooth.includes(chrome)) {
                                setRemoveToothAlert({
                                  active: true,
                                  number:chrome,
                                  color: 'gray',
                                });
                              }
                            }}
                            style={{
                              cursor:'pointer'
                            }}
                            >
                              <svg
                                style={{ marginLeft: "10px" }}
                                width="30"
                                height="30"
                                viewBox="0 0 30 28"
                                fill={removedTooth.includes(chrome)?`${removeToothAlert.color}`:'white'}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M29.3238 13.9668C29.3238 21.4338 23.0308 27.5139 15.234 27.5139C7.43716 27.5139 1.1441 21.4338 1.1441 13.9668C1.1441 6.49987 7.43716 0.419732 15.234 0.419732C23.0308 0.419732 29.3238 6.49987 29.3238 13.9668Z"
                                  fill={removedTooth.includes(chrome)?`${removeToothAlert.color}`:'white'}
                                  stroke="#8A9AA4"
                                  stroke-width="0.837022"
                                />
                                <path
                                  d="M20.3994 13.9656C20.3994 16.8344 17.9787 19.187 14.9588 19.187C11.9388 19.187 9.51812 16.8344 9.51812 13.9656C9.51812 11.0968 11.9388 8.74414 14.9588 8.74414C17.9787 8.74414 20.3994 11.0968 20.3994 13.9656Z"
                                  fill={removedTooth.includes(chrome)?`${removeToothAlert.color}`:'white'}
                                  stroke="#8A9AA4"
                                  stroke-width="0.837022"
                                />
                                <path
                                  d="M25.1412 4.70015L19.1426 10.2058"
                                  stroke="#8A9AA4"
                                  stroke-width="0.837022"
                                />
                                <path
                                  d="M11.1901 17.9943L5.19141 23.5"
                                  stroke="#8A9AA4"
                                  stroke-width="0.837022"
                                />
                                <path
                                  d="M24.6056 23.4999L18.8634 17.7465"
                                  stroke="#8A9AA4"
                                  stroke-width="0.837022"
                                />
                                <path
                                  d="M10.9344 10.3401L5.19267 4.58717"
                                  stroke="#8A9AA4"
                                  stroke-width="0.837022"
                                />
                              </svg>
                            </a>
                          </TableCell>
                        ))}
                      </TableRow>
                      <p
                        style={{
                          fontSize: "11px",
                          textAlign: "center",
                        }}
                      >
                        PIVOT
                      </p>
                      <TableRow>
                        <p></p>
                        {teethGroup1.map((chrome) => (
                          <TableCell style={{ borderBottom: "0px" }}>
                            <svg
                              width="30"
                              style={{ marginLeft: "10px" }}
                              height="30"
                              viewBox="0 0 30 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M29.3238 13.9668C29.3238 21.4338 23.0308 27.5139 15.234 27.5139C7.43716 27.5139 1.1441 21.4338 1.1441 13.9668C1.1441 6.49987 7.43716 0.419732 15.234 0.419732C23.0308 0.419732 29.3238 6.49987 29.3238 13.9668Z"
                                fill="white"
                                stroke="#8A9AA4"
                                stroke-width="0.837022"
                              />
                              <path
                                d="M20.3994 13.9656C20.3994 16.8344 17.9787 19.187 14.9588 19.187C11.9388 19.187 9.51812 16.8344 9.51812 13.9656C9.51812 11.0968 11.9388 8.74414 14.9588 8.74414C17.9787 8.74414 20.3994 11.0968 20.3994 13.9656Z"
                                fill="white"
                                stroke="#8A9AA4"
                                stroke-width="0.837022"
                              />
                              <path
                                d="M25.1412 4.70015L19.1426 10.2058"
                                stroke="#8A9AA4"
                                stroke-width="0.837022"
                              />
                              <path
                                d="M11.1901 17.9943L5.19141 23.5"
                                stroke="#8A9AA4"
                                stroke-width="0.837022"
                              />
                              <path
                                d="M24.6056 23.4999L18.8634 17.7465"
                                stroke="#8A9AA4"
                                stroke-width="0.837022"
                              />
                              <path
                                d="M10.9344 10.3401L5.19267 4.58717"
                                stroke="#8A9AA4"
                                stroke-width="0.837022"
                              />
                            </svg>
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ border: 0 }}></TableCell>
                        {teethGroup2.map((n) => (
                          <TableCell
                            onClick={() =>
                              setRemoveToothAlert({
                                active: true,
                                number: n,
                              })
                            }
                            style={{
                              visibility: removedTooth.includes(n)
                                ? "hidden"
                                : "visible",
                            }}
                            className={classes.teethFamily}
                          >
                            {n}
                          </TableCell>
                        ))}
                      </TableRow>
                      {teethFamily1.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell
                            className={classes.teethFamily}
                            component="th"
                            scope="row"
                          >
                            {row}
                          </TableCell>
                          {teethGroup2.map((n, i) => (
                            <TableCell
                              aria-owns={row + "-" + n}
                              aria-haspopup={true}
                              id={row + "-" + n}
                              style={{
                                backgroundColor: "rgba(244, 248, 250, 0.5)",
                                border: "1px solid #A5B3BC",
                                borderLeft: i === 0 ? 0 : "1px solid #2d2d2d",
                                borderRight:
                                  i === teethGroup2.length - 1
                                    ? 0
                                    : "1px solid #2d2d2d",
                                cursor: "pointer",
                                padding: 0,
                                background: teethFamilyDone.includes(
                                  row + "-" + n
                                )
                                  ? "#8FCC6B"
                                  : teethFamilyInProgress.includes(
                                    row + "-" + n
                                  )
                                    ? "#9CCCEF"
                                    : "#fff",
                              }}
                              onClick={(e) => {
                                if (selectedFamily.includes(row + "-" + n)) {
                                  // setSelectedFamily((f) =>
                                  //   f.filter((el) => el === row + '-' + n)
                                  // );
                                  setSelectFamilyPopup({
                                    active: e.currentTarget,
                                    family: row,
                                    cell: n,
                                  });
                                } else {
                                  // setSelectedFamily((f) => [
                                  //   ...f,
                                  //   row + '-' + n,
                                  // ]);
                                  setSelectFamilyPopup({
                                    active: e.currentTarget,
                                    family: row,
                                    cell: n,
                                  });
                                }
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                {selectedFamily.includes(row + "-" + n) ? (
                                  <img
                                    src={ExtractImage}
                                    style={{ width: "40px", height: "100%" }}
                                  />
                                ) : (
                                  <div
                                    style={{ width: "40px", height: "40px" }}
                                  ></div>
                                )}
                              </div>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
          {/* for solde */}
          <Grid item md={4}>
            <img
              width="349px"
              height="417px"
              style={{
                marginLeft: "35%",
                marginTop: "32%",
                border: "1px solid #E3EBF0",
                borderRadius: "12px",
              }}
              src={require("../../images/imagedoc.png").default}
            ></img>
          </Grid>
        </Grid>
      </Grid>
      {/* 2 tables */}
      <Grid item style={{ marginTop: "1em" }}>
        {/* Overall container */}
        <Grid container>
          <Grid item md={6} xs={12} style={{ padding: "30px 14px 100px 40px" }}>
            <Grid container direction="column">
              <CardComp />
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} style={{ padding: "30px 40px 100px 14px" }}>
            <CardSt />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
