import { Grid } from "@mui/material";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";

function Navbar() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{ paddingTop: "1rem" }}
    >
      <Grid item id="logo">
        <img src={logo} alt="logo"></img>
      </Grid>
      <Grid item id="hamburger_icon">
        <img src={hamburgerIcon} alt="hamburger_icon"></img>
      </Grid>
    </Grid>
  );
}

export default Navbar;
