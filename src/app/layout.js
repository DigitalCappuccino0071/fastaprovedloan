import Footer from "@/components/common/Footer";
import MaterialDisclaimer from "@/components/common/MaterialDisclaimer";
import Navbar from "@/components/common/Navbar";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Test from "./Test";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <Test /> */}
                <Navbar />
                {children}
                <MaterialDisclaimer />
                <Footer />
                {/* <Script strategy="beforeInteractive" id="analytics-conversion">
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
                </Script> */}
                {/* <Script
                    strategy="beforeInteractive"
                    id="analytics-conversion-two"
                >
                    {`gtag('event', 'conversion', {'send_to': 'AW-16631389480/fyB5CK_tksQZEKi6u_o9'});`}
                </Script>
                <Script
                    strategy="beforeInteractive"
                    id="analytics-conversion-two"
                >
                    {`gtag('event', 'conversion', {'send_to': 'AW-16631389480/fyB5CK_tksQZEKi6u_o9'});`}
                </Script> */}
                {/* <Script
                    strategy="beforeInteractive"
                    id="analytics-conversion-three"
                >
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T5V6TDPX')`}
                </Script> */}
                <GoogleTagManager gtmId="T5V6TDPX" />
                {/* <Script
                    strategy="beforeInteractive"
                    id="analytics-conversion-four"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5V6TDPX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                ></Script> */}
            </body>
        </html>
    );
}
