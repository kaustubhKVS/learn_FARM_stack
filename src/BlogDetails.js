import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const { blog_id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+blog_id);
    // const test = 'http://localhost:8000/blogs/'+blog_id;
    const history = useHistory();
    
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method:'DELETE'
        }).then( response => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            
            {/* {console.log({ test })} */}
            {/* {console.log({blog_id })} */}

            { isPending && <div> LOADING CONTENT</div>}
            
            {error && <div> { error } </div> }
            
            {blog &&
                <article>
                    <h2>{ blog.title }</h2>
                    <p> Written by : { blog.author }</p>
                    <div> { blog.body }</div>
                    <button onClick={handleClick}> Delete Blog</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;