import { Box, Fade, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import Title from './shared/title';
import { MAIN } from '../constants/common';
import { useTranslation } from 'react-i18next';
import { ORANGE1 } from '../theme';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { styles } from '../styles/common';

const useStyles = makeStyles((theme) => styles);

const About = () => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);
  const info = `${t('common:aboutPage.info1')} 
   ${t('common:aboutPage.info2')} 
   ${t('common:aboutPage.info3')}
   ${t('common:aboutPage.info4')} 
   ${t('common:aboutPage.info5')}`;

  const whatIdo = (
    <>
      <span>{t('common:what')}</span> <span style={{ color: ORANGE1 }}>{t('common:Ido')}</span>
    </>
  );

  const aboutMe = (
    <>
      <span>{t('common:about')}</span> <span style={{ color: ORANGE1 }}>{t('common:me')}</span>
    </>
  );

  return (
    <Fade in={true}>
      <Paper className={classes.root}>
        <div className={classes.mainWrap}>
          <Box className={classes.box}>
            <Title title={aboutMe} type={MAIN} />

            <Grid container direction="row" className={classes.content} spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant={'subtitle2'}>{info}</Typography>
                <Typography variant={'subtitle2'}> {t('common:aboutPage.info6')}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant={'subtitle2'} className={classes.wrap}>
                  <span className={classes.orange}>{t('common:residence')}: </span>
                  {t('common:DE')}
                </Typography>

                <Typography variant={'subtitle2'} className={classes.wrap}>
                  <span className={classes.orange}>{t('common:email')}: </span>
                  <Link
                    className={classes.email}
                    to="#"
                    onClick={(e) => {
                      window.location = 'mailto:Bhanu.Prakash.v@outlook.com';
                      e.preventDefault();
                    }}
                  >
                    Bhanu.Prakash.V@outlook.com
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.box}>
            <Title title={whatIdo} />

            <Grid container direction="row" className={classes.content} spacing={2}>
              <Grid item xs={12} md={6} container direction={'column'}>
                <CodeIcon fontSize={'large'} color={'primary'} />
                <Typography variant={'caption'} className={classes.caption}>
                  {t('common:fe.main')}
                </Typography>
                <Typography variant={'subtitle2'}> {t('common:fe.text')}</Typography>
              </Grid>
              <Grid item xs={12} md={6} container direction={'column'}>
                <DeveloperModeIcon fontSize={'large'} color={'primary'} />
                <Typography variant={'caption'} className={classes.caption}>
                  {t('common:be.main')}
                </Typography>
                <Typography variant={'subtitle2'}> {t('common:be.text')}</Typography>
              </Grid>
            </Grid>

            <Grid container direction="row" className={classes.content} spacing={2}>
              <Grid item xs={12} md={6} container direction={'column'}>
                <MenuBookIcon fontSize={'large'} color={'primary'} />
                <Typography variant={'caption'} className={classes.caption}>
                  {t('common:learner.main')}
                </Typography>
                <Typography variant={'subtitle2'}> {t('common:learner.text')}</Typography>
              </Grid>

              <Grid item xs={12} md={6} container direction={'column'} />
            </Grid>
          </Box>
        </div>
      </Paper>
    </Fade>
  );
};

export default About;
