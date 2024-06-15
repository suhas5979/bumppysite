import SinglePost from "../components/SinglePost";

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://demo.bumppy.com/api2/getSlugs.php');
  const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /posts/my-post, then params.slug is 'my-post'

  // Pass post data to the page via props
  return { props: { post : params.slug } };
}

const SinglePostPage = ({ post }) => {
  return (
    <div>
      <SinglePost slug={post} />
    </div>
  );
}

export default SinglePostPage;
