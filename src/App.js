import './App.css';
import {
  AppBar,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { HomeOutlined } from '@material-ui/icons';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import Resume from './components/resume';
import About from './components/aboutMe';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Header from './components/header';
import { ORANGE1, ORANGE2 } from './theme';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

const drawerWidth = 240;

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
    height: 310,
  },
  main: {
    height: '100%',
  },
  menuWrap: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

export const routes = [
  { title: 'Home', path: '/', icon: <HomeOutlined fontSize={'large'} /> },
  { title: 'About', path: '/about', icon: <PersonOutlineIcon fontSize={'large'} /> },
  { title: 'Resume', path: '/resume', icon: <MenuBookOutlinedIcon fontSize={'large'} /> },
  { title: 'Portfolio', path: '/portfolio', icon: <WorkOutlineOutlinedIcon fontSize={'large'} /> },
  {
    title: 'Contact',
    path: '/contact',
    icon: <PermContactCalendarOutlinedIcon fontSize={'large'} />,
  },
];

const App = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log('click');
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      {/* <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
          <CloseIcon />
        </IconButton>
      </Drawer>*/}

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
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/about">
                      <About />
                    </Route>
                    <Route exact path="/contact">
                      <Contact />
                    </Route>
                    <Route exact path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route exact path="/resume">
                      <Resume />
                    </Route>
                  </Switch>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Hidden smDown>
            <Grid container item md={1}>
              <Paper elevation={3} className={classes.menu}>
                <Grid
                  container
                  justify={'center'}
                  alignItems={'center'}
                  className={classes.menuWrap}
                >
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
    </div>
  );
};

export default App;
