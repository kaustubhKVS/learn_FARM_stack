import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        
            {title:'Tarun is a hoe', body:'Tarun has 69 chicks in reserve', author:'JhonAKAJash', id:1 },
            {title:'Tarun is a hero', body:'Tarun saved me in reserve', author:'SastiRandiSahil', id:2 },
            {title:'New King of Amaravti', body:'Sindhi by Blood, Amaravti by heart', author:'TarunAKAlalla', id:3 },
            {title:'Tired', body:'Sindhi by Blood, Amaravti by heart', author:'mario', id:4 }
         
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }
    
    const [name, setName] = useState('mario');

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    }, 
    //[] // Empty dependancy array will allow useEffect to render only for the first render i.e. when the pade loads for first time
    [name] // This will cause use effect to work only when state of 'name' changes and not at every render.
    );



    return ( 

        <div className="home">
            <BlogList blogs={blogs} title="All Blogs are listed here." handleDelete={handleDelete} />
            <p>{ name }</p>
            <button onClick={() => setName('luigi')}> Update Name</button>

            {/*<BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs"></BlogList> */}
        </div>

     );
}

export default Home; 

// useEffect can be use to load things at every re-render. Can be used for fetching data, authentication etc things which had to be used at every render.
// using useEffect and useState toghether if not done carefully can result into an infinite loop.
// handleDelete is defiend where the data resides, and we have passed handleDelete as a function to a prop
// handleClickAgain('mario')
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