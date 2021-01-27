import Head from 'next/head'

function IndexPage({title, imgBg, favicon}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={imgBg}/>
        <link rel="icon" type="image/png" href={favicon}/>
      </Head>
    </div>
  )
}

export default IndexPage;