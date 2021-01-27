import Head from 'next/head'
import { useRouter } from 'next/router'

function currentPath(){
  return window.location.href
}

function IndexPage({title, imgBg, favicon, description}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon}/>
        <meta name="description" content={description}/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poefanquiz.gabyfutemma.vercel.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={currentPath() + imgBg}/>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://poefanquiz.gabyfutemma.vercel.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={currentPath() + imgBg} />
      </Head>
    </div>
  )
}

export default IndexPage;