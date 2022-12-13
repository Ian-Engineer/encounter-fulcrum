import { useEffect, useState } from "react";
import api from "../../api";
import schema from "../../schema";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./store";
import Battlemap from "./components/battlemap/Battlemap";
import FulcrumMenu from "./components/menu/FulcrumMenu";

const Fulcrum = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fulcrum.data);

  useEffect(() => {
    dispatch(setData(api.getLocalStorage("initiative")));
  }, []);

  return (
    <div className="flex h-full">
      <Battlemap />
      <FulcrumMenu />
    </div>
  );
};

export default Fulcrum;
