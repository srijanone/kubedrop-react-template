import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/layout'


import Alert from 'react-bootstrap/Alert';

function Articles({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Articles !</title>
      </Head>
      
      
     
    
  

      {
        posts.data.map((article,i) => (
          
        <div key={article.id}>
             <Link href="/article/[id]" as={`/article/${article .id}`}>
                <a>{article.attributes.title}</a>
            </Link>
          <div
              dangerouslySetInnerHTML={{
              __html: article.attributes.body.processed
          }}>
          </div>
        
        </div>
        ))
      }
    </Layout>
  )
}



export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const host=process.env.API_URL
  console.log(process.env.API_URL);
  const res = await fetch(host+'/node/article')
  const posts = await res.json()
  console.log('inside Articles...');
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
    revalidate:10
  }
}

export default Articles