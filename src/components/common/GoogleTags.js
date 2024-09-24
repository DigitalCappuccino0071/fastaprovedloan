// components/GoogleTag.js
import { useEffect } from "react";

const GoogleTags = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            dataLayer.push(arguments);
        };

        gtag("js", new Date());
        gtag("config", "AW-16631389480");

        // Load the gtag.js script
        const script = document.createElement("script");
        script.src =
            "https://www.googletagmanager.com/gtag/js?id=AW-16631389480";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return null; // This component doesn't render anything
};

export default GoogleTags;
