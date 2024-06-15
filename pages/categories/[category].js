import { useRouter } from "next/router";
import Categorypage from "../../components/selectedcategorypage";

const CategoryPage=() =>{

  const router = useRouter();
  const {category}= router.query; 

  return (
    <div>
      <Categorypage category={category} />
    </div>
  );
}

export default CategoryPage;