import { Typography } from "@mui/material";
import utils from "../../../../utils";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const MenuModal = ({ list, handleSave, handleCancel, title }) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [submitFailed, setSubmitFailed] = useState(false);

  const columns = [
    { field: "name", headerName: "Name", width: 70 },
    { field: "weight", headerName: "Weight", width: 130 },
  ];

  const handleAdd = () => {
    // check if name and weight are inputted
    // check if name is already in use
    // copy current list and add new one
    // set new list
  };

  const handleDelete = () => {
    // copy list
    // find location of name
    // remove name from list
    // set new list
  };

  return (
    <div className="flex flex-col justify-center m-5">
      <Typography variant="h3">{utils.capitalizeFirstLetter(title)}</Typography>
      <hr className="mb-5 mt-0 w-5/6" />
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
          type={"string"}
        />
        <Button variant="contained" className="m-2" onClick={handleAdd}>
          Add
        </Button>
      </div>
      {utils.capitalizeFirstLetter(title)} list:
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <div className="flex flex-row justify-evenly">
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default MenuModal;
