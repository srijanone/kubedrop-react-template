function Blog({ posts }) {
  //console.log(posts);
  return (
    <div>
      {
        posts.data.map((user) => (
        <ul>
          <li>FirstName: {user.first_name}</li>
          <li>LastName: {user.last_name}</li>
          <li>Avtar: <img src={user.avatar}></img></li>
        </ul>
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://reqres.in/api/users?page=2')
  const posts = await res.json()
  console.log('inside...');
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
    revalidate:10
  }
}

export default Blog