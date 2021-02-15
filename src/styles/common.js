import theme, { GREY1, GREY2, ORANGE1 } from '../theme';

export const styles = {
  root: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    overflow: 'auto',
    height: 800,
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

  //resume styles
  skills: {
    marginTop: theme.spacing(0.7),
    marginLeft: theme.spacing(1.2),
  },
  title: { marginTop: theme.spacing(2) },
  icon: {
    color: ORANGE1,
    width: 27,
    height: 27,
    marginTop: 1,
  },
  skillBox: {
    marginTop: theme.spacing(1.5),
  },
  cards: {
    border: `solid 2px ${GREY1}`,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderRadius: 25,
    marginBottom: theme.spacing(5),
    backgroundColor: GREY2,
    marginRight: 10,
  },
  input: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  contactForm: {},
  map: {
    marginBottom: theme.spacing(2),
  },
  contactWrap: {
    marginLeft: theme.spacing(2),
  },
  textarea: {
    width: '100%',
    outlineColor: ORANGE1,
  },
  button: {
    borderRadius: 25,
    textTransform: 'none',
    border: 'solid 2px',
  },
};
