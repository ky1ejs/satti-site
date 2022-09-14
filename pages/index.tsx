import type { NextPage } from 'next'
import Head from 'next/head'
import { Center } from '../components/Center'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Satti</title>
      <meta name="description" content="Kyle, Sabrina and Parker" />
    </Head>

    <Center>
      <ul>
        <li><a href='https://kylejs.me'>Kyle</a></li>
        <li><a href='https://instagram.com/sabrina.satti'>Sabrina</a></li>
        <li><a href='https://instagram.com/parker.dachshund'>Parker</a></li>
      </ul>
    </Center>
  </div>
)

export default Home;
