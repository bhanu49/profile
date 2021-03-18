import {
  Avatar,
  Box,
  Grid,
  Grow,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  Typography,
  Zoom,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ORANGE2 } from '../theme';
import GitHubIcon from '@material-ui/icons/GitHub';
import avatar from '../images/myavatar.jpeg';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../pdf/Bhanu_Resume.pdf';

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
  iconGrp: {
    marginTop: theme.spacing(2),
  },
  large: {
    width: 130,
    height: 130,
    marginBottom: theme.spacing(3),
    border: 'solid 3px #fca072',
  },
  link: {},
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
      <Hidden mdUp>
        <Avatar alt="bhanu" src={avatar} className={classes.large} />
      </Hidden>

      <Typography variant={'subtitle1'}> {t('common:welcome')}</Typography>
      <Typography variant={'h2'} align={'center'}>
        {t('common:name')}
      </Typography>
      <Zoom in={true}>
        <Typography variant={'h6'}>{t('common:position')}</Typography>
      </Zoom>

      <Box className={classes.iconGrp}>
        <IconButton
          onClick={(e) =>
            window.open('https://www.linkedin.com/in/bhanu-prakash-vemula/', '_blank')
          }
        >
          <LinkedInIcon fontSize={'large'} style={{ color: ORANGE2 }} />
        </IconButton>

        <IconButton onClick={(e) => window.open('https://github.com/bhanu49', '_blank')}>
          <GitHubIcon fontSize={'large'} style={{ color: ORANGE2 }} />
        </IconButton>

        <Hidden mdUp>
          <a href={resume} download={'Bhanu_resume.pdf'} className={classes.link}>
            <IconButton>
              <GetAppIcon fontSize={'large'} style={{ color: ORANGE2 }} />
            </IconButton>
          </a>
        </Hidden>
      </Box>
    </Grid>
  );

  return <Grow in={true}>{matches ? home : <Paper className={classes.root}>{home}</Paper>}</Grow>;
};

export default Home;
