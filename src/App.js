import "./App.css";
import Grid from "@mui/material/Grid";
import SignupImage from "./SignupImage";
import SignupCard from "./SignupCard";

function App() {
  return (
    <div className="App">
      <Grid container className="primary-container">
        <Grid className="primary-item image" item xs={6.6}>
          <SignupImage />
        </Grid>
        <Grid className="primary-item signup" item xs={5.4}>
          <SignupCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
