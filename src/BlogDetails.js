import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { blog_id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+blog_id);
    const test = 'http://localhost:8000/blogs/'+blog_id;

    return ( 
        <div className="blog-details">
            
            {console.log({ test })}
            {console.log({blog_id })}

            { isPending && <div> LOADING CONTENT</div>}
            
            {error && <div> { error } </div> }
            
            {blog &&
                <article>
                    <h2>{ blog.title }</h2>
                    <p> { blog.author }</p>
                    <div> { blog.body }</div>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;