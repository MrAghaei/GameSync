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
import { PageType } from "../models/PageType";

export interface DialogBoxInputDataModel {
  open: boolean;
  dialogValue: string;
  gameId: string;
  handleClose: (value?: string) => void;
  pageType: string;
}
interface DialogBoxInputModel {
  data: DialogBoxInputDataModel;
}
function DialogBox(data: DialogBoxInputModel) {
  const handleClose = () => {
    data.data.handleClose();
  };

  const handleListItemClick = (value: string) => {
    data.data.handleClose(value);
  };

  function shouldDisplayDeleteButton(): boolean {
    return !(
      data.data.pageType === PageType.LANDING ||
      data.data.pageType === PageType.SEARCH
    );
  }
  return (
    <Dialog onClose={handleClose} open={data.data.open}>
      <DialogTitle>Choose where you want to add this game.</DialogTitle>
      <List sx={{ pt: 0 }}>
        {data.data.pageType === PageType.TO_PLAY ? (
          ""
        ) : (
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick(PageType.TO_PLAY)}
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={"./toplay-icon.svg"} alt={"toplayicon"} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="To Play" />
            </ListItemButton>
          </ListItem>
        )}
        {data.data.pageType === PageType.PLAYING ? (
          ""
        ) : (
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick(PageType.PLAYING)}
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={"./playing-icon.svg"} alt={"playingicon"} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Playing" />
            </ListItemButton>
          </ListItem>
        )}
        {data.data.pageType === PageType.PLAYED ? (
          ""
        ) : (
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick(PageType.PLAYED)}
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={"./played-icon.svg"} alt={"playedicon"} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Played" />
            </ListItemButton>
          </ListItem>
        )}
        {shouldDisplayDeleteButton() ? (
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick(PageType.DELETE)}
            >
              <ListItemAvatar>
                <Avatar>
                  <img src={"./delete-icon.svg"} alt={"deleticon"} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItemButton>
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </Dialog>
  );
}

export default DialogBox;
