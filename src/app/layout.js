import Footer from '@/components/common/Footer';
import MaterialDisclaimer from '@/components/common/MaterialDisclaimer';
import Navbar from '@/components/common/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5VQDJQ8F" />
      <body className={inter.className}>
        {/* <Test /> */}
        <Navbar />
        {children}
        <MaterialDisclaimer />
        <Footer />
        <GoogleAnalytics gaId="AW-11559522543" />
      </body>
    </html>
  );
}
