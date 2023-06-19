import React from 'react';
import NormalNavbar from './NormalNavBar';
import AppNavBar from './AppNavBar';

interface Props {
  displayNormal: boolean;
}

const NavBar: React.FC<Props> = ({ displayNormal }) => {

  return (
    <>
      {displayNormal ? (
        <NormalNavbar />
      ) : (
        <AppNavBar />
      )}
    </>
  );
};

export default NavBar;
