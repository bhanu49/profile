import { HomeOutlined } from '@material-ui/icons';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

export const routes = [
  { title: 'Home', path: '/', icon: <HomeOutlined fontSize={'large'} /> },
  { title: 'About', path: '/about', icon: <PersonOutlineIcon fontSize={'large'} /> },
  { title: 'Resume', path: '/resume', icon: <MenuBookOutlinedIcon fontSize={'large'} /> },
  /*
  { title: 'Portfolio', path: '/portfolio', icon: <WorkOutlineOutlinedIcon fontSize={'large'} /> },
*/
  {
    title: 'Contact',
    path: '/contact',
    icon: <PermContactCalendarOutlinedIcon fontSize={'large'} />,
  },
];
