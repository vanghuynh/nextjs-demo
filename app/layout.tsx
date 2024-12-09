import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Demo',
  description: 'A Next.js project with Tailwind CSS, Typescript',
  keywords: ['Next.js', 'Tailwind CSS', 'Typescript'],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-3xl mx-auto py-10'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
