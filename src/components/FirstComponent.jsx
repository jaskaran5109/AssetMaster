import React from "react";
import "./FirstComponent.css";
import {
  AiOutlineClose,
  AiOutlineCloudUpload,
  AiFillCaretDown,
  AiOutlineRight,
} from "react-icons/ai";
import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Menu,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import {
  BsFileEarmarkRichtext,
  BsFillPlusCircleFill,
  BsFillCalendar2EventFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

const departmentItems = [
  "Information Technology",
  "Finance",
  "Account & Finance",
  "Trip Support Services",
  "Operations",
  "Human Resources",
];
const employeeProfession = [
  "UI UX Designer",
  "Graphic Designer",
  "React Software Developer",
  "Backend Developer",
  "Technical Lead",
  "Human Resources",
];

const FirstComponent = ({
  toggleDrawer,
  handleSubmit,
  firstName,
  lastName,
  phoneNo,
  employeeID,
  email,
  department,
  profession,
  setFirstName,
  setLastName,
  setPhoneNo,
  setEmployeeId,
  setEmail,
  setDepartment,
  setProfession,
  image,
  setImage,
}) => {
  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setImage(file);
    }
  };
  const openFile = () => {
    document.getElementById("upload").click();
  };

  return (
    <div className="drawer-container">
      <div className="header">
        <AiOutlineClose className="close-icon" onClick={toggleDrawer} />
        <div className="sub-header">
          <p>Add Asset</p>
          <p>Asset ID : 123456</p>
        </div>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <Box>
            <input
              type="file"
              name=""
              onChange={handleChange}
              id="upload"
              accept="image/*"
              style={{ display: "none" }}
            />
            <Avatar src={image} className="avatar-icon" onClick={openFile} />
            <AiOutlineCloudUpload className="avatar-upload-icon" />
          </Box>
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={4} marginTop="20px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="firstname">
                  First Name
                </FormLabel>
                <input
                  className="form-input"
                  id="firstname"
                  type="text"
                  placeholder="Enter the First Name"
                  _placeholder={{ color: "#80848C" }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="LastName">
                  Last Name
                </FormLabel>
                <input
                  className="form-input"
                  id="LastName"
                  _placeholder={{ color: "#80848C" }}
                  placeholder="Enter the Last Name"
                  value={lastName}
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="phoneNo">
                  Phone Number
                </FormLabel>
                <input
                  className="form-input"
                  id="phoneNo"
                  type="number"
                  placeholder="Enter Number"
                  _placeholder={{ color: "#80848C" }}
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel className="firstFo" htmlFor="employeeID">
                  Employee ID
                </FormLabel>
                <input
                  className="form-input"
                  id="employeeID"
                  type="text"
                  _placeholder={{ color: "#80848C" }}
                  placeholder="Enter Employee ID"
                  value={employeeID}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                <FormLabel className="firstFo" htmlFor="emailId">
                  Email ID
                </FormLabel>
                <input
                  className="form-input"
                  id="emailID"
                  type="email"
                  placeholder="Enter the Email ID"
                  _placeholder={{ color: "#80848C" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                <FormLabel className="firstFo" htmlFor="department">
                  Department
                </FormLabel>
                <DepartmentBoxComponent
                  departmentItems={departmentItems}
                  department={department}
                  setDepartment={setDepartment}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} marginTop="0px !important">
              <Grid item xs={12}>
                <FormLabel className="firstFo" htmlFor="profession">
                  Profession
                </FormLabel>
                <ProfessionBoxComponent
                  employeeProfession={employeeProfession}
                  profession={profession}
                  setProfession={setProfession}
                />
              </Grid>
            </Grid>
            <Box className="form-button">
              <Button
                type="submit"
                endIcon={<AiOutlineRight className="icon-button" />}
              >
                <div className="Next">Next</div>
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstComponent;

const DepartmentBoxComponent = ({
  departmentItems,
  department,
  setDepartment,
}) => {
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
        {department ? department : "Select Department"}
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
          Select Department
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={{ padding: "10px" }}
        >
          {departmentItems.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio />}
                label={item}
                onClick={handleClose}
              >
                {item}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};

const ProfessionBoxComponent = ({
  employeeProfession,
  profession,
  setProfession,
}) => {
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
        {profession ? profession : "Select Profession"}
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
          Select Employee Profession
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          style={{ padding: "10px" }}
        >
          {employeeProfession.map((item) => {
            return (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio />}
                label={item}
                onClick={handleClose}
              >
                {item}
              </FormControlLabel>
            );
          })}
        </RadioGroup>
      </Menu>
    </div>
  );
};
