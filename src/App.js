import { Button, Fab, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import Comment from './components/Comment';
import NewCommentDialog from './components/NewCommentDialog';
import { getByPage } from './utils/CommentsRouter';

const LIMIT = 20;

const useStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    textAlign: "center"
  },
  btn: {
    margin: "15px",
  },
}));


const App = () => {
  const classes = useStyle();

  const [openDialog, setOpenDialog] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  const getComments = async () => {
    const data = await getByPage(page, LIMIT)
    setComments([...comments, ...data])
  }

  useEffect(() => { getComments() }, [])

  useEffect(() => { getComments() }, [page])
  return (
    <div className={classes.root}>
      <h1>Comments</h1>
      <NewCommentDialog setOpen={setOpenDialog} open={openDialog} />
      <Fab color="primary" aria-label="add" onClick={() => setOpenDialog(true)}>
        <Add />
      </Fab>
      {comments.map(comment => {
        return <Comment key={comment.id} commentData={comment} />
      })}
      <Button className={classes.btn} variant="contained" color="primary" onClick={() => { setPage(page + 1) }}>Load More Comments ... </Button>
    </div>
  );
}

export default App;
