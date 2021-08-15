import React, { ReactNode } from 'react';
import Navbar from '../nav/Navbar';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        { children }
      </main>
    </React.Fragment>
  );
}

export default Main;
