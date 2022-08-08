import "./editpost.css"

export default function Editpost() {
  return (
    <div className="editpost">
      <img
        src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000"
        alt=""
      />
      <form className="writeform">
        <div className="writeFormGroup">
            <label className="addimage" htmlFor="fileInput"><i class="fa fa-plus"></i>Add Image</label>
            <input id="fileInput" type="file" style={{display: "none"}}/>
            <br />
            <input className="titleinput" placeholder="Article title ..." type="text" autoFocus={true} />
        </div>
        
        <div className="writeFormGroup">
            <textarea className="contentinput" placeholder="Tell your story ..."></textarea>
        </div>

        <button className="publish" type="submit">Publish</button>
      </form>
    </div>
  )
}
