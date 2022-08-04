import ResourceItems from "../../components/resourceitems/ResourceItems";
import Sidebar from "../../components/sidebar/Sidebar";
import "./resources.css"

export default function Resources() {
  return (
    <div className="resources">
        <ResourceItems/>
        <Sidebar/>
    </div>
  )
}
