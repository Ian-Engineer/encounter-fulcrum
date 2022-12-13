import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Battlemap = () => {
  const data = useSelector((state) => state.fulcrum.data);

  return (
    <div className="w-3/5 flex justify-center m-5 mr-0 border-2">
      <Typography align="center" variant="h3">
        Battlemap
      </Typography>
    </div>
  );
};

export default Battlemap;
