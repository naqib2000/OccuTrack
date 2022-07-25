import React from "react";

import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"

const Landing = () => {
  return (
    <Wrapper>
      <main>
       <nav>
        {/* change logo to OccuTrack */}
        {/* <Logo /> */}
       </nav>
       <div className="container page">
        <div className="info">
            <h1>Job <span>tracking</span> application</h1>
            <p>Without a dedicated job tracking system, it can be difficult to keep track of all your job applications at one time. A job tracking system gives you everything you need to keep track of you job applications. Spend less time tracking applications and more time doing them.</p>
            <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
       </div>
    </main>
    </Wrapper>
  );
};

export default Landing;