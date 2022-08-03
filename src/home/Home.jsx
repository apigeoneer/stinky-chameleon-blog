import Posts from "../posts/Posts"
import Sidebar from "../sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
    <div className="home">
    <Posts/>
    <Sidebar/>
    </div>
    </>
  )
}
