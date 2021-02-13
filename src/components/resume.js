import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import Title from './shared/title';
import { MAIN } from '../constants/common';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles/common';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab';

const useStyles = makeStyles((theme) => styles);

const Resume = () => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);

  return (
    <Paper className={classes.root}>
      <div className={classes.mainWrap}>
        <Box className={classes.box}>
          <Grid container spacing={3}>
            <Grid item container md={6} xs={12}>
              <Title title={t('common:resume')} type={MAIN} />
            </Grid>

            <Grid item container md={6} xs={12}>
              <Title title={t('common:expertise')} type={MAIN} />
            </Grid>
          </Grid>
        </Box>

        {/*  experience section*/}
        <Box className={classes.box}>
          <Grid container direction="column" spacing={3}>
            <Title title={t('common:experience')} />

            <Grid item container md={6} xs={12} style={{ padding: 0 }}>
              <Timeline align="left" className={classes.timeline}>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant={'body2'}>{t('common:resumePage.date1')}</Typography>
                    <Typography variant={'body1'}> {t('common:resumePage.company1')}</Typography>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineDot color={'primary'} variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    <Typography variant={'caption'}>{t('common:resumePage.title1')}</Typography>
                    <Typography variant={'body1'}>{t('common:resumePage.desc1')}</Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography variant={'body2'}> {t('common:resumePage.date2')}</Typography>
                    <Typography variant={'body1'}>{t('common:resumePage.company2')} </Typography>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineDot color={'primary'} variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    <Typography variant={'caption'}>{t('common:resumePage.title2')}</Typography>
                    <Typography variant={'body1'}>{t('common:resumePage.desc2')}</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>

            <Grid item container md={6} xs={12} direction={'column'}>
              <Title title={t('common:education')} />

              <Grid item container md={6} xs={12} style={{ padding: 0 }}>
                <Timeline align="left" className={classes.timeline}>
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant={'body2'}>2017</Typography>
                      <Typography variant={'body1'}>OVGU Magdeburg , Germany</Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                      <TimelineDot color={'primary'} variant="outlined" />
                      <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                      <Typography variant={'caption'}> M.Sc. Digital Engineering</Typography>
                      <Typography variant={'body1'}>GPA: 2.2</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant={'body2'}>2013 </Typography>
                      <Typography variant={'body1'}>JNTU Hyderabad, India.</Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                      <TimelineDot color={'primary'} variant="outlined" />
                      <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                      <Typography variant={'caption'}>B.Tech E.E.E</Typography>
                      <Typography variant={'body1'}> GPA: 2.1</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Paper>
  );
};

export default Resume;
