import { TextField } from "@mui/material";

const MenuInput = ({
  description,
  handleChange,
  error,
  value,
  required,
  type,
}) => {
  return (
    <div className="mb-5">
      <TextField
        className="w-full flex item-center"
        label={description}
        onChange={(e) => handleChange(e.target.value)}
        error={error}
        value={value}
        required={required}
        type={type}
      />
    </div>
  );
};

export default MenuInput;
