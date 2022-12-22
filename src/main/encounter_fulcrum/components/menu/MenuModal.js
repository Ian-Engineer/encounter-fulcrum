import { Typography } from "@mui/material";
import utils from "../../../../utils";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import ModalTable from "./ModalTable";

const MenuModal = ({ list, handleSave, handleCancel, title }) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [submitFailed, setSubmitFailed] = useState(false);
  const [errorText, setErrorText] = useState("Submission Failed");

  const handleAdd = () => {
    // check if name and weight are inputted
    if (name.length === 0 && (typeof weight !== "number" || weight < 1)) {
      setSubmitFailed(true);
      if (typeof weight !== "number") {
        setErrorText("Weight must be a number");
      } else {
        setErrorText("Name and weight required");
      }
      return;
    }
    // check if name is already in use
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
        setSubmitFailed(true);
        setErrorText("Name already in use");
        return;
      }
    }
    setSubmitFailed(false);
    // copy current list and add new one
    const tempList = [...list, { name, weight }];
    // set new list
    handleSave(tempList);
    setName("");
    setWeight("");
  };

  const handleEdit = ({ name, weight, index }) => {
    // copy current list and add new one
    const tempList = [...list];
    tempList.splice(index, 1, { name, weight });
    // set new list
    handleSave(tempList);
  };

  const handleDelete = ({ name, index }) => {
    // find location of name
    if (list[index].name !== name) {
      // iterate through list to find name
      for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) {
          index = i;
          break;
        }
      }
    }
    // copy list
    const tempList = [...list];
    // remove name from list
    tempList.splice(index, 1);
    // set new list
    handleSave(tempList);
  };

  return (
    <div className="flex flex-col justify-center m-5 h-5/6">
      <Typography className="flex justify-center" variant="h3">
        {utils.capitalizeFirstLetter(title)}
      </Typography>
      <hr className="mb-5 mt-0 w-full" />
      <div className="m-5">
        <div>{`Load ${title}:`}</div>
        <div className="flex flex-row">
          <TextField
            className="w-full flex item-center m-2"
            label={"name"}
            onChange={(e) => setName(e.target.value)}
            error={name.length < 1 && submitFailed}
            value={name}
            required={true}
            type={"string"}
          />
          <TextField
            className="w-full flex item-center m-2"
            label={"weight"}
            onChange={(e) => setWeight(e.target.value)}
            error={weight < 1 && submitFailed}
            value={weight}
            required={true}
            type={"number"}
          />
          <Button variant="contained" className="m-2" onClick={handleAdd}>
            Add
          </Button>
        </div>
        {submitFailed ? <div className="text-red-500">{errorText}</div> : null}
      </div>
      <div className="m-5">
        {utils.capitalizeFirstLetter(title)} list:
        <ModalTable
          title={title}
          list={list}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <div className="flex flex-row justify-evenly">
        <Button variant="contained" onClick={handleCancel}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default MenuModal;
