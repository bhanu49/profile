import { Avatar, Grid, Grow, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  home: {
    height: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grow in={true}>
      <Paper className={classes.root}>
        <Grid container justify={'center'} alignItems={'center'} className={classes.home}>
          <Typography variant={'h1'}>Bhanu Prakash</Typography>{' '}
        </Grid>
      </Paper>
    </Grow>
  );
};

export default Home;
