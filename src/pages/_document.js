import Document, { NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <>
                <head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>form</title>
                    <style>{`
                        #omForm-root {
                            margin: 0px !important;
                        }
                        #omForm-root > * {
                            min-height: 0px !important;
                        }
                    `}</style>
                    {/* Google tag (gtag.js) */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-E4G675K7K8"
                    ></script>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=AW-16631389480"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag() {
                                    dataLayer.push(arguments);
                                }
                                gtag('js', new Date());
                                gtag('config', 'AW-16631389480');
                                gtag('config', 'G-E4G675K7K8');
                            `,
                        }}
                    />
                </head>
                <body>
                    <NextScript />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WNGZK579"
                        height="0"
                        width="0"
                        style="display:none;visibility:hidden"
                    ></iframe>`,
                        }}
                    />
                </body>
            </>
        );
    }
}
