import { Link } from "react-router-dom"
function NotFound(){
    return(
        <div className="NotFound">
            <h1>Page Not Found 😏</h1>
            <p>The page you are trying to find is invalid or not available</p>
            <p>Go to <span><Link to='/' className="home-link">Homepage</Link></span></p>
        </div>
    )
}

export default NotFound