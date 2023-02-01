import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">
          <Navbar></Navbar>
          
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/create">
                <CreateBlog></CreateBlog>
              </Route>
              <Route path="/blog_details/:blog_id">
                <BlogDetails></BlogDetails>
              </Route>
            </Switch>
          </div>
        
      </div>
    </Router>    
  );
}

export default App;

// Read more about routing
// Router will match character wise e.g. /create can be matched to /,/c,/cr etc etc
// To not allow characterwise matching we will mention the exact route to critical paths. 