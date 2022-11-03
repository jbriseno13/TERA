import {useState} from 'react'; 

function NavBar() {
        return (
            // NavBar Section for CSS
            <section className="mapping-section">
              <header>
                <div className="navbar">
                  <div className="navbar__container">
                    <a href="home" id="navbar__logo">
                    
                    </a>
                    <div className="navbar__toggle" id="mobile-menu">
                      <span className="bar"></span> <span className="bar"></span>
                      <span calssName="bar"></span>
                    </div>
                    <ul className="navbar__menu">
                      <li className="navbar__item">
                        <a href="#home" className="navbar__links" id="home-page">
                          Home
                        </a>
                      </li>
                      <li className="navbar__item">
                        <a href="#about" className="navbar__links" id="about-page">
                          About
                        </a>
                      </li>
                      <li className="navbar__item">
                        <a href="#video" className="navbar__links" id="home-page">
                          Videos
                        </a>
                      </li>
                      {/* <li className="navbar__item">
                        <a
                          href="#blogs"
                          className="navbar__links"
                          id="blogs-page"
                        >
                          Blogs
                        </a>
                      </li> */}
                      <li className="navbar__btn">
                        <a href="#sign-in" className="button" id="signin">
                          Sign In
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
        
              {/* <!-- Hero Section for CSS--> */}
              <div className="hero" id="home">
                <div className="hero__container">
                  <h1 className="hero__heading">
                    TERA 
                  </h1>
                  <p className="hero__description">Break toxic behavior and improve your relationships</p>
                  <button className="main__btn">
                    <a href="#">Explore</a>
                  </button>
                </div>
              </div> 
        
              {/* <!-- About Section --> */}
              <div className="main" id="about">
                <div className="main__container">
                  <div className="main__img--container">
                    <div className="main__img--card">
                      <i className="fas fa-layer-group"></i>
                    </div>
                  </div>
                  <div class="main__content">
                    <h1>Welcome to TERA!</h1>
                    <h2>Watch videos and learn more about mental health.</h2>
                    <p>
                      {" "}
                      TERA is an application meant to help improve your <br></br> relationship with yourself and those around you. Break the <br></br>toxic cycles in your behavior.  .
                    </p>
                    <button class="main__btn">
                      <a href="#">Read More</a>
                    </button>
                  </div>
                </div>
              </div>
        
              <container className="top-image-cover"></container> 

              {/* <!-- Video Section --> */}
              <div className="main" id="video">
                <div className="main__container">
                  <div className="main__img--container">
                    <div className="main__img--card">
                      <i className="fas fa-layer-group"></i>
                    </div>
                  </div>
                  <div class="main__content">
                    <h1>Video list!</h1>
                    <h2>Watch videos!</h2>
                    {/* <p>
                      {" "}
                      TERA is an application meant to help improve your <br></br> relationship with yourself and those around you. Break the <br></br>toxic cycles in your behavior.  .
                    </p> */}
                    {/* <button class="main__btn"> */}
                      {/* <a href="#">Read More</a>
                    </button> */}
                  </div>
                </div>
              </div>
        
              <container className="top-image-cover"></container> 
              
              
              

              </section>
        );
    

};

export default NavBar; 