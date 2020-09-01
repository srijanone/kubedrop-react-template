import Head from 'next/head'
import Layout from '../../components/layout'

function Article({ post }) {
  //console.log(post)
  return (
    <Layout>
      <Head>
        <title>Articles !</title>
      </Head>
      
      {

        <div>
          <h2>{post.data.attributes.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.data.attributes.body.processed
            }}>
          </div>
        </div>

      }
    </Layout>
  )
}

export async function getStaticPaths() {
  const host = process.env.API_URL
  const res = await fetch(host + '/node/article')
  //const res = await fetch('http://webserver/jsonapi/node/article')
  const { data } = await res.json()
  const paths = data.map((article) => `/article/${article.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const host = process.env.API_URL
  const res = await fetch(`${host}/node/article/${params.id}`)
  const post = await res.json()
  return { props: { post } }
}



export default Article