import { ORANGE1 } from '../theme';
import theme from '../theme';

export const styles = {
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    overflow: 'auto',
    height: 750,
    // resume styles
    '& .MuiTimeline-root': {
      padding: 0,
    },
    '& .MuiTimelineOppositeContent-root': {
      textAlign: 'left',
      flex: 0.3,
    },
  },
  mainWrap: {
    height: '100%',
    padding: theme.spacing(6),
  },
  box: {
    marginBottom: theme.spacing(4),
  },
  content: {
    marginTop: theme.spacing(3),
  },
  orange: {
    color: ORANGE1,
    fontWeight: 800,
  },
  wrap: {
    marginBottom: theme.spacing(2),
  },
  email: {
    textDecoration: 'none',
    color: 'black',
  },
  caption: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
};
