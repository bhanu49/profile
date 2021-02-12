import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  portfolio: {
    height: '100%',
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify={'center'} alignItems={'flex-start'} className={classes.portfolio}>
        portfolio
      </Grid>
    </Paper>
  );
};

export default Portfolio;
