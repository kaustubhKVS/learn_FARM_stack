import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);

    useEffect(() => {
        console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data);
            setBlogs(data);
            setPending(false);
        })
    }, 
    [] //dependancy array
    );

    return ( 

        <div className="home">
            { isPending && <div> LOADING CONTENT </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs are listed here."/>}
        </div>

     );
}

export default Home; 

// Empty dependancy array will allow useEffect to render only for the first render i.e. when the pade loads for first time
// [name] // This will cause use effect to work only when state of 'name'   changes and not at every render.
// using && in javascript is like using AND operator, we can say X && Y, && will not check Y, then if X is true then Y will be executed, if X is False, Y will not be executed. 
// useEffect can be use to load things at every re-render. Can be used for fetching data, authentication etc things which had to be used at every render.
// using useEffect and useState toghether if not done carefully can result into an infinite loop.
// handleDelete is defiend where the data resides, and we have passed handleDelete as a function to a prop
// handleClickAgain('mario')
// Use of filter to sort the data being displayed. {/*<BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"></BlogList> */}
// We do not INVOKE by function handleClick(), we invoke by reference handleClick
// Use Camel casing e.g. you just used OnClick insted of onClick, O capital nahi tha
// Anonymous function ()=>{} , can support inline fucntion calls where instead of using curly braces, we can jsut write the code
// we can use 'e' which is a browser property as an event log from browser
// Anonomous function can be used in an aonomous function to send and log browser data

// Reactive value is something which can change or re-render using state hooks
// we use set states for this purpose, we decide a variable name and a mehtod which can be called to set the variable to a different value.

// Components can talk to each other, home can pass blogs to the blog.js 
// Props is the data/properties passed between components.
// the props for bloglist is blogs,title which are passed to BLogList component as props.

//  const handleDelete = (id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlog);
    // }

// const [name, setName] = useState('mario');
// <p>{ name }</p>
//            <button onClick={() => setName('luigi')}> Update Name</button>