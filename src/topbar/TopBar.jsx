import "./topbar.css"

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="l">
            <img src="https://assets.nextleap.app/images/cars24_light-f547932c-d57a-4c72-87a9-56e492c8c2d6.svg" alt="" />
        </div>
        <div className="r">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Artices</a></li>
            </ul>
            
        </div>
    </div>
  )
}
