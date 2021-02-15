import { Box, Button, Grid, Grow, makeStyles, Paper, TextField } from '@material-ui/core';
import { styles } from '../styles/common';
import Title from './shared/title';
import { MAIN } from '../constants/common';
import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';
import { ORANGE1 } from '../theme';
import clsx from 'clsx';
import { Send } from '@material-ui/icons';
import Maps from './shared/maps';

const useStyles = makeStyles((theme) => styles);

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);

  const text = (
    <>
      <span> Get In</span>
      <span style={{ color: ORANGE1 }}> Touch </span>
    </>
  );
  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize={'large'} color={'primary'} />,
      value: 'Mannheim',
    },
    {
      icon: <MailOutlineIcon fontSize={'large'} color={'primary'} />,
      value: (
        <Link
          className={classes.email}
          to="#"
          onClick={(e) => {
            window.location = 'mailto:Bhanu.Prakash.v@outlook.com';
            e.preventDefault();
          }}
        >
          Bhanu
        </Link>
      ),
    },
    {
      icon: <CheckCircleIcon fontSize={'large'} color={'primary'} />,
      value: 'Open to Talks',
    },
  ];
  return (
    <Grow in={true}>
      <Paper className={classes.root}>
        <div className={classes.mainWrap}>
          <Box className={classes.box}>
            <Title title={t('common:contact')} type={MAIN} />
          </Box>

          <Box className={clsx(classes.box, classes.contactWrap)}>
            <Grid container spacing={2} justify={'flex-start'}>
              <Grid item container xs={12} md={4}>
                {contactInfo.map((item, key) => {
                  return (
                    <Grid
                      container
                      key={key}
                      justify={'center'}
                      alignItems={'center'}
                      direction={'column'}
                      className={classes.cards}
                    >
                      {item.icon}
                      {item.value}
                    </Grid>
                  );
                })}
              </Grid>

              <Grid item xs={12} md={7}>
                <Box className={classes.map}>
                  <Maps
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAbo9qrqt_Ne1gms0EsH9-6W-Nq5m7eXAM"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `180px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </Box>

                <Title title={text} />
                <form className={classes.contactForm}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} container direction={'column'}>
                      <TextField label="Name" variant="outlined" className={classes.input} />
                      <TextField label="Email" variant="outlined" className={classes.input} />
                      <TextField label="Subject" variant="outlined" className={classes.input} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <textarea rows={8} className={clsx(classes.input, classes.textarea)} />
                    </Grid>

                    <Grid item container xs={12} md={12}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        endIcon={<Send />}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Paper>
    </Grow>
  );
};

export default Contact;
