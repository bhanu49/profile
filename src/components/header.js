import { Avatar, Box, Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import avatar from '../images/myavatar.jpeg';
import { useTranslation } from 'react-i18next';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import resume from '../pdf/Bhanu_Resume.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiIconButton-root': {
      borderRadius: '25%',
    },
  },
  large: {
    width: 140,
    height: 140,
    border: 'solid 3px #fff',
  },
  name: {
    marginTop: theme.spacing(3),
  },
  position: {
    color: '#fff',
    marginTop: theme.spacing(1),
  },
  icon: {
    color: '#fff',
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
  iconGrp: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
  cv: {
    color: '#fff',
    backgroundColor: '#e28a48',
    borderRadius: 25,
    textTransform: 'none',
    marginTop: theme.spacing(8),
    border: 'solid 1px #fff',
    padding: '8px 16px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#e28a48',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);

  return (
    <>
      <Grid container direction={'column'} alignItems={'center'} className={classes.root}>
        <Avatar alt="bhanu" src={avatar} className={classes.large} />

        <Typography variant={'h4'} align={'center'} className={classes.name}>
          {t('common:name')}
        </Typography>
        <Typography variant={'subtitle1'} className={classes.position} align={'center'}>
          {t('common:position')}
        </Typography>

        <Box className={classes.iconGrp}>
          <IconButton
            onClick={(e) =>
              window.open('https://www.linkedin.com/in/bhanu-prakash-vemula/', '_blank')
            }
          >
            <LinkedInIcon fontSize={'default'} className={classes.icon} />
          </IconButton>
          <IconButton onClick={(e) => window.open('https://github.com/bhanu49', '_blank')}>
            <GitHubIcon fontSize={'default'} className={classes.icon} />
          </IconButton>
        </Box>
        <a href={resume} download={'Bhanu_resume'} className={classes.link}>
          <Button variant={'contained'} className={classes.cv} color={'primary'}>
            {t('common:cv')}
          </Button>
        </a>
      </Grid>
    </>
  );
};

export default Header;
