import React from "react";

export default function TechStack() {
  return (
    <section id="tech-stack">
      <div className="container">
        <div className="row">
          <h1 className="main-title">
            This is my <span className="purple-text">technology stack</span>
          </h1>
          <div className="languages">
            <div className="language">
              <figure className="lang_image-wrapper">
                <img
                  className="img-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                />
              </figure>
              <span className="language_name">HTML</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img
                  className="img-1"
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                />
              </figure>
              <span className="language_name">CSS</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img
                  className="img-1"
                  src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png"
                />
              </figure>
              <span className="language_name">JS</span>
            </div>
            <div className="language">
              <figure className="lang_image-wrapper">
                <img
                  className="img-1"
                  src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
                />
              </figure>
              <span className="language_name">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
