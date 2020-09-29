import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(50),
      },
    },
  }),
);

export default function SimplePaper({ children }: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>{children}</Paper>
    </div>
  );
}
