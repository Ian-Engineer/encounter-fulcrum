import { Typography } from "@mui/material";
import TextField from "@mui/material";
import Autocomplete from "@mui/material";
import { Component, useEffect, useState } from "react";
import MenuInput from "./MenuInput";
import MenuDropDown from "./MenuDropdown";
import MenuButton from "./MenuButton";
import Wrapper from "../../components/Wrapper";

const FulcrumMenu = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [centerTolerance, setCenterTolerance] = useState("");
  const [extremeDifference, setExtremeDifference] = useState("");
  const [maxRounds, setMaxRounds] = useState("");
  const [loadCharacters, setLoadCharacters] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [loadBaddies, setLoadBaddies] = useState(false);
  const [baddies, setBaddies] = useState([]);
  const [loadItems, setLoadItems] = useState(false);
  const [items, setItems] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  const onSubmit = () => {};

  const inputs = [
    {
      name: "length",
      component: (
        <MenuInput
          type={"number"}
          description={"length"}
          value={length}
          required={true}
          error={length > 0 && submitFailed ? true : false}
          handleChange={(input) => setLength(input)}
        />
      ),
    },
    {
      name: "width",
      component: (
        <MenuInput
          type={"number"}
          description={"width"}
          value={width}
          required={true}
          error={width > 0 && submitFailed ? true : false}
          handleChange={(input) => setWidth(input)}
        />
      ),
    },
    {
      name: "centerTolerance",
      component: (
        <MenuInput
          type={"number"}
          description={"center tolerance"}
          value={centerTolerance}
          required={true}
          error={centerTolerance >= 0 && submitFailed ? true : false}
          handleChange={(input) => setCenterTolerance(input)}
        />
      ),
    },
    {
      name: "extremeDifference",
      component: (
        <MenuInput
          type={"number"}
          description={"extreme difference"}
          value={extremeDifference}
          required={true}
          error={extremeDifference > 0 && submitFailed ? true : false}
          handleChange={(input) => setExtremeDifference(input)}
        />
      ),
    },
    {
      name: "maxRounds",
      component: (
        <MenuInput
          type={"number"}
          description={"max rounds"}
          value={maxRounds}
          required={true}
          error={maxRounds > 0 && submitFailed ? true : false}
          handleChange={setMaxRounds}
        />
      ),
    },
    {
      name: "loadCharacters",
      component: (
        <MenuButton
          description={"Load Characters"}
          open={loadCharacters}
          handleChange={setLoadCharacters}
          modal={<div>hello</div>}
        />
      ),
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="w-2/5 flex flex-col items-center m-5 border-2">
      <Typography variant="h3">Menu</Typography>
      <hr className="mb-5 mt-0 w-5/6" />
      <div className="w-5/6">
        {inputs.map((parameters) => {
          return (
            <Wrapper component={parameters.component} key={parameters.name} />
          );
        })}
      </div>
    </div>
  );
};

export default FulcrumMenu;
