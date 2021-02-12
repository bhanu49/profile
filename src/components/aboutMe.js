import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  about: {
    height: '100%',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify={'center'} alignItems={'flex-start'} className={classes.about}>
        About
      </Grid>
    </Paper>
  );
};

export default About;
