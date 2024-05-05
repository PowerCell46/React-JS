export default function Edit() {
    return (
        <section id="edit">
        <div className="form">
          <img className="border" src="./images/border.png" alt="" />
          <h2>Edit Solution</h2>
          <form className="edit-form">
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Solution Type"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              // rows="2"
              // cols="10"
            ></textarea>
            <textarea
              id="more-info"
              name="more-info"
              placeholder="more Info"
              // rows="2"
              // cols="10"
            ></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
    )
}