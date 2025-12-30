import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ai-vaibhav" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vaibhav Singh</h1>
          <p>Full Stack Development</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ai-vaibhav" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;