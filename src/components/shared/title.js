import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { MAIN } from '../../constants/common';
import { ORANGE1 } from '../../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      marginTop: theme.spacing(-1),
      marginLeft: theme.spacing(-1.5),
      color: ORANGE1,
      opacity: 0.3,
    },
  },
}));

const Title = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.type === MAIN ? (
        <Box>
          <BlurOnIcon fontSize={'large'} />
          <Typography variant={'h3'}> {props.title} </Typography>
        </Box>
      ) : (
        <Box>
          <BlurOnIcon fontSize={'small'} />
          <Typography variant={'h5'}> {props.title} </Typography>
        </Box>
      )}
    </div>
  );
};

export default Title;
