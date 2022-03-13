import React from "react"
import App from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/pe-icon-7-stroke.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '@/assets/sass/globals.scss'

import LayoutDefault from '@/layouts/default'

class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
=========================================================
* Demo NextJS Ag-grid React-Bootstrap
=========================================================
    `)
    document.insertBefore(comment, document.documentElement)
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const Layout = Component.layout || LayoutDefault

    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <title>Demo NextJS Ag-grid React-Bootstrap</title>

          <link
            rel="shortcut icon"
            href='/favicon.ico'
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/apple-icon-167.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120.png"
          />

          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}

export default MyApp