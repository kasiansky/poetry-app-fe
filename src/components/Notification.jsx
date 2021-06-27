import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalWindow } from '../redux/notification/notificationAction';

const Notification = () => {
  //   const [open, setOpen] = React.useState(false);
  const isOpen = useSelector(state => state.notification.isOpen);
  const text = useSelector(state => state.notification.text);
  const dispatch = useDispatch();

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    dispatch(closeModalWindow());
    // setOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div>
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>{''}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                {text}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary' autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};
export default Notification;
