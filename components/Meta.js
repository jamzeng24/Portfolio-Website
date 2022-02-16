import Head from 'next/head'

export default function Meta() {
  const meta = {
    title: 'James Zeng - Software Engineer and Developer',
    description: 'An aspiring tech enthusiast who wants to get into the tech industry',
    type: 'website'
  };

  return (
    <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:type' content={meta.type} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}