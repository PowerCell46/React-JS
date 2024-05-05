export default function Dashboard() {
    return (
        <>
        <h2>Solutions</h2>
        <section id="solutions">
          {/* <!-- Display a div with information about every post (if any)--> */}
          <div className="solution">
            <img src="./images/Bioremediation.png" alt="example1" />
            <div className="solution-info">
              <h3 className="type">Bioremediation</h3>
              <p className="description">
                Synthetic biology involves the design and construction of
                biological systems for useful purposes.
              </p>
              <a className="details-btn" href="#">Learn More</a>
            </div>
          </div>
          <div className="solution">
            <img src="./images/Nanotechnology.png" alt="example2" />
            <div className="solution-info">
              <h3 className="type">Nanotechnology</h3>
              <p className="description">
                Nanotechnology offers solutions for environmental cleanup due to
                its ability to manipulate materials at the nanoscale
              </p>
              <a className="details-btn" href="">Learn More</a>
            </div>
          </div>
          <div className="solution">
            <img src="./images/Phytoremediation.png" alt="example3" />
            <div className="solution-info">
              <h3 className="type">Phytoremediation</h3>
              <p className="description">
                Phytoremediation is a green technology that utilizes plants to
                remove contaminants from soil, water, and air.
              </p>
              <a className="details-btn" href="#">Learn More</a>
            </div>
          </div>
        </section>
        {/* <!-- Display an h2 if there are no posts --> */}
        <h2 id="no-solution">No Solutions Added.</h2>
        </>
    );
}