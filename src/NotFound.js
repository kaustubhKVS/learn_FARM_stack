import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2> Sorry ! Page Not Found </h2>
            <p>The page does not exist</p>
            <Link to="/"> Click Here to go to Home Page </Link>
        </div>
     );
}
 
export default NotFound;