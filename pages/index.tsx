import type { NextPage } from 'next'
import Head from 'next/head'
import { Center } from '../components/Center'
import { FullWindow } from '../components/FullWindow'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Satti</title>
      <meta name="description" content="Kyle, Sabrina and Parker" />
    </Head>

    <FullWindow>
      <Center>
        <h2>Satti</h2>
        <ul>
          <li><a href='https://kylejs.me'>Kyle</a></li>
          <li><a href='https://instagram.com/sabrina.satti'>Sabrina</a></li>
        </ul>
      </Center>
    </FullWindow>
  </div>
)

export default Home;
