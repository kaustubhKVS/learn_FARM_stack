import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        
            {title:'Tarun is a hoe', body:'Tarun has 69 chicks in reserve', author:'JhonAKAJash', id:1 },
            {title:'Tarun is a hero', body:'Tarun saved me in reserve', author:'SastiRandiSahil', id:2 },
            {title:'New King of Amaravti', body:'Sindhi by Blood, Amaravti by heart', author:'TarunAKAlalla', id:3 }
        
    ]);

    return ( 

        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>

     );
}
 
export default Home; 

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