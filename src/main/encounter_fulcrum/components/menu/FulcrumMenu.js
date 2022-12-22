import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MenuInput from "./MenuInput";
import MenuButton from "./MenuButton";
import MenuModal from "./MenuModal";
import Wrapper from "../../../components/Wrapper";
import { setData, setBattleMap } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const FulcrumMenu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fulcrum.data);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [centerTolerance, setCenterTolerance] = useState("");
  const [inertia, setInertia] = useState("");
  const [loadCharacters, setLoadCharacters] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [loadBaddies, setLoadBaddies] = useState(false);
  const [baddies, setBaddies] = useState([]);
  const [loadItems, setLoadItems] = useState(false);
  const [items, setItems] = useState([]);
  const [submitFailed, setSubmitFailed] = useState(false);

  const onSubmit = () => {
    // verify all inputs
    const verificationArray = [length > 0, width > 0, centerTolerance > 0];
    // iterate and find issue
    for (let i = 0; i < verificationArray.length; i++) {
      if (!verificationArray[i]) {
        setSubmitFailed(true);
        return;
      }
    }
    // create the new data
    const tempData = { ...data };
    tempData.length = Number(length);
    tempData.width = Number(width);
    tempData.centerTolerance = Number(centerTolerance);
    tempData.inertia = Number(inertia);
    tempData.characters = characters;
    tempData.baddies = baddies;
    tempData.items = items;
    // set failed submit and return
    setSubmitFailed(false);
    dispatch(setData(tempData));
    dispatch(
      setBattleMap(
        Array(Number(width)).fill(
          Array(Number(length)).fill({
            name: "",
            weight: 0,
            color: "slate-200",
            empty: true,
            inPlay: true,
          })
        )
      )
    );
  };

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
          tooltip={"Length of battlemap (horizontal)"}
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
          tooltip={"Width of battlemap (vertical)"}
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
          tooltip={"Weight difference that is ignored to keep equilibrium"}
        />
      ),
    },
    {
      name: "inertia",
      component: (
        <MenuInput
          type={"number"}
          description={"inertia"}
          value={inertia}
          required={true}
          error={inertia > 0 && submitFailed ? true : false}
          handleChange={setInertia}
          tooltip={"A percentage. 0 is slow falling, 100 is falling quickly."}
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
          modal={
            <MenuModal
              list={characters}
              handleSave={(characters) => setCharacters(characters)}
              handleCancel={() => {
                setLoadCharacters(false);
              }}
              title="characters"
            />
          }
        />
      ),
    },
    {
      name: "loadBaddies",
      component: (
        <MenuButton
          description={"Load Baddies"}
          open={loadBaddies}
          handleChange={setLoadBaddies}
          modal={
            <MenuModal
              list={baddies}
              handleSave={(baddies) => setBaddies(baddies)}
              handleCancel={() => {
                setLoadBaddies(false);
              }}
              title="baddies"
            />
          }
        />
      ),
    },
    {
      name: "loadItems",
      component: (
        <MenuButton
          description={"Load Items"}
          open={loadItems}
          handleChange={setLoadItems}
          modal={
            <MenuModal
              list={items}
              handleSave={(items) => setItems(items)}
              handleCancel={() => {
                setLoadItems(false);
              }}
              title="items"
            />
          }
        />
      ),
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="w-1/4 flex flex-col items-center m-5 border-2">
      <Typography variant="h3">Set up</Typography>
      <hr className="mb-5 mt-0 w-5/6" />
      <div className="w-5/6 mb-2">
        This page gives the GM the ability to have the battlemap on a fulcrum in
        the center. This means weight distribution during combat becomes
        important. Players and intelligent baddies will need to position
        themselves and items in the room accordingly as to not fall.
      </div>
      <div className="w-5/6">
        {inputs.map((parameters) => {
          return (
            <Wrapper component={parameters.component} key={parameters.name} />
          );
        })}
      </div>
      <Button onClick={onSubmit} className="mb-5 w-full" variant="contained">
        Set Battlemap
      </Button>
    </div>
  );
};

export default FulcrumMenu;
