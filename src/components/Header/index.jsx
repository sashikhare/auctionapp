import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Home from "../../pages/Home";
import PlayerSubMenuItem from "./PlayerSubMenuItem"
import TeamSubMenuItem from "./TeamSubMenuItem"

const pages = ["Home", "Teams", "Players"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [openPlayerSubMenu, setOpenPlayerSubMenu] = React.useState(false);
  const [openTeamSubMenu, setOpenTeamSubMenu] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleTogglePlayerSubMenu = () => {
    setOpenPlayerSubMenu((prevOpen) => !prevOpen);
  };

  const handleToggleTeamSubMenu = () => {
    setOpenTeamSubMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenPlayerSubMenu(false);
    setOpenTeamSubMenu(false)
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenPlayerSubMenu(false);
    } else if (event.key === "Escape") {
      setOpenPlayerSubMenu(false);
    }
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* For Msite */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  key="Home"
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/Home"
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem
                  key="Teams"
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/Teams"
                >
                  <Typography textAlign="center">Teams</Typography>
                </MenuItem>
                <MenuItem
                  key="Players"
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/Players"
                >
                  <Typography textAlign="center">Players</Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* For WebSite */}
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="Home"
                // onClick={handleCloseNavMenu}
                component={Link}
                to={`/Home`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                key="Teams"
                // onClick={handleCloseNavMenu}
                // component={Link}
                // to={`/Teams`}
                // sx={{ my: 2, color: "white", display: "block" }}
                sx={{ my: 2, color: "white", display: "block" }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={openTeamSubMenu ? "composition-menu" : undefined}
                aria-expanded={openTeamSubMenu ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggleTeamSubMenu}
              >
                Teams
              </Button>
              <TeamSubMenuItem open={openTeamSubMenu} anchorEl={anchorRef} handleClose={handleClose} handleListKeyDown={handleListKeyDown} />
              <Button
                key="Players"
                // onClick={handleCloseNavMenu}
                // component={Link}
                // to={`/Players`}
                sx={{ my: 2, color: "white", display: "block" }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={openPlayerSubMenu ? "composition-menu" : undefined}
                aria-expanded={openPlayerSubMenu ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleTogglePlayerSubMenu}
              >
                Players
              </Button>
              <PlayerSubMenuItem open={openPlayerSubMenu} anchorEl={anchorRef} handleClose={handleClose} handleListKeyDown={handleListKeyDown} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
