import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export interface DialogBoxInputDataModel {
  open: boolean;
  dialogValue: string;
  handleClose: (value: string) => void;
}
interface DialogBoxInputModel {
  data: DialogBoxInputDataModel;
}
function DialogBox(data: DialogBoxInputModel) {
  const handleClose = () => {
    data.data.handleClose(data.data.dialogValue);
  };

  const handleListItemClick = (value: string) => {
    data.data.handleClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={data.data.open}>
      <DialogTitle>Choose where you want to add this game.</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("toplay")}
          >
            <ListItemAvatar>
              <Avatar>
                <img src={"./toplay-icon.svg"} alt={"toplayicon"} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="To Play" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("playing")}
          >
            <ListItemAvatar>
              <Avatar>
                <img src={"./playing-icon.svg"} alt={"playingicon"} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Playing" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("played")}
          >
            <ListItemAvatar>
              <Avatar>
                <img src={"./played-icon.svg"} alt={"playedicon"} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Played" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default DialogBox;
