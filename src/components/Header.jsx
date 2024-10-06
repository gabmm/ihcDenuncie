import { AppBar, Toolbar, Typography, Button, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Report, Assessment } from "@mui/icons-material"; 
import logo from '../assets/logo_escudo.png';
function Header() {
  return (
    <AppBar
      position="sticky" 
      sx={{
        backgroundColor: "#003366", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        padding: "10px 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MuiLink
          href="/"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src= {logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          <Typography variant="h6" sx={{transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },}}>Proteção Social</Typography>
        </MuiLink>

        <Box
          sx={{
            display: "flex", 
            gap: "20px", 
          }}
        >
          <MuiLink
            component={Link}
            to="/"
            sx={{
              color: "#ffa500",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                color: "#fff", 
                transform: "scale(1.05)",
              },
            }}
          >
            <HomeIcon sx={{ marginRight: "5px" }} />
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            to="/report"
            sx={{
              color: "#ffa500",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                color: "#fff", 
                transform: "scale(1.05)",
              },
            }}
          >
            <Report sx={{ marginRight: "5px" }} />
            Denunciar
          </MuiLink>
          <MuiLink
            component={Link}
            to="/record"
            sx={{
              color: "#ffa500",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                color: "#fff", 
                transform: "scale(1.05)",
              },
            }}
          >
            <Assessment sx={{ marginRight: "5px" }} />
            Relatório
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
