import {
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import { postComment } from "../utils/CommentsRouter";

const useStyle = makeStyles({
  shortText: {
    paddingRight: "10px",
    paddingBottom: "10px",
  },
  alert: {
    marginBottom: "20px",
  },
});

const NewCommentDialog = ({ setOpen, open }) => {
  const classes = useStyle();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const handleClose = () => {
    setAlert(false);
    setAlertContent("");
    setOpen(false);
  };

  const addNewComment = () => {
    postComment({ name, email, body }).then((data) => {
      if (!data) {
        setAlert(true);
        setAlertContent("something went wrong, 404");
      }
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Add New Comment
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {alert ? (
            <Alert className={classes.alert} severity="error">
              {alertContent}
            </Alert>
          ) : (
            <></>
          )}
          <Grid>
            <TextField
              className={classes.shortText}
              id="name"
              label="Name"
              defaultValue="Jhon Doe"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              className={classes.shortText}
              id="email"
              label="Email"
              defaultValue="Jhon@Doe.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="body"
              label="Body"
              multiline
              rows={2}
              rowsMax={4}
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <IconButton onClick={addNewComment} color="primary">
          <Add />
        </IconButton>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCommentDialog;
