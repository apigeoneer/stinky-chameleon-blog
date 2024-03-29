import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="l">
            <Link to="articles">
              <img src="https://freepngimg.com/thumb/chameleon/27166-7-chameleon.png" alt="" />
            </Link>
            <Link to="articles"><div className="logotitle">Stinky Chameleon</div></Link>
        </div>
        <div className="r">
            <ul>
                <li><Link to="about">About</Link></li>
                <li><Link to="resources">Resources</Link></li>
                <li><Link to="articles">Articles</Link></li>
                <li className="write">
                  <Link to="write">
                    {/* <i class="fa fa-pen"></i> */}
                    Write</Link>
                  </li>
            </ul>
            
        </div>
    </div>
  )
}
