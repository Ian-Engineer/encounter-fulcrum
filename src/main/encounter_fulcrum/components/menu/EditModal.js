import { Button, Dialog, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const EditModal = ({
  handleChange,
  handleEdit,
  list,
  open,
  name,
  weight,
  index,
}) => {
  const [submitFailed, setSubmitFailed] = useState(false);
  const [editName, setEditName] = useState("");
  const [editWeight, setEditWeight] = useState(0);
  const [errorText, setErrorText] = useState("Submission failed");

  const handleSubmit = () => {
    // check if name and weight are inputted
    if (
      editName.length === 0 &&
      (typeof editWeight !== "number" || editWeight < 1)
    ) {
      setSubmitFailed(true);
      if (typeof editWeight !== "number") {
        setErrorText("Weight must be a number");
      } else {
        setErrorText("Name and weight required");
      }
      return;
    }
    // check if name is already in use
    debugger;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name && i !== index) {
        setSubmitFailed(true);
        setErrorText("Name already in use");
        return;
      }
    }
    setSubmitFailed(false);
    handleEdit({ name: editName, weight: editWeight, index });
    handleChange(false);
  };

  useEffect(() => {
    setEditName(name);
    setEditWeight(weight);
  }, [name, weight]);

  return (
    <Dialog onClose={() => handleChange(false)} open={open}>
      <div className="flex flex-col justify-center m-5 h-5/6">
        <Typography className="flex justify-center" variant="h3">
          Edit {name}
        </Typography>
        <hr className="mb-5 mt-0 w-full" />
        <div className="flex flex-row m-2">
          <TextField
            className="w-full flex item-center m-2"
            label={"name"}
            onChange={(e) => setEditName(e.target.value)}
            error={editName.length < 1 && submitFailed}
            value={editName}
            required={true}
            type={"string"}
          />
          <TextField
            className="w-full flex item-center m-2"
            label={"weight"}
            onChange={(e) => setEditWeight(e.target.value)}
            error={editWeight < 1 && submitFailed}
            value={editWeight}
            required={true}
            type={"number"}
          />
        </div>
        {submitFailed ? <div className="text-red-500">{errorText}</div> : null}
        <div className="flex flex-row justify-evenly m-5">
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="contained" onClick={() => handleChange(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default EditModal;
