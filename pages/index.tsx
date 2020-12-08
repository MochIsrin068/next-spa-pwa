import Head from 'next/head'
import Layout from '../components/layout'
import Services from '../components/content/services'
import Testimonial from '../components/content/testimonial'

const Home = () => {
  return(
    <>  
      <Head>
        <title>FE.Labs || Frontend Services</title>
      </Head>
      <main>
        <Layout>
            <Services />
            <Testimonial />
        </Layout>
      </main>
    </>
  )
}

export default Home