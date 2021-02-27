import { Grid, Grow, makeStyles, Paper, Typography, Zoom } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
  },
  home: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const home = (
    <Grid
      item
      container
      justify={'center'}
      alignItems={'center'}
      className={classes.home}
      direction={'column'}
    >
      <Typography variant={'subtitle1'}> {t('common:welcome')}</Typography>
      <Typography variant={'h2'} align={'center'}>
        {t('common:name')}
      </Typography>
      <Zoom in={true}>
        <Typography variant={'h6'}>{t('common:position')}</Typography>
      </Zoom>
    </Grid>
  );

  return <Grow in={true}>{matches ? home : <Paper className={classes.root}>{home}</Paper>}</Grow>;
};

export default Home;
