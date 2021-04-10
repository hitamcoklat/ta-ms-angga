import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import SelectFileType from "./SelectFileType";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = forwardRef((props, ref) => {
  const selectFileRef = useRef();
  const { showPopUpFile } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleShow = () => {
    setOpen(true);
  };

  const handleUpload = () => {
    selectFileRef.current.handleUpload();
  };

  const tutupDialog = (dataInfo) => {
    console.log("kampret", dataInfo);
    props.setDetailFile(dataInfo);
    setOpen(false);
  };

  useImperativeHandle(ref, (e) => ({ handleShow }));

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Pilih jenis file yang akan di upload
        </DialogTitle>
        <DialogContent>
          <SelectFileType ref={selectFileRef} tutupDialog={tutupDialog} />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleUpload} color="primary">
            Start Upload
          </Button>
          <Button onClick={handleClose} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default AlertDialogSlide;
