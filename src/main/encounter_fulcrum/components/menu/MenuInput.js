import { TextField, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const MenuInput = ({
  description,
  handleChange,
  error,
  value,
  required,
  type,
  tooltip,
}) => {
  return (
    <div className="mb-5 flex items-center">
      <TextField
        className="w-full flex item-center"
        label={description}
        onChange={(e) => handleChange(e.target.value)}
        error={error}
        value={value}
        required={required}
        type={type}
      />
      <Tooltip title={tooltip}>
        <HelpIcon className="m-2" />
      </Tooltip>
    </div>
  );
};

export default MenuInput;
