import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "./Box";

const Row = ({ row, y }) => {
  return (
    <div className="flex flex-row">
      {row.map((fill, x) => (
        <Box key={[x, y]} fill={fill} location={{ x, y }} />
      ))}
    </div>
  );
};

export default Row;
