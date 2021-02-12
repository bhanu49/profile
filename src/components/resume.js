import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  resume: {
    height: '100%',
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify={'center'} alignItems={'flex-start'} className={classes.resume}>
        Resume
      </Grid>
    </Paper>
  );
};

export default Resume;
