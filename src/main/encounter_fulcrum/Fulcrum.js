import { useEffect } from "react";
import api from "../../api";
import { useDispatch } from "react-redux";
import { setData } from "./store";
import Battlemap from "./components/battlemap/Battlemap";
import FulcrumMenu from "./components/menu/FulcrumMenu";

const Fulcrum = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(api.getLocalStorage("initiative")));
  });

  return (
    <div className="flex h-full">
      <Battlemap />
      <FulcrumMenu />
    </div>
  );
};

export default Fulcrum;
