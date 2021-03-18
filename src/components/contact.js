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
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as yup from 'yup';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => styles);

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  name: yup.string('name').required('Name is required'),
  subject: yup.string('subject').required('Subject is  required'),
  body: yup.string('body').required('Comments are required'),
});

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      body: '',
    },
    validationSchema: validationSchema,
    //todo: send email
    onSubmit: (values) => {},
  });

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

  const contact = (
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
            <form className={classes.contactForm} onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} container direction={'column'}>
                  <TextField
                    label="Name"
                    id="name"
                    variant="outlined"
                    className={classes.input}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    label="Email"
                    id="email"
                    variant="outlined"
                    className={classes.input}
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    label="Subject"
                    id="subject"
                    variant="outlined"
                    className={classes.input}
                    value={formik.values.subject}
                    name="subject"
                    onChange={formik.handleChange}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    id="body"
                    rows={8}
                    multiline
                    label="Comments"
                    variant="outlined"
                    className={clsx(classes.input, classes.textarea)}
                    onChange={formik.handleChange}
                    value={formik.values.body}
                    error={formik.touched.body && Boolean(formik.errors.body)}
                    helperText={formik.touched.body && formik.errors.body}
                  />
                </Grid>

                <Grid item container xs={12} md={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<Send />}
                    type={'submit'}
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
  );

  return (
    <Grow in={true}>{matches ? contact : <Paper className={classes.root}>{contact}</Paper>}</Grow>
  );
};

export default Contact;
