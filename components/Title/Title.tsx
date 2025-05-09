import React from 'react'
import Head from 'next/head'

const Title: React.FC<{ title?: string }> = ({ title }) => (
  <Head>
    <title>{title && `${title} — `}Pathacks</title>
  </Head>
)

export default Title
