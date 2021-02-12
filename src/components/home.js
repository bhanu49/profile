import { Grid, Grow, makeStyles, Paper, Typography, Zoom } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(['common']);

  return (
    <Grow in={true}>
      <Paper className={classes.root}>
        <Grid
          container
          justify={'center'}
          alignItems={'center'}
          className={classes.home}
          direction={'column'}
        >
          <Typography variant={'subtitle1'}> {t('common:welcome')}</Typography>
          <Typography variant={'h2'}> {t('common:name')}</Typography>
          <Zoom in={true}>
            <Typography variant={'h6'}>{t('common:position')}</Typography>
          </Zoom>
        </Grid>
      </Paper>
    </Grow>
  );
};

export default Home;
