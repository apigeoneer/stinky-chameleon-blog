import { Link } from "react-router-dom"
import "./post.css"

export default function Post() {
  return (
    <Link to="singlepost">
      <div className="post">
        <div className="date">3/8/2022</div>
        <div className="title">Post 101 : PM Zero to Heroine</div>
      </div>
    </Link>
  )
}