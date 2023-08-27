import "./FootStyles.css";

const Foot = () => {
  return (
    <div className="foot">
      <div className="top">
        <div>
          <h1> Travellipi</h1>
          <p>What's Your Next Destination</p>
        </div>
        <div>
          <a href="/shatvik anand">
            <i className="fa-brands fa-facebook-square"> </i>
          </a>

          <a href="/@shatvik_anand">
            <i className="fa-brands fa-instagram-square"> </i>
          </a>

          <a href="/">
            <i className="fa-brands fa-behance-square"> </i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"> </i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/"> Change log</a>
          <a href="/"> Status</a>
          <a href="/"> License</a>
          <a href="/"> All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/"> GitHub</a>
          <a href="/"> Issues</a>
          <a href="/"> Project</a>
          <a href="/"> Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/"> Support</a>
          <a href="/"> Troubleshooting</a>
          <a href="/"> COntact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/"> Terms of Service</a>
          <a href="/"> Privacy Policy</a>
          <a href="/"> License</a>
        </div>
      </div>
    </div>
  );
};
export default Foot;
