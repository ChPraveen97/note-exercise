import Card from "@mui/material/Card";
import { useState } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import PasswordFeild from "./PasswordFeild";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SignupCard = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [email, setEmail] = useState(null);

  let isFormFilled = false;
  let isPasswordMatched = true;

  const emailRegex = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(\.com){1}/;
  const isEmail = new RegExp(emailRegex);

  const handleInput = (value, set) => {
    set(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  if (password && confirmPassword && password === confirmPassword) {
    isPasswordMatched = true;
  } else if (password && confirmPassword) {
    isPasswordMatched = false;
  }

  if (isEmail.test(email) && isPasswordMatched && password && confirmPassword) {
    isFormFilled = true;
  }

  return (
    <>
      <Card className="signup-card" variant="outlined" square>
        <div className="signup-details">
          <Typography variant="h3" component="h2" className="signup-header">
            Sign Up
          </Typography>
          <div className="signup-textfeild">
            <div>
              <TextField
                type={"email"}
                className="textfeild-email"
                id="textfeild-email"
                label="Email"
                variant="outlined"
                onChange={(e) => {
                  handleEmail(e.target.value);
                }}
                sx={{
                  "& .MuiInputBase-root.MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderRadius: "8px",
                      border: "1px solid #D1D1D6",
                    },
                  },
                }}
              />
              <p className="email-verify">
                {isEmail.test(email) || !email ? (
                  ""
                ) : (
                  <p className="email-warning">
                    <InfoOutlinedIcon />
                    Invalid Email ID
                  </p>
                )}
              </p>
            </div>
            <PasswordFeild handleInput={(handleInput, setPassword)}>
              Password
            </PasswordFeild>
            <div>
              <PasswordFeild
                handleInput={(handleInput, setConfirmPassword)}
                className="confirm-password"
              >
                Confirm Password
              </PasswordFeild>
              <p className="password-match-message">
                {isPasswordMatched ? (
                  ""
                ) : (
                  <p className="password-warning">
                    <InfoOutlinedIcon />
                    Passwords don’t match
                  </p>
                )}
              </p>
            </div>
          </div>
          {isFormFilled ? (
            <Button
              className="signup-button"
              variant="contained"
              sx={{ borderRadius: "10px" }}
            >
              Sign Up
            </Button>
          ) : (
            <Button
              className="signup-button"
              variant="contained"
              disabled
              sx={{ borderRadius: "10px" }}
            >
              Sign Up
            </Button>
          )}

          <Typography className="signin-message" variant="body2" component="h4">
            Already have an account?{" "}
            <Link className="signin-link" underline="hover" href="#">
              Sign in
            </Link>
          </Typography>
        </div>
      </Card>
    </>
  );
};

export default SignupCard;
