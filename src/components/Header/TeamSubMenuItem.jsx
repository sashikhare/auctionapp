import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";

const PlayerSubMenuItem = (props) =>{
    const {open, anchorEl, handleClose, handleListKeyDown} = props
    return(
        <>
        <Popper
                open={open}
                anchorEl={anchorEl.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{
                  transform: 'translate3d(180px, 52px, 0px) !important'
                }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem
                            component={Link}
                            to={`/TeamRegistration`}
                            onClick={handleClose}
                          >
                            Add Team
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to={`/PlayersList`}
                            onClick={handleClose}
                          >
                            Teams Details
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
        </>
    )
}

export default PlayerSubMenuItem;