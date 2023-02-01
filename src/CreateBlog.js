import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        setIsPending(true);

        const new_blog = {title, body, author};

        setTimeout(() => {
            
            fetch('http://localhost:8000/blogs',
        {
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(new_blog)
        }).then(response => {
            
            // console.log('New Blog Added');
            // console.log(response);

            setIsPending(false);
            // history.go(-1); to go to previous page in history
            // history.go(+1); to go to the last to last page loaded
            history.push('/');

        }

        )}, 2000);

        }
    
    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
            <h2>Add a new Blog</h2>
                <label>Blog Title</label>
                <input 
                type="text"
                required
                value={ title }
                onChange={(e) => setTitle(e.target.value)}
                />
                
                <label>Blog Body</label>
                <textarea 
                required
                value={ body }
                onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                
                <label> Blog's Author</label>
                    <select
                    required
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value)}>
                        
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                    </select>

                { !isPending && <button>  Add Blog</button>}
                { isPending && <button>  Adding Blog ... </button>}
                
                <div className="Blog Preview">
                    <h2>Blog Preview:</h2>
                    <p>Title: { title }</p>
                    <p>Body: { body }</p>
                    <p>Author: { author }</p>
                </div>
            </form>
        </div>
     );
}
 
export default CreateBlog;