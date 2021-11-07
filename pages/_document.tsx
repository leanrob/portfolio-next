// @ts-nocheck
import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }: any) {
        const sheet = new ServerStyleSheet()

        const page = renderPage(
            (App: any) => (props: any) =>
                sheet.collectStyles(<App {...props} />)
        )

        const styleTags = sheet.getStyleElement()

        return { ...page, styleTags }
    }

    render() {
        return (
            <Html>
                <title> Rob Byrne: A Software Craftsman - Portfolio Site</title>
                <Head>
                    {/* Step 5: Output the styles in the head  */}
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
