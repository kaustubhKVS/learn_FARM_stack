import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { blog_id } = useParams();

    return ( 
        <div className="blog-details">
            <h2>Blog Detials - { blog_id }</h2>

        </div>
     );
}
 
export default BlogDetails;