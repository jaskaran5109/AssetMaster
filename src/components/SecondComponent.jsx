import React, { useState } from "react";
import "./FirstComponent.css";

import dayjs from "dayjs";
// import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Axios from 'axios';
import { AiOutlineClose, AiOutlineFileJpg } from "react-icons/ai";
import { BsFiletypePng, BsFiletypeCsv } from "react-icons/bs";
import { ImFilePdf } from "react-icons/im";



import {
  BsFileEarmarkRichtext,
  BsFillPlusCircleFill,
  BsFillCalendar2EventFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
//import tablee from "./tablee";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  Menu,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  IconButton,

} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import { array } from "prop-types";

const itemTypes = ["Consumable", "Non-Consumable"];
const departmentItems = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "HeadPhones",
  "Mobile Phone",
  "Monitor",
  "Printer",
];
const subItems = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "HeadPhones",
  "Mobile Phone",
  "Monitor",
  "Printer",
];
const documentItems = ["In-Voice", "Office Order", "Email", "Others"];

const SecondComponent = ({
  handleClear,
  active, setActive,
  files,
  setFiles,
  handleFinalSubmit,
  itemType,
  item,
  subItem,
  model,
  serialNo,
  brand,
  poNum,
  assignedDate,
  setitemType,
  setItem,
  setSubItem,
  setModel,
  setSerialNo,
  setBrand,
  setPoNum,
  setAssignedDate,
}) => {


  const openSecondFile = () => {
    document.getElementById("files").click();
  };
  const changeMultipleFiles = (e) => {
    setFiles(e.target.files);
  };
  const handleFileRemove = (index) => {
    setFiles(Array.from(files).filter((file, i) => i !== index));
  };

  function formatFileSize(bytes,decimalPoint) {
    if(bytes == 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }



  return (

    <div className="drawer-container">
      <div className="content">
        <form onSubmit={handleFinalSubmit}>
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} >
                <FormLabel className="firstFo" htmlFor="itemType">
                  Item Type
                </FormLabel>
                <ItemTypeBoxComponent
                  itemTypes={itemTypes}
                  itemType={itemType}
                  setitemType={setitemType}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="item">
                  Item
                </FormLabel>
                <ItemTypeBoxComponent
                  itemTypes={departmentItems}
                  itemType={item}
                  setitemType={setItem}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="subitem">
                  Sub-Item
                </FormLabel>
                <ItemTypeBoxComponent
                  itemTypes={subItems}
                  itemType={subItem}
                  setitemType={setSubItem}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="model">
                  Model
                </FormLabel>
                <input
                  className="form-input"
                  id="model"
                  type="text"
                  placeholder="Enter Model Name"
                  _placeholder={{ color: "#80848C" }}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="serialNo">
                  Serial No.
                </FormLabel>
                <input
                  className="form-input"
                  id="serialNo"
                  type="text"
                  placeholder="Enter the Serail No"
                  _placeholder={{ color: "#80848C" }}
                  value={serialNo}
                  onChange={(e) => setSerialNo(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="brand">
                  Brand
                </FormLabel>
                <input
                  className="form-input"
                  id="brand"
                  type="text"
                  placeholder="Enter Brand Name"
                  _placeholder={{ color: "#80848C" }}
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="poNum">
                  Purchase Order No.
                </FormLabel>
                <input
                  className="form-input"
                  id="poNum"
                  type="text"
                  placeholder="Enter Purchase Order No."
                  _placeholder={{ color: "#80848C" }}
                  value={poNum}
                  onChange={(e) => setPoNum(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                <FormLabel className="firstFo" htmlFor="serialNo">
                  Warranty Date
                </FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="form-input-calendar"
                    components={{
                      OpenPickerIcon: BsFillCalendar2EventFill,
                    }}
                    renderInput={(params) => (
                      <TextField {...params} error={false} />
                    )}
                    format="DD-MM-YYYY"
                    value={assignedDate || null}
                    onChange={(newValue) => setAssignedDate(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                <FormLabel className="firstFo" htmlFor="isactive">Is Active</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                  style={{ width: 'auto' }}
                  row={true}
                >
                  <FormControlLabel value={true} control={<Radio />} label="Yes"
                  />
                  <FormControlLabel value={false} control={<Radio />} label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            {/* </Grid> */}
            <Grid container spacing={4} marginTop="0px !important">

              <Grid item xs={12} sm={6} >
                <FormLabel className="firstFo" htmlFor="files">
                  Upload Documents
                </FormLabel>

                <input
                  className="form-input"
                  type="file"
                  accept=".xls,.xlsx,.csv,.jpg,.png,.svg,.docx,.txt,.zip,.pdf"
                  id="files"
                  multiple
                  style={{ display: "none" }}
                  onChange={changeMultipleFiles}
                />
                <Button
                  variant="outlined"
                  className="form-document-upload"
                  onClick={openSecondFile}

                >
                  <BsFileEarmarkRichtext
                    style={{ fontSize: "30px", color: "#6B5DD3" }}
                  />
                  <BsFillPlusCircleFill
                    style={{
                      marginTop: "20px",
                      marginLeft: "-2%",
                      fontSize: "12px",
                      color: "#6B5DD3",
                    }}
                  />
                  <div style={{ diplay: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Upload Excel, PDF and Image only File
                    </p>
                  </div>
                </Button>

              </Grid>

            </Grid>

            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                {Array.from(files).map((file, index) => {
                  return <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid lightgray", marginBottom: "10px" }}>
                    <div style={{ display: "flex", background: "linear-gradient(270deg, #D9F0E4 0%, rgba(238, 246, 242, 0.09) 95.13%)", flex: "0.8",alignItems:"center" }}>
                      {file.name.substring(file.name.lastIndexOf('.') + 1) === "jpg" && <AiOutlineFileJpg size={'30px'} style={{ marginRight: "10px",padding:"12px" }} />}
                      {file.name.substring(file.name.lastIndexOf('.') + 1) === "pdf" && <ImFilePdf size={'30px'} style={{ marginRight: "10px",padding:"12px" }} />}
                      {file.name.substring(file.name.lastIndexOf('.') + 1) === "csv" && <BsFiletypeCsv size={'30px'} style={{ marginRight: "10px",padding:"12px" }} />}
                      {file.name.substring(file.name.lastIndexOf('.') + 1) === "png" && <BsFiletypePng size={'30px'} style={{ marginRight: "10px",padding:"12px" }} />}

                      <div>
                        <p style={{ fontSize: "12px" }}>{file.name}</p>
                        <p style={{ fontSize: "10px", marginTop: "5px" }}>Size : {`${formatFileSize(file.size)}`} |</p>
                      </div>
                    </div>
                    <div style={{ flex: "0.2",textAlign:"center" }}>
                      <IconButton
                        onClick={() => handleFileRemove(index)}
                        size="small"
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>
                }

                )}
              </Grid>
            </Grid>
            <Box className="form-button">
              {/* <Button 
                 variant="solid"
                 style={{
                   backgroundColor: "#6B5DD3",
                   color: "#FFFFFF",
                   width: "100px",
                   border: "1px solid #BABEC6",
                   marginBottom: "15px",
                   marginRight:"10px"
                 }}
              >
               Display
              </Button> */}
              <Button
                variant="outline"
                style={{
                  backgroundColor: "#F5F3FB",
                  color: "#80848C",
                  width: "100px",
                  border: "1px solid #BABEC6",
                  marginRight: "10px",
                  marginBottom: "15px",
                }}
                onClick={handleClear}
              >
                Add
              </Button>
              <Button
                variant="outline"
                style={{
                  backgroundColor: "#F5F3FB",
                  color: "#80848C",
                  width: "100px",
                  border: "1px solid #BABEC6",
                  marginRight: "10px",
                  marginBottom: "15px",
                }}
                onClick={handleClear}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="solid"

                style={{
                  backgroundColor: "#6B5DD3",
                  color: "#FFFFFF",
                  width: "100px",
                  border: "1px solid #BABEC6",
                  marginBottom: "15px",
                }}



              >
                Save
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondComponent;

const ItemTypeBoxComponent = ({ itemTypes, itemType, setitemType }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        className="form-input"
        variant="outllined"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<BsFillCaretDownFill style={{ color: "#6B5DD3" }} />}
      >
        {itemType ? itemType : "Select Item"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ textAlign: "left", borderRadius: "20px" }}
      >
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          style={{ padding: "10px", fontWeight: "600", color: "black" }}
        >
          Select Item
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={itemType}
          onChange={(e) => setitemType(e.target.value)}
          style={{ padding: "10px" }}
        >
          {itemTypes.map((itemType) => {
            return (
              <FormControlLabel
                key={itemType}
                value={itemType}
                control={<Radio />}
                label={itemType}
                onClick={handleClose}
              >
                {itemType}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};
