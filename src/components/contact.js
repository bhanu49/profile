import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  contact: {
    height: '100%',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify={'center'} alignItems={'flex-start'} className={classes.contact}>
        contact
      </Grid>
    </Paper>
  );
};

export default Contact;
