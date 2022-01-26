import type { NextPage } from 'next';

import Image from 'next/image';
import Head from 'next/head';
import background from '@/styles/images/background.jpg';

import PlaceList from '@/__components/PlaceList';
import { Row, Image as AntdImage } from 'antd';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row>
          <div style={{ overflow: 'hidden', borderRadius: '10px', height: '600px' }}>
            <Image src={background} width={1100} height={800} />
          </div>
        </Row>
      </main>
    </div>
  );
};

export default Home;
