import './App.css';

function App() {
    const title = "Welcome to the blog"
    const likes = 20;
//  BOOLEAN or OBJECT cannot be returned

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times </p>
      </div>
      
    </div>
  );
}

export default App;
