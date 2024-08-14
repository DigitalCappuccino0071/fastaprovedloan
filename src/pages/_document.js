import Document, { NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
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
        );
    }
}
