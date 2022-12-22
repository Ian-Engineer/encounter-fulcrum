import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Row from "./Row";

const Board = () => {
  const data = useSelector((state) => state.fulcrum.data);
  const battlemap = useSelector((state) => state.fulcrum.battlemap);

  return (
    <div className="flex flex-col mb-5">
      {battlemap.map((row, y) => {
        return <Row key={y} row={row} y={y} />;
      })}
    </div>
  );
};

export default Board;
