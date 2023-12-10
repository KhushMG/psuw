// import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from "geist/font/sans";
import NavBar from './components/NavBar';
import React from 'react';


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProductSphere@UW',
  description: 'ProductSphere at the University of Washington',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={GeistSans.className}>
        <NavBar className="z-10"/>
        {children}
      </body>
    </html>
  );
}
