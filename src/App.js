import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function App() {
  return (
    <div class="wrapper">
    <TextField id="standard-basic" label="Email">  </TextField>
    <TextField id="standard-basic" label="Password">  </TextField>
      <Button variant="contained"> Login </Button>
    </div>
  );
}
