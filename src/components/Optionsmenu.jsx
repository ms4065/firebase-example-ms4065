import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deleteDoc, doc } from "firebase/firestore";
import { useFirestore, useUser } from "reactfire";
import ChangeMessage from './ChangeMessage';
import { ColorButton } from './ColoredButtons';

export default function Optionsmenu({ id }) {
  const firestore = useFirestore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ColorButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
      >
        Menu
      </ColorButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={async () => {
            await deleteDoc(doc(firestore, "messages", id));
            handleClose();
          }}>Delete</MenuItem>
        <ChangeMessage id={id} onOpen={handleClose}/>
      </Menu>
    </div>
  );
}
