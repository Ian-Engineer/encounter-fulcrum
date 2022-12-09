import { Button } from "@mui/material";
import { Dialog } from "@mui/material";

const MenuButton = ({ description, handleChange, open, modal }) => {
  return (
    <div className="mb-5 flex justify-center">
      <Button onClick={() => handleChange(true)} variant="contained">
        {description}
      </Button>
      <Dialog onClose={() => handleChange(false)} open={open}>
        {modal}
      </Dialog>
    </div>
  );
};

export default MenuButton;
