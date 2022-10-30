import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/tin.m.win.104">
                <i className="fa fa-facebook-square "></i>
              </a>
              <a href="https://www.github.com/tinmyo-win">
                <i className="fa fa-github-square "></i>
              </a>
              <a href="https://www.linkedin.com/in/tin-myo-win-a28a21197">
                <i className="fa fa-linkedin-square "></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Tin Myo Win</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>Full Stack Web Developer</h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#contact">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
            </a>
            <a
              href="Tin_Myo Win_Resume.pdf"
              download={"Tin_Myo Win_Resume.pdf"}
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
