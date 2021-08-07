import { Avatar, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "14px",
  },
  paper: {
    padding: "40px 20px",
  },
  name: {
    margin: 0,
    textAlign: "left",
  },
  email: {
    textAlign: "left",
    color: "gray",
  },
  body: {
    textAlign: "left",
  },
  avatarBgColor: {
    background: theme.palette.primary.main,
  },
}));

const Comment = ({ commentData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatarBgColor} />
            <p>{commentData.id}</p>
          </Grid>
          <Grid justifyContent="flex-start" item xs zeroMinWidth>
            <h3 className={classes.name}>{commentData.name} </h3>
            <p className={classes.email}>{commentData.email}</p>
            <p className={classes.body}>{commentData.body} </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Comment;
