import React from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <nav>Hello There</nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
