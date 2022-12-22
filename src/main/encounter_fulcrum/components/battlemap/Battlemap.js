import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Board from "./Board";

const Battlemap = () => {
  const battlemap = useSelector((state) => state.fulcrum.battlemap);

  return (
    <div className="w-3/4 flex flex-col items-center m-5 border-2">
      <Typography variant="h3">Battlemap</Typography>
      <hr className="mb-5 mt-0 w-5/6" />
      <div className="flex flex-col">
        {battlemap === null ? null : (
          <React.Fragment>
            <Board />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Battlemap;
