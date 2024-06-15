import PostComponent from "../components/PostComponent";

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  console.log("Fetching data for slug:", slug);

  try {
    // Fetch the single post data
    const formData = new URLSearchParams();
    formData.append("single_post_id", slug);

    const postRes = await fetch("https://demo.bumppy.com/api2/getPostContentBySlug.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!postRes.ok) {
      throw new Error(`Failed to fetch post content for slug: ${slug}`);
    }



    const postData = await postRes.json();
    console.log("Post data:", postData);



    // Fetch related posts data

    const formData2 = new URLSearchParams();
    formData2.append("language", "en");
    formData2.append("single_post_id", postid);
    formData2.append("page", 5);

    const relatedPostRes = await fetch("https://demo.bumppy.com/api2/getRelatedPost.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData2.toString(),
    });

    if (!relatedPostRes.ok) {
      throw new Error(`Failed to fetch related posts for slug: ${slug}`);
    }

    const relatedPosts = await relatedPostRes.json();
    console.log("Related posts:", relatedPosts);

    return {
      props: {
        post: postData.content,
        relatedPosts,
        slug,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }
}

const SinglePostPage = ({ post, relatedPosts, slug }) => {
  // Make sure any data processing happens in useEffect to avoid mismatches
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <div>Loading...</div>; // Show a loading state until hydration completes
  }

  return (
    <div>
      <PostComponent post={post} relatedPosts={relatedPosts} slug={slug} />
    </div>
  );
};

 export default SinglePostPage;
