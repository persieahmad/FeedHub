import React from 'react';
import { FaBars } from 'react-icons/all';

const styles = {
  icon: {
    cursor: 'pointer',
    marginTop: 10,
    marginLeft: 20,
  },
};

export default function NavBar() {
  const [showSideDrawer, setShowSideDrawer] = React.useState<boolean>(false);
  return (
    <div style={{ backgroundColor: '#0084ff', display: 'flex', height: '3em' }}>
      <div style={styles.icon}>
        <FaBars color="white" size={24} />
      </div>
      <div style={{ color: 'white', fontSize: 25, marginTop: 5, marginLeft: 50 }}>FeedHub</div>
    </div>
  );
}
