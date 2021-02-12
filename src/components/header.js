import { Avatar, makeStyles } from '@material-ui/core';
import avatar from '../images/myavatar.jpeg';
const useStyles = makeStyles((theme) => ({
  large: {
    width: 180,
    height: 180,
    border: 'solid 3px #fff',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Avatar alt="bhanu" src={avatar} className={classes.large} />
    </>
  );
};

export default Header;
