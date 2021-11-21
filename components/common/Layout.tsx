import React, { ReactNode } from 'react'

import Link from 'next/link'
import Head from 'next/head'
import { Page } from 'styles/IndexStyles'

export default function Layout({
    children,
    title = 'Robert Byrne',
}: {
    children: ReactNode
    title?: string
}) {
    return (
        <Page>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {children}
        </Page>
    )
}
