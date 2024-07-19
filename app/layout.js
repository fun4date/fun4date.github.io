"use client";


import { Archivo } from "next/font/google";
import './sass/main.scss';
import "./globals.sass";
import { useState, useEffect } from "react";

// import i18n (needs to be bundled ;))
import './i18n';

const archivo = Archivo({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html>
      <body className={archivo.className}>{isClient  ? children:null}</body>
    </html>
  );
}
