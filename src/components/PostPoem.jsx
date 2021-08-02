import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ChipInput from 'material-ui-chip-input';
import Button from '@material-ui/core/Button';
import { postPoem } from '../redux/poem/poemAction';
import { useDispatch } from 'react-redux';
// import CkEditor from './CkEditor';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const PostPoem = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [poem, setPoem] = useState({
    title: '',
    poem: '',
    tags: [],
  });

  const handleChange = e => {
    setPoem({ ...poem, [e.target.name]: e.target.value });
  };
  const handleAddChip = chip => {
    setPoem([...poem.tags, chip]);
  };
  const handleDeleteChip = (chip, index) => {
    setPoem(poem.tags.filter(tag => tag !== chip));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postPoem(poem));
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      style={{ marginTop: '100px' }}
    >
      <div>
        <TextField
          id='outlined-basic'
          label='Title'
          variant='outlined'
          name='title'
          onChange={handleChange}
        />
        <TextField
          id='outlined-basic'
          label='Poem'
          variant='outlined'
          name='poem'
          onChange={handleChange}
        />
        {/* <CkEditor /> */}
        <ChipInput
          value={poem.tags}
          label='new tag'
          onAdd={chip => handleAddChip(chip)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
        />
      </div>
      <Button
        onClick={handleSubmit}
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default PostPoem;
