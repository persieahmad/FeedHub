import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LogoIcon from '../logo192.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: '4%',
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <img
            src={LogoIcon}
            alt="LogoIcon"
            height="40px"
            width="40px"
            onContextMenu={(e) => e.preventDefault()}
          />
          <Typography variant="h4" className={classes.title}>
            FeedHub
          </Typography>
          <Button color="inherit">Country: IN</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
