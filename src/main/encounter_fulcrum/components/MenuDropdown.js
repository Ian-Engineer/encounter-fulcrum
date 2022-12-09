import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const MenuDropDown = ({ description, handleChange, required, options }) => {
  return (
    <div className="mb-5">
      <Autocomplete
        disablePortal
        options={options}
        renderInput={(params) => (
          <TextField required={required} {...params} label={description} />
        )}
        onChange={(e) => handleChange(options[e.target.value])}
        disableClearable
      />
    </div>
  );
};

export default MenuDropDown;
