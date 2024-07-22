import Footer from '@/components/common/Footer';
import MaterialDisclaimer from '@/components/common/MaterialDisclaimer';
import Navbar from '@/components/common/Navbar';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <MaterialDisclaimer />
        <Footer />
        <Script strategy="beforeInteractive" id="analytics-conversion">
          {`function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16631389480/fyB5CK_tksQZEKi6u_o9',
                  'event_callback': callback
              });
              return false;
            }`}
        </Script>
        <Script strategy="beforeInteractive" id="analytics-conversion-two">
          {`gtag('event', 'conversion', {'send_to': 'AW-16631389480/fyB5CK_tksQZEKi6u_o9'});`}
        </Script>
      </body>
    </html>
  );
}
