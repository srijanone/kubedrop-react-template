import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostById, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js SSR Example with {CMS_NAME}
                </title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody excerpt={post.excerpt} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const post = await getPostById(params.id);

  return {
    props: {
      post: post
    },
  }
}

// export async function getStaticPaths({ params }) {
//   const paths = [ `/posts/${params.id}` ];

//   return { paths, fallback: false }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPosts();

//   const paths = allPosts.map((post) => ({
//     params: { id: post.id },
//   }));
  
//   return { paths, fallback: false }
// }