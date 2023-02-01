import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
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

                <button> Add Blog</button>
                
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