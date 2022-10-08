import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  Hidden
} from "@material-ui/core";

import OftadehAvatarBadge from "../OftadehAvatarBadge/OftadehAvatarBadge";
import { AccountCircle, Settings, ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline"
  },
  menuIcon: {
    minWidth: "33px"
  },
  paddingRightZero: {
    paddingRight: 0
  }
}));

const OftadehAvatarMenu = (props) => {
  const classes = useStyles(props);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alignItems="flex-start"
        className={classes.paddingRightZero}
      >
        <ListItemAvatar>
          <OftadehAvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            variant="dot"
          >
            <Avatar
              alt="Rushi Vaghasiya"
              src="data:image/jpeg;base64,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"
            />
          </OftadehAvatarBadge>
        </ListItemAvatar>
        <Hidden implementation="css" smDown>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" variant="subtitle2">
                  Rushi Vaghasiya
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Admin
                </Typography>
              </React.Fragment>
            }
          />
        </Hidden>
      </ListItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

OftadehAvatarMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default OftadehAvatarMenu;
