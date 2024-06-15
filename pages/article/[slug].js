import { useRouter } from "next/router";
import SinglePost from "../../components/SinglePost";
import { useEffect } from "react";

const Singlepost=() =>{

  const router = useRouter();
  const {slug}= router.query;   
  
  return (
    <div>
      <SinglePost slug={slug} />
    </div>
  );
}

export default Singlepost;