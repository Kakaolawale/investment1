import HeroBanner from '@/components/Herobanner';
import Websitebody from '@/components/Websitebody';
import Head from 'next/head';

export default function Home() {
  return (
        <div>
         <Head>
          <title>Vortex Finance</title>
          <meta name="Vortex" content="Future of financial investment" />
          <link rel="Vortex Logo" href="/favicon.ico" />
        </Head>
        <HeroBanner />
      <Websitebody />
       </div>
     
  )
}
