import { useEffect, useState } from "react";
import Occupied from "./Occupied";
import { useSelector, useDispatch } from "react-redux";
import { setCell } from "../../store";

const Box = ({ location, fill, moveCard }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fulcrum.data);
  const battlemap = useSelector((state) => state.fulcrum.battlemap);
  const [isOver, setIsOver] = useState(false);
  const [boxStyle, setBoxStyle] = useState([]);
  const x = location.x;
  const y = location.y;

  const handleClick = (e) => {
    e.preventDefault();
    let fill;
    if (battlemap[y][x].inPlay === true)
      fill = {
        name: "",
        weight: 0,
        color: "white",
        empty: true,
        inPlay: false,
      };
    else
      fill = {
        name: "",
        weight: 0,
        color: "slate-200",
        empty: true,
        inPlay: true,
      };
    dispatch(
      setCell({
        x,
        y,
        fill,
        battlemap,
      })
    );
  };

  function handleDragOver(e) {
    if (e.dataTransfer.types[0] === "text/plain") {
      setIsOver(true);
      e.preventDefault();
    }
  }

  function handleDrop(e) {
    const dataJSON = e.dataTransfer.getData("text/plain");
    let data;
    try {
      data = JSON.parse(dataJSON);
    } catch {}
    if (data && data.type === "card") {
      moveCard();
    }
  }

  function handleDragLeave() {
    setIsOver(false);
  }
  useEffect(() => {
    let style = [];
    style.push("w-12 h-12 m-px");
    if (battlemap[y][x].inPlay) style.push("border-2 border-slate-800");
    style.push(`bg-${battlemap[y][x].color}`);
    setBoxStyle(style);
  }, [fill]);

  return (
    <div onContextMenu={handleClick} className={boxStyle.join(" ")}>
      {!fill.empty ? (
        <Occupied color={fill.color} name={fill.name} weight={fill.weight} />
      ) : null}
    </div>
  );
};

export default Box;
