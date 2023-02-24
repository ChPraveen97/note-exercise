import Card from "@mui/material/Card";
import { Button, TextField, Typography } from "@mui/material";

const SignupCard = () => {
  return (
    <>
      <Card className="signup-card" variant="outlined" square>
        <div className="signup-details">
          <h2>Sign Up</h2>
          <div className="signup-textfeild">
            <TextField id="textfeild-email" label="Email" variant="outlined" />
            <TextField
              id="textfeild-password"
              label="Password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="textfeild-confirm-password"
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
          </div>
          <Button className="signup-button" variant="contained" disabled>
            Sign Up
          </Button>
          <Typography
            className="signin-message"
            variant="body2"
            component="body2"
          >
            Already have an account?{" "}
            <span className="signin-link">Sign in</span>
          </Typography>
        </div>
      </Card>
    </>
  );
};

export default SignupCard;
