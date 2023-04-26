import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "./App.css";
//import FirstComponent from './components/FirstComponent';
import SecondComponent from "./components/SecondComponent";
import { Route, Routes } from "react-router-dom";
import BasicTable from "./components/BasicTable";
import moment from "moment";

const steps = ["1", "2"];

function App() {
  const [showTable, setShowTable] = useState(false);
  const handleButtonClick = () => {
    setShowTable(!showTable);
  };
  const [activeStep, setActiveStep] = useState(0);
  const [state, setState] = useState({
    right: false,
  });
  const completedSteps = () => {
    return Object.keys(steps).length;
  };
  const isLastStep = () => {
    return activeStep === 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === 2;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in steps))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [employeeID, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState("");
  const [itemType, setitemType] = useState("");
  const [item, setItem] = useState("");
  const [subItem, setSubItem] = useState("");
  const [model, setModel] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [brand, setBrand] = useState("");
  const [poNum, setPoNum] = useState("");
  const [assignedDate, setAssignedDate] = useState("");
  const [documents, setDocuments] = useState(null);
  const [files, setFiles] = useState([]);
  const [active, setActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };
  const handleClear = (e) => {
    e.preventDefault();
    setitemType("");
    setItem("");
    setSubItem("");
    setModel("");
    setSerialNo("");
    setBrand("");
    setPoNum("");
    setAssignedDate("");
    setDocuments(null);
    setFiles(null);
  };
  const allData = () => {
    let datas = {
      id: 0,
      itemType: itemType,
      itemName: item,
      subItemName: subItem,
      model: model,
      serialno: serialNo,
      brand: brand,
      pono: poNum,
      warrantydate: moment(assignedDate).format("YYYY-MM-DD"),
      isActive: active === true ? true : false,
    };
    fetch("https://localhost:7198/api/Employees/AddAssetMasters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log(
      itemType,
      item,
      subItem,
      model,
      serialNo,
      brand,
      poNum,
      assignedDate,
      active,
      files
    );
    // allData();
  };

  return (
    <div className="App">
      <Button onClick={toggleDrawer("right", true)}>{"right"}</Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        PaperProps={{
          sx: { width: "60%" },
        }}
      >
        {/* {activeStep === 0 && <FirstComponent toggleDrawer={toggleDrawer("right", false)} handleSubmit={handleSubmit} firstName={firstName} lastName={lastName} phoneNo={phoneNo}
          employeeID={employeeID} email={email} department={department} profession={profession} image={image} setImage={setImage}
          setFirstName={setFirstName} setLastName={setLastName} setPhoneNo={setPhoneNo} setEmployeeId={setEmployeeId} setEmail={setEmail} setDepartment={setDepartment} setProfession={setProfession} />} */}
        {activeStep === 0 && (
          <SecondComponent
            toggleDrawer={toggleDrawer("right", false)}
            handleClear={handleClear}
            handleFinalSubmit={handleFinalSubmit}
            firstName={firstName}
            lastName={lastName}
            employeeID={employeeID}
            itemType={itemType}
            item={item}
            subItem={subItem}
            model={model}
            serialNo={serialNo}
            brand={brand}
            poNum={poNum}
            assignedDate={assignedDate}
            documents={documents}
            setitemType={setitemType}
            setItem={setItem}
            active={active}
            files={files}
            setFiles={setFiles}
            setActive={setActive}
            setSubItem={setSubItem}
            setModel={setModel}
            setSerialNo={setSerialNo}
            setBrand={setBrand}
            setPoNum={setPoNum}
            setAssignedDate={setAssignedDate}
            setDocuments={setDocuments}
          />
        )}
      </Drawer>
      <br />
      {/* <Button onClick={<BasicTable/>}>Hello</Button> */}
      <button onClick={handleButtonClick}>
        {showTable ? "Hide Table" : "Show Table"}
      </button>
      {showTable && <BasicTable />}
    </div>
  );
}

export default App;
