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

                <GoogleTagManager gtmId="GTM-T5V6TDPX" />
                <GoogleTagManager gtmId="GTM-WNGZK579" />
                <GoogleTagManager gtmId="G-E4G675K7K8" />
            </body>
        </html>
    );
}
