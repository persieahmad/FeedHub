import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ContentNav from '../ContentNav/ContentNav';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: '#e8e8e8',
    zIndex: 1,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}>
        <BottomNavigationAction label="Top Headlines" icon={<WhatshotOutlinedIcon />} />
        <BottomNavigationAction label="Everything" icon={<LanguageOutlinedIcon />} />
        <BottomNavigationAction label="Search News" icon={<SearchOutlinedIcon />} />
      </BottomNavigation>
      <ContentNav {...{ value }} />
    </div>
  );
}
