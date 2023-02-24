import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordFeild = ({ children, set, handleInput }) => {
  const lable = children;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl
      variant="outlined"
      sx={{
        "& .MuiInputBase-root.MuiOutlinedInput-root": {
          "& > fieldset": {
            borderRadius: "8px",
            border: "1px solid #D1D1D6",
          },
        },
      }}
    >
      <InputLabel htmlFor="outlined-adornment-password">{lable}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        onChange={(e) => handleInput(e.target.value, set)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={lable}
      />
    </FormControl>
  );
};

export default PasswordFeild;
