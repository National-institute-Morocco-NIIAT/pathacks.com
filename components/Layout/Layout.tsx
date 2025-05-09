import React from 'react'
import AppNav from '../AppNav'
import Footer from '../Footer'
import Head from 'next/head'
import type { LayoutGetter } from '../../@types/page'
import styles from './layout.module.scss'

const Layout: React.FC<{ title?: string }> = ({ children, title }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <title key="title">{title ? `${title} — Pathacks` : 'Pathacks'}</title>
    </Head>
    <AppNav />
    <div className={`container-md ${styles.container}`}>{children}</div>
    <Footer />
  </>
)

export const getLayout: LayoutGetter = page => <Layout>{page}</Layout>
export default Layout
