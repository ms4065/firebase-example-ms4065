import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem } from '@mui/material';
import { updateDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useState } from 'react';


export default function ChangeMessage({ id, onOpen }) {
  const firestore = useFirestore();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onOpen();
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>Change message</MenuItem>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            value={text}
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="Enter a new message"
            type="changetext"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={async () => { 
            handleClose();
            await updateDoc(doc(firestore, "messages", id), {text}); 
          }}> Change </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
