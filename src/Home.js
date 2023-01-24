import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('luigi');
        setAge(30)
        console.log('hello, Ninjas', e)
    }

const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
}

    return ( 

        <div className="home">
            <h1>WELCOME Ho</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick} >Click MEE</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
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