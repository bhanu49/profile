import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { routes } from '../helper/routes';
import { Link } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  appbar: {
    width: '100%',
  },
  white: {
    color: '#fff',
  },
});

const SideMenu = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (event, open) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={(e) => toggleDrawer(e, false)}
      onKeyDown={(e) => toggleDrawer(e, false)}
    >
      <List>
        {routes.map((item, ind) => (
          <ListItem button key={ind} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Grid container justify={'space-between'} alignItems={'center'}>
            <Typography variant={'h5'} className={classes.white}>
              Bhanu Prakash
            </Typography>

            <IconButton component="span" onClick={(e) => toggleDrawer(e, true)}>
              <MenuIcon fontSize={'large'} className={classes.white} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor={'right'}
        open={state}
        onClose={(e) => toggleDrawer(e, true)}
        onOpen={(e) => toggleDrawer(e, true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default SideMenu;
