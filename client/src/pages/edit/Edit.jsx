import Editpost from "../../components/editpost/Editpost"
import Sidebar from "../../components/sidebar/Sidebar"
import "./edit.css"

export default function Edit() {
  return (
    <>
    <div className="edit">
        <Editpost/>
        <Sidebar/>
    </div>
    </>
  )
}
