import './App.css';
import {
  AppBar,
  Container,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  Toolbar,
} from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Resume from './components/resume';
import About from './components/aboutMe';
import Contact from './components/contact';
import Header from './components/header';
import { ORANGE1, ORANGE2 } from './theme';
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import SideMenu from './components/swipable';
import { routes } from './helper/routes';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiIconButton-root': {
      '&:hover': {
        color: '#fca072',
      },
    },
  },
  wrap: {
    marginTop: '5%',
  },
  paper: {
    width: '100%',
    height: '80vh',
    borderRadius: 20,
    background: `linear-gradient(${ORANGE1}, ${ORANGE2})`,
  },
  header: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(4),
  },
  menu: {
    borderRadius: 50,
    marginLeft: theme.spacing(2),
    width: 90,
    height: 270,
  },
  main: {
    height: '100%',
  },
  menuWrap: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  mobileWrap: {
    marginTop: theme.spacing(4),
  },
  '@global': {
    body: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#fff',
      },
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [content, setContent] = useState(null);

  useEffect(() => {
    matches ? setContent(mobileContent) : setContent(webContent);
  }, [matches]); // eslint-disable-line react-hooks/exhaustive-deps

  const componentNav = (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      {/* <Route exact path="/portfolio">
        <Portfolio />
      </Route>*/}
      <Route exact path="/resume">
        <Resume />
      </Route>
    </Switch>
  );

  const webContent = (
    <Container maxWidth={'xl'}>
      <Grid container className={classes.wrap}>
        <Hidden smDown>
          <Grid item md={1} />
        </Hidden>

        <Grid container item sm={12} md={9}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container className={classes.main}>
              <Hidden smDown>
                <Grid container item xs={3} className={classes.header} justify={'center'}>
                  <Header />
                </Grid>
              </Hidden>

              <Grid container item xs={12} md={9}>
                {componentNav}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Hidden smDown>
          <Grid container item md={1}>
            <Paper elevation={3} className={classes.menu}>
              <Grid container justify={'center'} alignItems={'center'} className={classes.menuWrap}>
                {routes.map((item, ind) => (
                  <IconButton component={Link} to={item.path} key={ind}>
                    {item.icon}
                  </IconButton>
                ))}
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={1} />
        </Hidden>
      </Grid>
    </Container>
  );

  const mobileContent = (
    <Grid container className={classes.mobileWrap}>
      <SideMenu />
      {componentNav}
    </Grid>
  );

  return content ? <div className={classes.root}>{content}</div> : null;
};

export default App;
