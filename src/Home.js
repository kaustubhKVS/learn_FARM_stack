const Home = () => {

    const handleClick = (e) => {
        console.log('hello, Ninjas', e)
    }

const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
}

    return ( 

        <div className="home">
            <h1>WELCOME Ho</h1>
            <button onClick={handleClick} >Click MEE</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>

     ); 
}
 
export default Home; 

// handleClickAgain('mario')
// We do not INVOKE by function handleClick(), we invoke by reference handleClick
// Use Camel casing e.g. you just used OnClick insted of onClick, O capital nahi tha
// Anonymous function ()=>{} , can support inline fucntion calls where instead of using curly braces, we can jsut write the code. 
// we can use 'e' which is a browser property as an event log from browser.
// Anonomous function can be used in an aonomous function to send and log browser data.
  