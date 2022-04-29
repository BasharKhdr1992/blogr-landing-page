import React from 'react';
import Intro from './components/Intro/Intro';
import assets from './assets';
import './App.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Intro />
      <div className="section-with-title pl">
        <h2 className="main-title">Designed for the future</h2>
        <div className="section-with-title-main">
          <div className="section-text">
            <div className="para">
              <h2 className="section-title">
                Introducing an extensible editor
              </h2>
              <p className="section-para">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <h2 className="section-title">Robust content management</h2>
            <p className="section-para">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div className="section-img-container right">
            <img
              src={assets.editor}
              className="section-image right-cropped translate-y-25"
              alt="editor"
            />
          </div>
        </div>
      </div>
      <div className="section-2 translate-y-25">
        <div className="section-2-img-container">
          <img src={assets.phones} className="translate-y-15" alt="phones" />
        </div>
        <div className="section-2-text">
          <h2 className="para-title">State of the Art Infrastructure</h2>
          <p className="para">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div className="section pr mt translate-y-15">
        <div className="section-img-container left">
          <img
            src={assets.laptop}
            className="section-image left-cropped"
            alt="editor"
          />
        </div>
        <div className="section-text v-centered">
          <div className="para">
            <h2 className="section-title">Introducing an extensible editor</h2>
            <p className="section-para">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <h2 className="section-title">Robust content management</h2>
          <p className="section-para">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
