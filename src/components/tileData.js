import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {NavLink} from "react-router-dom";
 
export const mailFolderListItems = (
  <div>
    <NavLink to="/offers"><ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Offers" />
    </ListItem>
    </NavLink>
    <NavLink to="/veg"><ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Pure Veg" />
    </ListItem>
    </NavLink>
    <NavLink to="/healthy"><ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Healthy Food" />
    </ListItem>
    </NavLink>
    <NavLink to="/desserts"> <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Desserts" />
    </ListItem>
    </NavLink>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <NavLink to="/american"><ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Amerian" />
    </ListItem>
    </NavLink>
    <NavLink to="/cafe"><ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Cafe" />
    </ListItem>
    </NavLink>
    <NavLink to="/chinese"><ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Chinese" />
    </ListItem>
    </NavLink>
  </div>
);